/* De-identified review excerpts and aggregates. No network requests, storage or analytics. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const number = value => typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.min(Math.floor(value), Number.MAX_SAFE_INTEGER) : 0;
  const fmt = value => number(value).toLocaleString('ko-KR');
  const text = (value, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback;
  const node = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = String(content);
    return element;
  };
  const replace = (id, ...children) => $(id).replaceChildren(...children);
  const verdicts = [
    ['appropriate', '적정'], ['confirmedError', '확정 오류'],
    ['suspectedError', '의심 오류'], ['missingAnswer', '답변누락'],
    ['sourceConflict', '자료충돌'], ['needsVerification', '확인필요']
  ];
  const countryDefinitions = [
    ['ALL', '전체'], ['KR', '한국'], ['JP', '일본'], ['TH', '태국'],
    ['CN', '중국'], ['TW', '대만'], ['ZZ', '기타·미확인']
  ];
  const raw = window.SUPERVISION_DATA;
  const hasPayload = !!raw && typeof raw === 'object' && !Array.isArray(raw);
  const meta = hasPayload && raw.meta && typeof raw.meta === 'object' ? raw.meta : {};
  const dateValid = value => {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().startsWith(value);
  };
  const platformDefinitions=[['kakao-clinic','카카오톡'],['babitalk','바비톡'],['gangnamunni','강남언니']];
  const platformIds=platformDefinitions.map(([id])=>id);
  const hasPlatformReports=hasPayload&&raw.platformReports&&typeof raw.platformReports==='object'&&!Array.isArray(raw.platformReports);
  const platformReports=hasPlatformReports?raw.platformReports:{};
  let selectedPlatform='gangnamunni',skippedDays=0;
  function platformDays(id){const source=hasPlatformReports?platformReports[id]?.days:id==='gangnamunni'?raw?.days:[];const seen=new Set();skippedDays=0;return(Array.isArray(source)?source:[]).filter(day=>{if(!day||!dateValid(day.date)||seen.has(day.date)){skippedDays++;return false;}seen.add(day.date);return true;}).sort((a,b)=>b.date.localeCompare(a.date));}
  let days=platformDays(selectedPlatform);
  const allReportDates=[...new Set((hasPlatformReports?platformIds.flatMap(id=>Array.isArray(platformReports[id]?.days)?platformReports[id].days:[]):days).map(d=>d?.date).filter(dateValid))].sort().reverse();
  let selectedDate=days[0]?.date||allReportDates[0]||'';
  const platformUiState=new Map();
  let selectedCountry = 'ALL';
  let selectedCaseVerdict = 'confirmedError';
  let selectedCaseIndex = 0;
  let caseDateMemo = null;
  const caseVerdicts = [['confirmedError','확정 오류'],['missingAnswer','답변누락'],['needsVerification','확인필요'],['suspectedError','오안내의심'],['sourceConflict','자료충돌']];
  const dateInput = $('review-date');
  const sumVerdicts = value => verdicts.reduce((sum, [key]) => sum + number(value?.[key]), 0);
  const verificationCount = value => ['suspectedError', 'missingAnswer', 'sourceConflict', 'needsVerification'].reduce((sum, key) => sum + number(value?.[key]), 0);
  const timestamp = value => {
    if (!text(value)) return '미제공 · KST';
    if (/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return `${value} KST`;
    // An explicit offset is required, avoiding the viewer's local timezone.
    if (!/(Z|[+-]\d{2}:?\d{2})$/i.test(value)) return '시각 형식 확인 필요 · KST';
    const time = new Date(value);
    if (!Number.isFinite(time.getTime())) return '시각 형식 확인 필요 · KST';
    return `${new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(time)} KST`;
  };
  const semanticIncomplete = day => !!day && (day.casesComplete === false || number(day.verdicts?.unreviewed) > 0 || (day.status === 'partial' && !caseScopeComplete(day)));
  const countryLabel = (day, code) => text(day?.countries?.find(item => item?.code === code)?.name) || countryDefinitions.find(([key]) => key === code)?.[1] || (text(code) ? '국가코드 ' + code : '국가 미확인');
  const semanticScopeNote = day => '검수 ' + statValue(day?.reviewedRooms, '개') + ' / 수집 ' + statValue(day?.eligibleRooms, '개') + ' · 미검수 ' + statValue(day?.verdicts?.unreviewed, '개') + ' · 판정은 검수분만, 전체 검수중';
  const verdictValue = (day, values, key, unit = '개') => semanticIncomplete(day) ? (suppliedNumber(values?.[key]) && values[key] > 0 ? '검수분 ' + fmt(values[key]) + unit + ' · 전체 검수중' : '검수중') : statValue(values?.[key], unit);
  const statusLabel = day => semanticIncomplete(day) ? '부분 집계 · 검수중' : day?.status === 'completed' ? '집계 완료' : day?.status === 'partial' ? '부분 집계' : '상태 확인 필요';
  const statusClass = day => !semanticIncomplete(day) && day?.status === 'completed' ? 'complete' : 'partial';
  const empty = (title, detail) => {
    const box = node('div', 'empty-state'); box.append(node('strong', '', title));
    if (detail) box.append(node('small', '', detail)); return box;
  };
  const badge = day => node('span', `badge ${statusClass(day)}`, statusLabel(day));
  const row = (label, count) => {
    const item = node('div'); item.append(node('dt', '', label), node('dd', '', `${fmt(count)}건`)); return item;
  };
  function renderKpis(day) {
    if (!day) { replace('kpi-grid', empty('상담 집계 미확인', '데이터가 게시되면 검토 대상과 메시지 집계를 표시합니다.')); return; }
    const items = [
      [semanticIncomplete(day)?'수집 상담방':'검토 대상 상담방', day.eligibleRooms, '개', semanticIncomplete(day)?semanticScopeNote(day):'읽지 않음·대기 등 제외 기준 적용', ''],
      [day.nonChatRecords?'해외 채팅 메시지':'전체 메시지', day.messageCount, '건', day.messageCount===null?'확장 검토범위 메시지 총수 미집계 · 기존 부분집합 수치로 대체하지 않습니다.':day.nonChatRecords?'국내 신청·문자는 별도 기록이며 이 수치에 합산하지 않습니다.':'제공된 메시지 분류 전체 범위', 'teal'],
      ['확정 오류 상담', day.verdicts?.confirmedError, '개', '자료충돌·확인필요는 제외', 'red'],
      ['후속 확인 상담', day.verdicts&&['suspectedError','missingAnswer','sourceConflict','needsVerification'].every(k=>suppliedNumber(day.verdicts[k]))?verificationCount(day.verdicts):null, '개', '의심·답변누락·자료충돌·확인필요', 'amber']
    ];
    replace('kpi-grid', ...items.map(([label, value, unit, note, color], index) => {
      const pending = semanticIncomplete(day) && index >= 2;
      const card = node('article', `kpi ${color}`); const figure = node('div', 'kpi-value', pending ? (suppliedNumber(value)&&value>0?'검수분 '+fmt(value):'검수중') : suppliedNumber(value)?fmt(value):index===1&&day.messageCount===null?'미집계':'미확인');
      if(suppliedNumber(value)&&(!pending||value>0))figure.append(node('small', '', unit)); card.append(node('h3', 'kpi-label', label), figure, node('p', 'kpi-note', pending?semanticScopeNote(day):note)); return card;
    }));
  }
  function renderVerdicts(day) {
    if (!day) { replace('verdict-chart', empty('판정 집계 대기', '데이터가 없는 상태를 0건 또는 적절로 해석하지 않습니다.')); return; }
    if(!day.verdicts||verdicts.some(([key])=>!suppliedNumber(day.verdicts[key]))){replace('verdict-chart',empty('판정 집계 미확인','확인되지 않은 판정을 0건으로 표시하지 않습니다.'));return;}
    const values = day.verdicts; const total = sumVerdicts(values);
    const chart = node('div', 'stacked-bar'); chart.setAttribute('role', 'img');
    chart.setAttribute('aria-label', (semanticIncomplete(day)?'대표판정 검수중. '+semanticScopeNote(day):`상담별 대표판정 합계 ${fmt(total)}개`)+'. '+verdicts.map(([key,label])=>label+' '+verdictValue(day,values,key)).join(', ')+'. 상담별 한 가지 대표판정.');
    if (total) verdicts.forEach(([key, label]) => {
      const value = number(values[key]); if (!value) return;
      const segment = node('span', `stacked-segment verdict-${key}`); segment.style.width = `${value / total * 100}%`; segment.title = `${label} ${verdictValue(day,values,key)}`; chart.append(segment);
    });
    const legend = node('div', 'verdict-legend');
    verdicts.forEach(([key, label]) => {
      const item = node('div'); const name = node('div', 'legend-label'); const swatch = node('span', `swatch verdict-${key}`); swatch.setAttribute('aria-hidden', 'true');
      name.append(swatch, node('span', '', label)); const value = node('div', 'legend-value', semanticIncomplete(day)?verdictValue(day,values,key):fmt(values[key])); if(!semanticIncomplete(day))value.append(node('small', '', '개')); item.append(name, value); legend.append(item);
    });
    replace('verdict-chart', chart, legend, node('p', 'finding-total', semanticIncomplete(day)?'대표판정 검수중 · '+semanticScopeNote(day):total ? `상담 ${fmt(total)}개 대표판정` : '등록된 상담 대표판정 0개 · 검토 완료 또는 오류 없음의 보증이 아닙니다.'));
  }
  function renderMessages(day) {
    if (!day) { replace('message-breakdown', empty('메시지 집계 대기')); return; }
    const items = [
      ['고객', day.customerMessages, 'customer'],
      ['병원답변(개별담당자미확인)', day.staffMessages, 'staff'],
      ['자동안내추정', day.autoMessages, 'auto']
    ];
    // Presence matters: an explicit zero is a provided category; an absent key is not.
    if (Object.hasOwn(day, 'systemMessages')) items.push(['시스템', day.systemMessages, 'system']);
    if (Object.hasOwn(day, 'deletedMessages')) items.push(['삭제표시', day.deletedMessages, 'deleted']);
    const total = number(day.messageCount);
    const sum = items.reduce((value, item) => value + number(item[1]), 0);
    const max = Math.max(total, ...items.map(item => number(item[1])), 1);
    const list = node('dl', 'message-list');
    items.forEach(([label, value, kind]) => {
      const item = node('div', `message-row ${kind}`); const track = node('div', 'mini-track'); track.setAttribute('aria-hidden', 'true');
      const fill = node('div', 'mini-fill'); fill.style.width = `${number(value) / max * 100}%`; track.append(fill);
      item.append(node('dt', 'message-label', label), track, node('dd','message-count',day.auditState==='reviewed-expanded-safe-scope-unaggregated'?'미집계':statValue(value,'건'))); list.append(item);
    });
    const allMessageCountsKnown=suppliedNumber(day.messageCount)&&items.every(item=>suppliedNumber(item[1]));
    const matches = allMessageCountsKnown&&sum === total;
    const summary = node('p', `message-total${matches ? '' : ' is-warning'}`, !allMessageCountsKnown?(day.auditState==='reviewed-expanded-safe-scope-unaggregated'?'확장 검토범위 메시지 총수·분류는 미집계입니다. 기존 부분집합 메시지 수나 0건으로 대체하지 않습니다.':'메시지 분류 합계 미확인 · 미확인 수치를 0건으로 합산하지 않습니다.'):`표시 분류 합계 ${fmt(sum)}건 / 전체 메시지 ${fmt(total)}건${matches ? ' · 합계 일치' : ` · 합계 불일치, 차이 ${fmt(Math.abs(sum - total))}건. 누락·중복·분류 범위를 확인하세요.`}`);
    summary.setAttribute('role', 'status'); summary.setAttribute('aria-live', 'polite');
    replace('message-breakdown', list, summary);
  }
  function getCountry(day) {
    if (!day) return null;
    if (selectedCountry === 'ALL') return { name: '전체 국가', rooms: day.eligibleRooms, messages: day.messageCount, verdicts: day.verdicts };
    // Unrecognized codes are not silently assigned to ZZ or used to infer nationality.
    const rows = Array.isArray(day.countries) ? day.countries.filter(item => item && item.code === selectedCountry) : [];
    if (!rows.length) return null;
    return rows.reduce((result, item) => {
      result.rooms=suppliedNumber(result.rooms)&&suppliedNumber(item.rooms)?result.rooms+item.rooms:null;result.messages=suppliedNumber(result.messages)&&suppliedNumber(item.messages)?result.messages+item.messages:null;
      [...verdicts,['unreviewed']].forEach(([key])=>{result.verdicts[key]=suppliedNumber(result.verdicts[key])&&suppliedNumber(item.verdicts?.[key])?result.verdicts[key]+item.verdicts[key]:null;});return result;
    }, { name: countryLabel(day,selectedCountry), rooms:0,messages:0,verdicts:Object.fromEntries([...verdicts,['unreviewed']].map(([key])=>[key,0]))});
  }
  function renderCountry(day) {
    for (const [code] of countryDefinitions) {
      const tab = $(`tab-${code}`); const active = code === selectedCountry;
      tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
    }
    const panel = $('country-panel'); panel.setAttribute('aria-labelledby', `tab-${selectedCountry}`);
    const country = getCountry(day);
    if (!country) { panel.replaceChildren(empty(day ? '이 국가 탭의 집계가 없습니다' : '국가별 집계 대기', '집계 없음은 상담방 0개 또는 검토 완료를 의미하지 않습니다.')); return; }
    const heading = node('div', 'country-topline'); const metrics = node('div', 'country-metrics');
    [['상담방', country.rooms, '개'], ['메시지', country.messages, '건']].forEach(([label, count, unit]) => { const item = node('span', '', label); item.append(node('strong', '', day.auditState==='reviewed-expanded-safe-scope-unaggregated'&&label==='메시지'?'미집계':statValue(count,unit))); metrics.append(item); });
    heading.append(node('h3', '', country.name), metrics);
    const bars = node('div', 'country-bars'); const max = Math.max(1, ...verdicts.map(([key]) => number(country.verdicts?.[key])));
    verdicts.forEach(([key, label]) => {
      const item = node('div', 'country-bar-row'); const track = node('div', 'mini-track'); track.setAttribute('aria-hidden', 'true');
      const fill = node('div', `mini-fill verdict-${key}`); fill.style.width = `${number(country.verdicts?.[key]) / max * 100}%`; track.append(fill);
      item.append(node('span', '', label), track, node('strong', '', verdictValue(day,country.verdicts,key))); bars.append(item);
    });
    panel.replaceChildren(heading, bars, node('p', 'helper bottom-note', semanticIncomplete(day)?'국가별 판정도 검수분만 표시합니다. 미검수 '+statValue(country.verdicts?.unreviewed,'개')+' · 전체 검수중. '+semanticScopeNote(day):'상담별 대표판정 비교 · 각 막대는 이 탭의 최댓값 기준 · 기타·미확인은 국적을 추정하지 않은 분류입니다.'));
  }
  function renderCountryAudit(day){
    const host=$('country-review-audit');if(!host)return;const cc=day?.countryCoverage;host.hidden=!cc;
    if(!cc){host.replaceChildren();$('country-basis').textContent='워크북의 국가 탭 기준';$('country-classification-note').textContent='국가 분류는 운영 탭 기준이며 고객의 국적을 의미하지 않습니다. 기타·미확인은 국적을 추정하지 않습니다.';$('stats-country-basis-note').textContent='운영 국가 탭 기준이며 국적을 추정하지 않습니다. 분포 비율은 제공된 국가 행 합계 기준입니다.';return;}
    $('country-basis').textContent=text(cc.basis);$('country-classification-note').textContent=text(cc.scope);$('stats-country-basis-note').textContent=text(cc.scope)+' '+text(cc.legends?.[0]);
    const children=[node('h3','','국가별 확인범위 · 전수완료 아님'),node('p','helper',text(cc.scope))];
    const legend=node('ul','coverage-note');for(const item of cc.legends||[])legend.append(node('li','',item));children.push(legend);
    if(cc.rows?.length){const {wrap,body}=table([['국가',false],['알려진 대상',true],['명시범위 실검토',true],['정상 재열람 / 이전 원문',false],['읽은 뒤 확인필요',true],['실제 미열람 단위',false],['전체분모 · 보호제외',false]],platformName()+' · '+selectedDate+' · 국가별 실제 확인범위 (미확인은0 아님)');for(const r of cc.rows){const tr=node('tr');tr.append(node('td','',r.name),node('td','number',statValue(r.knownRooms,'방')),node('td','number',statValue(r.reviewedScopeRooms,'방')),node('td','',statValue(r.normalReopenedRooms,'방')+' / '+statValue(r.priorTextRooms,'방')),node('td','number',statValue(r.needsVerificationRooms,'방')),node('td','', '삭제 '+statValue(r.unreadDeletedUnits,'단위')+(r.unreadCardUnits===null?' · 카드 미열람 미확인':r.unreadCardUnits>0?' · 보호카드 '+statValue(r.unreadCardUnits,'개'):'')),node('td','', '전체분모 '+statValue(r.totalDailyRooms,'방')+' · 보호총수 '+statValue(r.protectedTotalRooms,'방')+(suppliedNumber(r.knownProtectedRooms)?' · 확인된 보호제외 '+fmt(r.knownProtectedRooms)+'방':'')+' / '+text(r.reason)));body.append(tr);}children.push(wrap);}else children.push(node('p','helper','당일 확인한 범위에서 국가별 본문검토 대상이 없습니다. 언어목록은 국적 근거로 바꾸지 않습니다.'));
    for(const n of cc.notes||[])children.push(node('p','helper',n));host.replaceChildren(...children);
  }
  function table(headers, caption) {
    const wrap = node('div', 'table-wrap'); wrap.tabIndex = 0; wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-label', `${caption}, 가로 스크롤 가능`);
    const element = node('table'); element.append(node('caption', '', caption));
    const head = node('thead'); const tr = node('tr');
    headers.forEach(([label, numeric]) => { const th = node('th', numeric ? 'number' : '', label); th.scope = 'col'; tr.append(th); });
    head.append(tr); const body = node('tbody'); element.append(head, body); wrap.append(element); return { wrap, body };
  }
  const caseScopeComplete=day=>number(day?.verdicts?.unreviewed)===0&&day?.casesComplete===true&&(day.status==='completed'||(day.status==='partial'&&day.casesScope==='reviewed-rooms'&&Number.isInteger(day.eligibleRooms)&&day.reviewedRooms===day.eligibleRooms&&Array.isArray(day.reviewEntries)&&day.reviewEntries.length===day.reviewedRooms));
  function renderCases(day) {
    const cases = day && Array.isArray(day.cases) ? day.cases.filter(c => c && caseVerdicts.some(([key]) => key === c.verdict)) : [];
    const complete = caseScopeComplete(day);
    if (caseDateMemo !== selectedDate) {
      caseDateMemo = selectedDate; selectedCaseIndex = 0;
      selectedCaseVerdict = caseVerdicts.find(([key]) => cases.some(c => c.verdict === key))?.[0] || 'confirmedError';
    }
    $('cases-date').textContent = selectedDate ? selectedDate + ' · KST' : '날짜별 상담 검토';
    caseVerdicts.forEach(([key, label]) => {
      const tab = $('case-tab-' + key); const count = cases.filter(c => c.verdict === key).length;
      tab.textContent = label+' '+(complete?fmt(count):count?'확인 '+fmt(count):'미확인'); tab.setAttribute('aria-selected', String(key === selectedCaseVerdict)); tab.tabIndex = key === selectedCaseVerdict ? 0 : -1;
    });
    const filtered = cases.filter(c => c.verdict === selectedCaseVerdict);
    selectedCaseIndex = Math.max(0, Math.min(selectedCaseIndex, filtered.length - 1));
    $('case-panel').setAttribute('aria-labelledby', 'case-tab-' + selectedCaseVerdict);
    $('case-count').textContent = complete?(day.status==='partial'?'검수한 '+fmt(day.reviewedRooms)+'개 상담 범위 · ':'')+'세부 사례 '+fmt(cases.length)+'건 · 한 상담에 여러 이슈가 있을 수 있습니다.':cases.length?'확인된 세부 사례 '+fmt(cases.length)+'건 · 전체 집계 미완료':'세부 사례 집계 미확인';
    $('case-previous').disabled = !filtered.length || selectedCaseIndex === 0;
    $('case-next').disabled = !filtered.length || selectedCaseIndex >= filtered.length - 1;
    $('case-position').textContent = filtered.length ? (selectedCaseIndex + 1) + ' / ' + fmt(filtered.length) : '';
    if (!filtered.length) {
      const title = !day ? '점검 기록 없음' : complete ? '없음' : '검토 중';
      const detail = !day ? '이 날짜의 점검 결과가 아직 등록되지 않았습니다.' : complete ? '해당 상담이 없습니다.' : '아직 점검이 끝나지 않았습니다.';
      replace('case-panel', empty(title, detail)); return;
    }
    const item = filtered[selectedCaseIndex]; const article = node('article', 'case-review');
    const heading = node('div', 'case-review-heading'); const label = caseVerdicts.find(([key]) => key === item.verdict)[1];
    const country = countryLabel(day,item.country);
    heading.append(node('span', 'case-country', country));
    const classification=node('dl','case-classification');
    classification.append(node('dt','','시술'),node('dd','',text(item.procedure,'확인되지 않음')),node('dt','','질문 카테고리'),node('dd','',text(item.questionCategory,'확인되지 않음')));
    heading.append(classification,node('span','case-verdict',label),node('h3','',text(item.title,'상담 내용 확인')));
    const grid = node('div', 'case-bento');
    const quoteCard = (title, originals, original, translation, side) => {
      const card=node('div','case-cell case-'+side);card.append(node('h4','',title));
      const messages=Array.isArray(originals)?originals:[{kind:'text',original:typeof original==='string'?original:'',ko:typeof translation==='string'?translation:''}];
      if(!messages.length)card.append(node('p','case-nontext','이 사례와 연결된 문장형 메시지 없음'));
      messages.forEach((message,i)=>{
        const block=node('div','case-message');const kind=message.kind||'text';
        if(['imageOnly','noMessage'].includes(kind)){
          block.append(node('p','case-nontext',kind==='imageOnly'?'이미지로 응답 · 문장형 텍스트 없음':'직접 작성한 문장형 메시지 없음'));card.append(block);return;
        }
        if(kind==='context')block.append(node('p','case-nontext','상품 유입 정보 · 고객이 직접 작성한 글이 아님'));
        if(kind==='linkOnly')block.append(node('p','case-nontext','링크로 응답'));
        const source=typeof message.original==='string'?message.original:'';
        const ko=typeof message.ko==='string'?message.ko:'';
        block.append(node('p','case-quote-heading',(kind==='context'?'유입 정보 원문':'원문')+(messages.length>1?' '+(i+1):'')));
        block.append(node('blockquote','case-original',source||'문장형 텍스트 없음'));
        const translated=node('div','case-ko');translated.append(node('strong','','한국어 번역'),node('blockquote','case-translation',ko||'번역 확인 필요'));
        block.append(translated);card.append(block);
      });return card;
    };
    grid.append(quoteCard('고객이 남긴 글',item.customerMessages,item.customerText,item.customerKo,'customer'),quoteCard('담당자가 답한 글',item.staffMessages,item.staffText,item.staffKo,'staff'));
    const basis = node('div', 'case-cell case-basis'); basis.append(node('h4', '', '판정 근거'), node('p', 'case-rationale', text(item.rationale, '판단 근거 확인 필요')));
    if (text(item.evidence)) { const evidence = node('details', 'case-evidence'); evidence.append(node('summary', '', '대조자료 원문'), node('blockquote', '', item.evidence)); basis.append(evidence); }
    grid.append(basis); article.append(heading,node('p','case-excerpt-label',text(item.quoteScopeNote,item.quoteFormat==='full-messages-v1'?'관련 메시지 원문 전체 · 개인정보만 표시 후 가림':'기존 기록 · 전체 원문 대조 필요')),grid); replace('case-panel', article);
  }
  function renderIssues(day) {
    if (!day) { replace('issues-content', empty('이슈 집계 대기')); return; }
    const issues = Array.isArray(day.issues) ? day.issues.filter(item => item && typeof item === 'object') : [];
    if(!Array.isArray(day.issues)||((day.status!=='completed'||semanticIncomplete(day))&&!issues.length)){replace('issues-content',empty('이슈 분류 미확인','미확인 상태를 오류 없음으로 표시하지 않습니다.'));return;}
    if (!issues.length) { replace('issues-content', empty('등록된 이슈 분류가 없습니다', day.status === 'completed' ? '등록 목록 기준이며 모든 상담에 문제가 없다는 뜻은 아닙니다.' : '부분 집계 또는 상태 미확인 결과입니다. 이슈 없음으로 확정하지 않습니다.')); return; }
    const { wrap, body } = table([['분류', false], ['우선도', false], ['조치 상태', false], ['발견 건수', true]], '세부 이슈 집계 · 한 상담에 여러 건 가능. 상담별 대표판정과 합산하지 않습니다.');
    const allowedStatuses = new Set(['대기', '미확인', '확인중', '확인 중', '검토중', '검토 중', '조치중', '조치 중', '완료', '미조치', '조치 완료', '확인 필요', '자료 확인', '자료 표기 확인', '정정 검토 필요', '보류']);
    issues.forEach(issue => {
      const tr = node('tr'); tr.append(node('td', '', text(issue.category, '미분류')));
      const severity = ['높음', '보통', '낮음'].includes(issue.severity) ? issue.severity : '미분류';
      tr.append(node('td', `severity ${severity === '높음' ? 'high' : severity === '보통' ? 'medium' : severity === '낮음' ? 'low' : ''}`, severity));
      tr.append(node('td', '', allowedStatuses.has(issue.status) ? issue.status : '상태 미분류'), node('td', 'number', semanticIncomplete(day)?(suppliedNumber(issue.count)&&issue.count>0?'검수분 '+fmt(issue.count)+'건 · 전체 검수중':'검수중'):`${fmt(issue.count)}건`)); body.append(tr);
      // issue.summary is intentionally never read or rendered.
    }); replace('issues-content', wrap);
  }
  function renderHistory() {
    if (!days.length) { replace('history-content', empty('아직 게시된 일별 기록이 없습니다', '실제 검토 결과가 게시되기 전에는 예시 수치를 표시하지 않습니다.')); return; }
    const { wrap, body } = table([['조회일 · KST', false], ['집계 상태', false], ['상담방', true], ['메시지', true], ['확정 오류', true], ['후속 확인 상담', true]], '게시된 일별 기록 · 최신 날짜순 · 부분 집계는 완료 결과가 아닙니다.');
    days.forEach(day => {
      const tr = node('tr', day.date === selectedDate ? 'selected' : ''); const dateCell = node('td'); const button = node('button', 'date-link', day.date); button.type = 'button';
      button.setAttribute('aria-label', `${day.date} KST, ${statusLabel(day)} 조회`); if (day.date === selectedDate) button.setAttribute('aria-current', 'date');
      button.addEventListener('click', () => { selectedDate = day.date; render(); dateInput.focus(); }); dateCell.append(button);
      const statusCell = node('td'); statusCell.append(badge(day)); tr.append(dateCell, statusCell, node('td', 'number', statValue(day.eligibleRooms,'개')), node('td', 'number', day.auditState==='reviewed-expanded-safe-scope-unaggregated'?'미집계':statValue(day.messageCount,'건')), node('td', 'number', verdictValue(day,day.verdicts,'confirmedError')), node('td', 'number', day.verdicts&&['suspectedError','missingAnswer','sourceConflict','needsVerification'].every(k=>suppliedNumber(day.verdicts[k]))?(semanticIncomplete(day)?(verificationCount(day.verdicts)>0?'검수분 '+fmt(verificationCount(day.verdicts))+'개 · 전체 검수중':'검수중'):statValue(verificationCount(day.verdicts),'개')):semanticIncomplete(day)?'검수중':'미확인')); body.append(tr);
    }); replace('history-content', wrap);
  }
  function renderCoverage(day) {
    if (!day) { replace('coverage-content', empty('검토 범위 미제공', '대상 수, 제외 수, 첨부 검토 여부는 아직 확인할 수 없습니다.')); return; }
    const coverage = day.coverage || {}; const list = node('dl', 'coverage-list');
    [['후보 상담방', 'candidateRooms'], ['검토한 상담방', 'reviewedRooms'], ['읽지 않음 제외', 'excludedUnread'], ['대기 상태 제외', 'excludedWaiting'], ['마감 이후 제외', 'excludedAfterCutoff'], ['미검토 첨부', 'uninspectedAttachments']].forEach(([label, key]) => { const item = row(label, coverage[key]); item.lastChild.textContent = statValue(coverage[key],key === 'uninspectedAttachments' ? '건' : '개'); list.append(item); });
    const line = node('div', 'status-line'); line.append(badge(day), node('span', '', '수치가 아닌 게시된 상태 기준'));
    const children = [list, line];
    if (!day.coverage) children.push(node('p', 'helper bottom-note', '범위 상세가 제공되지 않았습니다. 누락된 숫자는 미확인으로 표시하며 범위 검증 완료를 의미하지 않습니다.'));
    const notes = Array.isArray(coverage.notes) ? coverage.notes.filter(note => typeof note === 'string' && note.trim()) : [];
    if (notes.length) { const ul = node('ul', 'coverage-note'); notes.forEach(note => ul.append(node('li', '', note))); children.push(ul); }
    replace('coverage-content', ...children);
  }

  // Statistics use the same selected day. Missing values are not silently zeroed.
  const suppliedNumber = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;
  const statValue = (value, unit) => suppliedNumber(value) ? fmt(value) + unit : '미확인';
  const statsCaseInfo = day => {
    const rows = Array.isArray(day?.cases) ? day.cases : [];
    const valid = rows.filter(item => item && caseVerdicts.some(([key]) => key === item.verdict));
    const complete = caseScopeComplete(day) && Array.isArray(day?.cases) && rows.length === valid.length;
    const count = key => valid.filter(item => item.verdict === key).length;
    return { count, label: key => complete ? fmt(count(key)) + '건' : count(key) ? '집계중 · 확인 ' + fmt(count(key)) + '건' : '집계중', complete };
  };
  let statsCountryMetric = 'rooms';
  function statBar(label, value, max, unit, kind = '', display) {
    const row = node('div', 'stats-bar-row');
    const track = node('div', 'mini-track'); track.setAttribute('aria-hidden', 'true');
    const fill = node('div', 'mini-fill ' + kind); fill.style.width = (suppliedNumber(value) ? number(value) / Math.max(max, 1) * 100 : 0) + '%'; track.append(fill);
    row.append(node('span', '', label), track, node('strong', '', display === undefined ? statValue(value, unit) : display)); return row;
  }
  function renderStatsCountries(day) {
    ['rooms', 'messages'].forEach(key => { const tab = $('stats-country-' + key); const active = statsCountryMetric === key; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
    $('stats-country-panel').setAttribute('aria-labelledby', 'stats-country-' + statsCountryMetric);
    if(!Array.isArray(day?.countries)||!day.countries.length){replace('stats-country-panel',empty(day?.status==='completed'&&day.eligibleRooms===0&&day.messageCount===0&&Array.isArray(day.countries)?'국가별 분포 대상 0개':'국가별 집계 미확인'));return;}
    const groups = new Map();
    day.countries.filter(item => item && typeof item === 'object').forEach(item => {
      const code = text(item.code, 'UNCONFIRMED');
      const label = text(item.name) || countryLabel(day,text(item.code));
      const old = groups.get(code) || { label, value: 0, known: true };
      old.known = old.known && suppliedNumber(item[statsCountryMetric]); old.value += number(item[statsCountryMetric]); groups.set(code, old);
    });
    const rows = [...groups.values()]; const max = Math.max(1, rows.reduce((sum, item) => sum + item.value, 0));
    const unit = statsCountryMetric === 'rooms' ? '개' : '건';
    const list = node('div', 'stats-bars');
    const expandedUnaggregated=statsCountryMetric==='messages'&&day.auditState==='reviewed-expanded-safe-scope-unaggregated';
    rows.forEach(item => list.append(statBar(item.label, item.known ? item.value : undefined, max, unit, statsCountryMetric === 'messages' ? 'stats-teal' : '',expandedUnaggregated&&!item.known?'미집계':undefined)));
    const total = rows.reduce((sum, item) => sum + item.value, 0);
    const expected = day[statsCountryMetric === 'rooms' ? 'eligibleRooms' : 'messageCount'];
    const allKnown = rows.length > 0 && rows.every(item => item.known);
    const matches = allKnown && suppliedNumber(expected) && total === number(expected);
    replace('stats-country-panel', list, node('p', 'helper bottom-note', expandedUnaggregated?'확장 검토범위의 국가별 메시지는 미집계입니다. 기존 부분집합 수치나0건으로 대체하지 않습니다.':'국가 합계 ' + (allKnown ? fmt(total) + unit : '미확인') + ' / 일일 전체 ' + statValue(expected, unit) + (matches ? ' · 합계 일치' : ' · 누락·집계 범위 확인 필요')));
  }
  function renderKnowledge(day,target){
    const k=day?.knowledgeVerification;
    if(semanticIncomplete(day)){replace(target,node('p','helper','지식·의미 검수중 · 수집 완료와 의미·첨부 검수 완료는 별도입니다.'),node('p','helper',semanticScopeNote(day)),node('p','helper',text(k?.scope)));return;}
    if(['source-reviewed','direct-source-live-reviewed','direct-list-and-contact-notice-reviewed'].includes(k?.status)){const grid=node('div','knowledge-metrics');for(const[label,value,unit]of[['실제 검수 상담',k.rooms,'개'],['확인 메시지',k.messages,'건'],[suppliedNumber(k.uniqueSourceConflictTopics)?'공통자료 노출':'자료충돌',k.sourceConflictOccurrences,suppliedNumber(k.uniqueSourceConflictTopics)?'방':'사례']]){const item=node('div');item.append(node('strong','',suppliedNumber(value)?fmt(value)+unit:day.auditState==='reviewed-expanded-safe-scope-unaggregated'?'미집계':'미확인'),node('span','',label));grid.append(item);}replace(target,grid,node('p','helper','동일 검수 규칙 · 실제 원문과 제공 가이드·수가 자료 직접 대조'),node('p','helper',text(k.scope)),node('p','helper',suppliedNumber(k.uniqueSourceConflictTopics)?'공통자료 원인 '+fmt(k.uniqueSourceConflictTopics)+'건 · 노출 '+fmt(k.sourceConflictOccurrences)+'방':''),node('p','helper','검토 시각 '+timestamp(k.checkedAt)));return;}
    if(k?.status==='not-needed-no-activity'){replace(target,node('p','helper','해당일 활동 없음 확인 · 본문·수가 판정 대상 없음'),node('p','helper',text(k.scope)));return;}
    if(k?.status!=='verified'){replace(target,node('p','helper','지식기반 재검증 미등록'));return;}
    const grid=node('div','knowledge-metrics');
    for(const [label,value,unit] of [['가이드 문서',k.guideDocuments,'개'],['수가표 행',k.priceOffers,'행'],['재매칭 상담',k.rooms,'개']]){const item=node('div');item.append(node('strong','',suppliedNumber(value)?fmt(value)+unit:'미등록'),node('span','',label));grid.append(item);}
    replace(target,grid,node('p','helper','원본 수가 '+fmt(k.priceSheets)+'시트 · '+fmt(k.sourceCells)+'셀 · 규칙 '+fmt(k.ruleCount)+'개 · 검토된 정책 사실 '+fmt(k.curatedFacts)+'개'),node('p','helper','검토항목 '+fmt(k.findingPackets)+'개 · 출처 연결 '+fmt(k.citationLinks)+'회'),node('p','helper','가격 비교 '+fmt(k.priceComparisons)+'회(중복 포함): 일치 '+fmt(k.priceMatched)+'회 · 조건/셀 대조로 자동 비교 제외 '+fmt(k.priceNotComparable)+'회'),node('p','helper','자료충돌 '+fmt(k.sourceConflictOccurrences)+'사례 / 공통 원인 '+fmt(k.uniqueSourceConflictTopics)+'유형 · 직원 확정 오류와 별도'),node('p','helper',text(k.scope)+' · '+text(k.version)+' · '+timestamp(k.checkedAt)));
  }
  function renderFollowUps(day, target) {
    const summary = day?.followUpSummary;
    const keys = [['carried','이월'],['resolved','해결'],['unresolved','미해결'],['deferred','확인보류'],['unchecked','미확인']];
    const rows = Array.isArray(day?.followUps) ? day.followUps.filter(item => item && typeof item === 'object' && item.status !== '판정철회') : [];
    const card = $(target.replace('followups','followup-card')) || $(target).parentElement;
    const explicitEmpty = Array.isArray(day?.followUps) && !rows.length && !['resolved','unresolved','deferred','unchecked'].some(key => number(summary?.[key]) > 0);
    if (card) card.hidden = explicitEmpty;
    if (explicitEmpty) { replace(target); return; }
    if (!summary && !rows.length) { replace(target, empty('처리현황 미등록', '누락된 기록을 해결로 간주하지 않습니다.')); return; }
    const box = node('div', 'followup-counts'); keys.forEach(([key, label]) => box.append(node('span', '', label + ' ' + (suppliedNumber(summary?.[key]) ? fmt(key === 'carried' && suppliedNumber(summary.withdrawn) ? Math.max(0,summary.carried-summary.withdrawn) : summary[key]) + '건' : '미등록'))));
    const completeSummary = keys.every(([key]) => suppliedNumber(summary?.[key]));
    const none = completeSummary && keys.every(([key]) => summary[key] === 0) && Array.isArray(day?.followUps) && !rows.length;
    const children = [box];
    if (dateValid(day?.followUpAsOf)) children.unshift(node('p','helper','처리 기준일 '+day.followUpAsOf));
    if (none) children.push(node('p', 'helper', '이전 지적사항 없음'));
    else if (!rows.length) children.push(node('p', 'helper', '세부 처리 기록 미등록 · 해결 여부는 개별 근거를 확인해 주세요.'));
    else {
      const list = node('ul', 'followup-list');
      rows.forEach(item => {
        const li = node('li'); const state = ['해결','미해결','확인보류','미확인'].includes(item.status) ? item.status : '미확인';
        li.append(node('strong', '', text(item.title, '지적사항')), node('span', 'followup-state', state), node('p', 'helper', '최초 보고 ' + (dateValid(item.firstReportedDate) ? item.firstReportedDate + ' KST' : '미등록') + ' · 마지막 확인 ' + (text(item.checkedAt) ? timestamp(item.checkedAt) : '미등록')));
        li.append(node('p', '', '처리 내용: ' + text(item.update, '미등록')), node('p', 'helper', '확인 근거: ' + text(item.evidence, '미등록'))); list.append(li);
      }); children.push(list);
    }
    replace(target, ...children);
  }
  function renderStats(day) {
    $('stats-date').textContent = selectedDate ? selectedDate + ' · KST · ' + (day ? statusLabel(day) : '미게시') : '조회일 없음';
    const cases = statsCaseInfo(day);
    const items = [[semanticIncomplete(day)?'수집 상담방':'검토 상담방', statValue(day?.eligibleRooms, '개'), semanticIncomplete(day)?semanticScopeNote(day):'일일 검토 대상 상담방 · eligibleRooms', ''], ['병원답변', statValue(day?.staffMessages, '건'), '메시지 수 · 개별 담당자 미확인', 'teal'], ['확정 오답', cases.label('confirmedError'), '세부 사례 · 의심·자료충돌 제외', 'red'], ['답변누락', cases.label('missingAnswer'), '담당자 답변이 전혀 없는 사례만', 'red'], ['확인필요', cases.label('needsVerification'), '세부 사례 · 확정 오류 아님', 'amber'], ['자료충돌', cases.label('sourceConflict'), '세부 사례 · 확정 오류 아님', '']];
    replace('stats-kpis', ...items.map(([label, value, note, color]) => { const card = node('article', 'kpi ' + color); card.append(node('h3', 'kpi-label', label), node('div', 'kpi-value stats-value', value), node('p', 'kpi-note', note)); return card; }));
    $('stats-case-note').textContent = '오안내의심 ' + cases.label('suspectedError') + ' · 한 상담방에 여러 사례가 있을 수 있습니다. ' + (cases.complete ? (day.status==='partial'?'검수한 '+fmt(day.reviewedRooms)+'개 상담 범위의 사례 집계 완료. 미검수 범위는 별도입니다.':'사례 집계 완료.') : '사례 집계중 · 현재 확인된 사례만 표시하며 오류 0건으로 확정하지 않습니다.');
    renderFollowUps(day, 'stats-followups'); renderKnowledge(day,'stats-knowledge');
    if (!days.length) replace('stats-trend', empty('게시된 일별 집계 없음'));
    else {
      const ordered = [...days].reverse(); const max = Math.max(1, ...ordered.map(item => number(item.eligibleRooms)));
      const chart = node('ol', 'stats-trend'); chart.setAttribute('aria-label', ordered.some(semanticIncomplete)?'게시일별 수집 상담방 수와 검수 범위 · 실제 날짜만 표시':'게시일별 검토 상담방 수 · 실제 날짜만 표시');
      ordered.forEach(item => { const li = node('li', item.date === selectedDate ? 'selected' : '');
        const mark = node('div', 'stats-point-track'); mark.setAttribute('aria-hidden', 'true');
        if (suppliedNumber(item.eligibleRooms)) { const point = node('span', 'stats-point'); point.style.left = number(item.eligibleRooms) / max * 100 + '%'; mark.append(point); }
        const date = node('button', 'date-link', item.date); date.type = 'button'; date.setAttribute('aria-label', item.date + ' KST 조회'); if (item.date === selectedDate) date.setAttribute('aria-current', 'date');
        date.addEventListener('click', () => { selectedDate = item.date; render(); });
        li.append(date, mark, node('strong', '', (semanticIncomplete(item)?'수집 ':'')+statValue(item.eligibleRooms, '개')), node('small', '', statusLabel(item)+(semanticIncomplete(item)?' · '+semanticScopeNote(item):''))); chart.append(li);
      }); replace('stats-trend', chart, node('p', 'helper', 'KST · 가로 위치는 상담방 수이며, 날짜 사이의 미게시 일자는 보간하지 않습니다.'));
    }
    renderStatsCountries(day);
    if (!day?.verdicts) replace('stats-verdicts', empty('대표판정 집계중'));
    else { const max = Math.max(1, ...verdicts.map(([key]) => number(day.verdicts[key]))); const list = node('div', 'stats-bars'); verdicts.forEach(([key, label]) => list.append(statBar(label, day.verdicts[key], max, '개', 'verdict-' + key,verdictValue(day,day.verdicts,key)))); if(semanticIncomplete(day))list.append(node('p','helper','대표판정 검수중'+' · '+semanticScopeNote(day))); replace('stats-verdicts', list); }
    const {wrap, body} = table([['담당자 그룹',false],['병원답변',true],['확정 오답 사례',true],['누락 사례',true],['확인필요 사례',true],['자료충돌 사례',true]], (selectedDate || '미선택') + ' KST · 병원답변과 세부 사례는 다른 단위');
    const tr = node('tr'); tr.append(node('td', '', '담당자 미확인'), node('td', 'number', statValue(day?.staffMessages, '건')), ...['confirmedError','missingAnswer','needsVerification','sourceConflict'].map(key => node('td', 'number', cases.label(key)))); body.append(tr); replace('stats-staff', wrap);
  }
  const reportViewIds=['overview','review-log','suspect-cases','countries','issues','history','coverage'];
  const viewLabels={overview:'일일 현황','review-log':'검수내역','suspect-cases':'오상담의심',countries:'국가별 집계',issues:'이슈 분류',history:'일별 기록',coverage:'검토 범위',stats:'통계 대시보드','staff-memo':'AI에 피드백 메모'};
  const viewIds=Object.keys(viewLabels);let currentView='overview';
  const platformName=()=>platformDefinitions.find(([id])=>id===selectedPlatform)?.[1]||'플랫폼';
  const mobileMenu=()=>!!window.matchMedia?.('(max-width: 900px)').matches;
  function setMenuOpen(open){$('sidebar-navigation').hidden=!open;$('nav-toggle').setAttribute('aria-expanded',String(open));$('nav-toggle').textContent=open?'콘텐츠 메뉴 접기':'콘텐츠 메뉴 열기';}
  function updateViewContext(){$('content-view-title').textContent=platformName()+' · '+viewLabels[currentView];$('selected-platform-label').textContent=platformName()+' 보고서';$('content-view-context').textContent=(selectedDate?selectedDate+' KST':'조회일 미선택')+' · '+platformName()+' 독립 검수 자료'+(currentView==='staff-memo'?' · 담당자→AI 피드백':'');const feedback=currentView==='staff-memo';$('data-notice').hidden=feedback;$('day-status').hidden=feedback;$('report-update-meta').hidden=feedback;const connection=Array.isArray(meta.platforms)?meta.platforms.find(p=>p.id===selectedPlatform):null;$('platform-health-note').textContent=connection?.checkedAt?'자료 확인 '+timestamp(connection.checkedAt)+' · 접속 확인과 상담 검수는 별도입니다.':'';}
  function rememberPlatform(){platformUiState.set(selectedPlatform,{selectedDate,selectedCountry,selectedCaseVerdict,selectedCaseIndex,caseDateMemo,statsCountryMetric});}
  function activatePlatform(id){if(!platformIds.includes(id)||id===selectedPlatform)return false;rememberPlatform();selectedPlatform=id;days=platformDays(id);const saved=platformUiState.get(id);if(saved){selectedDate=saved.selectedDate;selectedCountry=saved.selectedCountry;selectedCaseVerdict=saved.selectedCaseVerdict;selectedCaseIndex=saved.selectedCaseIndex;caseDateMemo=saved.caseDateMemo;statsCountryMetric=saved.statsCountryMetric;}else{selectedDate=dateValid(selectedDate)?selectedDate:days[0]?.date||allReportDates[0]||'';selectedCountry='ALL';selectedCaseVerdict='confirmedError';selectedCaseIndex=0;caseDateMemo=null;statsCountryMetric='rooms';}return true;}
  function decodeRoute(hash){const value=typeof hash==='string'?hash.replace(/^#/,''):'';if(value==='main')return{platform:selectedPlatform,view:currentView};if(value.startsWith('platform-')&&platformIds.includes(value.slice(9)))return{platform:value.slice(9),view:'overview'};const parts=value.split('/');if(platformIds.includes(parts[0]))return{platform:parts[0],view:viewIds.includes(parts[1])?parts[1]:'overview'};return{platform:selectedPlatform,view:viewIds.includes(value)?value:'overview'};}
  function setView(hash,focus=false){const route=decodeRoute(hash),changed=activatePlatform(route.platform);currentView=route.view;viewIds.forEach(id=>{$(id).hidden=id!==currentView;$('nav-'+id).setAttribute('aria-current',id===currentView?'page':'false');$('nav-'+id).href='#'+selectedPlatform+'/'+id;});platformDefinitions.forEach(([id])=>{const link=$('nav-platform-'+id);link.setAttribute('aria-current',id===selectedPlatform?'page':'false');link.href='#'+id+'/'+currentView;});$('report-view').hidden=!reportViewIds.includes(currentView);$('nav-home').setAttribute('aria-current','false');if(changed)render();else updateViewContext();if(focus){$('content-view-title').focus({preventScroll:true});window.scrollTo?.({top:0,behavior:'instant'});}}
  function navigateView(id,platform=selectedPlatform){const view=viewIds.includes(id)?id:'overview',target='#'+(platformIds.includes(platform)?platform:selectedPlatform)+'/'+view;if(window.location&&window.location.hash!==target){if(window.history?.pushState)window.history.pushState({platform,contentView:view},'',target);else window.location.hash=target;}setView(target,true);if(mobileMenu())setMenuOpen(false);}
  function renderConversation(conversation){const box=node('article','card review-conversation');box.append(node('h3','','관련 메시지 원문 전체 · 한국어 번역'));for(const m of Array.isArray(conversation.messages)?conversation.messages:[]){const block=node('div','case-message');block.append(node('h4','',({customer:'고객',staff:'담당자',auto:'자동안내',system:'시스템'})[m.speaker]||'화자 미확인'),node('p','case-quote-heading','원문'),node('blockquote','case-original',typeof m.original==='string'?m.original:''),node('p','case-quote-heading','한국어 번역'),node('blockquote','case-translation',typeof m.ko==='string'?m.ko:'번역 미확인'));box.append(block);}if(text(conversation.rationale))box.append(node('p','case-rationale',conversation.rationale));replace('review-log-detail',box);box.tabIndex=-1;box.focus?.({preventScroll:true});box.scrollIntoView?.({block:'start',behavior:'auto'});}
  function renderReviewLog(day){replace('review-log-detail');const entries=Array.isArray(day?.reviewEntries)?day.reviewEntries:[];if(!entries.length&&Array.isArray(day?.nonChatRecords)&&day.nonChatRecords.length){const {wrap,body}=table([['기록 종류',false],['건수',true],['확인 범위',false],['판정 범위',false]],platformName()+' · '+selectedDate+' · 국내 비채팅 기록 (상담방·메시지 수에 미합산)');for(const r of day.nonChatRecords){const tr=node('tr');tr.append(node('td','',r.kind),node('td','number',statValue(r.count,'건')),node('td','',r.scope),node('td','',r.assessment));body.append(tr);}replace('review-log-content',wrap,node('p','helper','해외 채팅 당일 활동 0과 국내 신청·기존 문자 기록을 구분합니다. 전체 통화상담이나 실시간 채팅방을 검수했다는 뜻이 아닙니다.'));return;}if(!entries.length){const verifiedNone=day?.status==='completed'&&day.eligibleRooms===0&&Array.isArray(day.reviewEntries);replace('review-log-content',empty(verifiedNone?'검수 대상 없음':'검수내역 미확인 · 미완료',verifiedNone?'실제 완료된 검토 기록의 대상 수가 0개입니다.':'접속 확인이나 발견 사례 수를 전체 상담 검수내역으로 대신하지 않습니다.'));return;}const{wrap,body}=table([['국가',false],['시술',false],['질문 카테고리',false],['판정',false],['발견 건수',true],['본문·사례',false]],platformName()+' · '+selectedDate+' · '+(semanticIncomplete(day)?'수집 상담 원장 ':'실제 검수 상담 ')+entries.length+'건'+(semanticIncomplete(day)?' · 검수중':''));for(const entry of entries){const tr=node('tr'),country=countryLabel(day,entry.country),verdict=entry.verdict==='unreviewed'?'미검수':(verdicts.find(([key])=>key===entry.verdict)?.[1]||text(entry.verdict,'미확인'))+(semanticIncomplete(day)?' · 검수분':'');tr.append(node('td','',country),node('td','',text(entry.procedure,'확인되지 않음')),node('td','',text(entry.questionCategory,'확인되지 않음')),node('td','',verdict),node('td','number',semanticIncomplete(day)?(entry.verdict==='unreviewed'?'검수중':suppliedNumber(entry.findingCount)&&entry.findingCount>0?'검수분 '+fmt(entry.findingCount)+'건 · 전체 검수중':'검수중'):statValue(entry.findingCount,'건')));const actions=node('td');const related=Array.isArray(entry.relatedCaseIds)?entry.relatedCaseIds:[];let linked=0;for(const id of related){const c=day.cases?.find(c=>c.id===id);if(!c)continue;const button=node('button','date-link','사례 보기');button.id='review-case-'+entry.id+'-'+id;button.type='button';button.addEventListener('click',()=>{selectedCaseVerdict=c.verdict;selectedCaseIndex=day.cases.filter(c=>c.verdict===selectedCaseVerdict).findIndex(c=>c.id===id);caseDateMemo=selectedDate;renderCases(day);navigateView('suspect-cases');});actions.append(button);linked++;}const conversation=Array.isArray(day.conversations)?day.conversations.find(c=>c.id===entry.id):null;if(conversation){const button=node('button','date-link','관련 원문 보기');button.id='review-conversation-'+entry.id;button.type='button';button.addEventListener('click',()=>renderConversation(conversation));actions.append(button);}else if(!linked)actions.append(node('span','muted',entry.verdict==='unreviewed'?'미검수 · 공개 사례 검토 전':semanticIncomplete(day)?'검수분 · 공개 사례 집계중':entry.verdict==='appropriate'||entry.verdict==='적정'?'정상 검토 · 공개 사례 없음':'공개 사례 없음'));if(text(entry.note))actions.append(node('p','small muted',entry.note));tr.append(actions);body.append(tr);}replace('review-log-content',wrap,node('p','helper',semanticIncomplete(day)?semanticScopeNote(day)+' · 미검수 원장 행은 적정·오류 판정이나 발견 건수 확정을 뜻하지 않습니다.':'검수내역은 실제 검토한 상담 기준이며, 발견 사례 수와 다른 단위입니다. 정상 상담의 전체 대화를 임의로 만들어 표시하지 않습니다.'));}

  function render() {
    const day = days.find(item => item.date === selectedDate);
    dateInput.value = selectedDate;dateInput.disabled=false;dateInput.min=allReportDates.at(-1)||'';dateInput.max=allReportDates[0]||'';
    const dayUpdate=[day?.checkedAt,day?.casesUpdatedAt].filter(v=>typeof v==='string'&&/(Z|[+-]\d{2}:?\d{2})$/i.test(v)&&Number.isFinite(Date.parse(v))).sort((a,b)=>Date.parse(b)-Date.parse(a))[0];
    $('updated-at').textContent=timestamp(dayUpdate||platformReports[selectedPlatform]?.updatedAt||(selectedPlatform==='gangnamunni'?meta.updatedAt:null));
    const index = days.findIndex(item => item.date === selectedDate);
    $('previous-day').disabled = index < 0 || index >= days.length - 1;
    $('next-day').disabled = index <= 0;
    $('day-status').textContent = day ? statusLabel(day) : '집계 대기';
    $('day-status').className = `badge ${day ? statusClass(day) : 'neutral'}`;
    $('cutoff-at').textContent = day ? timestamp(day.cutoffAt) : '미제공 · KST';
    const notice = $('data-notice'); notice.className = `notice${day && day.status !== 'completed' ? ' warning' : ''}`;
    if (!hasPayload) notice.textContent = '집계 데이터가 없거나 로드되지 않았습니다. data.js 게시 상태를 확인해 주세요. 예시 데이터는 표시하지 않습니다. 모든 시각은 KST입니다.';
    else if (!day) notice.textContent = selectedDate ? platformName()+' · '+selectedDate+' KST 상담 검수 미확인. 이 플랫폼의 보고서가 아직 등록되지 않았습니다.' : '아직 게시된 집계가 없습니다. 검토 결과가 게시되면 표시됩니다. 모든 시각은 KST입니다.';
    else if (day.status === 'partial' || semanticIncomplete(day)) notice.textContent = `${day.date} KST · 부분 집계입니다. 미검토·누락 범위가 있을 수 있으며 전체 검토 완료 또는 오류 없음으로 해석하지 않습니다.`;
    else if (day.status !== 'completed') notice.textContent = `${day.date} KST · 집계 상태를 확인할 수 없습니다. 완료로 간주하지 않습니다.`;
    else notice.textContent = `${day.date} KST · 점검 완료.`;
    if(typeof day?.reviewScope==='string'&&day.reviewScope.trim())notice.textContent+=' 검수 범위: '+day.reviewScope;
    if (skippedDays) notice.textContent += ' 날짜가 유효하지 않거나 중복된 기록은 표시에서 제외했습니다.';
    $('overview-title').textContent = platformName()+' · '+(selectedDate||'미선택')+' 검토 요약';
    renderKpis(day); renderVerdicts(day); renderMessages(day); renderCases(day); renderCountry(day); renderCountryAudit(day); renderIssues(day); renderHistory(); renderCoverage(day); renderFollowUps(day, 'report-followups'); renderKnowledge(day,'report-knowledge'); renderStats(day); renderReviewLog(day); updateViewContext();
  }
  $('staff-memo-title').textContent='AI에 피드백 메모';
  $('staff-memo-link').textContent='피드백 원장 열기';
  let memoSheetUrl = '';
  try { const u = new URL(text(meta.staffMemoUrl)); const gid=u.searchParams.get('gid')||u.hash.match(/gid=(\d+)/)?.[1]; if(u.protocol==='https:'&&u.hostname==='docs.google.com'&&/^\/spreadsheets\/d\/[A-Za-z0-9_-]+\/edit$/.test(u.pathname)&&/^\d+$/.test(gid||'')) memoSheetUrl=u.origin+u.pathname+'?gid='+gid+'#gid='+gid; } catch {}
  if(memoSheetUrl){$('staff-memo-link').href=memoSheetUrl;$('staff-memo-link').hidden=false;}
  const memos=Array.isArray(meta.staffMemos)?meta.staffMemos.filter(m=>m&&text(m.text)):[];
  if(memos.length){const list=node('ul','memo-list');memos.forEach(m=>{const li=node('li');li.append(node('span','memo-date',text(m.date)),node('p','',m.text),node('span','memo-state',text(m.status,'미반영')));list.append(li);});replace('staff-memo-list',list);}else replace('staff-memo-list',node('p','memo-empty','등록된 AI 피드백 없음'));
  $('staff-memo-copy').addEventListener('click',async()=>{
    const content=text($('staff-memo-input').value);const status=$('staff-memo-status');if(!content){status.textContent='AI에 전할 피드백을 입력해 주세요.';return;}if(!memoSheetUrl){status.textContent='피드백 원장 연결이 필요합니다.';return;}
    const date=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());const values=['memo-'+Date.now().toString(36),date,text($('staff-memo-author').value,'담당자'),content,'미반영','','','N'];const tsv=values.map(v=>'"'+(/^[=+@-]/.test(v)?"'"+v:v).replaceAll('"','""')+'"').join('\t');
    try{await navigator.clipboard.writeText(tsv);window.open(memoSheetUrl,'_blank','noopener,noreferrer');status.textContent='복사했습니다. 원장의 새 행에 붙여넣으면 공유 저장됩니다.';}catch{status.textContent='자동 복사가 되지 않았습니다. 피드백 원장을 열어 내용을 직접 입력해 주세요.';}
  });
  const title = text(meta.title, '상담 품질 감독'); $('dashboard-title').textContent = title; document.title = `${title} | Daily Review`;
  $('updated-at').textContent = timestamp(meta.updatedAt);
  const scheduleTime = (value, fallback) => typeof value === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? value : fallback;

  try {
    const url = new URL(text(meta.sheetUrl));
    if (url.protocol === 'https:' && url.hostname === 'docs.google.com' && /^\/spreadsheets\/d\/[A-Za-z0-9_-]+(?:\/|$)/.test(url.pathname) && !url.username && !url.password && !url.port) {
      // Only retain a workbook ID, not query tokens, sharing parameters or private fragments.
      const id = url.pathname.match(/^\/spreadsheets\/d\/([A-Za-z0-9_-]+)/)[1];
      $('sheet-link').href = `https://docs.google.com/spreadsheets/d/${id}/edit`;
      $('sheet-link').hidden = false; $('sheet-unavailable').hidden = true;
    }
  } catch { /* Missing or unsafe links stay unavailable. */ }
  dateInput.addEventListener('change', () => { selectedDate = dateValid(dateInput.value) ? dateInput.value : ''; render(); });
  $('previous-day').addEventListener('click', () => { const index = days.findIndex(day => day.date === selectedDate); if (index >= 0 && days[index + 1]) { selectedDate = days[index + 1].date; render(); } });
  $('next-day').addEventListener('click', () => { const index = days.findIndex(day => day.date === selectedDate); if (index > 0) { selectedDate = days[index - 1].date; render(); } });
  countryDefinitions.forEach(([code, label], index) => {
    const tab = node('button', '', label); tab.id = `tab-${code}`; tab.type = 'button'; tab.setAttribute('role', 'tab'); tab.setAttribute('aria-controls', 'country-panel');
    tab.addEventListener('click', () => { selectedCountry = code; renderCountry(days.find(day => day.date === selectedDate)); });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % countryDefinitions.length;
      else if (event.key === 'ArrowLeft') next = (index + countryDefinitions.length - 1) % countryDefinitions.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = countryDefinitions.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selectedCountry = countryDefinitions[next][0]; renderCountry(days.find(day => day.date === selectedDate)); $(`tab-${selectedCountry}`).focus();
    }); $('country-tabs').append(tab);
  });
  caseVerdicts.forEach(([key, label], index) => {
    const tab = node('button', '', label); tab.id = 'case-tab-' + key; tab.type = 'button'; tab.setAttribute('role','tab'); tab.setAttribute('aria-controls','case-panel');
    tab.addEventListener('click', () => { selectedCaseVerdict = key; selectedCaseIndex = 0; renderCases(days.find(day => day.date === selectedDate)); });
    tab.addEventListener('keydown', event => {
      let next; if(event.key==='ArrowRight')next=(index+1)%caseVerdicts.length;else if(event.key==='ArrowLeft')next=(index+caseVerdicts.length-1)%caseVerdicts.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=caseVerdicts.length-1;if(next===undefined)return;
      event.preventDefault();selectedCaseVerdict=caseVerdicts[next][0];selectedCaseIndex=0;renderCases(days.find(day => day.date === selectedDate));$('case-tab-'+selectedCaseVerdict).focus();
    }); $('case-tabs').append(tab);
  });
  $('case-previous').addEventListener('click', () => { if(selectedCaseIndex>0)selectedCaseIndex--;renderCases(days.find(day=>day.date===selectedDate)); });
  $('case-next').addEventListener('click', () => { selectedCaseIndex++;renderCases(days.find(day=>day.date===selectedDate)); });
  ['rooms', 'messages'].forEach((key, index) => {
    const activate = metric => { statsCountryMetric = metric; renderStatsCountries(days.find(day => day.date === selectedDate)); };
    $('stats-country-' + key).addEventListener('click', () => activate(key));
    $('stats-country-' + key).addEventListener('keydown', event => { let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - index;
      else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = 1;
      if (next === undefined) return; event.preventDefault(); const metric = ['rooms','messages'][next]; activate(metric); $('stats-country-' + metric).focus();
    });
  });
  viewIds.forEach((id,index)=>{const link=$('nav-'+id);link.addEventListener('click',event=>{event.preventDefault?.();navigateView(id);});link.addEventListener('keydown',event=>{let next;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(index+1)%viewIds.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(index+viewIds.length-1)%viewIds.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=viewIds.length-1;else if(event.key==='Enter'||event.key===' '){event.preventDefault?.();navigateView(id);return;}if(next!==undefined){event.preventDefault?.();$('nav-'+viewIds[next]).focus();}});});
  platformDefinitions.forEach(([id],index)=>{const link=$('nav-platform-'+id);link.addEventListener('click',event=>{event.preventDefault?.();navigateView(currentView,id);});link.addEventListener('keydown',event=>{let next;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(index+1)%platformDefinitions.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(index+platformDefinitions.length-1)%platformDefinitions.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=platformDefinitions.length-1;else if(event.key==='Enter'||event.key===' '){event.preventDefault?.();navigateView(currentView,id);return;}if(next!==undefined){event.preventDefault?.();$('nav-platform-'+platformDefinitions[next][0]).focus();}});});
  $('nav-home').addEventListener('click',event=>{event.preventDefault?.();navigateView('overview');});
  $('nav-toggle').addEventListener('click',()=>setMenuOpen($('sidebar-navigation').hidden));
  window.addEventListener?.('hashchange',()=>setView(window.location?.hash||'',true));
  window.addEventListener?.('popstate',()=>setView(window.location?.hash||'',true));
  window.addEventListener?.('resize',()=>{if(!mobileMenu())setMenuOpen(true);});
  setMenuOpen(!mobileMenu());setView(window.location?.hash||'');render();
})();
