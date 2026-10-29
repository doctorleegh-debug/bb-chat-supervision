/* Aggregate-only presentation. No requests, storage, analytics or transcript handling. */
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
  const seen = new Set();
  let skippedDays = 0;
  const days = (hasPayload && Array.isArray(raw.days) ? raw.days : []).filter(day => {
    if (!day || !dateValid(day.date) || seen.has(day.date)) { skippedDays++; return false; }
    seen.add(day.date); return true;
  }).sort((a, b) => b.date.localeCompare(a.date));
  let selectedDate = days[0]?.date || '';
  let selectedCountry = 'ALL';
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
  const statusLabel = day => day?.status === 'completed' ? '집계 완료' : day?.status === 'partial' ? '부분 집계' : '상태 확인 필요';
  const statusClass = day => day?.status === 'completed' ? 'complete' : 'partial';
  const empty = (title, detail) => {
    const box = node('div', 'empty-state'); box.append(node('strong', '', title));
    if (detail) box.append(node('small', '', detail)); return box;
  };
  const badge = day => node('span', `badge ${statusClass(day)}`, statusLabel(day));
  const row = (label, count) => {
    const item = node('div'); item.append(node('dt', '', label), node('dd', '', `${fmt(count)}건`)); return item;
  };
  function renderKpis(day) {
    if (!day) { replace('kpi-grid', empty('조회할 집계가 없습니다', '데이터가 게시되면 검토 대상과 메시지 집계를 표시합니다.')); return; }
    const items = [
      ['검토 대상 상담방', day.eligibleRooms, '개', '읽지 않음·대기 등 제외 기준 적용', ''],
      ['전체 메시지', day.messageCount, '건', '제공된 메시지 분류 전체 범위', 'teal'],
      ['확정 오류 상담', day.verdicts?.confirmedError, '개', '자료충돌·확인필요는 제외', 'red'],
      ['후속 확인 상담', verificationCount(day.verdicts), '개', '의심·부분답변누락·자료충돌·확인필요', 'amber']
    ];
    replace('kpi-grid', ...items.map(([label, value, unit, note, color]) => {
      const card = node('article', `kpi ${color}`); const figure = node('div', 'kpi-value', fmt(value));
      figure.append(node('small', '', unit)); card.append(node('h3', 'kpi-label', label), figure, node('p', 'kpi-note', note)); return card;
    }));
  }
  function renderVerdicts(day) {
    if (!day) { replace('verdict-chart', empty('판정 집계 대기', '데이터가 없는 상태를 0건 또는 적절로 해석하지 않습니다.')); return; }
    const values = day.verdicts || {}; const total = sumVerdicts(values);
    const chart = node('div', 'stacked-bar'); chart.setAttribute('role', 'img');
    chart.setAttribute('aria-label', `상담별 대표판정 합계 ${fmt(total)}개. ${verdicts.map(([key, label]) => `${label} ${fmt(values[key])}개`).join(', ')}. 상담별 한 가지 대표판정.`);
    if (total) verdicts.forEach(([key, label]) => {
      const value = number(values[key]); if (!value) return;
      const segment = node('span', `stacked-segment verdict-${key}`); segment.style.width = `${value / total * 100}%`; segment.title = `${label} ${fmt(value)}개`; chart.append(segment);
    });
    const legend = node('div', 'verdict-legend');
    verdicts.forEach(([key, label]) => {
      const item = node('div'); const name = node('div', 'legend-label'); const swatch = node('span', `swatch verdict-${key}`); swatch.setAttribute('aria-hidden', 'true');
      name.append(swatch, node('span', '', label)); const value = node('div', 'legend-value', fmt(values[key])); value.append(node('small', '', '개')); item.append(name, value); legend.append(item);
    });
    replace('verdict-chart', chart, legend, node('p', 'finding-total', total ? `상담 ${fmt(total)}개 대표판정 · 메시지 비율·직원 정확도 아님` : '등록된 상담 대표판정 0개 · 검토 완료 또는 오류 없음의 보증이 아닙니다.'));
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
      item.append(node('dt', 'message-label', label), track, node('dd', 'message-count', `${fmt(value)}건`)); list.append(item);
    });
    const matches = sum === total;
    const summary = node('p', `message-total${matches ? '' : ' is-warning'}`, `표시 분류 합계 ${fmt(sum)}건 / 전체 메시지 ${fmt(total)}건${matches ? ' · 합계 일치' : ` · 합계 불일치, 차이 ${fmt(Math.abs(sum - total))}건. 누락·중복·분류 범위를 확인하세요.`}`);
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
      result.rooms += number(item.rooms); result.messages += number(item.messages);
      verdicts.forEach(([key]) => { result.verdicts[key] = number(result.verdicts[key]) + number(item.verdicts?.[key]); }); return result;
    }, { name: countryDefinitions.find(([code]) => code === selectedCountry)[1], rooms: 0, messages: 0, verdicts: {} });
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
    [['상담방', country.rooms, '개'], ['메시지', country.messages, '건']].forEach(([label, count, unit]) => { const item = node('span', '', label); item.append(node('strong', '', `${fmt(count)}${unit}`)); metrics.append(item); });
    heading.append(node('h3', '', country.name), metrics);
    const bars = node('div', 'country-bars'); const max = Math.max(1, ...verdicts.map(([key]) => number(country.verdicts?.[key])));
    verdicts.forEach(([key, label]) => {
      const item = node('div', 'country-bar-row'); const track = node('div', 'mini-track'); track.setAttribute('aria-hidden', 'true');
      const fill = node('div', `mini-fill verdict-${key}`); fill.style.width = `${number(country.verdicts?.[key]) / max * 100}%`; track.append(fill);
      item.append(node('span', '', label), track, node('strong', '', `${fmt(country.verdicts?.[key])}개`)); bars.append(item);
    });
    panel.replaceChildren(heading, bars, node('p', 'helper bottom-note', '상담별 대표판정 비교 · 각 막대는 이 탭의 최댓값 기준 · 기타·미확인은 국적을 추정하지 않은 분류입니다.'));
  }
  function table(headers, caption) {
    const wrap = node('div', 'table-wrap'); wrap.tabIndex = 0; wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-label', `${caption}, 가로 스크롤 가능`);
    const element = node('table'); element.append(node('caption', '', caption));
    const head = node('thead'); const tr = node('tr');
    headers.forEach(([label, numeric]) => { const th = node('th', numeric ? 'number' : '', label); th.scope = 'col'; tr.append(th); });
    head.append(tr); const body = node('tbody'); element.append(head, body); wrap.append(element); return { wrap, body };
  }
  function renderIssues(day) {
    if (!day) { replace('issues-content', empty('이슈 집계 대기')); return; }
    const issues = Array.isArray(day.issues) ? day.issues.filter(item => item && typeof item === 'object') : [];
    if (!issues.length) { replace('issues-content', empty('등록된 이슈 분류가 없습니다', day.status === 'completed' ? '등록 목록 기준이며 모든 상담에 문제가 없다는 뜻은 아닙니다.' : '부분 집계 또는 상태 미확인 결과입니다. 이슈 없음으로 확정하지 않습니다.')); return; }
    const { wrap, body } = table([['분류', false], ['우선도', false], ['조치 상태', false], ['발견 건수', true]], '세부 이슈 집계 · 한 상담에 여러 건 가능. 상담별 대표판정과 합산하지 않습니다.');
    const allowedStatuses = new Set(['대기', '미확인', '확인중', '확인 중', '검토중', '검토 중', '조치중', '조치 중', '완료', '미조치', '조치 완료', '확인 필요', '보류']);
    issues.forEach(issue => {
      const tr = node('tr'); tr.append(node('td', '', text(issue.category, '미분류')));
      const severity = ['높음', '보통', '낮음'].includes(issue.severity) ? issue.severity : '미분류';
      tr.append(node('td', `severity ${severity === '높음' ? 'high' : severity === '보통' ? 'medium' : severity === '낮음' ? 'low' : ''}`, severity));
      tr.append(node('td', '', allowedStatuses.has(issue.status) ? issue.status : '상태 미분류'), node('td', 'number', `${fmt(issue.count)}건`)); body.append(tr);
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
      const statusCell = node('td'); statusCell.append(badge(day)); tr.append(dateCell, statusCell, node('td', 'number', `${fmt(day.eligibleRooms)}개`), node('td', 'number', `${fmt(day.messageCount)}건`), node('td', 'number', `${fmt(day.verdicts?.confirmedError)}개`), node('td', 'number', `${fmt(verificationCount(day.verdicts))}개`)); body.append(tr);
    }); replace('history-content', wrap);
  }
  function renderCoverage(day) {
    if (!day) { replace('coverage-content', empty('검토 범위 미제공', '대상 수, 제외 수, 첨부 검토 여부는 아직 확인할 수 없습니다.')); return; }
    const coverage = day.coverage || {}; const list = node('dl', 'coverage-list');
    [['후보 상담방', 'candidateRooms'], ['검토한 상담방', 'reviewedRooms'], ['읽지 않음 제외', 'excludedUnread'], ['대기 상태 제외', 'excludedWaiting'], ['마감 이후 제외', 'excludedAfterCutoff'], ['미검토 첨부', 'uninspectedAttachments']].forEach(([label, key]) => { const item = row(label, coverage[key]); item.lastChild.textContent = `${fmt(coverage[key])}${key === 'uninspectedAttachments' ? '건' : '개'}`; list.append(item); });
    const line = node('div', 'status-line'); line.append(badge(day), node('span', '', '수치가 아닌 게시된 상태 기준'));
    const children = [list, line];
    if (!day.coverage) children.push(node('p', 'helper bottom-note', '범위 상세가 제공되지 않았습니다. 누락된 숫자는 0으로 표시하지만 범위 검증 완료를 의미하지 않습니다.'));
    const notes = Array.isArray(coverage.notes) ? coverage.notes.filter(note => typeof note === 'string' && note.trim()) : [];
    if (notes.length) { const ul = node('ul', 'coverage-note'); notes.forEach(note => ul.append(node('li', '', note))); children.push(ul); }
    replace('coverage-content', ...children);
  }
  function render() {
    const day = days.find(item => item.date === selectedDate);
    dateInput.value = selectedDate;
    const index = days.findIndex(item => item.date === selectedDate);
    $('previous-day').disabled = index < 0 || index >= days.length - 1;
    $('next-day').disabled = index <= 0;
    $('day-status').textContent = day ? statusLabel(day) : '집계 대기';
    $('day-status').className = `badge ${day ? statusClass(day) : 'neutral'}`;
    $('cutoff-at').textContent = day ? timestamp(day.cutoffAt) : '미제공 · KST';
    const notice = $('data-notice'); notice.className = `notice${day && day.status !== 'completed' ? ' warning' : ''}`;
    if (!hasPayload) notice.textContent = '집계 데이터가 없거나 로드되지 않았습니다. data.js 게시 상태를 확인해 주세요. 예시 데이터는 표시하지 않습니다. 모든 시각은 KST입니다.';
    else if (!day) notice.textContent = selectedDate ? `${selectedDate} KST에 게시된 집계가 없습니다. 다른 날짜를 선택해 주세요.` : '아직 게시된 집계가 없습니다. 검토 결과가 게시되면 표시됩니다. 모든 시각은 KST입니다.';
    else if (day.status === 'partial') notice.textContent = `${day.date} KST · 부분 집계입니다. 미검토·누락 범위가 있을 수 있으며 전체 검토 완료 또는 오류 없음으로 해석하지 않습니다.`;
    else if (day.status !== 'completed') notice.textContent = `${day.date} KST · 집계 상태를 확인할 수 없습니다. 완료로 간주하지 않습니다.`;
    else notice.textContent = `${day.date} KST · 게시 상태는 집계 완료입니다. 표시된 검토 범위와 마감 이전 결과에 한정되며 전체 상담의 적절함을 보증하지 않습니다.`;
    if (day) notice.textContent += ' 누락된 숫자 항목은 0으로 표시합니다.';
    if (skippedDays) notice.textContent += ' 날짜가 유효하지 않거나 중복된 기록은 표시에서 제외했습니다.';
    $('overview-title').textContent = selectedDate ? `${selectedDate} 검토 요약` : '일일 검토 요약';
    renderKpis(day); renderVerdicts(day); renderMessages(day); renderCountry(day); renderIssues(day); renderHistory(); renderCoverage(day);
  }
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
  dateInput.disabled = !days.length;
  if (days.length) { dateInput.min = days[days.length - 1].date; dateInput.max = days[0].date; }
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
  render();
})();
