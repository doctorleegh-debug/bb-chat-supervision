window.SUPERVISION_DATA = {
  "meta": {
    "title": "뷰티블라썸 상담 품질 감독",
    "updatedAt": "2026-10-29T23:00:01.777Z",
    "timeZone": "Asia/Seoul",
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit",
    "schedule": {
      "weekday": "18:00",
      "weekend": "16:00"
    },
    "staffMemoUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit?gid=1239856870#gid=1239856870",
    "staffMemos": [
      {
        "date": "2026-10-30",
        "text": "답변누락은 담당자 답변이 전혀 없는 경우만. 응대한 기존 5건은 판정철회.",
        "status": "반영완료"
      },
      {
        "date": "2026-10-29",
        "text": "지도 단축 URL은 목적지가 같으면 패스.",
        "status": "반영완료"
      },
      {
        "date": "2026-10-29",
        "text": "가격은 수가표와 직접 대조하고, 일치하는 항목은 패스.",
        "status": "반영완료"
      },
      {
        "date": "2026-10-29",
        "text": "한국어 본문과 구체적인 자료 차이·누락만 표시.",
        "status": "반영완료"
      }
    ],
    "canonicalReportUrl": "https://doctorleegh-debug.github.io/bb-chat-supervision/"
  },
  "days": [
    {
      "date": "2026-10-29",
      "cutoffAt": "2026-10-29T09:00:35.027Z",
      "status": "completed",
      "eligibleRooms": 23,
      "messageCount": 121,
      "customerMessages": 30,
      "staffMessages": 48,
      "autoMessages": 19,
      "systemMessages": 21,
      "deletedMessages": 3,
      "verdicts": {
        "appropriate": 15,
        "needsVerification": 3,
        "sourceConflict": 5,
        "missingAnswer": 0,
        "suspectedError": 0,
        "confirmedError": 0
      },
      "countries": [
        {
          "code": "KR",
          "name": "한국",
          "rooms": 0,
          "messages": 0,
          "verdicts": {
            "appropriate": 0,
            "needsVerification": 0,
            "sourceConflict": 0,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        },
        {
          "code": "JP",
          "name": "일본",
          "rooms": 7,
          "messages": 32,
          "verdicts": {
            "appropriate": 6,
            "needsVerification": 0,
            "sourceConflict": 1,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        },
        {
          "code": "TH",
          "name": "태국",
          "rooms": 3,
          "messages": 25,
          "verdicts": {
            "appropriate": 2,
            "needsVerification": 0,
            "sourceConflict": 1,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        },
        {
          "code": "CN",
          "name": "중국",
          "rooms": 1,
          "messages": 4,
          "verdicts": {
            "appropriate": 0,
            "needsVerification": 1,
            "sourceConflict": 0,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        },
        {
          "code": "TW",
          "name": "대만",
          "rooms": 8,
          "messages": 29,
          "verdicts": {
            "appropriate": 5,
            "needsVerification": 1,
            "sourceConflict": 2,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        },
        {
          "code": "ZZ",
          "name": "기타·미확인",
          "rooms": 4,
          "messages": 31,
          "verdicts": {
            "appropriate": 2,
            "needsVerification": 1,
            "sourceConflict": 1,
            "missingAnswer": 0,
            "suspectedError": 0,
            "confirmedError": 0
          }
        }
      ],
      "issues": [
        {
          "category": "응답 완결성",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 3
        },
        {
          "category": "요금·상품 조건",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 3
        },
        {
          "category": "시술 안내·자료 대조",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 2
        },
        {
          "category": "예약·운영 확인",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 1
        }
      ],
      "coverage": {
        "candidateRooms": 24,
        "reviewedRooms": 23,
        "excludedUnread": 1,
        "excludedWaiting": 1,
        "excludedAfterCutoff": 0,
        "uninspectedAttachments": 0,
        "notes": [
          "전 국가 미필터 목록에서 전일 경계까지 확인. 새 미확인·대기 상담은 열지 않음.",
          "화면에 남은 기록을 검토했으며 삭제 표시의 원문은 복원·검증할 수 없음.",
          "병원 답변은 개별 직원 미확인. 자동안내는 문구·시스템 패턴에 따른 추정 분류.",
          "판정 분포는 상담별 대표판정. 확인필요·자료충돌은 직원 확정오류가 아님.",
          "제외 읽지않음과 대기는 같은 대상일 수 있어 합산하지 않음."
        ]
      },
      "casesComplete": true,
      "casesUpdatedAt": "2026-10-29T23:00:01.777Z",
      "cases": [
        {
          "id": "case-20261029-06",
          "verdict": "needsVerification",
          "country": "ZZ",
          "title": "chin·jawline·masseter 용어 혼동",
          "customerText": "I wanted to get Botox on three areas. Forehead since I have visible horizontal wrinkles, also when I smile I show my gums a lot so I was wondering if it was possible to get botox for that too. And finally, to define my jaw a little bit\n\nWhat about the price for all 3 areas?\n\nor it just applied to wrinkle botox?",
          "customerKo": "보톡스를 세 부위에 받고 싶어요. 이마에 가로주름이 뚜렷하고, 웃을 때 잇몸이 많이 보여서 그 부분도 보톡스가 가능한지 궁금해요. 마지막으로 턱선도 조금 더 또렷하게 만들고 싶어요.\n\n세 부위를 모두 하면 가격이 어떻게 되나요?\n\n아니면 주름 보톡스에만 적용되는 건가요?",
          "staffText": "For wrinkle Botox, we can only inject it into the specific areas where wrinkles appear. It’s different from chin Botox, as each treatment targets different concerns and muscle groups. Wrinkle Botox including (Forehead, Gabella, Crows Feet, Under the Eyes, Bunny Line, Chin). These are the part that wrinkle botox can choose.",
          "staffKo": "주름 보톡스는 주름이 나타나는 특정 부위에만 주사할 수 있어요. 각각 다른 고민과 근육군을 대상으로 하므로 턱끝 보톡스와는 달라요. 주름 보톡스로 선택할 수 있는 부위는 이마, 미간, 눈가, 눈밑, 콧등, 턱끝입니다.",
          "rationale": "주름 1부위 코어 42,900원은 자갈턱을 포함하지만 교근 코어 73,700원은 별도 사각턱 상품이다. chin을 주름 목록에 넣으면서 chin Botox와 다르다고 한 표현은 자갈턱과 교근 구분을 흐린다.",
          "evidence": "raw/10.md L10 list-A11\n| list-A11 | 보톡스 정가 | 주름 보톡스 | 1부위 · 코어 | 1부위 | 금액: 42,900원 | (이마, 미간, 눈가, 눈밑, 콧등, 자갈턱) | 확인 필요 |\n\nraw/10.md L22 list-A31\n| list-A31 | 보톡스 정가 | 사각턱 보톡스 | 코어 |  | 금액: 73,700원 |  | 확인 필요 |",
          "limit": ""
        },
        {
          "id": "case-20261029-17",
          "verdict": "needsVerification",
          "country": "TW",
          "title": "동반 할인 조건",
          "customerText": "직접 입력한 문의 없음 · 상품페이지 유입\n[2人起,再享9折]弘大_童顏秘訣_Beauty Blossom 麗朵除皺肉毒",
          "customerKo": "직접 입력한 문의 없음 · 상품페이지 유입\n[2인 이상, 추가 10% 할인] 홍대_동안 비결_Beauty Blossom 麗朵 주름 보톡스",
          "staffText": "您好，這邊發除皺肉毒相關優惠活動給您參考，有什麼問題可以再咨詢哦~",
          "staffKo": "주름 보톡스 관련 할인행사를 보내 드리니 참고해 주세요. 궁금한 점은 다시 문의해 주세요.",
          "rationale": "첨부14개 상품의 정가·행사가는 표와 일치한다. 연결 이벤트의 2인 이상 9折은 10% 추가할인인데 첨부에는 최대49%와 표 금액만 있다. 예컨대 국산 주름3부위68,000원에 추가9折이 적용되면 세전61,200원·세후67,320원이지만 동반·중복할인 적용을 답변에서 정하지 않았다.",
          "evidence": "raw/10.md L874 event-2026-09-11-R129\n| event-2026-09-11-R129 | 보톡스 | 주름보톡스 3부위 | 국산 |  | 정가: 120,000원 / VAT 전: 68,000원 / VAT 후 (최종): 74,800원 |  | 확인 필요 |\n\nraw/10.md L875 event-2026-09-11-R130\n| event-2026-09-11-R130 | 보톡스 | 주름보톡스 3부위 | 내성적은 코어톡스 |  | 정가: 160,000원 / VAT 전: 88,000원 / VAT 후 (최종): 96,800원 |  | 확인 필요 |\n\nraw/10.md L876 event-2026-09-11-R131\n| event-2026-09-11-R131 | 보톡스 | 주름보톡스 3부위 | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L877 event-2026-09-11-R132\n| event-2026-09-11-R132 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 국산 |  | 정가: 110,000원 / VAT 전: 59,000원 / VAT 후 (최종): 64,900원 |  | 확인 필요 |\n\nraw/10.md L878 event-2026-09-11-R133\n| event-2026-09-11-R133 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 코어 |  | 정가: 140,000원 / VAT 전: 79,000원 / VAT 후 (최종): 86,900원 |  | 확인 필요 |\n\nraw/10.md L879 event-2026-09-11-R134\n| event-2026-09-11-R134 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L880 event-2026-09-11-R135\n| event-2026-09-11-R135 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 코어톡스 |  | 정가: 250,000원 / VAT 전: 139,000원 / VAT 후 (최종): 152,900원 |  | 확인 필요 |\n\nraw/10.md L881 event-2026-09-11-R136\n| event-2026-09-11-R136 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 얼굴+목 2배 용량 |  | 정가: 360,000원 / VAT 전: 199,000원 / VAT 후 (최종): 218,900원 |  | 확인 필요 |\n\nraw/10.md L882 event-2026-09-11-R137\n| event-2026-09-11-R137 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 |  | 정가: 330,000원 / VAT 전: 179,000원 / VAT 후 (최종): 196,900원 |  | 확인 필요 |\n\nraw/10.md L883 event-2026-09-11-R138\n| event-2026-09-11-R138 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 2배 용량 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L884 event-2026-09-11-R139\n| event-2026-09-11-R139 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L885 event-2026-09-11-R140\n| event-2026-09-11-R140 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 2배용량 |  | 정가: 730,000원 / VAT 전: 399,000원 / VAT 후 (최종): 438,900원 |  | 확인 필요 |\n\nraw/10.md L886 event-2026-09-11-R141\n| event-2026-09-11-R141 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 스컬트라 1 vial |  | 정가: 1,440,000원 / VAT 전: 790,000원 / VAT 후 (최종): 869,000원 |  | 확인 필요 |\n\nraw/10.md L887 event-2026-09-11-R142\n| event-2026-09-11-R142 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 바디 스컬트라 5 vial |  | 정가: 5,820,000원 / VAT 전: 3,200,000원 / VAT 후 (최종): 3,520,000원 |  | 확인 필요 |",
          "limit": ""
        },
        {
          "id": "case-20261029-18",
          "verdict": "sourceConflict",
          "country": "JP",
          "title": "무제한 용량·브랜드 대응",
          "customerText": "직접 입력한 문의 없음 · 상품페이지 유입\nホンデ デザインスリムライン 肩フィラー、直角肩フィラー、スワンショルダーフィラー",
          "customerKo": "직접 입력한 문의 없음 · 상품페이지 유입\n홍대 디자인 슬림라인 어깨 필러·직각 어깨 필러·스완 숄더 필러",
          "staffText": "[문장형 답변 없음: 상품 안내 링크와 가격표 이미지를 보냄]",
          "staffKo": "링크·가격표 이미지 첨부만 있음. 별도 입력한 설명 문장 없음.",
          "rationale": "어깨24cc 벨라스트1,090,000·아띠에르1,390,000·리쥬비엘1,690,000원 및 눈밑1cc 아띠에르250,000·리쥬비엘300,000·벨로테로소프트/레스틸렌아이라이트 공통360,000원은 원본 G열과 일치한다. 눈밑은 4브랜드3가격의 오류가 아니라 두 수입제품이 한 가격군이다. 다만 시즌표 입술 B31/C31의18만원 대 G31의20만원, 리쥬비엘20만원 대 G32의22만원, 풀페이스 B56의129·149만원 대 G56/G57의155·175만원이 충돌한다. 첨부는 G열을 따랐다. 코 수입제품은 첨부 벨로테로소프트 대 원본 C42 레스틸렌소프트이며, 취소선 코 리쥬비엘550,000원 대 F41 560,000원(-10,000원), 어깨 아띠에르2,550,000원 대 F54 2,530,000원(+20,000원) 차이가 있다.",
          "evidence": "raw/17.md L7896–L7904 sheet-1248865534!F6:J6\nB6 | 시즌 이벤트 |  |\nC6 | 상세내용 |  |\nD6 | 수식어 |  |\nE6 | 정상 |  |\nF6 | 정가 |  |\nG6 | VAT 전 |  |\nH6 | VAT 후 (최종) |  |\nI6 | 표기정가 |  |\nJ6 | 표기엔드가(VAT 전) |  |\n\nraw/17.md L8033 sheet-1248865534!B31\nB31 | 스윗 입술필러 1cc (아띠에르 18, 리쥬비엘 20, 스웨덴 레스틸렌 키스 33) |  |\n\nraw/17.md L8056 sheet-1248865534!B34\nB34 | 내츄럴 애교필러 1cc (아띠에르 20, 리쥬비엘 22, 독일 벨로테로 소프트 33) |  |\n\nraw/17.md L8222 sheet-1248865534!B56\nB56 | 디자인 풀페이스 필러 (아띠에르 129, 리쥬비엘 149) [벨라스트 삭제] |  |\n\nraw/17.md L8231 sheet-1248865534!B57\nB57 | ㄴ(특수부위 포함 무제한 풀페이스 필러) |  |\n\nraw/17.md L8034 sheet-1248865534!C31\nC31 | 아띠에르 18 |  |\n\nraw/17.md L8037 sheet-1248865534!F31\nF31 | 360,000 | =ROUND(E31, -4) |\n\nraw/17.md L8038 sheet-1248865534!G31\nG31 | 200,000 |  |\n\nraw/17.md L8039 sheet-1248865534!H31\nH31 | 220,000 | =G31+(G31*10%) |\n\nraw/17.md L8042 sheet-1248865534!C32\nC32 | 리쥬비엘 20 |  |\n\nraw/17.md L8044 sheet-1248865534!F32\nF32 | 400,000 | =ROUND(E32, -4) |\n\nraw/17.md L8045 sheet-1248865534!G32\nG32 | 220,000 |  |\n\nraw/17.md L8046 sheet-1248865534!H32\nH32 | 242,000 | =G32+(G32*10%) |\n\nraw/17.md L8049 sheet-1248865534!C33\nC33 | 스웨덴 레스틸렌 키스 33 |  |\n\nraw/17.md L8051 sheet-1248865534!F33\nF33 | 640,000 | =ROUND(E33, -4) |\n\nraw/17.md L8052 sheet-1248865534!G33\nG33 | 350,000 |  |\n\nraw/17.md L8053 sheet-1248865534!H33\nH33 | 385,000 | =G33+(G33*10%) |\n\nraw/17.md L8057 sheet-1248865534!C34\nC34 | 아띠에르 20 |  |\n\nraw/17.md L8060 sheet-1248865534!F34\nF34 | 450,000 | =ROUND(E34, -4) |\n\nraw/17.md L8061 sheet-1248865534!G34\nG34 | 250,000 |  |\n\nraw/17.md L8062 sheet-1248865534!H34\nH34 | 275,000 | =G34+(G34*10%) |\n\nraw/17.md L8065 sheet-1248865534!C35\nC35 | 리쥬비엘 22 |  |\n\nraw/17.md L8067 sheet-1248865534!F35\nF35 | 490,000 | =ROUND(E35, -4) |\n\nraw/17.md L8068 sheet-1248865534!G35\nG35 | 270,000 |  |\n\nraw/17.md L8069 sheet-1248865534!H35\nH35 | 297,000 | =G35+(G35*10%) |\n\nraw/17.md L8072 sheet-1248865534!C36\nC36 | 스위스 벨로테로 소프트 33 |  |\n\nraw/17.md L8074 sheet-1248865534!F36\nF36 | 710,000 | =ROUND(E36, -4) |\n\nraw/17.md L8075 sheet-1248865534!G36\nG36 | 390,000 |  |\n\nraw/17.md L8076 sheet-1248865534!H36\nH36 | 429,000 | =G36+(G36*10%) |\n\nraw/17.md L8080 sheet-1248865534!C37\nC37 | 아띠에르  |  |\n\nraw/17.md L8082 sheet-1248865534!F37\nF37 | 450,000 | =ROUND(E37, -4) |\n\nraw/17.md L8083 sheet-1248865534!G37\nG37 | 250,000 |  |\n\nraw/17.md L8084 sheet-1248865534!H37\nH37 | 275,000 | =G37+(G37*10%) |\n\nraw/17.md L8087 sheet-1248865534!C38\nC38 | 리쥬비엘  |  |\n\nraw/17.md L8089 sheet-1248865534!F38\nF38 | 550,000 | =ROUND(E38, -4) |\n\nraw/17.md L8090 sheet-1248865534!G38\nG38 | 300,000 |  |\n\nraw/17.md L8091 sheet-1248865534!H38\nH38 | 330,000 | =G38+(G38*10%) |\n\nraw/17.md L8094 sheet-1248865534!C39\nC39 | 스위스 벨로테로 소프트 / 레스틸렌 아이라이트 |  |\n\nraw/17.md L8096 sheet-1248865534!F39\nF39 | 650,000 | =ROUND(E39, -4) |\n\nraw/17.md L8097 sheet-1248865534!G39\nG39 | 360,000 |  |\n\nraw/17.md L8098 sheet-1248865534!H39\nH39 | 396,000 | =G39+(G39*10%) |\n\nraw/17.md L8102 sheet-1248865534!C40\nC40 | 아띠에르  |  |\n\nraw/17.md L8104 sheet-1248865534!F40\nF40 | 490,000 | =ROUND(E40, -4) |\n\nraw/17.md L8105 sheet-1248865534!G40\nG40 | 270,000 |  |\n\nraw/17.md L8106 sheet-1248865534!H40\nH40 | 297,000 | =G40+(G40*10%) |\n\nraw/17.md L8109 sheet-1248865534!C41\nC41 | 리쥬비엘  |  |\n\nraw/17.md L8111 sheet-1248865534!F41\nF41 | 560,000 | =ROUND(E41, -4) |\n\nraw/17.md L8112 sheet-1248865534!G41\nG41 | 310,000 |  |\n\nraw/17.md L8113 sheet-1248865534!H41\nH41 | 341,000 | =G41+(G41*10%) |\n\nraw/17.md L8116 sheet-1248865534!C42\nC42 | 스웨덴 레스틸렌 소프트 |  |\n\nraw/17.md L8118 sheet-1248865534!F42\nF42 | 710,000 | =ROUND(E42, -4) |\n\nraw/17.md L8119 sheet-1248865534!G42\nG42 | 390,000 |  |\n\nraw/17.md L8120 sheet-1248865534!H42\nH42 | 429,000 | =G42+(G42*10%) |\n\nraw/17.md L8123 sheet-1248865534!C43\nC43 | 미쥬코 1줄 추가 |  |\n\nraw/17.md L8125 sheet-1248865534!F43\nF43 | 180,000 | =ROUND(E43, -4) |\n\nraw/17.md L8126 sheet-1248865534!G43\nG43 | 100,000 |  |\n\nraw/17.md L8127 sheet-1248865534!H43\nH43 | 110,000 | =G43+(G43*10%) |\n\nraw/17.md L8131 sheet-1248865534!C44\nC44 | 아띠에르 39 |  |\n\nraw/17.md L8134 sheet-1248865534!F44\nF44 | 710,000 | =ROUND(E44, -4) |\n\nraw/17.md L8135 sheet-1248865534!G44\nG44 | 390,000 |  |\n\nraw/17.md L8136 sheet-1248865534!H44\nH44 | 429,000 | =G44+(G44*10%) |\n\nraw/17.md L8139 sheet-1248865534!C45\nC45 | 리쥬비엘 45 |  |\n\nraw/17.md L8141 sheet-1248865534!F45\nF45 | 820,000 | =ROUND(E45, -4) |\n\nraw/17.md L8142 sheet-1248865534!G45\nG45 | 450,000 |  |\n\nraw/17.md L8143 sheet-1248865534!H45\nH45 | 495,000 | =G45+(G45*10%) |\n\nraw/17.md L8146 sheet-1248865534!C46\nC46 | 수입 99 |  |\n\nraw/17.md L8148 sheet-1248865534!F46\nF46 | 1,800,000 | =ROUND(E46, -4) |\n\nraw/17.md L8149 sheet-1248865534!G46\nG46 | 990,000 |  |\n\nraw/17.md L8150 sheet-1248865534!H46\nH46 | 1,089,000 | =G46+(G46*10%) |\n\nraw/17.md L8154 sheet-1248865534!C47\nC47 | 아띠에르 |  |\n\nraw/17.md L8157 sheet-1248865534!F47\nF47 | 1,070,000 | =ROUND(E47, -4) |\n\nraw/17.md L8158 sheet-1248865534!G47\nG47 | 590,000 |  |\n\nraw/17.md L8159 sheet-1248865534!H47\nH47 | 649,000 | =G47+(G47*10%) |\n\nraw/17.md L8162 sheet-1248865534!C48\nC48 | 리쥬비엘  |  |\n\nraw/17.md L8164 sheet-1248865534!F48\nF48 | 1,180,000 | =ROUND(E48, -4) |\n\nraw/17.md L8165 sheet-1248865534!G48\nG48 | 650,000 |  |\n\nraw/17.md L8166 sheet-1248865534!H48\nH48 | 715,000 | =G48+(G48*10%) |\n\nraw/17.md L8169 sheet-1248865534!C49\nC49 | 수입 |  |\n\nraw/17.md L8171 sheet-1248865534!F49\nF49 | 1,800,000 | =ROUND(E49, -4) |\n\nraw/17.md L8172 sheet-1248865534!G49\nG49 | 990,000 |  |\n\nraw/17.md L8173 sheet-1248865534!H49\nH49 | 1,089,000 | =G49+(G49*10%) |\n\nraw/17.md L8177 sheet-1248865534!C50\nC50 | 아띠에르  |  |\n\nraw/17.md L8180 sheet-1248865534!F50\nF50 | 760,000 | =ROUND(E50, -4) |\n\nraw/17.md L8181 sheet-1248865534!G50\nG50 | 420,000 |  |\n\nraw/17.md L8182 sheet-1248865534!H50\nH50 | 462,000 | =G50+(G50*10%) |\n\nraw/17.md L8185 sheet-1248865534!C51\nC51 | 리쥬비엘 |  |\n\nraw/17.md L8187 sheet-1248865534!F51\nF51 | 840,000 | =ROUND(E51, -4) |\n\nraw/17.md L8188 sheet-1248865534!G51\nG51 | 460,000 |  |\n\nraw/17.md L8189 sheet-1248865534!H51\nH51 | 506,000 | =G51+(G51*10%) |\n\nraw/17.md L8192 sheet-1248865534!C52\nC52 | 스위스 벨로테로 소프트 |  |\n\nraw/17.md L8194 sheet-1248865534!F52\nF52 | 1,360,000 | =ROUND(E52, -4) |\n\nraw/17.md L8195 sheet-1248865534!G52\nG52 | 750,000 |  |\n\nraw/17.md L8196 sheet-1248865534!H52\nH52 | 825,000 | =G52+(G52*10%) |\n\nraw/17.md L8200 sheet-1248865534!C53\nC53 | 벨라스트 109 |  |\n\nraw/17.md L8203 sheet-1248865534!F53\nF53 | 1,980,000 | =ROUND(E53, -4) |\n\nraw/17.md L8204 sheet-1248865534!G53\nG53 | 1,090,000 |  |\n\nraw/17.md L8205 sheet-1248865534!H53\nH53 | 1,199,000 | =G53+(G53*10%) |\n\nraw/17.md L8208 sheet-1248865534!C54\nC54 | 아띠에르 139 |  |\n\nraw/17.md L8210 sheet-1248865534!F54\nF54 | 2,530,000 | =ROUND(E54, -4) |\n\nraw/17.md L8211 sheet-1248865534!G54\nG54 | 1,390,000 |  |\n\nraw/17.md L8212 sheet-1248865534!H54\nH54 | 1,529,000 | =G54+(G54*10%) |\n\nraw/17.md L8215 sheet-1248865534!C55\nC55 | 리쥬비엘 169 |  |\n\nraw/17.md L8217 sheet-1248865534!F55\nF55 | 3,070,000 | =ROUND(E55, -4) |\n\nraw/17.md L8218 sheet-1248865534!G55\nG55 | 1,690,000 |  |\n\nraw/17.md L8219 sheet-1248865534!H55\nH55 | 1,859,000 | =G55+(G55*10%) |\n\nraw/17.md L8223 sheet-1248865534!C56\nC56 | 아띠에르  |  |\n\nraw/17.md L8226 sheet-1248865534!F56\nF56 | 2,820,000 | =ROUND(E56, -4) |\n\nraw/17.md L8227 sheet-1248865534!G56\nG56 | 1,550,000 |  |\n\nraw/17.md L8228 sheet-1248865534!H56\nH56 | 1,705,000 | =G56+(G56*10%) |\n\nraw/17.md L8232 sheet-1248865534!C57\nC57 | 리쥬비엘  |  |\n\nraw/17.md L8234 sheet-1248865534!F57\nF57 | 3,180,000 | =ROUND(E57, -4) |\n\nraw/17.md L8235 sheet-1248865534!G57\nG57 | 1,750,000 |  |\n\nraw/17.md L8236 sheet-1248865534!H57\nH57 | 1,925,000 | =G57+(G57*10%) |\n\nraw/17.md L8239 sheet-1248865534!C58\nC58 | 수입필러 |  |\n\nraw/17.md L8241 sheet-1248865534!F58\nF58 | 6,180,000 | =ROUND(E58, -4) |\n\nraw/17.md L8242 sheet-1248865534!G58\nG58 | 3,400,000 |  |\n\nraw/17.md L8243 sheet-1248865534!H58\nH58 | 3,740,000 | =G58+(G58*10%) |",
          "limit": ""
        },
        {
          "id": "case-20261029-21",
          "verdict": "needsVerification",
          "country": "CN",
          "title": "통화 단위",
          "customerText": "肉毒",
          "customerKo": "보톡스",
          "staffText": "您好，这边发肉毒相关优惠活动给您参考~[…]",
          "staffKo": "보톡스 관련 할인행사를 보내 드리니 참고해 주세요.",
          "rationale": "첨부 14개 항목의 금액 숫자는 수가표와 일치한다. 수가표는 KRW인데 중국어 이미지에는 元으로만 표기되어 있다. 예: 주름 3부위 68,000 KRW / 이미지 68,000元.",
          "evidence": "raw/10.md L874 event-2026-09-11-R129\n| event-2026-09-11-R129 | 보톡스 | 주름보톡스 3부위 | 국산 |  | 정가: 120,000원 / VAT 전: 68,000원 / VAT 후 (최종): 74,800원 |  | 확인 필요 |\n\nraw/10.md L875 event-2026-09-11-R130\n| event-2026-09-11-R130 | 보톡스 | 주름보톡스 3부위 | 내성적은 코어톡스 |  | 정가: 160,000원 / VAT 전: 88,000원 / VAT 후 (최종): 96,800원 |  | 확인 필요 |\n\nraw/10.md L876 event-2026-09-11-R131\n| event-2026-09-11-R131 | 보톡스 | 주름보톡스 3부위 | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L877 event-2026-09-11-R132\n| event-2026-09-11-R132 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 국산 |  | 정가: 110,000원 / VAT 전: 59,000원 / VAT 후 (최종): 64,900원 |  | 확인 필요 |\n\nraw/10.md L878 event-2026-09-11-R133\n| event-2026-09-11-R133 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 코어 |  | 정가: 140,000원 / VAT 전: 79,000원 / VAT 후 (최종): 86,900원 |  | 확인 필요 |\n\nraw/10.md L879 event-2026-09-11-R134\n| event-2026-09-11-R134 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L880 event-2026-09-11-R135\n| event-2026-09-11-R135 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 코어톡스 |  | 정가: 250,000원 / VAT 전: 139,000원 / VAT 후 (최종): 152,900원 |  | 확인 필요 |\n\nraw/10.md L881 event-2026-09-11-R136\n| event-2026-09-11-R136 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 얼굴+목 2배 용량 |  | 정가: 360,000원 / VAT 전: 199,000원 / VAT 후 (최종): 218,900원 |  | 확인 필요 |\n\nraw/10.md L882 event-2026-09-11-R137\n| event-2026-09-11-R137 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 |  | 정가: 330,000원 / VAT 전: 179,000원 / VAT 후 (최종): 196,900원 |  | 확인 필요 |\n\nraw/10.md L883 event-2026-09-11-R138\n| event-2026-09-11-R138 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 2배 용량 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L884 event-2026-09-11-R139\n| event-2026-09-11-R139 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L885 event-2026-09-11-R140\n| event-2026-09-11-R140 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 2배용량 |  | 정가: 730,000원 / VAT 전: 399,000원 / VAT 후 (최종): 438,900원 |  | 확인 필요 |\n\nraw/10.md L886 event-2026-09-11-R141\n| event-2026-09-11-R141 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 스컬트라 1 vial |  | 정가: 1,440,000원 / VAT 전: 790,000원 / VAT 후 (최종): 869,000원 |  | 확인 필요 |\n\nraw/10.md L887 event-2026-09-11-R142\n| event-2026-09-11-R142 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 바디 스컬트라 5 vial |  | 정가: 5,820,000원 / VAT 전: 3,200,000원 / VAT 후 (최종): 3,520,000원 |  | 확인 필요 |",
          "limit": ""
        },
        {
          "id": "case-20261029-22",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "포텐자 화장 시점 원문 충돌",
          "customerText": "請問施打後還能化妝嗎？",
          "customerKo": "시술 후에도 화장할 수 있나요?",
          "staffText": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
          "staffKo": "어떤 시술을 받으시는지에 따라 달라요. 골드 마이크로니들 시술이라면 회복기간이 2~3일 정도 있으니, 화장은 내일부터 하시는 것이 좋겠어요.",
          "rationale": "포텐자 주의사항은 다음 날부터 화장 가능, 시술 설명은 당일 가벼운 화장 가능으로 적혀 있다. 답변의 다음 날 권고는 주의사항과 일치하지만 두 자료의 화장 시점이 다르다.",
          "evidence": "raw/09.md L4331–4337\n• 시술 4시간 후부터 가볍게 세안 및 샤워가 가능하며, 다음 날부터 화장하셔도 됩니다. 당분간 스크럽, 각질 제거 및 자극적인 스킨케어 제품은 피해 주세요.\n\nraw/02.md L2413–2417\n- 시술 당일 가벼운 세안 및 화장, 샤워는 가능합니다.",
          "limit": ""
        },
        {
          "id": "case-20261029-25",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "관리시간 단위",
          "customerText": "請問施打後還能化妝嗎？",
          "customerKo": "시술 후에도 화장할 수 있나요?",
          "staffText": "這是價格表，您可以先參考一下～",
          "staffKo": "가격표이니 먼저 참고해 주세요.",
          "rationale": "포텐자9개 정가·세전가는 표와 일치한다. 엑소힐러5cc 조합은290,000원(세전)=319,000원(세후)이나 이미지 Cryo5분 대 표 R40의5초기호(5\")가 충돌한다. 5분=300초로 문자 그대로는295초 차이다. 바로 옆 필로가3cc 조합310,000원(세전)=341,000원(세후)은 원문5분기호(5')와 이미지5분이 일치한다.",
          "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |",
          "limit": ""
        },
        {
          "id": "case-20261029-33",
          "verdict": "sourceConflict",
          "country": "ZZ",
          "title": "이상·초과 및 정확한 경계금액",
          "customerText": "[개인정보 생략]\nDo you guys offer checking the skin?",
          "customerKo": "[개인정보 생략]\n피부 상태를 검사해 주시나요?",
          "staffText": "Hi~ we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.[표정 문자 생략]\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000\n[…]",
          "staffKo": "피부 상태를 자세히 살펴보는 3D 피부 분석(Eve-V Muse)을 제공하고 있어요.\n\n비용은 다음과 같아요.\n• 기본: 55,000원\n• 시술금액 300,000원 초과 시: 27,500원\n• 시술금액 500,000원 초과 시: 11,000원",
          "rationale": "진단비55,000·27,500·11,000원은 일치한다. 영어표는30만·50만·100만원 초과, 한국어 운영표는이상이고 정확히30만원은이상/이하가 겹친다. 정확히50만원에서 영어 기준27,500원 대 한국어11,000원(16,500원 차), 정확히100만원에서 영어11,000원 대 한국어무료(11,000원 차)로 경계가 충돌한다.",
          "evidence": "raw/08.md L236–L239 영어 피부진단 요금표\n• If you would like to have an Eve-V Muse 3D skin analysis, the standard fee is KRW 55,000. However, discounts are available based on your total treatment amount:\n[표정 문자 생략] Over KRW 300,000: KRW 27,500\n[표정 문자 생략] Over KRW 500,000: KRW 11,000\n[표정 문자 생략] Over KRW 1,000,000: Free of charge\n\nraw/07.md L494–L502 한국어 피부진단 요금표\n피부진단비용안내\n\n  **내용**\n\n100만원 이상 - 무료\n50만원 이상 - 11,000원\n30만원 이상 - 27,500원\n30만원 이하 – 55,000원\n※ 원문은 “30만원 이상”과 “30만원 이하”가 겹칩니다. 정확히 30만원인 경우의 진단비는 확인이 필요합니다.",
          "limit": ""
        },
        {
          "id": "case-20261029-37",
          "verdict": "sourceConflict",
          "country": "TH",
          "title": "상담만 1만원과 추후 시술예약 시 면제 경계",
          "customerText": "ราคาเพิ่มเติม",
          "customerKo": "추가 가격이요.",
          "staffText": "สำหรับค่าใช้จ่ายเพิ่มเติม หากคุณลูกค้าเข้ามารับคำปรึกษาเพียงอย่างเดียว จะมีค่าปรึกษา 10,000 วอนครับ แต่หากรับบริการทำหัตถการด้วย จะไม่มีค่าปรึกษาเพิ่มเติมนะครับ[표정 문자 생략][표정 문자 생략]",
          "staffKo": "추가 비용에 대해 말씀드리면, 상담만 받으러 오실 경우 상담료는 10,000원입니다. 시술도 받으시면 추가 상담료는 없습니다.",
          "rationale": "직원의 상담만10,000원·시술동반0원 안내는 FAQ와 일치한다. 다만 당일시술 없이 추후시술 예약만 하면 한국어 빠른문구는무료0원, 태국어 확정문구는 당일미시술10,000원으로10,000원 차이가 난다.",
          "evidence": "raw/06.md L1379–L1383 FAQ226\n### [질문:226] 오늘 염증주사 받고 상담 받았는데 왜 상담비 받나요? 피부진단은 무료 아닌가요 ?\n\n분류: 기타 문의사항\n\n상담만 받는 경우 상담비는 1만원으로 안내합니다. 약 처방이나 염증주사는 별도 기준이므로 실제 받은 진료 내역을 확인한 뒤 비용을 설명합니다.\n\nraw/11.md L134–L140 본문\n상담비 안내\n\n  **문구**\n\n    - 상담만 진행 시: 상담비 10,000원 발생\n\n    - 당일 시술 or 시술 예약 시: 상담비 무료\n\nraw/08.md L92 본문\n* หากเข้ามาปรึกษาอย่างเดียว โดยไม่ได้ทำหัตถการในวันนั้น จะมีค่าปรึกษา 10,000 วอน",
          "limit": ""
        },
        {
          "id": "case-20261029-42",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "관리시간 단위",
          "customerText": "想更詳細了解施術／手術內容",
          "customerKo": "시술／수술 내용을 더 자세히 알고 싶어요.",
          "staffText": "您好～[표정 문자 생략] 這是我們的價格表，您可以先參考一下～[표정 문자 생략]\n如果您需要提前預約，也可以隨時告訴我們，我們可以馬上幫您安排喔～[표정 문자 생략]",
          "staffKo": "저희 가격표를 보내 드리니 먼저 참고해 주세요.\n미리 예약하고 싶으시면 언제든 말씀해 주세요. 바로 도와드릴게요!",
          "rationale": "포텐자9개 정가·세전가는 표와 일치한다. 엑소힐러5cc 조합은290,000원(세전)=319,000원(세후)이나 이미지 Cryo5분 대 표 R40의5초기호(5\")가 충돌한다. 5분=300초로 문자 그대로는295초 차이다. 바로 옆 필로가3cc 조합310,000원(세전)=341,000원(세후)은 원문5분기호(5')와 이미지5분이 일치한다.",
          "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |",
          "limit": ""
        }
      ],
      "followUpAsOf": "2026-10-30",
      "followUpScope": "과거 보고 판정 정정",
      "followUps": [
        {
          "id": "issue-20261029-001",
          "firstReportedDate": "2026-10-29",
          "kind": "답변누락",
          "title": "3부위 패키지·합계 문의 충족 여부",
          "status": "판정철회",
          "checkedAt": "2026-10-29T23:00:01.732Z",
          "update": "담당자 답변이 있어 누락 판정 철회",
          "evidence": "기존 보고 원장에 담당자 응대 기록 확인"
        },
        {
          "id": "issue-20261029-003",
          "firstReportedDate": "2026-10-29",
          "kind": "답변누락",
          "title": "지정비 최소금액·적용상품 조건 누락",
          "status": "판정철회",
          "checkedAt": "2026-10-29T23:00:01.732Z",
          "update": "담당자 답변이 있어 누락 판정 철회",
          "evidence": "기존 보고 원장에 담당자 응대 기록 확인"
        },
        {
          "id": "issue-20261029-009",
          "firstReportedDate": "2026-10-29",
          "kind": "답변누락",
          "title": "색소성 병변 진료 선행 안내",
          "status": "판정철회",
          "checkedAt": "2026-10-29T23:00:01.732Z",
          "update": "담당자 답변이 있어 누락 판정 철회",
          "evidence": "기존 보고 원장에 담당자 응대 기록 확인"
        },
        {
          "id": "issue-20261029-010",
          "firstReportedDate": "2026-10-29",
          "kind": "답변누락",
          "title": "피부진단비 무료 구간 누락",
          "status": "판정철회",
          "checkedAt": "2026-10-29T23:00:01.732Z",
          "update": "담당자 답변이 있어 누락 판정 철회",
          "evidence": "기존 보고 원장에 담당자 응대 기록 확인"
        },
        {
          "id": "issue-20261029-013",
          "firstReportedDate": "2026-10-29",
          "kind": "답변누락",
          "title": "시술상세 설명 부분 누락",
          "status": "판정철회",
          "checkedAt": "2026-10-29T23:00:01.732Z",
          "update": "담당자 답변이 있어 누락 판정 철회",
          "evidence": "기존 보고 원장에 담당자 응대 기록 확인"
        }
      ],
      "followUpSummary": {
        "carried": 5,
        "resolved": 0,
        "unresolved": 0,
        "deferred": 0,
        "unchecked": 0,
        "withdrawn": 5
      },
      "definitionRevision": "NO_STAFF_REPLY_ONLY"
    }
  ]
};
