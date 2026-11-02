window.SUPERVISION_DATA = {
  "meta": {
    "title": "뷰티블라썸 상담 품질 감독",
    "updatedAt": "2026-11-02T08:34:55.803Z",
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
        "text": "답변누락은 담당자 답변이 전혀 없는 경우만.",
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
    "canonicalReportUrl": "https://doctorleegh-debug.github.io/bb-chat-supervision/",
    "platforms": [
      {
        "id": "gangnamunni",
        "name": "강남언니",
        "status": "report-partial",
        "checkedAt": "2026-11-02T02:43:15.784Z",
        "accountVerified": true,
        "inboxVerified": true,
        "auditDate": "2026-11-01",
        "summary": "2026-11-01 · 확인한 상담 32건 · 지적 3건",
        "limit": "대화 본문을 확보한 상담만 포함합니다."
      },
      {
        "id": "kakao-clinic",
        "name": "카카오톡(병원계정)",
        "status": "report-partial",
        "checkedAt": "2026-11-02T02:13:05.594Z",
        "accountVerified": true,
        "inboxVerified": true,
        "auditDate": "2026-11-01",
        "summary": "2026-11-01 · 대화 본문 미확보",
        "limit": "대화 본문을 확보한 상담만 포함합니다."
      },
      {
        "id": "babitalk",
        "name": "바비톡",
        "status": "report-partial",
        "checkedAt": "2026-11-02T02:11:19.904Z",
        "accountVerified": true,
        "inboxVerified": true,
        "auditDate": "2026-11-01",
        "summary": "2026-11-01 · 대화 본문 미확보",
        "limit": "대화 본문을 확보한 상담만 포함합니다."
      }
    ]
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
        "appropriate": 17,
        "needsVerification": 2,
        "sourceConflict": 4,
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
            "appropriate": 6,
            "needsVerification": 0,
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
          "category": "용어·통화 표기 확인",
          "severity": "보통",
          "status": "확인 필요",
          "count": 2,
          "summary": "구체적인 표기 차이"
        },
        {
          "category": "자료 간 표기·조건 충돌",
          "severity": "보통",
          "status": "자료 확인",
          "count": 5,
          "summary": "직원 확정 오류와 분리"
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
      "casesUpdatedAt": "2026-10-30T02:41:11.813Z",
      "cases": [
        {
          "id": "case-20261029-06",
          "verdict": "needsVerification",
          "country": "ZZ",
          "title": "chin·jawline·masseter 용어 혼동",
          "customerText": "I wanted to get Botox on three areas. Forehead since I have visible horizontal wrinkles, also when I smile I show my gums a lot so I was wondering if it was possible to get botox for that too. And finally, to define my jaw a little bit\n\nWhat about the price for all 3 areas?\n\nor it just applied to wrinkle botox?",
          "customerKo": "보톡스를 세 부위에 받고 싶어요. 이마에는 눈에 띄는 가로 주름이 있고, 웃을 때 잇몸이 많이 보여서 그 부분에도 보톡스를 맞을 수 있는지 궁금해요. 마지막으로 턱도 조금 더 또렷하게 만들고 싶어요.\n\n세 부위를 모두 하면 가격은 어떻게 되나요?\n\n아니면 주름 보톡스에만 적용되는 건가요?",
          "staffText": "Yes, absolutely! 😊 We can help you with all three areas: forehead Botox, gummy smile Botox, and jawline Botox.\n\nIf you’d like to make an appointment, please kindly fill out our booking form below. 💗 We look forward to welcoming you to our clinic! 🌸\n1. Full name:\n2. Date of birth:\n3. Nationality & Preferred language:\n4. Preferred date & time:\n\n✨ Botox Price List\n\n1. Wrinkle Botox (Forehead)\n- Domestic: ₩32,900\n- Coretox: ₩42,900\n- Xeomin: ₩77,000\n- Allergan: ₩99,000\n\n2. Gummy Smile Botox\n- Domestic: ₩46,900\n- Coretox: ₩60,000\n- Xeomin: ₩110,000\n- Allergan: ₩143,000\n\n3. Jaw Botox (Masseter Botox)\n- Domestic: ₩43,500\n- Coretox: ₩73,700\n- Xeomin: ₩143,000\n- Allergan: ₩197,000\n\n💗 Please note: The required dosage for jaw Botox may vary depending on the size of your masseter muscles. We will assess your muscle size and recommend the appropriate dosage during your consultation.\n\nFor wrinkle Botox, we can only inject it into the specific areas where wrinkles appear. It’s different from chin Botox, as each treatment targets different concerns and muscle groups. Wrinkle Botox including (Forehead, Gabella, Crows Feet, Under the Eyes, Bunny Line, Chin). These are the part that wrinkle botox can choose.",
          "staffKo": "네, 물론입니다! 😊 이마 보톡스, 거미스마일 보톡스, 턱선 보톡스, 세 부위 모두 도와드릴 수 있습니다.\n\n예약을 원하시면 아래 예약 양식을 작성해 주세요. 💗 저희 병원에서 뵙기를 기대하겠습니다! 🌸\n1. 성함:\n2. 생년월일:\n3. 국적 및 선호 언어:\n4. 희망 날짜 및 시간:\n\n✨ 보톡스 가격표\n\n1. 주름 보톡스(이마)\n- 국산: ₩32,900\n- 코어톡스: ₩42,900\n- 제오민: ₩77,000\n- 앨러간: ₩99,000\n\n2. 거미스마일 보톡스\n- 국산: ₩46,900\n- 코어톡스: ₩60,000\n- 제오민: ₩110,000\n- 앨러간: ₩143,000\n\n3. 턱 보톡스(교근 보톡스)\n- 국산: ₩43,500\n- 코어톡스: ₩73,700\n- 제오민: ₩143,000\n- 앨러간: ₩197,000\n\n💗 참고해 주세요: 턱 보톡스에 필요한 용량은 교근의 크기에 따라 달라질 수 있습니다. 상담 시 근육 크기를 확인하고 적절한 용량을 권해 드리겠습니다.\n\n주름 보톡스는 주름이 생기는 특정 부위에만 주사할 수 있습니다. 각 시술이 서로 다른 고민과 근육군을 대상으로 하므로 chin 보톡스와는 다릅니다. 주름 보톡스에는 (이마, 미간(Gabella), 눈가 주름, 눈 밑, 콧등 주름, Chin)이 포함됩니다. 이 부위들이 주름 보톡스로 선택할 수 있는 부위입니다.",
          "rationale": "표기 불일치: 담당자는 chin을 주름 보톡스와 다르다고 설명한 뒤 주름 부위 목록에 다시 Chin을 넣었다. 제공 자료는 자갈턱(mentalis)과 사각턱(masseter)을 별도 상품으로 구분하며, 안내 금액은 수가표와 일치한다.",
          "evidence": "raw/10.md L10 list-A11\n| list-A11 | 보톡스 정가 | 주름 보톡스 | 1부위 · 코어 | 1부위 | 금액: 42,900원 | (이마, 미간, 눈가, 눈밑, 콧등, 자갈턱) | 확인 필요 |\n\nraw/10.md L22 list-A31\n| list-A31 | 보톡스 정가 | 사각턱 보톡스 | 코어 |  | 금액: 73,700원 |  | 확인 필요 |\n적용 규칙: TERM-01, PRICE-01",
          "limit": "",
          "procedure": "보톡스(이마·거미스마일·턱)",
          "questionCategory": "시술 부위·가격·보톡스 종류 문의",
          "quoteScopeNote": "보톡스 세 부위 문의부터 주름 보톡스 적용 범위 답변까지의 관련 메시지 전체입니다. 각 메시지를 분리하고 중간의 이미지 전송은 본문과 구분합니다. 원문의 chin·Chin은 의미를 임의 확정하지 않고 번역에도 표기를 남겼습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "I wanted to get Botox on three areas. Forehead since I have visible horizontal wrinkles, also when I smile I show my gums a lot so I was wondering if it was possible to get botox for that too. And finally, to define my jaw a little bit",
              "ko": "보톡스를 세 부위에 받고 싶어요. 이마에는 눈에 띄는 가로 주름이 있고, 웃을 때 잇몸이 많이 보여서 그 부분에도 보톡스를 맞을 수 있는지 궁금해요. 마지막으로 턱도 조금 더 또렷하게 만들고 싶어요.",
              "kind": "text"
            },
            {
              "original": "What about the price for all 3 areas?",
              "ko": "세 부위를 모두 하면 가격은 어떻게 되나요?",
              "kind": "text"
            },
            {
              "original": "or it just applied to wrinkle botox?",
              "ko": "아니면 주름 보톡스에만 적용되는 건가요?",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "Yes, absolutely! 😊 We can help you with all three areas: forehead Botox, gummy smile Botox, and jawline Botox.\n\nIf you’d like to make an appointment, please kindly fill out our booking form below. 💗 We look forward to welcoming you to our clinic! 🌸\n1. Full name:\n2. Date of birth:\n3. Nationality & Preferred language:\n4. Preferred date & time:",
              "ko": "네, 물론입니다! 😊 이마 보톡스, 거미스마일 보톡스, 턱선 보톡스, 세 부위 모두 도와드릴 수 있습니다.\n\n예약을 원하시면 아래 예약 양식을 작성해 주세요. 💗 저희 병원에서 뵙기를 기대하겠습니다! 🌸\n1. 성함:\n2. 생년월일:\n3. 국적 및 선호 언어:\n4. 희망 날짜 및 시간:",
              "kind": "text"
            },
            {
              "original": "✨ Botox Price List\n\n1. Wrinkle Botox (Forehead)\n- Domestic: ₩32,900\n- Coretox: ₩42,900\n- Xeomin: ₩77,000\n- Allergan: ₩99,000\n\n2. Gummy Smile Botox\n- Domestic: ₩46,900\n- Coretox: ₩60,000\n- Xeomin: ₩110,000\n- Allergan: ₩143,000\n\n3. Jaw Botox (Masseter Botox)\n- Domestic: ₩43,500\n- Coretox: ₩73,700\n- Xeomin: ₩143,000\n- Allergan: ₩197,000\n\n💗 Please note: The required dosage for jaw Botox may vary depending on the size of your masseter muscles. We will assess your muscle size and recommend the appropriate dosage during your consultation.",
              "ko": "✨ 보톡스 가격표\n\n1. 주름 보톡스(이마)\n- 국산: ₩32,900\n- 코어톡스: ₩42,900\n- 제오민: ₩77,000\n- 앨러간: ₩99,000\n\n2. 거미스마일 보톡스\n- 국산: ₩46,900\n- 코어톡스: ₩60,000\n- 제오민: ₩110,000\n- 앨러간: ₩143,000\n\n3. 턱 보톡스(교근 보톡스)\n- 국산: ₩43,500\n- 코어톡스: ₩73,700\n- 제오민: ₩143,000\n- 앨러간: ₩197,000\n\n💗 참고해 주세요: 턱 보톡스에 필요한 용량은 교근의 크기에 따라 달라질 수 있습니다. 상담 시 근육 크기를 확인하고 적절한 용량을 권해 드리겠습니다.",
              "kind": "text"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            },
            {
              "original": "For wrinkle Botox, we can only inject it into the specific areas where wrinkles appear. It’s different from chin Botox, as each treatment targets different concerns and muscle groups. Wrinkle Botox including (Forehead, Gabella, Crows Feet, Under the Eyes, Bunny Line, Chin). These are the part that wrinkle botox can choose.",
              "ko": "주름 보톡스는 주름이 생기는 특정 부위에만 주사할 수 있습니다. 각 시술이 서로 다른 고민과 근육군을 대상으로 하므로 chin 보톡스와는 다릅니다. 주름 보톡스에는 (이마, 미간(Gabella), 눈가 주름, 눈 밑, 콧등 주름, Chin)이 포함됩니다. 이 부위들이 주름 보톡스로 선택할 수 있는 부위입니다.",
              "kind": "text"
            }
          ]
        },
        {
          "id": "case-20261029-18",
          "verdict": "appropriate",
          "country": "JP",
          "title": "어깨필러 이벤트 안내",
          "customerText": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\nホンデ デザインスリムライン 肩フィラー、直角肩フィラー、スワンショルダーフィラー",
          "customerKo": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\n홍대 디자인 슬림라인 어깨 필러, 직각 어깨 필러, 스완 숄더 필러",
          "staffText": "ご連絡ありがとうございます🌸\nフィラーは気になる部分へボリュームを追加する施術です！\nご相談はお気軽にどうぞ😊\n\nこちらのイベントもご覧ください🙇✨\n\nhttps://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
          "staffKo": "연락해 주셔서 감사합니다🌸\n필러는 신경 쓰이는 부위에 볼륨을 더하는 시술입니다!\n편하게 상담해 주세요😊\n\n이 이벤트도 확인해 주세요🙇✨\n\nhttps://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
          "rationale": "담당자는 필러가 볼륨이 부족한 부위에 주입해 입체감을 살리는 시술이라고 답했고 가이드 02의 필러 설명과 같다. 가격은 말하지 않고 이벤트 페이지 링크와 이미지를 보냈다.",
          "evidence": "raw/02.md L769 필러 정의",
          "limit": "",
          "procedure": "어깨 필러",
          "questionCategory": "이벤트·가격",
          "quoteScopeNote": "수집본에 고객이 직접 작성한 메시지는 없습니다. 아래 유입 정보는 시스템이 기록한 상품페이지 맥락이며 고객 발언이 아닙니다. 검토 대상은 담당자가 보낸 링크와 첨부 가격표의 입술·풀페이스 필러 표기입니다. 유입 시술과 검토 자료의 부위를 동일시하지 않습니다. 병원의 공개 이벤트 링크는 일반 게시판 조회 주소이므로 매개변수까지 원문 그대로 보존했습니다. 첨부 내용은 새 문장으로 재구성하지 않았습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\nホンデ デザインスリムライン 肩フィラー、直角肩フィラー、スワンショルダーフィラー",
              "ko": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\n홍대 디자인 슬림라인 어깨 필러, 직각 어깨 필러, 스완 숄더 필러",
              "kind": "context"
            }
          ],
          "staffMessages": [
            {
              "original": "ご連絡ありがとうございます🌸\nフィラーは気になる部分へボリュームを追加する施術です！\nご相談はお気軽にどうぞ😊\n\nこちらのイベントもご覧ください🙇✨",
              "ko": "연락해 주셔서 감사합니다🌸\n필러는 신경 쓰이는 부위에 볼륨을 더하는 시술입니다!\n편하게 상담해 주세요😊\n\n이 이벤트도 확인해 주세요🙇✨",
              "kind": "text"
            },
            {
              "kind": "linkOnly",
              "original": "https://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
              "ko": "https://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            }
          ]
        },
        {
          "id": "case-20261029-21",
          "verdict": "needsVerification",
          "country": "CN",
          "title": "통화 단위",
          "customerText": "肉毒",
          "customerKo": "보톡스",
          "staffText": "您好，这边发肉毒相关优惠活动给您参考~方便的话可以添加我们的微信，以便后续咨询和预约哦~ vx: Beautyblossom00",
          "staffKo": "안녕하세요, 참고하실 수 있도록 보톡스 관련 할인 이벤트를 보내드립니다~괜찮으시면 이후 상담과 예약을 위해 저희 위챗을 추가해 주세요~ vx: Beautyblossom00",
          "rationale": "표기 불일치: 제공 수가표는 KRW이며 안내 이미지의 통화는 元으로 적혀 있다. 주름 보톡스 3부위 등의 금액 숫자와 VAT 10% 별도 조건은 제공 표와 일치한다.",
          "evidence": "raw/10.md L874 event-2026-09-11-R129\n| event-2026-09-11-R129 | 보톡스 | 주름보톡스 3부위 | 국산 |  | 정가: 120,000원 / VAT 전: 68,000원 / VAT 후 (최종): 74,800원 |  | 확인 필요 |\n\nraw/10.md L875 event-2026-09-11-R130\n| event-2026-09-11-R130 | 보톡스 | 주름보톡스 3부위 | 내성적은 코어톡스 |  | 정가: 160,000원 / VAT 전: 88,000원 / VAT 후 (최종): 96,800원 |  | 확인 필요 |\n\nraw/10.md L876 event-2026-09-11-R131\n| event-2026-09-11-R131 | 보톡스 | 주름보톡스 3부위 | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L877 event-2026-09-11-R132\n| event-2026-09-11-R132 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 국산 |  | 정가: 110,000원 / VAT 전: 59,000원 / VAT 후 (최종): 64,900원 |  | 확인 필요 |\n\nraw/10.md L878 event-2026-09-11-R133\n| event-2026-09-11-R133 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 코어 |  | 정가: 140,000원 / VAT 전: 79,000원 / VAT 후 (최종): 86,900원 |  | 확인 필요 |\n\nraw/10.md L879 event-2026-09-11-R134\n| event-2026-09-11-R134 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L880 event-2026-09-11-R135\n| event-2026-09-11-R135 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 코어톡스 |  | 정가: 250,000원 / VAT 전: 139,000원 / VAT 후 (최종): 152,900원 |  | 확인 필요 |\n\nraw/10.md L881 event-2026-09-11-R136\n| event-2026-09-11-R136 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 얼굴+목 2배 용량 |  | 정가: 360,000원 / VAT 전: 199,000원 / VAT 후 (최종): 218,900원 |  | 확인 필요 |\n\nraw/10.md L882 event-2026-09-11-R137\n| event-2026-09-11-R137 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 |  | 정가: 330,000원 / VAT 전: 179,000원 / VAT 후 (최종): 196,900원 |  | 확인 필요 |\n\nraw/10.md L883 event-2026-09-11-R138\n| event-2026-09-11-R138 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 2배 용량 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L884 event-2026-09-11-R139\n| event-2026-09-11-R139 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L885 event-2026-09-11-R140\n| event-2026-09-11-R140 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 2배용량 |  | 정가: 730,000원 / VAT 전: 399,000원 / VAT 후 (최종): 438,900원 |  | 확인 필요 |\n\nraw/10.md L886 event-2026-09-11-R141\n| event-2026-09-11-R141 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 스컬트라 1 vial |  | 정가: 1,440,000원 / VAT 전: 790,000원 / VAT 후 (최종): 869,000원 |  | 확인 필요 |\n\nraw/10.md L887 event-2026-09-11-R142\n| event-2026-09-11-R142 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 바디 스컬트라 5 vial |  | 정가: 5,820,000원 / VAT 전: 3,200,000원 / VAT 후 (최종): 3,520,000원 |  | 확인 필요 |\n적용 규칙: CURR-01, PRICE-01",
          "limit": "",
          "procedure": "보톡스(코어톡스 이벤트 유입)",
          "questionCategory": "이벤트 문의·보톡스 안내",
          "quoteScopeNote": "고객의 직접 문의 본문은 보톡스라는 단어입니다. 통화 표기 발견은 첨부 가격표에 관한 것으로, 담당자의 문장에 금액이 있는 것처럼 제시하지 않습니다. 담당자가 실제 입력한 문장과 이미지 전송을 나누어 표시합니다. 위챗 표기는 병원의 공식 상담용 계정으로 원문을 유지합니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "肉毒",
              "ko": "보톡스",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "您好，这边发肉毒相关优惠活动给您参考~方便的话可以添加我们的微信，以便后续咨询和预约哦~ vx: Beautyblossom00",
              "ko": "안녕하세요, 참고하실 수 있도록 보톡스 관련 할인 이벤트를 보내드립니다~괜찮으시면 이후 상담과 예약을 위해 저희 위챗을 추가해 주세요~ vx: Beautyblossom00",
              "kind": "text"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            }
          ]
        },
        {
          "id": "case-20261029-22",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "포텐자 화장 시점 원문 충돌",
          "customerText": "請問施打後還能化妝嗎？",
          "customerKo": "시술 후에도 화장할 수 있나요?",
          "staffText": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
          "staffKo": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
          "rationale": "담당자의 다음날 화장 안내는 시술 후 주의사항과 일치한다. 시술 설명에는 당일 가벼운 화장이 가능하다고 적혀 있어 제공 자료의 안내 시점이 서로 다르다.",
          "evidence": "raw/09.md L4331–4337\n• 시술 4시간 후부터 가볍게 세안 및 샤워가 가능하며, 다음 날부터 화장하셔도 됩니다. 당분간 스크럽, 각질 제거 및 자극적인 스킨케어 제품은 피해 주세요.\n\nraw/02.md L2413–2417\n- 시술 당일 가벼운 세안 및 화장, 샤워는 가능합니다.\n적용 규칙: SOURCE-01",
          "limit": "",
          "procedure": "포텐자(황금미세침)",
          "questionCategory": "시술 후 화장·회복 기간 문의",
          "quoteScopeNote": "화장 가능 시점 질문과 그에 대한 담당자 답변의 원문 전체입니다. 예약·통역 문의는 이 발견과 별개라 포함하지 않습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "請問施打後還能化妝嗎？",
              "ko": "시술 후에도 화장할 수 있나요?",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
              "ko": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
              "kind": "text"
            }
          ]
        },
        {
          "id": "case-20261029-25",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "관리시간 단위",
          "customerText": "請問施打後還能化妝嗎？",
          "customerKo": "시술 후에도 화장할 수 있나요?",
          "staffText": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦\n\n這是價格表，您可以先參考一下～",
          "staffKo": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.\n\n가격표이니 우선 참고해 주세요～",
          "rationale": "엑소힐러 5cc 조합의 안내 금액은 제공 표의 세전 290,000원·VAT 포함 319,000원과 일치한다. 관리시간은 안내 이미지에 크라이오 5분, 제공 표에 5\"로 적혀 있어 표기가 다르다.",
          "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |\n적용 규칙: FORMAT-01, PRICE-01",
          "limit": "",
          "procedure": "포텐자·엑소힐러 조합(가격표 검토)",
          "questionCategory": "시술 후 화장 문의·가격표 안내",
          "quoteScopeNote": "고객이 관리시간을 직접 질문한 기록은 없습니다. 고객의 실제 직전 질문은 시술 후 화장에 관한 것이며, 그 질문과 답변을 맥락으로 함께 표시합니다. 이 사례의 관리시간 단위 발견은 이어서 전송한 가격표 이미지와 기준표를 대조한 것으로, 화장 질문의 문장 답변에서 발견한 오류가 아닙니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "請問施打後還能化妝嗎？",
              "ko": "시술 후에도 화장할 수 있나요?",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
              "ko": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
              "kind": "text"
            },
            {
              "original": "這是價格表，您可以先參考一下～",
              "ko": "가격표이니 우선 참고해 주세요～",
              "kind": "text"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            }
          ]
        },
        {
          "id": "case-20261029-33",
          "verdict": "sourceConflict",
          "country": "ZZ",
          "title": "이상·초과 및 정확한 경계금액",
          "customerText": "[개인정보 가림]\nDo you guys offer checking the skin?",
          "customerKo": "[개인정보 가림]\n피부 검사도 제공하시나요?",
          "staffText": "Hi~ we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.💕\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000\n\nJust to clarify, we are a treatment-focused dermatology clinic, so our consultations are designed to recommend the most suitable in-clinic treatments based on your skin condition, rather than creating a personalized daily skincare routine. The 3D Skin Analysis provides a detailed assessment of your skin, and based on the results, our consultants will recommend the most suitable treatments for concerns such as uneven skin tone, dryness, fine lines, and early signs of aging.  We can also recommend skincare products available at our clinic to complement your treatments, but we do not provide personalized daily skincare plans.✨",
          "staffKo": "안녕하세요~ 저희는 피부 상태를 자세히 평가하기 위한 3D 피부 분석(Eve-V Muse)을 제공합니다.💕\n\n가격은 다음과 같습니다:\n* 기본: ₩55,000\n* 시술 금액이 ₩300,000을 초과하면 ₩27,500\n* 시술 금액이 ₩500,000을 초과하면 ₩11,000\n\n명확히 말씀드리면, 저희는 시술 중심의 피부과 병원이므로 상담은 개인별 일상 스킨케어 루틴을 짜 드리는 것보다는 피부 상태에 따라 가장 적합한 원내 시술을 추천하는 데 목적이 있습니다. 3D 피부 분석으로 피부를 자세히 평가하며, 그 결과에 따라 상담 담당자가 고르지 않은 피부 톤, 건조함, 잔주름, 초기 노화 징후 등의 고민에 가장 적합한 시술을 추천해 드립니다.  시술을 보완할 수 있도록 병원에서 판매하는 스킨케어 제품도 추천해 드릴 수 있지만, 개인별 일상 스킨케어 계획을 제공하지는 않습니다.✨",
          "rationale": "담당자의 피부 분석비 기본 55,000원·30만 원 초과 27,500원·50만 원 초과 11,000원 안내는 영문 가이드와 일치한다. 한국어 표는 50만 원 이상 11,000원·100만 원 이상 무료로 적혀 있어 경계금액 조건이 다르다.",
          "evidence": "raw/08.md L236–L239 영어 피부진단 요금표\n• If you would like to have an Eve-V Muse 3D skin analysis, the standard fee is KRW 55,000. However, discounts are available based on your total treatment amount:\n✔️ Over KRW 300,000: KRW 27,500\n✔️ Over KRW 500,000: KRW 11,000\n✔️ Over KRW 1,000,000: Free of charge\n\nraw/07.md L494–L502 한국어 피부진단 요금표\n피부진단비용안내\n\n  **내용**\n\n100만원 이상 - 무료\n50만원 이상 - 11,000원\n30만원 이상 - 27,500원\n30만원 이하 – 55,000원\n※ 원문은 “30만원 이상”과 “30만원 이하”가 겹칩니다. 정확히 30만원인 경우의 진단비는 확인이 필요합니다.\n적용 규칙: SOURCE-01",
          "limit": "",
          "procedure": "3D 피부진단(Eve-V Muse)",
          "questionCategory": "피부 검사 가능 여부·진단 비용 안내",
          "quoteScopeNote": "고객의 피부 검사 문의와 담당자의 가격·상담 범위 답변 전체입니다. 고객 이름으로 쓰인 첫 이니셜 한 글자만 가렸고 줄바꿈은 보존했습니다. 과거 시술·피부 상태 대화는 이 질문 본문에 합치지 않았습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "[개인정보 가림]\nDo you guys offer checking the skin?",
              "ko": "[개인정보 가림]\n피부 검사도 제공하시나요?",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "Hi~ we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.💕\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000\n\nJust to clarify, we are a treatment-focused dermatology clinic, so our consultations are designed to recommend the most suitable in-clinic treatments based on your skin condition, rather than creating a personalized daily skincare routine. The 3D Skin Analysis provides a detailed assessment of your skin, and based on the results, our consultants will recommend the most suitable treatments for concerns such as uneven skin tone, dryness, fine lines, and early signs of aging.  We can also recommend skincare products available at our clinic to complement your treatments, but we do not provide personalized daily skincare plans.✨",
              "ko": "안녕하세요~ 저희는 피부 상태를 자세히 평가하기 위한 3D 피부 분석(Eve-V Muse)을 제공합니다.💕\n\n가격은 다음과 같습니다:\n* 기본: ₩55,000\n* 시술 금액이 ₩300,000을 초과하면 ₩27,500\n* 시술 금액이 ₩500,000을 초과하면 ₩11,000\n\n명확히 말씀드리면, 저희는 시술 중심의 피부과 병원이므로 상담은 개인별 일상 스킨케어 루틴을 짜 드리는 것보다는 피부 상태에 따라 가장 적합한 원내 시술을 추천하는 데 목적이 있습니다. 3D 피부 분석으로 피부를 자세히 평가하며, 그 결과에 따라 상담 담당자가 고르지 않은 피부 톤, 건조함, 잔주름, 초기 노화 징후 등의 고민에 가장 적합한 시술을 추천해 드립니다.  시술을 보완할 수 있도록 병원에서 판매하는 스킨케어 제품도 추천해 드릴 수 있지만, 개인별 일상 스킨케어 계획을 제공하지는 않습니다.✨",
              "kind": "text"
            }
          ]
        },
        {
          "id": "case-20261029-37",
          "verdict": "sourceConflict",
          "country": "TH",
          "title": "상담만 1만원과 추후 시술예약 시 면제 경계",
          "customerText": "ราคาเพิ่มเติม",
          "customerKo": "추가 비용",
          "staffText": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏\n\nสำหรับค่าใช้จ่ายเพิ่มเติม หากคุณลูกค้าเข้ามารับคำปรึกษาเพียงอย่างเดียว จะมีค่าปรึกษา 10,000 วอนครับ แต่หากรับบริการทำหัตถการด้วย จะไม่มีค่าปรึกษาเพิ่มเติมนะครับ😊🌸",
          "staffKo": "안녕하세요. 현재 병원에서는 사진에 나온 것과 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으시면 라인을 추가해서 문의해 주세요. 태국인 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏\n\n추가 비용의 경우, 고객님께서 상담만 받으러 오시면 상담료 10,000원이 있습니다. 하지만 시술도 함께 받으시면 추가 상담료는 없습니다😊🌸",
          "rationale": "상담만 받으면 10,000원, 시술을 함께 받으면 상담료 없음이라는 답변은 FAQ와 일치한다. 추후 시술예약만 하는 경우에는 한국어 빠른문구는 무료, 태국어 문구는 당일 미시술 시 10,000원으로 안내 조건이 다르다.",
          "evidence": "raw/06.md L1379–L1383 FAQ226\n### [질문:226] 오늘 염증주사 받고 상담 받았는데 왜 상담비 받나요? 피부진단은 무료 아닌가요 ?\n\n분류: 기타 문의사항\n\n상담만 받는 경우 상담비는 1만원으로 안내합니다. 약 처방이나 염증주사는 별도 기준이므로 실제 받은 진료 내역을 확인한 뒤 비용을 설명합니다.\n\nraw/11.md L134–L140 본문\n상담비 안내\n\n  **문구**\n\n    - 상담만 진행 시: 상담비 10,000원 발생\n\n    - 당일 시술 or 시술 예약 시: 상담비 무료\n\nraw/08.md L92 본문\n* หากเข้ามาปรึกษาอย่างเดียว โดยไม่ได้ทำหัตถการในวันนั้น จะมีค่าปรึกษา 10,000 วอน\n적용 규칙: SOURCE-01",
          "limit": "",
          "procedure": "주름 보톡스(상품페이지 유입 기준)",
          "questionCategory": "추가 비용·상담료 문의",
          "quoteScopeNote": "기존 수집본의 직전일 고객 문의에 대한 다음 날 담당자 답변입니다. 비용 문의와 관련된 두 담당자 메시지 전체를 포함하고, 프로모션 이미지는 본문과 구분합니다. 고객 문의에 원래 없던 예약 조건을 덧붙이지 않습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "ราคาเพิ่มเติม",
              "ko": "추가 비용",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
              "ko": "안녕하세요. 현재 병원에서는 사진에 나온 것과 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으시면 라인을 추가해서 문의해 주세요. 태국인 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
              "kind": "text"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            },
            {
              "original": "สำหรับค่าใช้จ่ายเพิ่มเติม หากคุณลูกค้าเข้ามารับคำปรึกษาเพียงอย่างเดียว จะมีค่าปรึกษา 10,000 วอนครับ แต่หากรับบริการทำหัตถการด้วย จะไม่มีค่าปรึกษาเพิ่มเติมนะครับ😊🌸",
              "ko": "추가 비용의 경우, 고객님께서 상담만 받으러 오시면 상담료 10,000원이 있습니다. 하지만 시술도 함께 받으시면 추가 상담료는 없습니다😊🌸",
              "kind": "text"
            }
          ]
        },
        {
          "id": "case-20261029-42",
          "verdict": "sourceConflict",
          "country": "TW",
          "title": "관리시간 단위",
          "customerText": "想更詳細了解施術／手術內容",
          "customerKo": "시술／수술 내용을 더 자세히 알고 싶어요",
          "staffText": "您好～😊 這是我們的價格表，您可以先參考一下～💗\n如果您需要提前預約，也可以隨時告訴我們，我們可以馬上幫您安排喔～✨",
          "staffKo": "안녕하세요～😊 저희 가격표이니 우선 참고해 주세요～💗\n미리 예약을 원하시면 언제든지 말씀해 주세요. 바로 예약을 도와드릴 수 있습니다～✨",
          "rationale": "포텐자 가격표 이미지로 시술 구성과 약제·용량을 안내했고 엑소힐러 5cc 조합의 세전 290,000원은 제공 표와 일치한다. 크라이오 관리시간은 안내 이미지에 5분, 원본 엑소힐러 행에 5\", 필로가 행에 5'로 적혀 있다.",
          "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |\n적용 규칙: FORMAT-01, PRICE-01",
          "limit": "",
          "procedure": "포텐자·엑소힐러 조합(가격표 검토)",
          "questionCategory": "시술·수술 상세내용 문의",
          "quoteScopeNote": "고객이 시술·수술 내용에 관해 남긴 문장과 담당자의 가격표·예약 안내 본문 전체입니다. 관리시간 단위 발견은 전송된 가격표 이미지와 기준표의 표기 대조이며 고객이 관리시간을 직접 질문했다는 뜻은 아닙니다. 첨부 내용은 임의 전사하거나 재구성하지 않았습니다.",
          "quoteFormat": "full-messages-v1",
          "customerMessages": [
            {
              "original": "想更詳細了解施術／手術內容",
              "ko": "시술／수술 내용을 더 자세히 알고 싶어요",
              "kind": "text"
            }
          ],
          "staffMessages": [
            {
              "original": "您好～😊 這是我們的價格表，您可以先參考一下～💗\n如果您需要提前預約，也可以隨時告訴我們，我們可以馬上幫您安排喔～✨",
              "ko": "안녕하세요～😊 저희 가격표이니 우선 참고해 주세요～💗\n미리 예약을 원하시면 언제든지 말씀해 주세요. 바로 예약을 도와드릴 수 있습니다～✨",
              "kind": "text"
            },
            {
              "original": "",
              "ko": "",
              "kind": "imageOnly"
            }
          ]
        }
      ],
      "followUps": [],
      "followUpSummary": {
        "carried": 0,
        "resolved": 0,
        "unresolved": 0,
        "deferred": 0,
        "unchecked": 0
      },
      "definitionRevision": "NO_STAFF_REPLY_ONLY",
      "knowledgeVerification": {
        "version": "KG-2026-10-30-v1",
        "checkedAt": "2026-10-30T00:21:09.690Z",
        "sourceDate": "2026-10-29",
        "curatedFacts": 17,
        "guideDocuments": 18,
        "historicalMetadataDocuments": 10,
        "priceOffers": 1034,
        "priceSheets": 31,
        "sourceCells": 11149,
        "lineSpans": 35878,
        "sections": 678,
        "nodeCount": 55531,
        "edgeCount": 118670,
        "rooms": 23,
        "messages": 121,
        "findingPackets": 50,
        "activeFindings": 8,
        "ruleCount": 11,
        "citationLinks": 808,
        "priceComparisons": 256,
        "priceMatched": 201,
        "priceNotComparable": 55,
        "uniqueSourceConflictTopics": 5,
        "sourceConflictOccurrences": 6,
        "scope": "기존 수집본 재매칭 · 신규 채팅 및 이미지 재열람 없음",
        "status": "verified"
      }
    }
  ],
  "platformReports": {
    "gangnamunni": {
      "name": "강남언니",
      "updatedAt": "2026-11-02T00:23:42.503Z",
      "days": [
        {
          "platform": "gangnamunni",
          "date": "2026-11-01",
          "status": "partial",
          "auditState": "source-availability-partial",
          "checkedAt": "2026-11-02T02:43:15.784Z",
          "qaAuditCheckedAt": "2026-11-02T02:43:15.784Z",
          "cutoffAt": "2026-11-01T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "제한 안전 본문 부분집합만 확보했으며 임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-11-01",
            "observedAt": "2026-11-02T02:43:15.784Z",
            "evidenceScope": "native-safe-body-subset",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 78,
            "bodyRoomsOpened": 76,
            "actualBodyDateMembership": "confirmed-subset",
            "reason": "두 대상일 공동 원천 풀의 안전 본문 76개를 한 번씩 열람. 날짜별 76개 재열람 또는 총 152회가 아님. 대상일 전체 분모와 임상 검수는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "보호 후보 2개는 미열람. 다른 날짜 본문을 보았어도 대상일 소속이 확인되지 않으면 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-G-20261101-001",
              "country": "US",
              "consultationAt": "2026-11-01T10:40:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-11-01T10:40:00+09:00",
                "lastAt": "2026-11-01T10:50:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-11-01T10:39:00+09:00",
                "lastAt": "2026-11-01T10:50:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K242:N252",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A81:AF81",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-003",
              "country": "ID",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K253:N255",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-004",
              "country": "AU",
              "consultationAt": "2026-11-01T20:27:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T20:27:00+09:00",
                "lastAt": "2026-11-01T20:27:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T20:27:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K256:N260",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A84:AF84",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A85:AF85",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-007",
              "country": "TH",
              "consultationAt": "2026-11-01T23:57:00+09:00",
              "language": "태국어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T23:57:00+09:00",
                "lastAt": "2026-11-01T23:57:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T23:57:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K261:N266",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-008",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K267:N269",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-009",
              "country": "TH",
              "consultationAt": "2026-11-01T19:49:00+09:00",
              "language": "태국어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T19:49:00+09:00",
                "lastAt": "2026-11-01T19:49:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T19:49:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K270:N274",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-010",
              "country": "TH",
              "consultationAt": "2026-11-01T16:50:00+09:00",
              "language": "태국어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T16:50:00+09:00",
                "lastAt": "2026-11-01T16:50:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T16:50:00+09:00",
                "lastAt": "2026-11-01T16:50:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K275:N276",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A90:AF90",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-012",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A91:AF91",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-013",
              "country": "TW",
              "consultationAt": "2026-11-01T16:10:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-11-01T16:10:00+09:00",
                "lastAt": "2026-11-01T16:20:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 7,
                "firstAt": null,
                "lastAt": "2026-11-01T16:21:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K277:N287",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-014",
              "country": "TW",
              "consultationAt": "2026-11-01T22:54:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T22:54:00+09:00",
                "lastAt": "2026-11-01T22:54:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K288:N289",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-015",
              "country": "TW",
              "consultationAt": "2026-11-01T22:52:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-11-01T22:52:00+09:00",
                "lastAt": "2026-11-01T22:53:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T22:52:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K290:N295",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-016",
              "country": "TW",
              "consultationAt": "2026-11-01T21:05:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T21:05:00+09:00",
                "lastAt": "2026-11-01T21:05:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T21:05:00+09:00",
                "lastAt": "2026-11-01T21:05:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K296:N297",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-017",
              "country": "TW",
              "consultationAt": "2026-11-01T20:44:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T20:44:00+09:00",
                "lastAt": "2026-11-01T20:44:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T20:44:00+09:00",
                "lastAt": "2026-11-01T20:44:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K298:N299",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-018",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K300:N302",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-019",
              "country": "TW",
              "consultationAt": "2026-11-01T19:23:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T19:23:00+09:00",
                "lastAt": "2026-11-01T19:23:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K303:N304",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-020",
              "country": "TW",
              "consultationAt": "2026-11-01T11:45:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T11:45:00+09:00",
                "lastAt": "2026-11-01T17:41:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T17:41:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K305:N320",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-021",
              "country": "JP",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K321:N323",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-022",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A101:AF101",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-023",
              "country": "TH",
              "consultationAt": "2026-11-01T11:23:00+09:00",
              "language": "태국어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-11-01T11:23:00+09:00",
                "lastAt": "2026-11-01T15:11:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": null,
                "lastAt": "2026-11-01T16:06:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K324:N331",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-024",
              "country": "CN",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T16:02:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K332:N335",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-025",
              "country": "MY",
              "consultationAt": "2026-11-01T00:24:00+09:00",
              "language": "중국어 간체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-11-01T00:24:00+09:00",
                "lastAt": "2026-11-01T15:35:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": null,
                "lastAt": "2026-11-01T15:38:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K336:N345",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-026",
              "country": "US",
              "consultationAt": "2026-11-01T14:59:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T14:59:00+09:00",
                "lastAt": "2026-11-01T15:24:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T15:31:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K346:N358",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-027",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T15:29:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K359:N365",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-028",
              "country": "US",
              "consultationAt": "2026-11-01T12:38:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-11-01T12:38:00+09:00",
                "lastAt": "2026-11-01T15:14:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-11-01T12:51:00+09:00",
                "lastAt": "2026-11-01T15:15:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K366:N376",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-029",
              "country": "JP",
              "consultationAt": "2026-11-01T11:08:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-11-01T11:08:00+09:00",
                "lastAt": "2026-11-01T15:10:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K377:N381",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-030",
              "country": "TW",
              "consultationAt": "2026-11-01T14:08:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T14:08:00+09:00",
                "lastAt": "2026-11-01T14:44:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T14:46:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K382:N397",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-031",
              "country": "JP",
              "consultationAt": "2026-11-01T09:50:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-11-01T09:50:00+09:00",
                "lastAt": "2026-11-01T14:35:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K398:N402",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-032",
              "country": "TW",
              "consultationAt": "2026-11-01T13:39:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T13:39:00+09:00",
                "lastAt": "2026-11-01T13:40:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K403:N407",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-033",
              "country": "TW",
              "consultationAt": "2026-11-01T12:36:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T12:36:00+09:00",
                "lastAt": "2026-11-01T12:42:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T12:38:00+09:00",
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K408:N420",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-034",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T12:48:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K421:N425",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-035",
              "country": "TW",
              "consultationAt": "2026-11-01T11:23:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T11:23:00+09:00",
                "lastAt": "2026-11-01T11:23:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T11:25:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K426:N431",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-036",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T11:06:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K432:N437",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-037",
              "country": "TW",
              "consultationAt": "2026-11-01T10:50:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T10:50:00+09:00",
                "lastAt": "2026-11-01T10:55:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T11:06:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K438:N445",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-038",
              "country": "SG",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T10:55:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K446:N450",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-039",
              "country": "MY",
              "consultationAt": "2026-11-01T10:49:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T10:49:00+09:00",
                "lastAt": "2026-11-01T10:50:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K451:N453",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-040",
              "country": "IT",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T10:43:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K454:N457",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-041",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A120:AF120",
              "scopeNote": "보호 후보 본문 미열람. 대상일 소속과 질문·답변은 미확인. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-042",
              "country": "TW",
              "consultationAt": "2026-11-01T10:03:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T10:03:00+09:00",
                "lastAt": "2026-11-01T10:03:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T10:06:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K458:N466",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-043",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-11-01T09:53:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K467:N469",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-044",
              "country": "TW",
              "consultationAt": "2026-11-01T09:51:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-11-01T09:51:00+09:00",
                "lastAt": "2026-11-01T09:52:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K470:N472",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-045",
              "country": "TW",
              "consultationAt": "2026-11-01T09:51:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T09:51:00+09:00",
                "lastAt": "2026-11-01T09:51:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K473:N474",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-046",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T09:49:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K475:N478",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-047",
              "country": "JP",
              "consultationAt": "2026-11-01T09:48:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T09:48:00+09:00",
                "lastAt": "2026-11-01T09:48:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K479:N479",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-048",
              "country": "TH",
              "consultationAt": "2026-11-01T09:48:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T09:48:00+09:00",
                "lastAt": "2026-11-01T09:48:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K480:N480",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-049",
              "country": "TH",
              "consultationAt": "2026-11-01T09:48:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-11-01T09:48:00+09:00",
                "lastAt": "2026-11-01T09:48:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K481:N481",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-050",
              "country": "JP",
              "consultationAt": "2026-11-01T05:52:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-11-01T05:52:00+09:00",
                "lastAt": "2026-11-01T09:47:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K482:N484",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-051",
              "country": "JP",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-11-01T09:47:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K485:N488",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-052",
              "country": "TW",
              "consultationAt": "2026-11-01T08:00:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K489:N489",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-053",
              "country": "TW",
              "consultationAt": "2026-11-01T07:30:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K490:N490",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-054",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A133:AF133",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-055",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A134:AF134",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-056",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A135:AF135",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-057",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A136:AF136",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-058",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A137:AF137",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-059",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A138:AF138",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-060",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A139:AF139",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-061",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A140:AF140",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-062",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A141:AF141",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-063",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A142:AF142",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-064",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A143:AF143",
              "scopeNote": "보호 후보 본문 미열람. 대상일 소속과 질문·답변은 미확인. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-065",
              "country": "JP",
              "consultationAt": "2026-11-01T07:00:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K491:N491",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-11-01",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261101-066",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A145:AF145",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-067",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A146:AF146",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-068",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A147:AF147",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-069",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A148:AF148",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-070",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A149:AF149",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-071",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A150:AF150",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-072",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A151:AF151",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-073",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A152:AF152",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-074",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A153:AF153",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-075",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A154:AF154",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-076",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A155:AF155",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-077",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A156:AF156",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261101-078",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A157:AF157",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [
              {
                "id": "MISS-G-20261101-052",
                "recordIds": [
                  "MISS-G-20261101-052"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "11월 1일 당일 방문 일정과 지도 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (당일 방문·지도 자동 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K489:N489"
              },
              {
                "id": "MISS-G-20261101-053",
                "recordIds": [
                  "MISS-G-20261101-053"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "11월 1일 당일 방문 일정과 지도 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (당일 방문·지도 자동 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K490:N490"
              },
              {
                "id": "MISS-G-20261101-028",
                "recordIds": [
                  "MISS-G-20261101-028"
                ],
                "kind": "consult",
                "country": "US",
                "procedure": "주름 보톡스·스킨 보톡스",
                "category": "가격 포함 범위",
                "verdict": "fix",
                "severity": "suspected",
                "reason": "고객은 이마·미간·미소 세 부위가 한 가격에 포함되는지 물었는데 담당자는 주름 보톡스와 스킨 보톡스가 모두 포함된다고 답했다. 강남언니 수가표는 주름보톡스(국) 3부위 74,900원과 국산 풀페이스 스킨 보톡스 128,700원을 별도 상품으로 둔다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "Is the price for the Botox for all the three sections.?",
                    "ko": "보톡스 가격은 세 부위 모두에 대한 가격인가요.?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "Yes It includes both wrinkle botox and skin botox!",
                    "ko": "네 주름 보톡스와 스킨 보톡스가 모두 포함됩니다!"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K366:N376"
              },
              {
                "id": "MISS-G-20261101-030",
                "recordIds": [
                  "MISS-G-20261101-030"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "소프웨이브·울쎄라·세르프",
                "category": "시술 비교·행사 가격",
                "verdict": "fix",
                "severity": "confirmed",
                "reason": "담당자는 소프웨이브가 피부 최상층 표층에 작용한다고 답했는데 가이드 02는 소프웨이브가 진피 중층에 열에너지를 전달한다고 안내한다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "想請問索夫波 跟 美版 、雙頻電波差異在哪兒呢",
                    "ko": "소프웨이브와 미국판, 이중 주파수 고주파는 어떤 차이가 있는지 여쭤보고 싶습니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "想請問活動日期是到11/30，我們預計[방문 예정 시기 가림]會再來，有最新的活動價錢嗎",
                    "ko": "행사 기간이 11/30까지인데 저희는 [방문 예정 시기 가림]에 다시 올 예정입니다. 최신 행사 가격이 있을까요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "能否傳您們施作的項目及費用，這幾次去體驗蠻好的，想多參考其他項目",
                    "ko": "시술 항목과 비용을 보내 주실 수 있을까요. 이번 몇 차례 방문 경험이 꽤 좋아서 다른 항목도 더 참고하고 싶습니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "您好，索夫波施打於肌膚最上層的表層，主要是增加肌膚彈力、淡化細紋的效果；\n美國音波主要施打於肌膚深層的肌膜層，主要是拉提下垂肌肉、修飾輪廓線的效果；\n雙頻電波則可以同時作用於肌膚淺層及深層，增加肌膚彈力外也能有修飾輪廓線的效果喔！",
                    "ko": "안녕하세요, 소프웨이브는 피부의 가장 위쪽 표층에 시술하여 주로 피부 탄력을 높이고 잔주름을 완화하는 효과가 있습니다;\n미국 초음파는 주로 피부 깊은 근막층에 시술하여 처진 근육을 끌어올리고 윤곽선을 다듬는 효과가 있습니다;\n이중 주파수 고주파는 피부의 얕은 층과 깊은 층에 동시에 작용할 수 있어 피부 탄력을 높이는 것 외에도 윤곽선을 다듬는 효과가 있습니다!"
                  },
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "以上活動優惠給您參考，若有問題都可以再向我們詢問喔！",
                    "ko": "위 행사 혜택을 참고해 주시고, 궁금한 점이 있으면 언제든 저희에게 문의해 주세요!"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我們12月會有新的活動優惠，但以上拉提類療程的活動基本上變動不大，所以一樣可以先參考看看喔！",
                    "ko": "저희는 12월에 새로운 행사 혜택이 있을 예정이지만 위 리프팅 시술의 행사는 기본적으로 변동이 크지 않으니 그대로 먼저 참고해 보셔도 됩니다!"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "謝謝～🥹🌸可以的！這邊先給您我們綜合活動的優惠，更多活動可以到官網查看唷！",
                    "ko": "감사합니다～🥹🌸가능합니다! 우선 저희 종합 행사 혜택을 보내 드리며, 더 많은 행사는 공식 홈페이지에서 확인하실 수 있습니다!\n\n[이미지 응답]",
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "https://tw.beautyblossom.kr/22",
                    "ko": "https://tw.beautyblossom.kr/22"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K382:N397"
              },
              {
                "id": "MISS-G-20261101-013",
                "recordIds": [
                  "MISS-G-20261101-013"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "골드 미세침(포텐자)·HIFU 리프팅",
                "category": "복수 시술 예약·오시는 길",
                "verdict": "normal-ops",
                "reason": "두 시술은 예약 후 내원 상담에서 정하면 된다고 답하고 합정역 3번 출구 옆 건물, 홍대입구역에서 지하철 약 2분·도보 약 10분이라고 안내했다. 가이드 06은 합정역 3번 출구 앞에 있다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "好的 我想要做黃金微針 +音波拉提 可以同時預約兩個項目嗎 還是預約一個 拉提到現場再決定我適合嗎",
                    "ko": "네 저는 골드 마이크로니들 +초음파 리프팅을 하고 싶은데 두 항목을 동시에 예약할 수 있나요 아니면 하나만 예약하고 리프팅은 현장에서 저에게 적합한지 결정하나요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "可以先詢問一下 弘大附近的什麼地鐵站 幾分鐘到達呢",
                    "ko": "먼저 여쭤봐도 될까요 홍대 근처 어느 지하철역이며 몇 분이면 도착하나요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "比較好確定時間",
                    "ko": "시간을 정하기가 더 수월해서요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "可以啊！預約來院後我們都會先為您安排商談，商談後再決定想施作的療程就可以囉！",
                    "ko": "가능합니다！예약 후 내원하시면 먼저 상담을 마련해 드리니, 상담 후 원하시는 시술을 결정하시면 됩니다！"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我們在合井站三號出口，一出來旁邊的大樓就是了，合井就是在弘大的下一站，搭地鐵的話就是2分鐘左右",
                    "ko": "저희는 합정역 삼 번 출구에 있습니다. 나오자마자 옆 건물이며, 합정은 홍대 다음 역으로 지하철을 타면 약 2분입니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您要直接從弘大站9號出口步行過來也可以，大約需要10分鐘",
                    "ko": "홍대입구역 9번 출구에서 바로 걸어오셔도 되며, 약 10분 걸립니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K277:N287"
              },
              {
                "id": "MISS-G-20261101-001",
                "recordIds": [
                  "MISS-G-20261101-001"
                ],
                "kind": "consult",
                "country": "US",
                "procedure": "CO2 레이저·피코(줌패스·포커스·토닝)",
                "category": "시술 선택(색소·흉터·모공·잔주름)",
                "verdict": "normal",
                "reason": "담당자는 CO2 레이저를 주로 점 제거에 쓴다고 하고 잡티·주근깨에 피코줌패스, 여드름 흉터·모공·피부결에 피코포커스를 안내했다. 가이드 02는 CO2를 점·쥐젖 등 병변 제거 시술로, 피코줌패스를 색소 치료로 설명하고 가이드 01은 포커스 모드를 피부결·모공·흉터 치료로 구분해 담당자 안내와 같다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "Do you provide CO2 laser treatments?",
                    "ko": "CO2 레이저 시술을 제공하시나요?"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "I have dark spots/freckles, a few acne scars that are stubbornly visible for weeks, large pores on T zone and fine lines around my eyes",
                    "ko": "잡티/주근깨가 있고, 몇 주 동안 끈질기게 눈에 띄는 여드름 흉터 몇 개, T존의 넓은 모공, 눈가 잔주름이 있어요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "I’m not sure if I need Pico or CO2",
                    "ko": "피코가 필요한지 CO2가 필요한지 잘 모르겠어요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Maybe both??",
                    "ko": "둘 다일까요??"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "Hello! \nOur CO2 laser is mainly used for mole removal! 💗\n\nHowever, we offer several other laser treatments that can help with your skin concerns! ✨\n\n🌸 Pico Zoom Pass – Targets pigmentation, dark spots, and freckles.\n🌸 Pico Focus – Helps improve acne scars, enlarged pores, and overall skin texture.\n🌸 Pico Toning – Helps reduce uneven pigmentation and brighten overall skin tone.\nFor fine lines around the eyes, we also offer other treatments that focus on improving skin elasticity and wrinkles! 💗\nSince you have several different skin concerns, we'd recommend an in-person consultation so our medical team can assess your skin and suggest the most suitable combination of treatments! 😊🌸",
                    "ko": "안녕하세요! \n저희 CO2 레이저는 주로 점 제거에 사용합니다! 💗\n\n하지만 고객님의 피부 고민에 도움이 될 수 있는 다른 레이저 시술도 여러 가지 제공하고 있습니다! ✨\n\n🌸 피코 줌 패스 – 색소침착, 잡티, 주근깨를 대상으로 합니다.\n🌸 피코 포커스 – 여드름 흉터, 넓어진 모공, 전반적인 피부결 개선에 도움이 됩니다.\n🌸 피코 토닝 – 고르지 않은 색소침착을 줄이고 전반적인 피부톤을 밝게 하는 데 도움이 됩니다.\n눈가 잔주름의 경우 피부 탄력과 주름 개선에 초점을 맞춘 다른 시술도 제공하고 있습니다! 💗\n여러 가지 피부 고민이 있으시므로, 의료진이 피부를 평가하고 가장 적합한 시술 조합을 제안할 수 있도록 대면 상담을 권해 드립니다! 😊🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K242:N252"
              },
              {
                "id": "MISS-G-20261101-029",
                "recordIds": [
                  "MISS-G-20261101-029"
                ],
                "kind": "consult",
                "country": "JP",
                "procedure": "인모드FX·블라썸핏 주사",
                "category": "시술 후 주의사항",
                "verdict": "normal",
                "reason": "내원 후 인모드FX와 뷰티핏/블라썸핏 주사의 시술 후 주의사항을 보냈다. 두 문구 모두 가이드 09의 일본어 주의사항 문구와 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 방문 안내와 시술 후 관리 발송)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "🔥 インモードFX － 施術後の注意事項 🔥\n\n• 施術当日から軽い洗顔、シャワー、メイクが可能です。\n• 施術後、赤み、腫れ、熱感、圧痛などが生じる場合があります。また、吸引によってあざや内出血が生じることがありますが、ほとんどは時間の経過とともに徐々に薄くなります。\n• 施術後1週間は飲酒、喫煙、サウナ、激しい運動はお控えください🍷\n• 保湿と紫外線対策を心がけてください。また、しばらくの間は酸を含む製品、レチノール、角質ケア、マッサージ、カッサの使用はお控えください☀️\n• 水ぶくれが生じた場合や、強いほてり、明らかな痛みが続く場合は、すぐにクリニックまでご連絡ください📞\n\n⏳ 効果はいつ頃から現れますか？\n\n• インモード施術後のフェイスラインやハリ・弾力の改善効果は徐々に現れます。\n• 一般的に、施術後2～4週間ほどで変化を比較的実感しやすくなります。",
                    "ko": "🔥 인모드FX － 시술 후 주의사항 🔥\n\n• 시술 당일부터 가벼운 세안, 샤워, 메이크업이 가능합니다.\n• 시술 후 붉어짐, 부기, 열감, 압통 등이 생길 수 있습니다. 또한 흡입으로 인해 멍이나 피하출혈이 생길 수 있으나, 대부분은 시간이 지나면서 점차 옅어집니다.\n• 시술 후 1주일 동안은 음주, 흡연, 사우나, 격한 운동을 삼가 주세요🍷\n• 보습과 자외선 차단에 신경 써 주세요. 또한 당분간 산 성분이 포함된 제품, 레티놀, 각질 관리, 마사지, 괄사 사용을 삼가 주세요☀️\n• 물집이 생기거나 심한 화끈거림, 뚜렷한 통증이 지속되는 경우에는 즉시 클리닉으로 연락해 주세요📞\n\n⏳ 효과는 언제쯤 나타나나요?\n\n• 인모드 시술 후 얼굴선과 피부의 팽팽함·탄력 개선 효과는 서서히 나타납니다.\n• 일반적으로 시술 후 약 2～4주가 지나면 변화를 비교적 느끼기 쉬워집니다."
                  },
                  {
                    "date": "2026-11-01",
                    "original": "💉 ビューティーフィット／ブロッサムフィット注射 － 施術後の注意事項 💉\n\n• 注射部位に軽い腫れ、こわばり感、ヒリヒリ感、熱感、内出血などが生じる場合がありますが、ほとんどは1～3日程度で徐々に落ち着きます。\n• 施術4時間後から軽いシャワーや、施術部位を洗うことが可能です。強くこすったり押したりしないようご注意ください。\n• 施術後1週間は、飲酒、喫煙、サウナ、温泉、激しい運動はお控えください🍷\n• 普段通り十分な水分補給を心がけ、腫れや不快感が落ち着いてから通常の運動を徐々に再開してください💧\n• しばらくの間は、施術部位を強くマッサージしたり、カッサを使用したりせず、繰り返し刺激を与える行為もお控えください。\n• 赤み、腫れ、熱感、痛み、かゆみなどの症状が続いて悪化する場合や、その他明らかな異常がみられる場合はクリニックまでご連絡ください📞\n\n⏳ 効果はいつ頃から現れますか？\n\n• ボディラインの変化は徐々に現れ、一般的に複数回施術を受けることで、より変化を実感しやすくなります。",
                    "ko": "💉 뷰티핏／블라썸핏 주사 － 시술 후 주의사항 💉\n\n• 주사 부위에 가벼운 부기, 뻣뻣함, 따끔거림, 열감, 피하출혈 등이 생길 수 있으나, 대부분은 약 1～3일에 걸쳐 서서히 가라앉습니다.\n• 시술 4시간 후부터 가벼운 샤워나 시술 부위 세척이 가능합니다. 강하게 문지르거나 누르지 않도록 주의해 주세요.\n• 시술 후 1주일 동안은 음주, 흡연, 사우나, 온천, 격한 운동을 삼가 주세요🍷\n• 평소처럼 충분한 수분을 섭취하고, 부기와 불편감이 가라앉은 후 일반적인 운동을 서서히 재개해 주세요💧\n• 당분간 시술 부위를 강하게 마사지하거나 괄사를 사용하지 마시고, 반복적으로 자극을 주는 행동도 삼가 주세요.\n• 붉어짐, 부기, 열감, 통증, 가려움 등의 증상이 지속되어 악화되는 경우나 그 밖에 뚜렷한 이상이 보이는 경우에는 클리닉으로 연락해 주세요📞\n\n⏳ 효과는 언제쯤 나타나나요?\n\n• 바디라인의 변화는 서서히 나타나며, 일반적으로 여러 차례 시술을 받으면 변화를 더욱 느끼기 쉬워집니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K377:N381"
              },
              {
                "id": "MISS-G-20261101-065",
                "recordIds": [
                  "MISS-G-20261101-065"
                ],
                "kind": "auto",
                "country": "JP",
                "procedure": "사각턱 보톡스",
                "category": "방문 당일 자동 알림",
                "verdict": "auto",
                "reason": "방문 당일 일정과 지도를 자동 알림으로 보냈다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (당일 방문·지도 자동 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K491:N491"
              },
              {
                "id": "MISS-G-20261101-003",
                "recordIds": [
                  "MISS-G-20261101-003"
                ],
                "kind": "inflow",
                "country": "ID",
                "procedure": "확인되지 않음",
                "category": "병원 문의 유입",
                "verdict": "normal-ops",
                "reason": "병원 문의 유입에 궁금한 점은 언제든 문의해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "Hi~ If you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 질문이 있으시면 언제든 편하게 문의해 주세요💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K253:N255"
              },
              {
                "id": "MISS-G-20261101-004",
                "recordIds": [
                  "MISS-G-20261101-004"
                ],
                "kind": "consult",
                "country": "AU",
                "procedure": "피코슈어",
                "category": "시술 설명",
                "verdict": "normal",
                "reason": "담당자는 피코슈어 토닝과 줌·포커스 모드의 목적을 나누고, 주된 고민에 따라 의사가 먼저 피부를 확인해 모드와 강도를 정한다고 답했다. 가이드 01도 토닝·줌패스·포커스를 구분하고 진료로 먼저 확인한다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "Tell me more about this procedure",
                    "ko": "이 시술에 대해 더 자세히 알려 주세요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "PicoSure is a picosecond laser treatment mainly used for concerns such as pigmentation, freckles, sun spots, uneven skin tone, acne marks, and overall skin texture.\n\nAt our clinic, different PicoSure modes can be selected depending on your skin condition:\n\n• PicoSure Toning — focuses more on overall pigmentation and uneven skin tone\n• Zoom / Focus modes — can be used for more targeted pigment spots or texture concerns, depending on the area and skin condition\n\nBecause PicoSure delivers laser energy in very short pulses, it can target pigment while minimizing unnecessary heat exposure compared with some traditional laser methods.\n\nAfter treatment, you may have temporary redness, warmth, or mild sensitivity, and targeted spots can sometimes become temporarily darker before fading.\n\nThe most suitable mode and intensity will depend on whether your concern is mainly melasma, freckles, sun spots, acne marks, or texture, so the doctor will check your skin first and customize the treatment accordingly 🌸",
                    "ko": "피코슈어는 색소침착, 주근깨, 햇빛으로 인한 잡티, 고르지 않은 피부톤, 여드름 자국과 전반적인 피부결 등의 고민에 주로 사용하는 피코초 레이저 시술입니다.\n\n저희 병원에서는 피부 상태에 따라 서로 다른 피코슈어 모드를 선택할 수 있습니다.\n\n• 피코슈어 토닝: 전반적인 색소침착과 고르지 않은 피부톤에 더 중점을 둡니다.\n• 줌 / 포커스 모드: 부위와 피부 상태에 따라 특정 색소 병변이나 피부결 고민에 사용할 수 있습니다.\n\n피코슈어는 매우 짧은 펄스로 레이저 에너지를 전달하므로 일부 전통적인 레이저 방식과 비교해 불필요한 열 노출을 최소화하면서 색소를 표적으로 삼을 수 있습니다.\n\n시술 후 일시적인 붉어짐, 열감이나 가벼운 민감함이 있을 수 있으며, 집중 치료한 잡티는 옅어지기 전에 일시적으로 더 진해질 수 있습니다.\n\n가장 적합한 모드와 강도는 주된 고민이 기미, 주근깨, 햇빛에 의한 잡티, 여드름 자국 또는 피부결인지에 따라 달라지므로 의사가 먼저 피부를 확인하고 그에 맞춰 시술을 조정합니다 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K256:N260"
              },
              {
                "id": "MISS-G-20261101-007",
                "recordIds": [
                  "MISS-G-20261101-007"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "관리자 연결",
                "verdict": "normal-ops",
                "reason": "관리자 연결 요청에 태국어 관리자가 항상 응대하니 무엇이든 문의해 달라고 답했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "ติดต่อแอดมิน",
                    "ko": "관리자에게 연락"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "สวัสดีค่ะ หากมีข้อสงสัยใดๆสามารถสอบถามได้เลยนะคะ ทางเรามีแอดมินไทยคอยบริการอยู่ตลอดเลยค่ะ😊🙏",
                    "ko": "안녕하세요. 궁금한 사항은 무엇이든 문의해 주세요. 저희는 태국어 관리자가 항상 응대하고 있습니다😊🙏"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K261:N266"
              },
              {
                "id": "MISS-G-20261101-008",
                "recordIds": [
                  "MISS-G-20261101-008"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "태국어 행사 이미지를 보내고 LINE으로 태국인 관리자·통역사에게 추가 문의할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "สวัสดีค่ะ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะคะ\n\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยค่ะ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะคะะ 🥰🙏",
                    "ko": "안녕하세요. 현재 병원 행사 내용은 이미지와 같습니다.\n\n추가로 궁금하신 사항은 라인을 추가해 문의해 주세요. 태국인 관리자와 태국어 통역사가 항상 응대합니다 🥰🙏",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K267:N269"
              },
              {
                "id": "MISS-G-20261101-009",
                "recordIds": [
                  "MISS-G-20261101-009"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "고우리",
                "category": "태국어 통역",
                "verdict": "normal-ops",
                "reason": "내원 시 통역이 필요하다는 요청에 상담부터 시술까지 무료 태국어 통역을 제공한다고 답했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "ต้องการล่ามตอนเข้าคลินิก",
                    "ko": "클리닉에 방문할 때 통역이 필요합니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "ทางคลินิกมีล่ามไทยบริการฟรีตั้งแต่ปรึกษาตลอดการทำหัตถการเลยค่ะะ",
                    "ko": "병원에서 상담부터 시술 전 과정까지 무료 태국어 통역을 제공합니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K270:N274"
              },
              {
                "id": "MISS-G-20261101-010",
                "recordIds": [
                  "MISS-G-20261101-010"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "리쥬란",
                "category": "태국어 통역 비용",
                "verdict": "normal-ops",
                "reason": "태국어 통역 추가 요금을 묻자 상담부터 시술 종료까지 태국어 통역은 무료라고 답했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "มีค่าบริการสำหรับล่ามไทยเพิ่มเติมมั๊ยคะ",
                    "ko": "태국어 통역에 대한 추가 요금이 있나요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "เรามีล่ามไทยบริการฟรีตั้งแต่ปรึกษาจนจบการทำหัตถการเลยค่ะะ",
                    "ko": "상담부터 시술 종료까지 무료 태국어 통역을 제공합니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K275:N276"
              },
              {
                "id": "MISS-G-20261101-014",
                "recordIds": [
                  "MISS-G-20261101-014"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "여성 겨드랑이 관리",
                "category": "개선 부위 확인",
                "verdict": "normal-ops",
                "reason": "겨드랑이 관리 상품 유입에 어떤 부분을 개선하고 싶은지 묻고 참고 가격을 제공할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "您好，請問主要想要針對腋下那個部分進行改善呢？",
                    "ko": "안녕하세요. 겨드랑이의 어떤 부분을 주로 개선하고 싶으신가요?"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "這邊可以提供價格給您參考喔~",
                    "ko": "참고하실 수 있도록 가격을 제공해 드릴 수 있어요~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K288:N289"
              },
              {
                "id": "MISS-G-20261101-015",
                "recordIds": [
                  "MISS-G-20261101-015"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "초음파·고주파 리프팅",
                "category": "중국어 통역·가격",
                "verdict": "image",
                "reason": "중국어 통역 직원이 있다고 답하고, 초음파·고주파 가격 질문에는 프로모션 이미지를 보내며 개선 부위를 알려 주면 시술을 추천하겠다고 답했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "到院時需要中文翻譯服務",
                    "ko": "내원할 때 중국어 통역 서비스가 필요합니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "想問一下音波跟電波的價位",
                    "ko": "초음파와 고주파 가격을 여쭤보고 싶어요"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-02",
                    "original": "我們院內都有中文翻譯人員，這個不用擔心喔✅",
                    "ko": "병원에 중국어 통역 직원이 있으니 이 부분은 걱정하지 않으셔도 됩니다✅"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "電波跟音波有很多種，您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "고주파와 초음파에는 여러 종류가 있으므로 가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K290:N295"
              },
              {
                "id": "MISS-G-20261101-017",
                "recordIds": [
                  "MISS-G-20261101-017"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "침샘 보톡스",
                "category": "대화 마무리",
                "verdict": "normal-ops",
                "reason": "고객의 \"네\"에 더 궁금한 점이나 알고 싶은 시술이 있으면 언제든 말해 달라고 답하며 마무리했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "好的",
                    "ko": "네"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "後續如果還有任何問題，或是有想再了解的療程，都可以隨時跟我們說～  \n謝謝您🤍",
                    "ko": "이후 궁금한 사항이나 더 알고 싶은 시술이 있으시면 언제든 말씀해 주세요~  \n감사합니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K298:N299"
              },
              {
                "id": "MISS-G-20261101-018",
                "recordIds": [
                  "MISS-G-20261101-018"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "필러",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "필러 가격 이미지를 보내고 개선하고 싶은 부위를 알려 주면 시술을 추천하겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "玻尿酸填充的價格這邊可以先給您參考喔😊",
                    "ko": "히알루론산 필러 가격을 우선 참고하실 수 있도록 안내해 드립니다😊",
                    "image": true
                  },
                  {
                    "date": "2026-11-02",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 말씀해 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K300:N302"
              },
              {
                "id": "MISS-G-20261101-019",
                "recordIds": [
                  "MISS-G-20261101-019"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "사각턱 보톡스",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "사각턱 보톡스 가격 이미지를 보내고 개선하고 싶은 부위를 알려 주면 시술을 추천하겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-02",
                    "original": "咀嚼肌肉毒的價格這邊可以先給您參考喔😊",
                    "ko": "사각턱 보톡스 가격을 우선 참고하실 수 있도록 안내해 드립니다😊"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 말씀해 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K303:N304"
              },
              {
                "id": "MISS-G-20261101-020",
                "recordIds": [
                  "MISS-G-20261101-020"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "온다",
                "category": "부위별 용량·예약",
                "verdict": "normal",
                "reason": "담당자는 팔은 한쪽에 100kJ를 권장한다고 답했으며 가이드 06 질문96의 팔뚝 한 쪽당 10만줄 이상 권장과 같다. 입가 살·이중턱에는 60~80kJ를 참고치로 안내했고 수가표 10의 페이스 온다 60KJ·80KJ 상품과 맞으며, 예약 요청에는 가능하다고 답하고 예약 양식을 안내했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "瘦手臂適合打ONDA 100kj嗎？",
                    "ko": "팔을 가늘게 하는 데 ONDA 100kj를 받는 것이 적합한가요？"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "那臉部會建議施作多少kj呢？",
                    "ko": "그럼 얼굴에는 몇 kj 시술을 권하시나요？"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "嘴邊肉跟下巴",
                    "ko": "입가 살과 턱"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "請問[예약 일시 가림]，可以預約嗎？",
                    "ko": "[예약 일시 가림]에 예약할 수 있나요？"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "如果主要想改善手臂脂肪跟蝴蝶袖線條，ONDA 100kJ 是可以考慮的喔😊",
                    "ko": "주로 팔 지방과 늘어진 팔뚝 라인을 개선하고 싶으시면 ONDA 100kJ를 고려하셔도 됩니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "ONDA 主要是針對局部脂肪＋緊實度做改善，一般一邊手臂會建議施作100kJ，但實際還是依據手臂的脂肪厚度、範圍跟想改善的程度會有所差異喔～",
                    "ko": "ONDA는 주로 국소 지방＋탄력 개선을 위한 것으로, 일반적으로 한쪽 팔에 100kJ 시술을 권장하지만 실제로는 팔 지방의 두께, 범위, 원하시는 개선 정도에 따라 달라집니다～"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "如果脂肪量比較多，可能會需要累積幾次療程，單次通常會有一些線條變化，但不太會一次就有非常大的圍度差異🤍",
                    "ko": "지방량이 많으면 여러 차례 시술을 누적해야 할 수 있습니다. 한 번에도 보통 어느 정도 라인 변화는 있지만 한 번만으로 둘레에 매우 큰 차이가 생기기는 어렵습니다🤍"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "如果主要想改善嘴邊肉＋雙下巴／下顎線，ONDA 通常可以先參考 60～80kJ 左右喔😊",
                    "ko": "주로 입가 살＋이중턱／턱선을 개선하고 싶으시면 ONDA는 보통 우선 60～80kJ 정도를 참고하시면 됩니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "不過 ONDA 不是單純能量越高效果就越好，還是會看您的臉部脂肪量、範圍跟凹陷程度來分配能量~",
                    "ko": "다만 ONDA는 단순히 에너지가 높을수록 효과가 좋은 것은 아니며, 얼굴 지방량, 범위, 꺼짐 정도를 보고 에너지를 배분합니다~"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "可以的喔~",
                    "ko": "가능합니다~"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "若需要預約的話，幫我們填寫表單，這邊就可以為您安排，謝謝😊",
                    "ko": "예약을 원하시면 양식을 작성해 주세요. 그러면 저희가 예약을 도와드릴 수 있습니다. 감사합니다😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K305:N320"
              },
              {
                "id": "MISS-G-20261101-021",
                "recordIds": [
                  "MISS-G-20261101-021"
                ],
                "kind": "inflow",
                "country": "JP",
                "procedure": "사각턱 보톡스",
                "category": "브랜드별 가격",
                "verdict": "normal",
                "reason": "담당자가 안내한 사각턱 보톡스 국산 43,500원·코어톡스 73,700원·제오민 143,000원·앨러간 197,000원은 수가표 10의 사각턱 보톡스 정가와 같다. 주입량은 근육 상태에 따라 내원 상담 후 정한다고 덧붙였다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-02",
                    "original": "お問い合わせいただきありがとうございます😊\nエラボトックスの料金をご案内いたします✨\n\nエラボトックス（50単位基準）\n韓国製：43,500ウォン\nコアトックス：73,700ウォン\nゼオミン：143,000ウォン\nアラガン：197,000ウォン\n\nなお、必要な注入量は筋肉の発達具合や状態によって個人差がございます。正確な注入量は、ご来院後にカウンセリングを行ったうえでご案内いたします😊\n\nご不明な点や気になることがございましたら、いつでもお気軽にお問い合わせくださいませ。\n\nご予約をご希望の場合も、すぐにお取りできますので、どうぞお気軽にお申し付けください✨",
                    "ko": "문의해 주셔서 감사합니다😊\n사각턱 보톡스 요금을 안내해 드립니다✨\n\n사각턱 보톡스(50단위 기준)\n국산：43,500원\n코어톡스：73,700원\n제오민：143,000원\n앨러간：197,000원\n\n필요한 주입량은 근육 발달 정도와 상태에 따라 개인차가 있습니다. 정확한 주입량은 내원 후 상담을 거쳐 안내해 드립니다😊\n\n궁금하거나 신경 쓰이는 점이 있으시면 언제든 편하게 문의해 주세요.\n\n예약을 원하시면 바로 도와드릴 수 있으니 편하게 말씀해 주세요✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K321:N323"
              },
              {
                "id": "MISS-G-20261101-023",
                "recordIds": [
                  "MISS-G-20261101-023"
                ],
                "kind": "consult",
                "country": "TH",
                "procedure": "슈링크 유니버스",
                "category": "추가 비용·관리자 연결",
                "verdict": "normal",
                "reason": "추가 비용 질문에 강남언니 표시 가격은 VAT 포함이며 시술을 추가하지 않으면 추가 비용이 없다고 답했다. 수가표 10의 강남언니 가격은 VAT 후 금액(슈링크 300샷 VAT 후 132,000원)으로 정리돼 있어 담당자의 답과 같고, 관리자 연결 요청에는 행사 이미지와 태국어 관리자 LINE 문의 경로를 안내했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "ราคาเพิ่มเติม",
                    "ko": "추가 가격"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "ติดต่อแอดมิน",
                    "ko": "관리자에게 연락"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "ราคาที่คุณเห็นใน UNNI เป็นราคาที่รวมภาษี VAT เรียบร้อยแล้วค่ะ 😊\n\nหากไม่มีการเพิ่มหัตถการหรือการรักษาอื่นเพิ่มเติม ก็จะไม่มีค่าใช้จ่ายเพิ่มเติมนะคะ 🤍",
                    "ko": "UNNI에서 보시는 가격은 이미 VAT가 포함된 가격입니다 😊\n\n다른 시술이나 치료를 추가하지 않으시면 추가 비용은 없습니다 🤍"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요. 현재 클리닉의 프로모션은 사진과 같습니다\n추가로 궁금한 점이 있으시면 LINE을 추가하여 편하게 문의해 주세요. 태국인 관리자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K324:N331"
              },
              {
                "id": "MISS-G-20261101-024",
                "recordIds": [
                  "MISS-G-20261101-024"
                ],
                "kind": "inflow",
                "country": "CN",
                "procedure": "사각턱 보톡스",
                "category": "브랜드별 가격",
                "verdict": "normal",
                "reason": "담당자가 안내한 사각턱 보톡스 50u 세후 가격 국산 43,500·코어 73,700·제오민 143,000·앨러간 197,000은 수가표 10의 사각턱 보톡스 정가와 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "咀嚼肌肉毒 50u ，税后的价格给您参考~\n韩国hitoex 43,500\n韩国coretex 73,700\n德国净优明 143,000\n美国爱力根 197,000",
                    "ko": "저작근 보톡스 50u ，세후 가격을 참고해 주세요~\n한국hitoex 43,500\n한국coretex 73,700\n독일 제오민 143,000\n미국 앨러간 197,000"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K332:N335"
              },
              {
                "id": "MISS-G-20261101-025",
                "recordIds": [
                  "MISS-G-20261101-025"
                ],
                "kind": "consult",
                "country": "MY",
                "procedure": "포텐자",
                "category": "팁 포함 여부·시술 범위",
                "verdict": "normal",
                "reason": "담당자는 가격에 팁이 포함되고 300샷은 부분 시술, 전안면은 500샷 이상을 권한다고 답했다. 수가표 10은 포텐자를 DDR팁 포함으로 표기하고 가이드 06 질문71은 얼굴 전체 기준 약 500샷으로 안내해 담당자의 답과 같다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "价钱包括针头？操作全脸还是局部？",
                    "ko": "가격에 바늘이 포함되나요？얼굴 전체에 하나요 아니면 일부에 하나요？"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "价格是有包含探头的，300发的话是比较针对局部施作",
                    "ko": "가격에는 팁이 포함되어 있으며, 300샷은 비교적 국소 부위 시술입니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "希望全脸的话会建议500发以上，我们这边提供给您的价目表上，都是施作范围全脸的费用",
                    "ko": "얼굴 전체를 원하시면 500샷 이상을 권장합니다. 저희가 드린 가격표는 모두 얼굴 전체 시술 비용입니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K336:N345"
              },
              {
                "id": "MISS-G-20261101-026",
                "recordIds": [
                  "MISS-G-20261101-026"
                ],
                "kind": "consult",
                "country": "US",
                "procedure": "아쿠아필·제네시스·포텐자·레이저 제모",
                "category": "가격·프로모션·짐 보관·음주",
                "verdict": "followup",
                "reason": "비키니 71,500원·다리 132,000원(1회)은 수가표 10의 여성 제모 1회 가격과 같고, 프로모션 가격표를 보냈으며 레이저 전 24시간·후 약 1주 금주도 안내했다. 고객이 물은 짐 보관 가능 여부에는 답하지 않았다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "Hi I’d like to do a aqua or hydra facial, pico gensis laser, potenza and maybe something soothing. I’d also like to do laser hair removal on my mustache and chin - \n\nhow much would the bikini and legs be as well?",
                    "ko": "안녕하세요 아쿠아 또는 하이드라 페이셜, 피코 젠시스 레이저, 포텐자와 진정 관리도 받고 싶어요. 윗입술과 턱의 레이저 제모도 하고 싶어요 - \n\n비키니 부위와 다리도 하면 얼마인가요?"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Awesome thank you! Do you have any promos going on for those treatments ?",
                    "ko": "좋네요 감사합니다! 그 시술들에 진행 중인 프로모션이 있나요 ?"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Perfect thank you! Will there be anywhere I can put my luggage I won’t be checked into my hotel yet",
                    "ko": "좋아요 감사합니다! 아직 호텔 체크인을 하지 않은 상태일 텐데 짐을 둘 곳이 있을까요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Lastly, will I be able to drink before and after the lasers? I want to make sure I am having the right before and after care :)",
                    "ko": "마지막으로 레이저 시술 전후에 술을 마셔도 될까요? 시술 전후 관리를 제대로 하고 싶어서요 :)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "Hello! \nWe offer Aqua Peel, Genesis, Potenza, and soothing skincare treatments! \nYou can discuss the most suitable combination during your in-person consultation, and our medical team will help you plan your treatments based on your skin condition. ✨\n\nFor laser hair removal, here are the prices:\n🌸 Bikini Area: ₩71,500\n🌸 Legs: ₩132,000\n\nThese prices are per session! 😊",
                    "ko": "안녕하세요! \n저희는 아쿠아필, 제네시스, 포텐자, 진정 피부 관리를 제공하고 있습니다! \n대면 상담에서 가장 적합한 조합을 의논하실 수 있으며, 의료진이 고객님의 피부 상태에 따라 시술 계획을 세우도록 도와드립니다. ✨\n\n레이저 제모 가격은 다음과 같습니다:\n🌸 비키니 부위: ₩71,500\n🌸 다리: ₩132,000\n\n이 가격은 회당 기준입니다! 😊",
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Here is our promotion price list for your reference 🌸",
                    "ko": "참고하시도록 저희 프로모션 가격표를 보내드립니다 🌸"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Hello, this is Beauty Blossom Clinic! 😊\n\nWe recommend avoiding alcohol for at least 24 hours before your laser treatment and for approximately 1 week afterward, as alcohol may increase redness, swelling, and skin irritation.\nDrinking water is absolutely fine, and staying well-hydrated is encouraged! \nThe recommended aftercare may vary depending on the type of laser treatment.",
                    "ko": "안녕하세요, Beauty Blossom Clinic입니다! 😊\n\n음주는 붉어짐, 부기, 피부 자극을 증가시킬 수 있으므로 레이저 시술 전 최소 24시간과 시술 후 약 1주일 동안은 피하시는 것을 권장합니다.\n물은 마셔도 전혀 괜찮으며, 충분한 수분 섭취를 권장합니다! \n권장되는 사후 관리는 레이저 시술 종류에 따라 다를 수 있습니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K346:N358"
              },
              {
                "id": "MISS-G-20261101-027",
                "recordIds": [
                  "MISS-G-20261101-027"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "사각턱 보톡스",
                "category": "가격 자료·예약 안내",
                "verdict": "image",
                "reason": "사각턱 보톡스 가격 이미지를 보내고 먼저 예약한 뒤 현장 상담에서 시술을 정할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "咀嚼肌肉毒的價格這邊可以先給您參考喔😊",
                    "ko": "저작근 보톡스 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我們都可以先安排預約，現場諮詢時再決定施作療程，都會根據您的需求推薦合適的項目給您~",
                    "ko": "우선 예약을 잡고 현장 상담 때 시술을 결정하셔도 됩니다. 고객님의 필요에 따라 적합한 항목을 추천해 드립니다~"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위도 말씀해 주시면, 더 적합한 시술을 우선 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K359:N365"
              },
              {
                "id": "MISS-G-20261101-032",
                "recordIds": [
                  "MISS-G-20261101-032"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "포텐자",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "포텐자 가격 이미지를 보내고 더 궁금한 점이나 알고 싶은 시술이 있으면 언제든 말해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "黃金微針的價格這邊可以先給您參考喔😊",
                    "ko": "황금 미세침 가격을 먼저 참고하실 수 있도록 보내 드립니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "後續如果還有任何問題，或是有想再了解的療程，都可以隨時跟我們說～  \n謝謝您🤍",
                    "ko": "이후에도 궁금한 점이나 더 알아보고 싶은 시술이 있으면 언제든 저희에게 말씀해 주세요～  \n감사합니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K403:N407"
              },
              {
                "id": "MISS-G-20261101-033",
                "recordIds": [
                  "MISS-G-20261101-033"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "슈링크 유니버스(하이푸)",
                "category": "턱선 행사 가격·여행 중 시술 시점",
                "verdict": "normal",
                "reason": "턱선 행사 가격 질문에 가격 이미지를 보내고 턱선 부분 개선에는 300샷을 고려할 수 있다고 답했으며, 수가표 10에 슈링크 300샷 상품이 있다. 여행 셋째 날 시술 후 다음 날 귀국 일정에는 마지막 날 시술도 가능하고 시술은 현장 상담에서 정한다고 답했다.",
                "questionDate": "2026-11-01",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-11-01",
                    "original": "想先詢問音波下顎線的部分目前的活動價格～",
                    "ko": "먼저 초음파 턱선 부분의 현재 행사 가격을 여쭤보고 싶어요～"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我們是排旅程的第三天施做 隔天回國～\n您覺得合適嗎～",
                    "ko": "저희는 여행 셋째 날에 시술받고 다음 날 귀국할 예정입니다～\n적절하다고 생각하시나요～"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "海芙音波的價格這邊可以先給您參考喔😊",
                    "ko": "하이푸 초음파 가격을 먼저 참고하실 수 있도록 보내 드립니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "如果希望針對下顎線部分區域改善，可以考慮300發的部份~",
                    "ko": "턱선 일부 부위의 개선을 원하시면 300샷을 고려하셔도 됩니다~"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "大部分的客人都會選擇療程第一天或最後一天進行，所以您排最後一天也是可以的喔!",
                    "ko": "대부분의 고객님이 시술을 첫날이나 마지막 날에 받는 것을 선택하시므로 마지막 날로 잡으셔도 괜찮습니다!"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我們都可以現場諮詢時再決定施作療程，都會根據您的需求推薦合適的項目給您~",
                    "ko": "현장 상담 때 시술을 결정하셔도 됩니다. 고객님의 필요에 따라 적합한 항목을 추천해 드립니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K408:N420"
              },
              {
                "id": "MISS-G-20261101-034",
                "recordIds": [
                  "MISS-G-20261101-034"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "가격표 이미지를 보내고 궁금한 점은 언제든 문의해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "ทางเราส่งตารางราคามาให้ดูเป็นข้อมูลประกอบนะคะ 😊 \nหากมีข้อสงสัยหรือต้องการสอบถามเพิ่มเติม สามารถทักมาสอบถามได้ตลอดเลยค่ะ ขอบคุณค่ะ 💖",
                    "ko": "참고하시도록 가격표를 보내 드립니다 😊 \n궁금한 점이 있거나 추가로 문의하고 싶으시면 언제든 연락해 주세요. 감사합니다 💖"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K421:N425"
              },
              {
                "id": "MISS-G-20261101-036",
                "recordIds": [
                  "MISS-G-20261101-036"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "바디 조각주사",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "바디 조각주사 가격 이미지를 보내고 개선하고 싶은 부위를 알려 주면 시술을 추천하겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "身體雕刻針的價格這邊可以先給您參考喔😊",
                    "ko": "바디 조각 주사 가격을 먼저 참고하실 수 있도록 보내 드립니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위도 말씀해 주시면 비교적 적합한 시술을 우선 추천해 드리겠습니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K432:N437"
              },
              {
                "id": "MISS-G-20261101-038",
                "recordIds": [
                  "MISS-G-20261101-038"
                ],
                "kind": "inflow",
                "country": "SG",
                "procedure": "포텐자",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "프로모션 가격표 이미지를 보내고 문의·예약은 언제든 연락해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Hello!  Here is our promotional price list for your reference.\nIf you have any questions or would like to make a reservation, please feel free to contact us anytime!ㅁ",
                    "ko": "안녕하세요! 참고하시도록 저희 프로모션 가격표를 보내 드립니다.\n궁금한 점이 있거나 예약을 원하시면 언제든 편하게 연락해 주세요!ㅁ"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K446:N450"
              },
              {
                "id": "MISS-G-20261101-040",
                "recordIds": [
                  "MISS-G-20261101-040"
                ],
                "kind": "inflow",
                "country": "IT",
                "procedure": "기초 피부관리",
                "category": "문의 접수",
                "verdict": "normal-ops",
                "reason": "기초 피부관리 상품 유입에 무엇을 도와드릴지 물었다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "Hello! How may I help you ?",
                    "ko": "안녕하세요! 무엇을 도와드릴까요?"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K454:N457"
              },
              {
                "id": "MISS-G-20261101-046",
                "recordIds": [
                  "MISS-G-20261101-046"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "태국어 행사 이미지를 보내고 LINE으로 태국인 관리자·통역사에게 추가 문의할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요. 현재 클리닉에서는 사진과 같은 프로모션을 진행하고 있습니다\n추가로 궁금한 점이 있으면 LINE을 추가하여 문의해 주세요. 태국인 관리자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K475:N478"
              },
              {
                "id": "MISS-G-20261101-050",
                "recordIds": [
                  "MISS-G-20261101-050"
                ],
                "kind": "inflow",
                "country": "JP",
                "procedure": "브라질리언 제모",
                "category": "예약 양식 안내",
                "verdict": "normal-ops",
                "reason": "제모 상품 유입에 예약을 원하면 이름·생년월일·희망 시술·희망 내원 일시 양식을 작성해 회신해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "ご予約の際は、下記のフォームをご記入の上ご返信お願い致します✨\n\n1. お名前（ローマ字）：\n2. 生年月日：\n3. ご希望の施術：\n4. ご希望のご来院日時：",
                    "ko": "예약하실 때는 아래 양식을 작성하여 답장해 주시기 바랍니다✨\n\n1. 성함(로마자)：\n2. 생년월일：\n3. 희망 시술：\n4. 희망 내원 일시："
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K482:N484"
              },
              {
                "id": "MISS-G-20261101-051",
                "recordIds": [
                  "MISS-G-20261101-051"
                ],
                "kind": "inflow",
                "country": "JP",
                "procedure": "코어톡스",
                "category": "예약 양식 안내",
                "verdict": "normal-ops",
                "reason": "코어톡스 상품 유입에 예약을 원하면 이름·생년월일·희망 시술·희망 내원 일시 양식을 작성해 회신해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "ご予約の際は、下記のフォームをご記入の上ご返信お願い致します✨\n\n1. お名前（ローマ字）：\n2. 生年月日：\n3. ご希望の施術：\n4. ご希望のご来院日時：",
                    "ko": "예약하실 때는 아래 양식을 작성하여 답장해 주시기 바랍니다✨\n\n1. 성함(로마자)：\n2. 생년월일：\n3. 희망 시술：\n4. 희망 내원 일시："
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K485:N488"
              }
            ],
            "merged": [
              {
                "recordId": "MISS-G-20261101-031",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-031"
              },
              {
                "recordId": "MISS-G-20261101-045",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-045"
              },
              {
                "recordId": "MISS-G-20261101-035",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-035"
              },
              {
                "recordId": "MISS-G-20261101-016",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-016"
              },
              {
                "recordId": "MISS-G-20261101-037",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-037"
              },
              {
                "recordId": "MISS-G-20261101-039",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-039"
              },
              {
                "recordId": "MISS-G-20261101-042",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-042"
              },
              {
                "recordId": "MISS-G-20261101-043",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-043"
              },
              {
                "recordId": "MISS-G-20261101-044",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-044"
              },
              {
                "recordId": "MISS-G-20261101-047",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-047"
              },
              {
                "recordId": "MISS-G-20261101-048",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-048"
              },
              {
                "recordId": "MISS-G-20261101-049",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-049"
              }
            ],
            "unavailable": {
              "recordIds": [
                "MISS-G-20261101-002",
                "MISS-G-20261101-005",
                "MISS-G-20261101-006",
                "MISS-G-20261101-011",
                "MISS-G-20261101-012",
                "MISS-G-20261101-022",
                "MISS-G-20261101-041",
                "MISS-G-20261101-054",
                "MISS-G-20261101-055",
                "MISS-G-20261101-056",
                "MISS-G-20261101-057",
                "MISS-G-20261101-058",
                "MISS-G-20261101-059",
                "MISS-G-20261101-060",
                "MISS-G-20261101-061",
                "MISS-G-20261101-062",
                "MISS-G-20261101-063",
                "MISS-G-20261101-064",
                "MISS-G-20261101-066",
                "MISS-G-20261101-067",
                "MISS-G-20261101-068",
                "MISS-G-20261101-069",
                "MISS-G-20261101-070",
                "MISS-G-20261101-071",
                "MISS-G-20261101-072",
                "MISS-G-20261101-073",
                "MISS-G-20261101-074",
                "MISS-G-20261101-075",
                "MISS-G-20261101-076",
                "MISS-G-20261101-077",
                "MISS-G-20261101-078"
              ]
            }
          }
        },
        {
          "platform": "gangnamunni",
          "date": "2026-10-31",
          "status": "partial",
          "auditState": "source-availability-partial",
          "checkedAt": "2026-11-02T02:43:15.784Z",
          "qaAuditCheckedAt": "2026-11-02T02:43:15.784Z",
          "cutoffAt": "2026-10-31T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "제한 안전 본문 부분집합만 확보했으며 임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-10-31",
            "observedAt": "2026-11-02T02:43:15.784Z",
            "evidenceScope": "native-safe-body-subset",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 78,
            "bodyRoomsOpened": 76,
            "actualBodyDateMembership": "confirmed-subset",
            "reason": "두 대상일 공동 원천 풀의 안전 본문 76개를 한 번씩 열람. 날짜별 76개 재열람 또는 총 152회가 아님. 대상일 전체 분모와 임상 검수는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "보호 후보 2개는 미열람. 다른 날짜 본문을 보았어도 대상일 소속이 확인되지 않으면 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-G-20261031-001",
              "country": "US",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T23:45:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K2:N6",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A3:AF3",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A4:AF4",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A5:AF5",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A6:AF6",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A7:AF7",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A8:AF8",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A9:AF9",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A10:AF10",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A11:AF11",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A12:AF12",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-012",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A13:AF13",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-013",
              "country": "TW",
              "consultationAt": "2026-10-31T00:12:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T00:12:00+09:00",
                "lastAt": "2026-10-31T00:12:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T00:12:00+09:00",
                "lastAt": "2026-10-31T09:58:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K7:N14",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-014",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A15:AF15",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-015",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A16:AF16",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-016",
              "country": "TW",
              "consultationAt": "2026-10-31T12:30:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T12:30:00+09:00",
                "lastAt": "2026-10-31T12:30:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T12:33:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K15:N22",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-017",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A18:AF18",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-018",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A19:AF19",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-019",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A20:AF20",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-020",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A21:AF21",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-021",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A22:AF22",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-022",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A23:AF23",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-023",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A24:AF24",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-024",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A25:AF25",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-025",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A26:AF26",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-026",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A27:AF27",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-027",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A28:AF28",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-028",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A29:AF29",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-029",
              "country": "JP",
              "consultationAt": "2026-10-31T11:02:00+09:00",
              "language": "일본어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T11:02:00+09:00",
                "lastAt": "2026-10-31T11:02:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": null,
                "lastAt": "2026-10-31T11:02:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K23:N32",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-030",
              "country": "TW",
              "consultationAt": "2026-10-31T07:57:00+09:00",
              "language": "중국어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T07:57:00+09:00",
                "lastAt": "2026-10-31T07:57:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T07:57:00+09:00",
                "lastAt": "2026-10-31T09:59:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K33:N36",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-031",
              "country": "JP",
              "consultationAt": "2026-10-31T19:32:00+09:00",
              "language": "일본어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T19:32:00+09:00",
                "lastAt": "2026-10-31T19:32:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T19:32:00+09:00",
                "lastAt": "2026-10-31T19:32:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K37:N39",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-032",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A33:AF33",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-033",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A34:AF34",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-034",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A35:AF35",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-035",
              "country": "TW",
              "consultationAt": "2026-10-31T15:08:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T15:08:00+09:00",
                "lastAt": "2026-10-31T17:16:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T15:08:00+09:00",
                "lastAt": "2026-10-31T17:16:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K40:N45",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-036",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A37:AF37",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-037",
              "country": "TW",
              "consultationAt": "2026-10-31T16:11:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T16:11:00+09:00",
                "lastAt": "2026-10-31T16:31:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T16:31:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K46:N53",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-038",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A39:AF39",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-039",
              "country": "MY",
              "consultationAt": "2026-10-31T16:01:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T16:01:00+09:00",
                "lastAt": "2026-10-31T17:19:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T17:19:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K54:N61",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-040",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A41:AF41",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-041",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A42:AF42",
              "scopeNote": "보호 후보 본문 미열람. 대상일 소속과 질문·답변은 미확인. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-042",
              "country": "TW",
              "consultationAt": "2026-10-31T22:24:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T22:24:00+09:00",
                "lastAt": "2026-10-31T22:24:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T22:24:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K62:N66",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-043",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K67:N69",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-044",
              "country": "TW",
              "consultationAt": "2026-10-31T19:57:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T19:57:00+09:00",
                "lastAt": "2026-10-31T19:57:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T19:57:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K70:N74",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-045",
              "country": "TW",
              "consultationAt": "2026-10-31T16:44:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T16:44:00+09:00",
                "lastAt": "2026-10-31T16:44:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T15:58:00+09:00",
                "lastAt": "2026-10-31T16:44:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K75:N78",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-046",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A47:AF47",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-047",
              "country": "JP",
              "consultationAt": "2026-10-31T09:48:00+09:00",
              "language": "일본어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T09:48:00+09:00",
                "lastAt": "2026-10-31T22:32:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T09:42:00+09:00",
                "lastAt": "2026-10-31T22:32:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K79:N92",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-048",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K93:N95",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-049",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T18:40:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K96:N100",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-050",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A51:AF51",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-051",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A52:AF52",
              "scopeNote": "안전 조건의 본문은 열렸으나 대상일 원문과 소속은 미확인. 다른 날짜 문맥을 대상일 질문·답변으로 사용하지 않음. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-052",
              "country": "TW",
              "consultationAt": "2026-10-31T15:58:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T15:58:00+09:00",
                "lastAt": "2026-10-31T15:58:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K101:N102",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-053",
              "country": "TW",
              "consultationAt": "2026-10-31T15:57:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T15:57:00+09:00",
                "lastAt": "2026-10-31T15:57:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K103:N104",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-054",
              "country": "JP",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T14:58:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K105:N109",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-055",
              "country": "TW",
              "consultationAt": "2026-10-31T14:15:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T14:15:00+09:00",
                "lastAt": "2026-10-31T14:47:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K110:N137",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-056",
              "country": "TH",
              "consultationAt": "2026-10-31T13:52:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T13:52:00+09:00",
                "lastAt": "2026-10-31T14:28:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T14:29:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K138:N150",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-057",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T13:43:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K151:N156",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-058",
              "country": "DK",
              "consultationAt": "2026-10-31T12:55:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T12:55:00+09:00",
                "lastAt": "2026-10-31T13:31:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K157:N159",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-059",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T13:28:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K160:N163",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-060",
              "country": "US",
              "consultationAt": "2026-10-31T13:10:00+09:00",
              "language": "영어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T13:10:00+09:00",
                "lastAt": "2026-10-31T13:10:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T12:58:00+09:00",
                "lastAt": "2026-10-31T13:11:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K164:N167",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-061",
              "country": "TW",
              "consultationAt": null,
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T11:31:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T11:39:00+09:00",
                "lastAt": "2026-10-31T11:42:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K168:N174",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-062",
              "country": "TW",
              "consultationAt": "2026-10-31T11:02:00+09:00",
              "language": "일본어 · 중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T11:02:00+09:00",
                "lastAt": "2026-10-31T11:11:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T10:59:00+09:00",
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K175:N185",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-063",
              "country": "TW",
              "consultationAt": "2026-10-31T11:04:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T11:04:00+09:00",
                "lastAt": "2026-10-31T11:04:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": null,
                "lastAt": "2026-10-31T11:04:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K186:N191",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-064",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A65:AF65",
              "scopeNote": "보호 후보 본문 미열람. 대상일 소속과 질문·답변은 미확인. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-G-20261031-065",
              "country": "JP",
              "consultationAt": "2026-10-31T09:08:00+09:00",
              "language": "일본어",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:08:00+09:00",
                "lastAt": "2026-10-31T09:08:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": null,
                "lastAt": "2026-10-31T10:14:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K192:N200",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-066",
              "country": "JP",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T10:11:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K201:N204",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-067",
              "country": "JP",
              "consultationAt": "2026-10-31T10:10:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T10:10:00+09:00",
                "lastAt": "2026-10-31T10:10:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K205:N205",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-068",
              "country": "TW",
              "consultationAt": "2026-10-31T09:20:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T09:20:00+09:00",
                "lastAt": "2026-10-31T10:01:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K206:N211",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-069",
              "country": "TW",
              "consultationAt": "2026-10-31T08:54:00+09:00",
              "language": "중국어 번체",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T08:54:00+09:00",
                "lastAt": "2026-10-31T08:54:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T10:00:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K212:N220",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-070",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": "2026-10-31T09:59:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K221:N226",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-071",
              "country": "TW",
              "consultationAt": "2026-10-31T09:52:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-31T09:52:00+09:00",
                "lastAt": "2026-10-31T09:53:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K227:N228",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-072",
              "country": "TW",
              "consultationAt": "2026-10-31T09:52:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:52:00+09:00",
                "lastAt": "2026-10-31T09:52:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K229:N230",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-073",
              "country": "US",
              "consultationAt": "2026-10-31T09:52:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:52:00+09:00",
                "lastAt": "2026-10-31T09:52:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K231:N232",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-074",
              "country": "CA",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": "2026-10-31T09:51:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K233:N236",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-075",
              "country": "AU",
              "consultationAt": "2026-10-31T09:51:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:51:00+09:00",
                "lastAt": "2026-10-31T09:51:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K237:N237",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-076",
              "country": "TH",
              "consultationAt": "2026-10-31T09:50:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:50:00+09:00",
                "lastAt": "2026-10-31T09:50:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K238:N238",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-077",
              "country": "AU",
              "consultationAt": "2026-10-31T09:50:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-31T09:50:00+09:00",
                "lastAt": "2026-10-31T09:50:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K239:N239",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            },
            {
              "id": "MISS-G-20261031-078",
              "country": "TW",
              "consultationAt": "2026-10-31T09:49:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": null,
                "firstAt": "2026-10-31T09:49:00+09:00",
                "lastAt": "2026-10-31T09:49:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K240:N241",
              "scopeNote": "대상일 원천 일부만 확인. 원문과 한국어 번역은 제한 원장에만 보관. 임상 의미·첨부 미검수. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "targetDate": "2026-10-31",
              "hasOriginal": true
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [
              {
                "id": "MISS-G-20261031-031",
                "recordIds": [
                  "MISS-G-20261031-031"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "사각턱 보톡스",
                "category": "방문일 변경",
                "verdict": "normal-ops",
                "reason": "예약일에 못 맞추면 다른 날 방문해도 되는지 묻자 담당자는 가능하다고 답하고 날짜·시간 변경을 원하면 언제든 알려 달라고 안내했다. 일정 변경에 대한 운영 응대다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "ちなみに[방문일 가림]もしかしたら間に合わないかもしれないんですけどその場合[대체 예약일]でも大丈夫ですか？",
                    "ko": "참고로 [방문일 가림] 어쩌면 시간에 맞추지 못할 수도 있는데 그 경우 [대체 예약일]이어도 괜찮을까요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "はい、可能でございます。\n日程やお時間の変更をご希望の場合は、いつでもお気軽にお申し付けくださいませ😊",
                    "ko": "네, 가능합니다.\n일정이나 시간 변경을 원하시면 언제든 편하게 말씀해 주세요😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K37:N39"
              },
              {
                "id": "MISS-G-20261031-045",
                "recordIds": [
                  "MISS-G-20261031-045"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "방문 확인",
                "verdict": "normal-ops",
                "reason": "전날 방문 확인 메시지에 고객이 시간 맞춰 오겠다고 답하자 담당자는 회신에 감사하며 이따 뵙겠다고 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "會準時到 謝謝",
                    "ko": "정시에 도착하겠습니다 감사합니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "沒問題，謝謝您的回覆，晚點見囉😊",
                    "ko": "문제없습니다. 답변해 주셔서 감사합니다. 조금 후에 뵙겠습니다😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K75:N78"
              },
              {
                "id": "MISS-G-20261031-052",
                "recordIds": [
                  "MISS-G-20261031-052"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "방문 예정 확인",
                "verdict": "normal-ops",
                "reason": "담당자가 다음 날 3명 예약에 예정대로 오는지 묻고 합정역 3번 출구 옆 건물 6층 접수와 일정 변경 시 사전 연락을 안내했다. 가이드 11의 대만 예약 완료 문구도 병원 위치를 합정역 3번 출구 Medione Medical Center 6층으로 안내해 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "您好，這裡是麗朵 Beauty Blossom 皮膚科🌸\n想跟您確認一下，[방문일 가림] [3位] 於 [예약시간] 的預約是否會如期前來呢？😊\n\n📍診所位於合井站 3 號出口旁的大樓，抵達後直接至 6 樓櫃台報到即可。\n詳細地址及地圖導航，可至 LINE 選單點選「地址」查看。\n\n若行程有任何變動，再麻煩提前告訴我們～\n期待[방문일 가림]與您見面✨",
                    "ko": "안녕하세요, 麗朵 Beauty Blossom 피부과입니다🌸\n[방문일 가림] [3位]의 [예약시간] 예약에 예정대로 오시는지 확인하고 싶습니다😊\n\n📍클리닉은 합정역 3번 출구 옆 건물에 있습니다. 도착하시면 바로 6층 데스크에서 접수해 주세요.\n자세한 주소와 지도 길찾기는 LINE 메뉴에서 「주소」를 선택해 확인하실 수 있습니다.\n\n일정에 변동이 있으면 미리 알려 주세요～\n[방문일 가림] 뵙기를 기대하겠습니다✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K101:N102"
              },
              {
                "id": "MISS-G-20261031-053",
                "recordIds": [
                  "MISS-G-20261031-053"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "방문 예정 확인",
                "verdict": "normal-ops",
                "reason": "담당자가 다음 날 1명 예약에 예정대로 오는지 묻고 합정역 3번 출구 옆 건물 6층 접수와 일정 변경 시 사전 연락을 안내했다. 가이드 11의 대만 예약 완료 문구도 병원 위치를 합정역 3번 출구 Medione Medical Center 6층으로 안내해 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "您好，這裡是麗朵 Beauty Blossom 皮膚科🌸\n想跟您確認一下，[방문일 가림] [1位] 於 [예약시간] 的預約是否會如期前來呢？😊\n\n📍診所位於合井站 3 號出口旁的大樓，抵達後直接至 6 樓櫃台報到即可。\n詳細地址及地圖導航，可至 LINE 選單點選「地址」查看。\n\n若行程有任何變動，再麻煩提前告訴我們～\n期待[방문일 가림]與您見面✨",
                    "ko": "안녕하세요, 麗朵 Beauty Blossom 피부과입니다🌸\n[방문일 가림] [1位]의 [예약시간] 예약에 예정대로 오시는지 확인하고 싶습니다😊\n\n📍클리닉은 합정역 3번 출구 옆 건물에 있습니다. 도착하시면 바로 6층 데스크에서 접수해 주세요.\n자세한 주소와 지도 길찾기는 LINE 메뉴에서 「주소」를 선택해 확인하실 수 있습니다.\n\n일정에 변동이 있으면 미리 알려 주세요～\n[방문일 가림] 뵙기를 기대하겠습니다✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K103:N104"
              },
              {
                "id": "MISS-G-20261031-035",
                "recordIds": [
                  "MISS-G-20261031-035"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "현장 상담",
                "category": "예약 시간·예약 완료",
                "verdict": "normal-ops",
                "reason": "희망일 오전 예약 가능 여부에 담당자는 오전 10시부터 오후 6시까지 가능하다고 답했고, 고객이 예약 정보를 보내자 예약 완료 문구로 날짜·주소·여권 지참·상담료 10,000원을 안내했다. 예약 완료 문구는 가이드 11의 대만 예약 완료 템플릿과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "請問如果是[예약일]的話，可以約早上嗎～",
                    "ko": "혹시 [예약일]이면 오전으로 예약할 수 있을까요～"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "我想先約[예약시간]🙏🏻",
                    "ko": "우선 [예약시간]으로 예약하고 싶습니다🙏🏻"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "✍️ 預約資訊填寫\n若需要預約的話，再麻煩您填寫以下資訊並傳給我們，謝謝😊\n\n・護照英文姓名（姓氏在前/統一大寫）：[고객명]\n・生日（西元 YYYY/MM/DD）：[생년월일]\n・希望療程：現場諮詢\n・預約日期&時間：[예약일시]\n・是否希望進行皮膚檢測：是\n※ 不確定療程也沒關係，可填「現場諮詢」\n👭 若有同行的朋友，請每位分別填寫一份預約資訊喔！",
                    "ko": "✍️ 예약 정보 작성\n예약이 필요하시면 아래 정보를 작성하여 저희에게 보내 주세요. 감사합니다😊\n\n・여권 영문 성명（성을 앞에/모두 대문자로）：[고객명]\n・생년월일（서기 YYYY/MM/DD）：[생년월일]\n・희망 시술：현장 상담\n・예약 날짜&시간：[예약일시]\n・피부 검사를 원하시는지：네\n※ 시술을 정하지 못하셔도 괜찮습니다. 「현장 상담」으로 작성하셔도 됩니다\n👭 동행 친구가 있으면 각자 예약 정보를 한 부씩 작성해 주세요!"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "[예약일]的話早上十點到下午六點，這之間也都可以為您安排喔~",
                    "ko": "[예약일]이면 오전 10시부터 오후 6시 사이에도 모두 예약해 드릴 수 있습니다~"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "🌸 Beauty Blossom 預約完成 ✅\n\n📅 預約日期：[예약일]\n⏰ 預約時間：[예약시간]\n👤 預約人數：1位\n\n📍 診所地址\n首爾特別市麻浦區楊花路66號\nMedione Medical Center 6樓\n（合井站3號出口）\n💡 英文／韓文地址及地圖導航，可至 LINE 選單點選「地址」查看。\n\n📌 來院前請留意\n・來院時請務必攜帶護照，以便辦理登記。\n・如需更改或取消預約，請提前透過 LINE 與我們聯繫。\n・若當天僅進行諮詢、未接受療程，將收取 ₩10,000 諮詢費。\n\n感謝您的預約，期待您的到來💗",
                    "ko": "🌸 Beauty Blossom 예약 완료 ✅\n\n📅 예약 날짜：[예약일]\n⏰ 예약 시간：[예약시간]\n👤 예약 인원：1명\n\n📍 클리닉 주소\n서울특별시 마포구 양화로66\nMedione Medical Center 6층\n（합정역3번 출구）\n💡 영문／한글 주소 및 지도 길안내는 LINE 메뉴에서 「주소」를 눌러 확인하실 수 있습니다.\n\n📌 내원 전 유의사항\n・내원 시 등록을 위해 반드시 여권을 지참해 주세요.\n・예약 변경이나 취소가 필요하면 미리 LINE으로 연락해 주세요.\n・당일 상담만 진행하고 시술을 받지 않으시면 ₩10,000의 상담료가 부과됩니다.\n\n예약해 주셔서 감사합니다. 방문을 기다리겠습니다💗"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "這邊已經幫您完成預約囉😊  \n後續如果還有任何問題，或是有想再了解的療程，都可以隨時跟我們說～  \n謝謝您🤍",
                    "ko": "여기서 예약을 완료해 드렸습니다😊  \n이후에도 궁금한 점이나 더 알아보고 싶은 시술이 있으면 언제든 저희에게 말씀해 주세요～  \n감사합니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K40:N45"
              },
              {
                "id": "MISS-G-20261031-030",
                "recordIds": [
                  "MISS-G-20261031-030"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "골드 미세침(포텐자)",
                "category": "방문 확인",
                "verdict": "normal-ops",
                "reason": "10월 30일 담당자의 방문 확인 문의에 고객이 10월 31일 '네'라고 답하자 회신에 감사하며 방문을 기다리겠다고 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "是",
                    "ko": "네"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "沒問題，謝謝您的回覆，期待您的到來😊",
                    "ko": "문제없습니다. 답변해 주셔서 감사합니다. 방문을 기다리겠습니다😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K33:N36"
              },
              {
                "id": "MISS-G-20261031-061",
                "recordIds": [
                  "MISS-G-20261031-061"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "리쥬란·릴리이드 M",
                "category": "예약 변경",
                "verdict": "normal-ops",
                "reason": "예약 변경 요청에 변경하겠다고 답하고 예약 완료 안내문을 보냈다. 안내문은 가이드 11의 중국어 번체 예약 완료 문구와 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "改約[변경 예약일]",
                    "ko": "[변경 예약일]로 예약 변경"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개]",
                    "ko": "[예약일시비공개]"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "好的，那這邊為您修改預約喔~",
                    "ko": "네, 그럼 예약을 변경해 드리겠습니다~"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "🌸 Beauty Blossom 預約完成 ✅\n\n📅 預約日期：[예약일시비공개]\n⏰ 預約時間：[예약일시비공개]\n👤 預約人數：2位\n\n📍 診所地址\n首爾特別市麻浦區楊花路66號\nMedione Medical Center 6樓\n（合井站3號出口）\n💡 英文／韓文地址及地圖導航，可至 LINE 選單點選「地址」查看。\n\n📌 來院前請留意\n・來院時請務必攜帶護照，以便辦理登記。\n・如需更改或取消預約，請提前透過 LINE 與我們聯繫。\n・若當天僅進行諮詢、未接受療程，將收取 ₩10,000 諮詢費。\n\n感謝您的預約，期待您的到來💗",
                    "ko": "🌸 Beauty Blossom 예약 완료 ✅\n\n📅 예약 날짜：[예약일시비공개]\n⏰ 예약 시간：[예약일시비공개]\n👤 예약 인원：2명\n\n📍 병원 주소\n서울특별시 마포구 양화로66\nMedione Medical Center 6층\n（합정역3번 출구）\n💡 영문／한국어 주소와 지도 길찾기는 LINE 메뉴에서 「주소」를 눌러 확인하실 수 있습니다.\n\n📌 내원 전 유의사항\n・접수를 위해 내원 시 반드시 여권을 지참해 주세요.\n・예약 변경이나 취소가 필요하면 미리 LINE으로 연락해 주세요.\n・당일 상담만 받고 시술을 받지 않으면 ₩10,000 상담료가 부과됩니다.\n\n예약해 주셔서 감사합니다. 방문을 기다리겠습니다💗"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K168:N174"
              },
              {
                "id": "MISS-G-20261031-060",
                "recordIds": [
                  "MISS-G-20261031-060"
                ],
                "kind": "ops",
                "country": "US",
                "procedure": "사각턱 보톡스",
                "category": "지각·이동 안내",
                "verdict": "normal-ops",
                "reason": "교통 체증으로 늦는다는 고객에게 괜찮으니 서두르지 말고 오라고 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "Hi, so sorry I am on the way! The traffic is bad right now...",
                    "ko": "안녕하세요, 정말 죄송해요. 가고 있습니다! 지금 교통 체증이 심하네요..."
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "No worries at all! Please take your time and travel safely. We look forward to seeing you! 😊",
                    "ko": "전혀 괜찮습니다! 서두르지 마시고 안전하게 오세요. 뵙기를 기다리겠습니다! 😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K164:N167"
              },
              {
                "id": "MISS-G-20261031-013",
                "recordIds": [
                  "MISS-G-20261031-013"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "HIFU 리프팅(300샷)",
                "category": "샷 수·효과",
                "verdict": "normal",
                "reason": "300샷으로 팔자주름·이중턱이 개선되는지 묻자 국소 보강용이며 충분한지는 현재 상태와 원하는 개선 정도로 평가한다고 답했다. 가이드 02·01은 피부 두께와 처짐 정도에 따라 샷 수가 달라지고 샷 수는 시술 범위와 계획에 따라 정한다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "300發可以改善法令紋跟雙下巴嗎？",
                    "ko": "300샷으로 팔자주름과 이중턱을 개선할 수 있나요？"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "300發就是比較針對局部區域做加強，也需要依據您目前狀況及希望改善的程度來評估是否足夠~",
                    "ko": "300샷은 비교적 국소 부위를 집중적으로 보강하는 것으로, 충분한지는 현재 상태와 원하시는 개선 정도에 따라 평가해야 합니다~"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "如果比較重視拉提效果跟維持時間，也可以一起參考美國音波，整體拉提感通常會再更明顯一些🤍",
                    "ko": "리프팅 효과와 유지 기간을 더 중요하게 생각하신다면 미국 초음파도 함께 참고해 보셔도 좋습니다. 전반적인 리프팅 느낌이 보통 좀 더 뚜렷합니다🤍"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "我們都可以先安排預約，現場諮詢時再決定施作療程，都會根據您的需求推薦合適的項目給您~",
                    "ko": "우선 예약을 잡고 현장 상담 때 시술을 결정하셔도 됩니다. 고객님의 필요에 따라 적합한 항목을 추천해 드립니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K7:N14"
              },
              {
                "id": "MISS-G-20261031-072",
                "recordIds": [
                  "MISS-G-20261031-072"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "HIFU 리프팅(300샷)",
                "category": "방문 확인 회신",
                "verdict": "normal-ops",
                "reason": "방문 확인 문의에 고객이 10월 30일 오겠다고 답하자 10월 31일 회신에 감사하며 이따 뵙겠다고 답했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "會到喔～",
                    "ko": "방문할게요～"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "沒問題，謝謝您的回覆，晚點見囉😊",
                    "ko": "문제없어요, 답변해 주셔서 감사합니다. 이따 뵐게요😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K229:N230"
              },
              {
                "id": "MISS-G-20261031-055",
                "recordIds": [
                  "MISS-G-20261031-055"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "포텐자(골드 미세침) 300샷",
                "category": "가격·횟수·예약·위치·통역",
                "verdict": "normal",
                "reason": "1회에도 개선이 있지만 모공·흉터는 여러 번 누적해야 효과가 뚜렷하다고 답했고, 가이드 02는 포텐자를 4주 간격 3~5회 이상 반복하도록 안내한다. 강남언니 이벤트가 현장에서도 같은 가격이라는 답은 가이드 06과 같고, 주소 메디원 6층·8층과 6층 접수 안내는 가이드 07과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "請問有價格參考嗎謝謝",
                    "ko": "참고할 가격이 있나요? 감사합니다"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "我有看到這個活動 請問這是有嗎謝謝",
                    "ko": "이 이벤트를 봤는데, 이것도 있나요? 감사합니다"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "請問黃金微針會一次有改善 還是要定期施打才有改變",
                    "ko": "골드 마이크로니들은 한 번으로 개선되나요, 아니면 정기적으로 받아야 변화가 있나요"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "做這項目也可以改善我的膚況嗎",
                    "ko": "이 시술을 해도 제 피부 상태가 개선될 수 있나요"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "那我想先預約黃金微針300發",
                    "ko": "그럼 우선 골드 마이크로니들 300샷을 예약하고 싶습니다"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "[고객명]\n[생년월일]\n黃金微針300發\n[예약일시]",
                    "ko": "[고객명]\n[생년월일]\n골드 마이크로니들 300샷\n[예약일시]"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "請問你們的店舖位置",
                    "ko": "병원 위치가 어디인가요"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "請問去的時候講中文可以通嗎",
                    "ko": "방문했을 때 중국어로 의사소통할 수 있나요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "有的喔，價目表這邊再提供一次給您參考~",
                    "ko": "네, 있습니다. 가격표를 다시 한번 참고하시도록 보내드립니다~"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "您在unni上看到的活動來院也都是一樣的價格喔!",
                    "ko": "unni에서 보신 이벤트는 내원하셔도 모두 같은 가격입니다!"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "黃金微針做一次通常就會有一些改善喔😊",
                    "ko": "골드 마이크로니들은 한 번만 받아도 보통 어느 정도 개선이 있습니다😊"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "但如果主要想改善的是毛孔粗大、凹痘疤、細紋或膚質不平整，通常還是需要累積幾次療程，效果會比較明顯、也比較穩定～",
                    "ko": "다만 주로 개선하고 싶은 것이 넓어진 모공, 패인 여드름 흉터, 잔주름 또는 고르지 않은 피부결이라면 보통 몇 차례 시술을 누적해야 효과가 더 뚜렷하고 안정적입니다～"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "實際需要做幾次會依原本的毛孔、痘疤深度跟膚況不同，通常不會建議只看單次效果就判斷療程有沒有用喔🤍",
                    "ko": "실제로 필요한 횟수는 원래 모공, 여드름 흉터 깊이, 피부 상태에 따라 다르므로 보통 1회 효과만 보고 시술이 효과가 있는지 판단하는 것은 권하지 않습니다🤍"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "我們診所內有常駐的中文翻譯人員，可以提供中文諮詢及翻譯服務，請您放心唷！🌸",
                    "ko": "저희 클리닉에는 상주 중국어 통역 직원이 있어 중국어 상담 및 통역 서비스를 제공하니 안심해 주세요!🌸"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "已為您完成預約！💗\n\n📅 預約日期：[예약일]\n🕓 預約時間：[예약시간]\n👤 預約姓名：[고객명]\n\n期待[예약일]與您見面！🥰\n\n如果還有任何問題，都歡迎隨時與我們聯繫唷！💕",
                    "ko": "예약을 완료해 드렸습니다!💗\n\n📅 예약 날짜：[예약일]\n🕓 예약 시간：[예약시간]\n👤 예약 성함：[고객명]\n\n[예약일]에 뵙기를 기대하겠습니다!🥰\n\n다른 질문이 있으시면 언제든 저희에게 연락해 주세요!💕"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "📍 診所地址\n首爾市麻浦區楊花路66號，Medione醫療中心6樓、8樓\n\n🚇 地鐵合井站3號出口正前方  \n🏥 請先至6樓櫃檯報到",
                    "ko": "📍 클리닉 주소\n서울시 마포구 양화로66번지, Medione 의료센터 6층, 8층\n\n🚇 지하철 합정역 3번 출구 바로 앞  \n🏥 먼저 6층 데스크에서 접수해 주세요"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K110:N137"
              },
              {
                "id": "MISS-G-20261031-001",
                "recordIds": [
                  "MISS-G-20261031-001"
                ],
                "kind": "inflow",
                "country": "US",
                "procedure": "피코슈어 토닝·피코 지우개(이벤트 유입)",
                "category": "업무시간 외 자동 응답",
                "verdict": "auto",
                "reason": "이벤트 유입과 일정 제안 직후 채팅 운영시간 외 자동 응답이 발송됐다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (이벤트 유입과 일정 제안)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hello 😊\nOur chat consultation is currently outside of operating hours.\n\nPlease leave your message,\nand if you share your WhatsApp ID, we will add you and get in touch with you as soon as possible.\n\nWe’ll get back to you during our business hours 🌸\n\nFor inquiries or reservations,\nfeel free to contact us on WhatsApp.\nID: +82 10-7215-7511",
                    "ko": "안녕하세요 😊\n현재는 채팅 상담 운영 시간이 아닙니다.\n\n메시지를 남겨 주시고,\nWhatsApp ID를 알려 주시면 저희가 추가한 뒤 최대한 빨리 연락드리겠습니다.\n\n영업시간에 답변드리겠습니다 🌸\n\n문의 또는 예약은\n편하게 WhatsApp으로 연락해 주세요.\nID: +82 10-7215-7511"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K2:N6"
              },
              {
                "id": "MISS-G-20261031-016",
                "recordIds": [
                  "MISS-G-20261031-016"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "사각턱(저작근)·주름 보톡스",
                "category": "시술 가능 여부·부위 구성·가격",
                "verdict": "normal",
                "reason": "10월 31일 저작근·주름 보톡스 가격 이미지를 보냈고, 미간·저작근에 눈가 추가 희망에는 주름 보톡스 3부위 묶음가가 더 경제적이라고 안내했다. 수가표는 주름 보톡스 3부위(이마·미간·눈가 등 중 선택)를 74,900원, 1부위를 32,900원으로 기재해 묶음 상품 안내와 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-02",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "請問有咀嚼肌+皺眉頭除皺的嗎",
                    "ko": "저작근+미간 주름 제거도 있나요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "想要改善眉心間的皺紋和咀嚼肌\n\n如果預算可以 還想要加笑起來的魚尾紋",
                    "ko": "미간 주름과 저작근을 개선하고 싶어요\n\n예산이 되면 웃을 때 생기는 눈가 주름도 추가하고 싶어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "咀嚼肌和除皺肉毒的價格這邊可以先給您參考喔😊",
                    "ko": "저작근과 주름 보톡스 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-11-02",
                    "original": "除皺肉毒的話我們三部位是有組合價，會比較划算可以參考喔~",
                    "ko": "주름 보톡스는 세 부위 묶음 가격이 있어 더 저렴하니 참고하셔도 돼요~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K15:N22"
              },
              {
                "id": "MISS-G-20261031-029",
                "recordIds": [
                  "MISS-G-20261031-029"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "인모드·뷰티핏(이벤트 유입)",
                "category": "예약 완료 안내",
                "verdict": "normal-ops",
                "reason": "예약 완료 안내에 일시·위치·지도 링크·신분증 지참·상담만 받을 때 상담비 10,000원·포인트 사용 제한을 담았다. 가이드 11의 일본어 예약 안내 문구와 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "ありがとございます✨\nよろしくお願いいたします😊",
                    "ko": "감사합니다✨\n잘 부탁드립니다😊"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "下記の日程でご予約確定致しました🌸\n\n📅 日付：[예약일]\n⏰ 時間：[예약시간]\n\n📍 場所：ソウル市麻浦区（マポ）ヤンファロ66、6階\n\n地図URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\nご来店の際は、外国人登録証またはパスポートをお持ちください✨\n\n\n＊ご予約当日に施術を受けずカウンセリングのみ行った場合、カウンセリング料金10,000ウォンが発生致します。\n\n＊ポイントのご利用について\n恐れ入りますが、ポイントのご使用はアプリ決済時のみ可能であり、現状、外国籍のお客さまのアプリ決済には未対応と承知しております。その為店頭決済ではポイントをご利用いただけません事予めご了承お願い致します。",
                    "ko": "아래 일정으로 예약이 확정되었습니다🌸\n\n📅 날짜：[예약일]\n⏰ 시간：[예약시간]\n\n📍 장소：서울시 마포구 양화로66, 6층\n\n지도 URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\n방문하실 때는 외국인등록증 또는 여권을 지참해 주세요✨\n\n\n＊예약 당일 시술을 받지 않고 상담만 진행하신 경우, 상담료 10,000원이 발생합니다.\n\n＊포인트 이용에 관하여\n죄송하지만 포인트 사용은 앱 결제 시에만 가능하며, 현재 외국 국적 고객님의 앱 결제는 지원되지 않는 것으로 알고 있습니다. 따라서 현장 결제에서는 포인트를 이용하실 수 없음을 미리 양해 부탁드립니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K23:N32"
              },
              {
                "id": "MISS-G-20261031-037",
                "recordIds": [
                  "MISS-G-20261031-037"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "리니어지(LinearZ)",
                "category": "시술 후 지속되는 뻐근함",
                "verdict": "fix",
                "severity": "confirmed",
                "reason": "가이드 02는 리니어지가 근막층과 진피층 등 깊이를 구분해 에너지를 전달한다고 안내하는데 담당자는 피부 깊은 근육층에 작용해 근육층에 에너지가 전달된다고 답했다. 주의사항 문구와 경과 관찰 후 미호전 시 재연락 안내는 가이드 09·02와 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "請問我打這麼多天",
                    "ko": "여쭤볼게요 제가 시술받은 지 이렇게 여러 날이 지났는데"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "酸痛感這麼還有",
                    "ko": "뻐근한 통증이 왜 아직 있나요"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "兩側臉頰",
                    "ko": "양쪽 볼"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "沒有有泛紅只有酸感",
                    "ko": "붉어짐은 없고 뻐근한 느낌만 있어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "🔊 音波拉提（美國音波二代 / 海芙音波 / LinearZ 等）－術後注意事項 🔊\n\n• 當天可輕柔洗臉、淋浴及化妝。\n• 術後可能有輕微泛紅、腫脹、壓痛、刺麻感或緊繃感，通常會逐漸緩解。\n• 術後 1 週內避免飲酒、吸菸、桑拿、汗蒸及劇烈運動。 🍷\n• 加強保濕與防曬，暫時避免酸類、A 醇、去角質、按摩及刮痧。 ☀️\n• 若出現持續加重的疼痛、明顯腫脹、感覺異常或水泡，請聯絡診所。 📞\n\n⏳ 效果什麼時候開始出現？\n• 一般約 4–8 週後可較明顯感受到緊緻與輪廓變化。\n• 約 2–3 個月後效果通常會更加明顯。",
                    "ko": "🔊 초음파 리프팅（미국 초음파 2세대 / 하이푸 초음파 / LinearZ 등）－시술 후 주의사항 🔊\n\n• 당일 부드러운 세안, 샤워 및 메이크업이 가능합니다.\n• 시술 후 가벼운 붉어짐, 부기, 압통, 따끔거리거나 저린 느낌 또는 당김이 있을 수 있으며, 보통 서서히 완화됩니다.\n• 시술 후 1주 이내에는 음주, 흡연, 사우나, 찜질 및 격한 운동을 피하세요. 🍷\n• 보습과 자외선 차단을 강화하고, 산 성분, 레티놀, 각질 제거, 마사지 및 괄사는 잠시 피하세요. ☀️\n• 통증이 계속 심해지거나 뚜렷한 부기, 감각 이상 또는 물집이 나타나면 클리닉에 연락해 주세요. 📞\n\n⏳ 효과는 언제부터 나타나나요?\n• 일반적으로 약 4–8주 후에 피부의 탄탄함과 윤곽 변화를 비교적 뚜렷하게 느낄 수 있습니다.\n• 약 2–3개월 후에는 효과가 보통 더욱 뚜렷해집니다."
                  },
                  {
                    "date": "2026-10-31",
                    "original": "因為您施作的發數比較多，恢復時間可能會較長一點，目前大概是哪個部位痠痛感比較嚴重呢？",
                    "ko": "고객님께서 받으신 샷 수가 비교적 많아서 회복 시간이 조금 더 길 수 있습니다. 현재 대략 어느 부위의 뻐근한 통증이 더 심하신가요?"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "一般是約1-2周內狀況會逐漸緩解，但因為每個人體質和代謝情況不同，可能也會有差異",
                    "ko": "일반적으로 약 1-2주 내에 상태가 서서히 완화되지만 개인의 체질과 대사 상태가 다르기 때문에 차이가 있을 수 있습니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您可以再持續幫我們觀察看看，狀況只要沒有變更嚴重，基本上都是會隨著時間慢慢恢復的~",
                    "ko": "계속 관찰해 주시면 됩니다. 상태가 더 심해지지만 않으면 기본적으로 시간이 지나면서 서서히 회복됩니다~"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "如果臉頰二側有泛紅或紅腫，您也可以拍照提供給我們看，幫您確認一下喔!",
                    "ko": "양쪽 볼에 붉어짐이나 붉은 부기가 있다면 사진을 찍어 보내 주셔도 됩니다. 확인해 드리겠습니다!"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "了解～由於當天您是施打LinearZ音波，主要是作用於肌膚深層肌肉層，能量傳達至肌肉層來刺激膠原蛋白新生與筋膜緊縮而產生痠痛感。\n您這周再觀察一下，若還是尚未改善可以再與我們聯繫哦！🥹🌸",
                    "ko": "알겠습니다～당일 고객님께서는 LinearZ 초음파 시술을 받으셨고, 주로 피부 깊은 근육층에 작용하며 에너지가 근육층에 전달되어 콜라겐 신생과 근막 수축을 자극하기 때문에 뻐근한 통증이 생깁니다.\n이번 주에 더 관찰해 보시고 여전히 개선되지 않으면 다시 연락해 주세요!🥹🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K46:N53"
              },
              {
                "id": "MISS-G-20261031-039",
                "recordIds": [
                  "MISS-G-20261031-039"
                ],
                "kind": "consult",
                "country": "MY",
                "procedure": "온다·울쎄라피 프라임·써마지 FLX·세르프·아이 리프팅",
                "category": "복합 고민 추천·견적·일정",
                "verdict": "followup",
                "reason": "고민별 시술(온다·울쎄라피 프라임·지방분해 주사, 써마지 FLX·세르프, 아이써마지·아이세르프·아이울쎄라)과 반영구 화장 미제공, 모발 전문 클리닉 권유, 가격표 이미지와 대면 상담 후 상세 견적을 안내했으며 시술 구성은 가이드 02·07과 같다. 고객이 함께 물은 서울 체류 기간 내 시술 일정과 기간 내 완료 가능 여부에는 답하지 않았다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "Hello, I am a 56-year-old woman from Malaysia and will be visiting Seoul from [체류 기간].\n\nI have attached my recent makeup-free photos for your assessment.\n\nI would like to improve the following concerns:\n\n1. Double chin – reduce excess fat and improve jawline definition.\n2. Facial sagging – lift and tighten my cheeks and lower face.\n3. Drooping eyelids – achieve a more refreshed and youthful appearance.\n4. Eyebrow and lip pigmentation – natural-looking powder brows and lip blushing.\n5. Hair concerns – thinning hair, receding hairline and oily scalp.\n\nCould you please recommend the most suitable treatments, procedures or products for my condition, together with the estimated prices, expected results and recovery time?\n\nI prefer noticeable but natural-looking improvements.\n\nI will be in Seoul from [체류 기간]. Please also suggest the ideal treatment schedule during my stay, including whether the procedures can be completed within this period.\n\nThank you. I look forward to your recommendations!",
                    "ko": "안녕하세요, 저는 말레이시아에서 온 56세 여성이며 [체류 기간]에 서울을 방문할 예정입니다.\n\n평가를 위해 최근에 찍은 화장하지 않은 사진을 첨부했습니다.\n\n다음과 같은 고민을 개선하고 싶습니다：\n\n1. 이중턱 – 과도한 지방을 줄이고 턱선을 더욱 또렷하게 하고 싶습니다.\n2. 얼굴 처짐 – 볼과 얼굴 아래쪽을 리프팅하고 탄탄하게 하고 싶습니다.\n3. 처진 눈꺼풀 – 더욱 생기 있고 젊어 보이는 모습을 원합니다.\n4. 눈썹 및 입술 색소 시술 – 자연스러워 보이는 파우더 눈썹과 입술 블러싱을 원합니다.\n5. 모발 고민 – 머리숱 감소, 뒤로 물러나는 헤어라인, 지성 두피입니다.\n\n제 상태에 가장 적합한 치료, 시술 또는 제품을 예상 가격, 기대 효과 및 회복 기간과 함께 추천해 주시겠어요?\n\n눈에 띄지만 자연스러워 보이는 개선을 선호합니다.\n\n[체류 기간] 동안 서울에 있을 예정입니다. 이 기간 내에 시술을 마칠 수 있는지도 포함하여 체류 중 이상적인 시술 일정도 제안해 주세요.\n\n감사합니다. 추천을 기다리겠습니다!"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "Please send me my estimated cost as per your kind recommendation",
                    "ko": "친절하게 추천해 주신 내용에 따른 제 예상 비용을 보내 주세요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hello! 🌸 Thank you for reaching out to Beauty Blossom \n\nBased on the concerns you've mentioned, here are some treatments that may be suitable for you:\n\n1. Double Chin & Jawline Definition\nWe offer treatments such as ONDA, Ultherapy Prime, and fat-dissolving injections, which may help reduce localized fat and improve jawline definition.\n\n2. Facial Sagging & Skin Tightening\nWe offer Ultherapy Prime, Thermage FLX, and XERF, which are designed to improve skin firmness and facial contours.\n\n3. Drooping Eyelids\nWe offer Eye Thermage FLX / XERF EYE and Eye Ultherapy Prime, which may help improve mild skin laxity around the eyes. However, the suitability of these treatments will depend on your eye condition.\n\n4. Eyebrow & Lip Pigmentation\nUnfortunately, we do not currently offer semi-permanent makeup services such as powder brows or lip blushing.\n\n5. Hair Thinning & Scalp Concerns\nWe would recommend visiting a specialized hair or scalp clinic for a more detailed assessment, as these concerns may require different treatments.\n\nRegarding Prices & Recovery Time\nWe can share our treatment price list with you for reference. However, the final treatment combination, number of shots, and total cost will depend on your skin condition and the doctor's assessment.\nMost of our non-surgical lifting treatments require minimal downtime, although temporary redness, swelling, or tenderness may occur.",
                    "ko": "안녕하세요! 🌸 Beauty Blossom에 연락해 주셔서 감사합니다 \n\n말씀해 주신 고민을 바탕으로 고객님께 적합할 수 있는 시술 몇 가지를 안내해 드립니다：\n\n1. 이중턱 및 턱선 개선\n저희는 ONDA, Ultherapy Prime, 지방분해 주사 등의 시술을 제공하며, 국소 지방을 줄이고 턱선을 더욱 또렷하게 하는 데 도움이 될 수 있습니다.\n\n2. 얼굴 처짐 및 피부 탄력\n저희는 Ultherapy Prime, Thermage FLX, XERF를 제공하며, 이는 피부의 탄탄함과 얼굴 윤곽을 개선하도록 설계되었습니다.\n\n3. 처진 눈꺼풀\n저희는 Eye Thermage FLX / XERF EYE 및 Eye Ultherapy Prime을 제공하며, 눈가의 가벼운 피부 처짐 개선에 도움이 될 수 있습니다. 다만 이러한 시술의 적합성은 고객님의 눈 상태에 따라 달라집니다.\n\n4. 눈썹 및 입술 색소 시술\n죄송하지만 현재 파우더 눈썹이나 입술 블러싱 같은 반영구 화장 서비스는 제공하지 않습니다.\n\n5. 머리숱 감소 및 두피 고민\n이러한 고민에는 다른 치료가 필요할 수 있으므로 더욱 자세한 평가를 위해 모발 또는 두피 전문 클리닉 방문을 권해 드립니다.\n\n가격 및 회복 기간에 관하여\n참고하시도록 시술 가격표를 보내 드릴 수 있습니다. 다만 최종 시술 조합, 샷 수 및 총비용은 고객님의 피부 상태와 의사의 평가에 따라 달라집니다.\n저희 비수술 리프팅 시술 대부분은 회복에 필요한 일상 중단 기간이 짧지만, 일시적인 붉어짐, 부기 또는 압통이 생길 수 있습니다."
                  },
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "Here is our promotional price list for your reference.",
                    "ko": "참고하시도록 저희 프로모션 가격표를 보내 드립니다."
                  },
                  {
                    "date": "2026-11-01",
                    "original": "The total cost really depends on your skin condition, the specific treatments recommended, and the number of sessions needed. \nSince you have several different skin concerns, we recommend an in-person consultation so our medical team can assess your skin and suggest the most suitable treatments for you. We'll provide you with a detailed quotation during your consultation, so you can decide which treatments you'd like to proceed with! 😊",
                    "ko": "총비용은 실제로 고객님의 피부 상태, 추천되는 구체적인 시술 및 필요한 시술 횟수에 따라 달라집니다. \n서로 다른 피부 고민이 여러 가지 있으시므로 저희 의료진이 피부를 평가하고 가장 적합한 시술을 제안해 드릴 수 있도록 대면 상담을 권해 드립니다. 상담 중에 상세 견적을 안내해 드리니 어떤 시술을 진행하실지 결정하실 수 있습니다! 😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K54:N61"
              },
              {
                "id": "MISS-G-20261031-042",
                "recordIds": [
                  "MISS-G-20261031-042"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "포텐자(황금 미세침)·리쥬란",
                "category": "모공·피부결 시술 추천",
                "verdict": "normal",
                "reason": "담당자는 모공·피부결 개선에 포텐자(황금 미세침)를 추천하고 피부 상태에 따라 약제를 함께 쓸 수 있으며 리쥬란 기계 주입이 손 주사보다 덜 아프다고 안내했다. 가이드 02는 포텐자를 모공·흉터·피부결 맞춤 치료로, 가이드 06은 펌핑팁 약물 주입이 손주사 대비 통증이 적다고 안내해 담당자 답과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "想更詳細了解施術／手術內容",
                    "ko": "시술／수술 내용을 더 자세히 알고 싶습니다"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "我想改善毛孔和膚質",
                    "ko": "모공과 피부결을 개선하고 싶어요"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "會推薦黃金微針嗎",
                    "ko": "황금 미세침을 추천하시나요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "如果主要想改善毛孔粗大跟整體膚質，蠻推薦黃金微針的喔😊",
                    "ko": "주로 넓어진 모공과 전반적인 피부결을 개선하고 싶으시면 황금 미세침을 꽤 추천합니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "黃金微針可以針對毛孔、出油、膚質粗糙、細紋跟輕微凹凸感做改善，也可以依膚況搭配不同藥劑，讓整體膚質看起來更細緻、平滑一些✨",
                    "ko": "황금 미세침은 모공, 유분, 거친 피부결, 잔주름과 가벼운 요철감을 개선할 수 있고, 피부 상태에 따라 여러 약제를 함께 사용하여 전반적인 피부결이 더 섬세하고 매끄러워 보이도록 할 수도 있습니다✨"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您也可以選擇黃金微針搭配麗珠蘭的組合，同時改善毛孔+修復肌膚，而且麗珠蘭機打的痛感也會比手打低喔~",
                    "ko": "황금 미세침과 리쥬란을 함께하는 조합을 선택하셔서 모공 개선+피부 회복을 동시에 하실 수도 있으며, 리쥬란 기계 주입은 수기 주입보다 통증도 적습니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K62:N66"
              },
              {
                "id": "MISS-G-20261031-043",
                "recordIds": [
                  "MISS-G-20261031-043"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "포텐자(이벤트 유입)",
                "category": "가격 안내",
                "verdict": "image",
                "reason": "포텐자 이벤트 유입에 가격 이미지를 보내고 가장 개선하고 싶은 부위를 물었다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "黃金微針的價格這邊可以先給您參考喔😊",
                    "ko": "황금 미세침 가격을 먼저 참고하실 수 있도록 보내 드립니다😊"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위도 말씀해 주시면 비교적 적합한 시술을 우선 추천해 드리겠습니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K67:N69"
              },
              {
                "id": "MISS-G-20261031-044",
                "recordIds": [
                  "MISS-G-20261031-044"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "포텐자(이벤트 유입)",
                "category": "예약 방법",
                "verdict": "normal-ops",
                "reason": "예약을 원한다는 고객에게 이미지와 함께 예약 정보 양식(여권 영문 성명·생년월일·희망 시술·예약 일시·피부 검사 희망)을 보내고 작성하면 예약을 잡아 주겠다고 안내했다. 가이드 11의 중국어 번체 예약 양식과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "您好，我想預約",
                    "ko": "안녕하세요, 예약하고 싶습니다"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-11-01",
                    "original": "✍️ 預約資訊填寫\n若需要預約的話，再麻煩您填寫以下資訊並傳給我們，謝謝😊\n\n・護照英文姓名（姓氏在前/統一大寫）：\n・生日（西元 YYYY/MM/DD）：\n・希望療程：\n・預約日期&時間：\n・是否希望進行皮膚檢測：\n※ 不確定療程也沒關係，可填「現場諮詢」\n👭 若有同行的朋友，請每位分別填寫一份預約資訊喔！\n\n📌 預約前請留意\n收到您的資訊後，我們會盡快確認並協助安排預約。",
                    "ko": "✍️ 예약 정보 작성\n예약이 필요하시면 아래 정보를 작성하여 저희에게 보내 주세요. 감사합니다😊\n\n・여권 영문 성명（성을 앞에/모두 대문자로）：\n・생년월일（서기 YYYY/MM/DD）：\n・희망 시술：\n・예약 날짜&시간：\n・피부 검사를 원하시는지：\n※ 시술을 정하지 못하셔도 괜찮습니다. 「현장 상담」으로 작성하셔도 됩니다\n👭 동행 친구가 있으면 각자 예약 정보를 한 부씩 작성해 주세요!\n\n📌 예약 전 유의사항\n고객님의 정보를 받으면 최대한 빨리 확인하여 예약을 도와드리겠습니다."
                  },
                  {
                    "date": "2026-11-01",
                    "original": "若需要預約的話，幫我們填寫表單，這邊就可以為您安排，謝謝😊",
                    "ko": "예약이 필요하시면 양식을 작성해 주세요. 그러면 예약을 잡아 드릴 수 있습니다. 감사합니다😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K70:N74"
              },
              {
                "id": "MISS-G-20261031-047",
                "recordIds": [
                  "MISS-G-20261031-047"
                ],
                "kind": "consult",
                "country": "JP",
                "procedure": "피코줌패스·포텐자·아쿠아필",
                "category": "색소·모공 시술 추천·가격·당일 병행",
                "verdict": "normal",
                "reason": "담당자는 여드름 흉터·모공 요철에 포텐자, 코 모공 피지·각질에 아쿠아필을 추천하고 아쿠아필 1회 77,000원, 포텐자와 줌패스 당일 동시 시술 가능을 안내했다. 가이드 02·01의 시술 용도, 수가표 강남언니 시트의 아쿠아필 1회 77,000원, 포텐자 당일 피코줌패스 등 레이저 병행 패키지 구성과 같다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "ズームパスのメニューって他にもありますか？",
                    "ko": "줌패스 메뉴는 다른 것도 있나요?"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "特にそばかすが気になります。\nなので色素レーザー2種が良いかなって思ってます。\nけど、肌のニキビ跡なのか毛穴開きなのか分からないんですけど凹凸が気になるんですけど\n同時にはできないですよね？",
                    "ko": "특히 주근깨가 신경 쓰입니다.\n그래서 색소 레이저 2종이 좋을까 생각하고 있습니다.\n그런데 피부의 여드름 흉터인지 모공이 넓어진 것인지 모르겠지만 울퉁불퉁한 것이 신경 쓰이는데\n동시에 할 수는 없겠지요?"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "あと鼻の毛穴の黒ずみも気になります。\nおすすめの施術はありますか？",
                    "ko": "그리고 코 모공의 검은 때도 신경 쓰입니다.\n추천하는 시술이 있나요?"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "ポテンツァとズームパス同じ日にできるんですか？",
                    "ko": "포텐자와 줌패스를 같은 날 할 수 있나요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "ニキビ跡や毛穴の開きによるお肌の凹凸が気になる場合は、ポテンツァがおすすめです。毛穴やニキビ跡の改善を目指す施術となっております😊\n\n鼻の毛穴の黒ずみには、アクアピールがおすすめです✨ 毛穴の汚れや皮脂、古い角質を取り除き、すっきりとしたお肌に整える施術です。\n\nこちらの施術は、同じ日にまとめて受けていただくことも可能ですので、ご安心くださいませ🥰\n\nご来院の際にお肌の状態を確認しながら、より適した施術をご案内することもできますので、お気軽にご相談くださいね🌸",
                    "ko": "여드름 흉터나 넓어진 모공으로 인한 피부의 울퉁불퉁함이 신경 쓰이시면 포텐자를 추천합니다. 모공이나 여드름 흉터 개선을 목표로 하는 시술입니다😊\n\n코 모공의 검은 때에는 아쿠아필을 추천합니다✨ 모공의 노폐물과 피지, 오래된 각질을 제거해 깨끗한 피부로 정돈하는 시술입니다.\n\n이 시술들은 같은 날 한꺼번에 받으실 수도 있으니 안심해 주세요🥰\n\n내원하실 때 피부 상태를 확인하면서 더 적합한 시술을 안내해 드릴 수도 있으니 편하게 상담해 주세요🌸"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "アクアピールは1回77,000ウォンでございます😊✨",
                    "ko": "아쿠아필은 1회 77,000원입니다😊✨"
                  },
                  {
                    "date": "2026-11-01",
                    "original": "はい、同日に同時に施術を受けていただくことが可能でございます。\nご予約をご希望でしょうか？😊",
                    "ko": "네, 같은 날 동시에 시술을 받으실 수 있습니다.\n예약을 원하시나요?😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K79:N92"
              },
              {
                "id": "MISS-G-20261031-048",
                "recordIds": [
                  "MISS-G-20261031-048"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "태국어 행사 이미지를 보내고 LINE으로 태국인 관리자·통역사에게 추가 문의할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요. 현재 클리닉의 프로모션은 사진과 같습니다.\n추가로 궁금한 점이 있으시면 LINE을 추가해 문의해 주세요. 태국인 관리자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K93:N95"
              },
              {
                "id": "MISS-G-20261031-049",
                "recordIds": [
                  "MISS-G-20261031-049"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "태국어 행사 이미지를 보내고 LINE으로 태국인 관리자·통역사에게 추가 문의할 수 있다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-11-01",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (이미지 전송)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-11-01",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요. 현재 클리닉의 프로모션은 사진과 같습니다.\n추가로 궁금한 점이 있으시면 LINE을 추가해 문의해 주세요. 태국인 관리자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K96:N100"
              },
              {
                "id": "MISS-G-20261031-054",
                "recordIds": [
                  "MISS-G-20261031-054"
                ],
                "kind": "inflow",
                "country": "JP",
                "procedure": "소프웨이브",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "가격표 이미지를 보내고 궁금한 점은 언제든 문의해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "こちらの料金表をご参考までにお送りいたします😊\n\nご不明な点がございましたら、いつでもお気軽にお問い合わせください。ありがとうございます！",
                    "ko": "참고하시도록 이 가격표를 보내드립니다😊\n\n궁금한 점이 있으시면 언제든 편하게 문의해 주세요. 감사합니다!"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K105:N109"
              },
              {
                "id": "MISS-G-20261031-056",
                "recordIds": [
                  "MISS-G-20261031-056"
                ],
                "kind": "consult",
                "country": "TH",
                "procedure": "울쎄라피 프라임",
                "category": "예약 가능 시간·가격·통역·소요 시간·사전 상담",
                "verdict": "normal",
                "reason": "담당자가 안내한 울쎄라피 프라임 300샷 1,090,000원(VAT 포함 1,199,000원)·600샷 1,990,000원(VAT 포함 2,189,000원)은 수가표 17과 같다. 상담부터 시술 완료까지 약 1~1.5시간이라는 답은 가이드 06 질문111의 울쎄라 소요시간(약 1시간~1시간 30분)과 같고, 예약 시간·태국어 통역·시술 전 대면 상담에도 항목별로 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "Hello, I would like to inquire about a few details regarding your services:\n\n1. Do you have any available slots on [희망 예약일], around [희망 예약시간]? (Or would it be possible to apply the numbing cream around [희망 마취시간]?)\n\n2. Could you please let me know the price for Ulthera Prime (approx. 400–600 lines)?\n\n3. Do you provide a Thai interpreter for the appointment?\n\n4. How long does the entire procedure usually take?\n\n5. Do you offer a face-to-face consultation prior to the treatment to evaluate my face, check suitability, and suggest additional or alternative options if needed?\n\nThank you!",
                    "ko": "안녕하세요, 귀원의 서비스에 대해 몇 가지 자세한 내용을 문의하고 싶습니다.\n\n1. [희망 예약일] [희망 예약시간]경에 예약 가능한 시간이 있나요? (또는 [희망 마취시간]경에 마취 크림을 바를 수 있을까요?)\n\n2. Ulthera Prime(약 400–600라인)의 가격을 알려 주시겠어요?\n\n3. 예약 시 태국어 통역사를 제공하나요?\n\n4. 전체 시술은 보통 얼마나 걸리나요?\n\n5. 시술 전에 얼굴을 평가하고 적합성을 확인하며, 필요한 경우 추가 또는 대안 시술을 제안하는 대면 상담을 제공하나요?\n\n감사합니다!"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "สวัสดีค่ะ 😊🌸\nขอบคุณที่สนใจและติดต่อ Beauty Blossom Clinic นะคะ 💕\n\n 1. วันและเวลานัดหมาย\n\nสำหรับวันที่ [예약 가능일] ทางคลินิกมีคิวว่างเวลา [예약 가능시간] น. ค่ะ\n\nหากคุณลูกค้าต้องการทายาชาในเวลา [마취 희망시간] น. สามารถเข้ามาที่คลินิกเวลา [예약 가능시간] น. เพื่อเตรียมตัวก่อน หรือเข้ามาเวลา [마취 희망시간] น. เพื่อทายาชาก่อนและรับคำปรึกษาระหว่างรอยาชาออกฤทธิ์ได้ค่ะ 😊\n\n2. ราคา Ultherapy Prime\n\nทางคลินิกมีแพ็กเกจให้เลือก 2 แบบค่ะ\n\nUltherapy Prime 300 shots\n- ราคาไม่รวม VAT: 1,090,000 วอน\n- **ราคารวม VAT 10%: 1,199,000 วอน**\n\nUltherapy Prime 600 shots\n- ราคาไม่รวม VAT: 1,990,000 วอน\n- **ราคารวม VAT 10%: 2,189,000 วอน**\n\n3. บริการล่ามภาษาไทย\n\nทางคลินิกมีเจ้าหน้าที่ล่ามภาษาไทยประจำอยู่ค่ะ สามารถให้บริการแปลภาษาไทยระหว่างการปรึกษาและทำหัตถการได้ ไม่ต้องกังวลเรื่องการสื่อสารเลยนะคะ 💕\n\n4. ระยะเวลาในการทำหัตถการ\n\nโดยปกติจะใช้เวลาประมาณ 1–1.5 ชั่วโมง ตั้งแต่ขั้นตอนการปรึกษาจนถึงการทำหัตถการเสร็จสิ้นค่ะ 😊\n\n5. การปรึกษาก่อนทำหัตถการ\n\nแน่นอนค่ะ! ก่อนทำหัตถการ ทางคลินิกจะมีการตรวจประเมินสภาพผิวและรูปหน้าของคุณลูกค้า พร้อมให้คำปรึกษาแบบตัวต่อตัวค่ะ\n\nเราจะช่วยประเมินว่า Ultherapy Prime เหมาะสมกับปัญหาที่คุณลูกค้ากังวลหรือไม่ และสามารถแนะนำหัตถการอื่น ๆ หรือการทำร่วมกันตามความเหมาะสมได้ค่ะ\n\nคุณลูกค้าสามารถปรึกษาและสอบถามได้อย่างเต็มที่เลยนะคะ ไม่ต้องกังวลค่ะ 🥰\n\nหากสะดวกเข้ามาในวันที่ [예약 가능일] เวลา [예약 가능시간] น.ามารถแจ้งเราได้เลยนะคะ ทางเรายินดีดำเนินการจองคิวให้ค่ะ\n\nขอบคุณมากค่ะ หวังว่าจะได้ต้อนรับคุณลูกค้าที่ Beauty Blossom Clinic นะคะ 🌸💕",
                    "ko": "안녕하세요 😊🌸\nBeauty Blossom Clinic에 관심을 가지고 연락해 주셔서 감사합니다 💕\n\n 1. 예약 날짜와 시간\n\n[예약 가능일]에는 클리닉에 [예약 가능시간] 예약 가능 시간이 있습니다.\n\n고객님께서 [마취 희망시간]에 마취제를 바르고 싶으시면 [예약 가능시간]에 클리닉에 오셔서 미리 준비하시거나, [마취 희망시간]에 오셔서 먼저 마취제를 바른 후 마취제가 작용하기를 기다리는 동안 상담을 받으실 수 있습니다 😊\n\n2. Ultherapy Prime 가격\n\n클리닉에는 선택 가능한 패키지가 2가지 있습니다\n\nUltherapy Prime 300 shots\n- VAT 별도 가격: 1,090,000원\n- **VAT 10% 포함 가격: 1,199,000원**\n\nUltherapy Prime 600 shots\n- VAT 별도 가격: 1,990,000원\n- **VAT 10% 포함 가격: 2,189,000원**\n\n3. 태국어 통역 서비스\n\n클리닉에는 태국어 통역 직원이 상주합니다. 상담 및 시술 중 태국어 통역 서비스를 제공하므로 의사소통은 걱정하지 않으셔도 됩니다 💕\n\n4. 시술 소요 시간\n\n보통 상담 단계부터 시술 완료까지 약 1–1.5시간이 걸립니다 😊\n\n5. 시술 전 상담\n\n물론입니다! 시술 전에 클리닉에서 고객님의 피부 상태와 얼굴형을 평가하고 일대일 상담을 진행합니다.\n\nUltherapy Prime이 고객님이 고민하는 문제에 적합한지 평가해 드리며, 적절한 경우 다른 시술이나 병행 시술도 추천해 드릴 수 있습니다.\n\n충분히 상담하고 질문하셔도 되니 걱정하지 마세요 🥰\n\n[예약 가능일] [예약 가능시간]에 방문이 가능하시면 알려 주세요. 기꺼이 예약을 진행해 드리겠습니다.\n\n정말 감사합니다. Beauty Blossom Clinic에서 고객님을 맞이할 수 있기를 바랍니다 🌸💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K138:N150"
              },
              {
                "id": "MISS-G-20261031-057",
                "recordIds": [
                  "MISS-G-20261031-057"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "주름 보톡스",
                "category": "예약 확정",
                "verdict": "normal-ops",
                "reason": "고객이 앱에서 제안한 일정에 예약 확정을 알리고 예약일에 뵙겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (앱에서 일정 제안)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "ยืนยันการจองเรียบร้อยแล้วนะคะ 😊🌸\n\nขอบคุณที่ไว้วางใจและเลือกใช้บริการกับ Beauty Blossom Clinic ค่ะ 💕\n\nหากมีข้อสงสัยหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อเราได้ตลอดเลยนะคะ\n\nแล้วพบกันในวันนัดหมายค่ะ 🥰✨",
                    "ko": "예약이 확정되었습니다 😊🌸\n\nBeauty Blossom Clinic을 믿고 선택해 주셔서 감사합니다 💕\n\n궁금한 점이 있거나 추가 정보가 필요하시면 언제든 연락해 주세요\n\n예약일에 뵙겠습니다 🥰✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K151:N156"
              },
              {
                "id": "MISS-G-20261031-058",
                "recordIds": [
                  "MISS-G-20261031-058"
                ],
                "kind": "inflow",
                "country": "DK",
                "procedure": "입술 필러",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "프로모션 가격표 이미지를 보내고 문의·예약은 언제든 연락해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hello!  Here is our promotional price list for your reference.\nIf you have any questions or would like to make a reservation, please feel free to contact us anytime!ㅁ",
                    "ko": "안녕하세요!  참고하시도록 프로모션 가격표를 보내드립니다.\n궁금한 점이 있거나 예약을 원하시면 언제든 편하게 연락해 주세요!ㅁ\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K157:N159"
              },
              {
                "id": "MISS-G-20261031-059",
                "recordIds": [
                  "MISS-G-20261031-059"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "입술 필러",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "입술 필러 행사 이미지를 보내고 궁금한 점은 다시 문의해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "這邊發唇部玻尿酸相關活動優惠給您參考，有什麼問題再咨詢哦~",
                    "ko": "입술 히알루론산 필러 관련 이벤트 혜택을 참고하시도록 보내드립니다. 궁금한 점이 있으면 다시 상담해 주세요~\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K160:N163"
              },
              {
                "id": "MISS-G-20261031-062",
                "recordIds": [
                  "MISS-G-20261031-062"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "온다",
                "category": "당일 예약·출국 일정",
                "verdict": "normal-ops",
                "reason": "항공편 때문에 당일 예약이 가능한지 묻자 담당자는 정해진 시각 전에 바로 내원하면 되고 접수 때 늦어도 나가야 하는 시각을 말하면 메모하겠다고 답했다. 가이드 06 질문216은 주말 마지막 예약을 오후 3시30분으로 안내하며 담당자가 제시한 내원 시각은 그보다 이르다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "護照英文姓名（姓氏在前/統一大寫）：[고객명]\n・生日（西元 YYYY/MM/DD）：[생년월일]\n・希望療程：ONDA\n・預約日期&時間：[희망 예약일시]\n・是否希望進行皮膚檢測：yes\n\n\n因為是[항공편 출발시간]的飛機，不知道有沒有空檔可預約",
                    "ko": "여권 영문 성명(성 먼저/모두 대문자)：[고객명]\n・생일(서기 YYYY/MM/DD)：[생년월일]\n・희망 시술：ONDA\n・예약 날짜&시간：[희망 예약일시]\n・피부 검사를 희망하시는지：예\n\n\n[항공편 출발시간] 비행기라서 예약 가능한 빈 시간이 있을지 모르겠습니다"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "是的",
                    "ko": "네"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "若您希望[방문일 가림]來院的話，[내원 마감 시각 가림]前直接幫我們過來就可以了喔~",
                    "ko": "[방문일 가림] 내원을 원하시면 [내원 마감 시각 가림] 전에 바로 와 주시면 됩니다~"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "報到時可以跟櫃台說一下您希望最晚離院的時間，會幫您備註",
                    "ko": "접수하실 때 데스크에 늦어도 몇 시에는 나가야 하시는지 말씀해 주시면 메모해 드리겠습니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K175:N185"
              },
              {
                "id": "MISS-G-20261031-063",
                "recordIds": [
                  "MISS-G-20261031-063"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "지점 문의",
                "verdict": "normal-ops",
                "reason": "강남으로 잘못 예약했으니 홍대로 바꿀 수 있는지 묻자 담당자는 홍대 합정 본점 한 곳만 있고 강남 지점은 없다고 답했다. 공식 홈페이지도 병원 위치를 합정역 3번 출구 앞 메디원메디컬센터 한 곳으로 안내하고 있다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "我原本有預約約，但是不小心預約約到江南那是在[기존 예약시간]，那我有辦法改成弘大嗎",
                    "ko": "원래 예약이 있었는데, 실수로 강남으로 예약했고 그게 [기존 예약시간]인데, 홍대로 변경할 수 있을까요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "我們只有弘大合井一間本店喔~",
                    "ko": "저희는 홍대 합정에 본점 한 곳만 있어요~"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "沒有江南分店呢><",
                    "ko": "강남 지점은 없어요><"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K186:N191"
              },
              {
                "id": "MISS-G-20261031-065",
                "recordIds": [
                  "MISS-G-20261031-065"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "사각턱 보톡스",
                "category": "일본어 통역",
                "verdict": "normal-ops",
                "reason": "통역 문의에 일본어 가능한 직원과 실장이 있어 상담도 일본어로 안내할 수 있다고 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "通訳について知りたいです",
                    "ko": "통역에 대해 알고 싶습니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "お問い合わせいただきありがとうございます😊\n\n当院には日本語で対応可能なスタッフと日本語で対応できる室長もおりますので、カウンセリングの際も日本語でご案内することが可能です💗",
                    "ko": "문의해 주셔서 감사합니다😊\n\n저희 병원에는 일본어로 응대할 수 있는 직원과 일본어로 응대할 수 있는 실장도 있으므로, 상담 시에도 일본어로 안내해 드릴 수 있습니다💗"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K192:N200"
              },
              {
                "id": "MISS-G-20261031-066",
                "recordIds": [
                  "MISS-G-20261031-066"
                ],
                "kind": "inflow",
                "country": "JP",
                "procedure": "스킨 보톡스",
                "category": "가격표·예약 가능 시간",
                "verdict": "fix",
                "severity": "suspected",
                "reason": "담당자는 가격표 이미지와 함께 예약 접수 시간을 평일 10:00~18:00, 토일 10:00~15:00으로 안내했다. 가이드 11의 일본어 영업시간 템플릿은 평일 10:00~20:00, 주말·대체공휴일 10:00~16:30 운영과 마감 30분 전까지 예약 가능을 안내하고, 가이드 06 질문216은 마지막 예약을 평일 19:30·주말 15:30으로 안내한다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "こんにちは😊💗\nこちらが当院の料金表でございますので、ぜひご参考になさってくださいね✨\n\n当院のご予約受付時間は、平日 10:00〜18:00、土日 10:00〜15:00となっております✨\n\nほかにも気になる施術やご不明な点などございましたら、いつでもお気軽にご相談くださいね💗",
                    "ko": "안녕하세요😊💗\n이것이 저희 병원 가격표이니 꼭 참고해 주세요✨\n\n저희 병원의 예약 접수 시간은 평일 10:00〜18:00, 토일 10:00〜15:00입니다✨\n\n그 밖에도 관심 있는 시술이나 궁금한 점 등이 있으시면 언제든 편하게 상담해 주세요💗\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K201:N204"
              },
              {
                "id": "MISS-G-20261031-068",
                "recordIds": [
                  "MISS-G-20261031-068"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "온다",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "온다 가격 이미지를 보내고 더 궁금한 시술이 있으면 언제든 말해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "ONDA的價格這邊可以先給您參考喔😊",
                    "ko": "ONDA 가격은 여기서 먼저 참고하실 수 있도록 드릴게요😊"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "後續如果還有任何問題，或是有想再了解的療程，都可以隨時跟我們說～  \n謝謝您🤍",
                    "ko": "이후에도 궁금한 점이 있거나 더 알아보고 싶은 시술이 있으시면 언제든 저희에게 말씀해 주세요～  \n감사합니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K206:N211"
              },
              {
                "id": "MISS-G-20261031-069",
                "recordIds": [
                  "MISS-G-20261031-069"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "피코슈어",
                "category": "중국어 통역",
                "verdict": "normal-ops",
                "reason": "내원 시 중국어 통역이 필요하다는 요청에 원내에 중국어 통역 직원이 있다고 답했다.",
                "questionDate": "2026-10-31",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-31",
                    "original": "到院時需要中文翻譯服務",
                    "ko": "내원할 때 중국어 통역 서비스가 필요합니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "我們院內都有中文翻譯人員，這個不用擔心喔✅",
                    "ko": "저희 병원 안에는 중국어 통역 직원이 있으니, 이 부분은 걱정하지 않으셔도 돼요✅"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K212:N220"
              },
              {
                "id": "MISS-G-20261031-070",
                "recordIds": [
                  "MISS-G-20261031-070"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "온다",
                "category": "가격 자료 안내",
                "verdict": "image",
                "reason": "온다 가격 이미지를 보내고 가장 개선하고 싶은 부위를 알려 주면 시술을 추천하겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "ONDA的價格這邊可以先給您參考喔😊",
                    "ko": "ONDA 가격은 여기서 먼저 참고하실 수 있도록 드릴게요😊"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 저희에게 말씀해 주셔도 돼요. 그러면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K221:N226"
              },
              {
                "id": "MISS-G-20261031-074",
                "recordIds": [
                  "MISS-G-20261031-074"
                ],
                "kind": "inflow",
                "country": "CA",
                "procedure": "피코슈어",
                "category": "행사 안내",
                "verdict": "image",
                "reason": "프로모션 이미지를 보내고 궁금한 점은 언제든 문의해 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hi~ Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 참고하실 수 있도록 저희 프로모션을 보내드립니다✨\n\n궁금한 점이 있으시면 언제든 편하게 문의해 주세요💕\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=322983437&range=K233:N236"
              }
            ],
            "merged": [
              {
                "recordId": "MISS-G-20261031-067",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-037"
              },
              {
                "recordId": "MISS-G-20261031-076",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-038"
              },
              {
                "recordId": "MISS-G-20261031-071",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-040"
              },
              {
                "recordId": "MISS-G-20261031-078",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-043"
              },
              {
                "recordId": "MISS-G-20261031-073",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-044"
              },
              {
                "recordId": "MISS-G-20261031-075",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-045"
              },
              {
                "recordId": "MISS-G-20261031-077",
                "intoDate": "2026-10-30",
                "intoId": "G-20261030-046"
              }
            ],
            "unavailable": {
              "recordIds": [
                "MISS-G-20261031-002",
                "MISS-G-20261031-003",
                "MISS-G-20261031-004",
                "MISS-G-20261031-005",
                "MISS-G-20261031-006",
                "MISS-G-20261031-007",
                "MISS-G-20261031-008",
                "MISS-G-20261031-009",
                "MISS-G-20261031-010",
                "MISS-G-20261031-011",
                "MISS-G-20261031-012",
                "MISS-G-20261031-014",
                "MISS-G-20261031-015",
                "MISS-G-20261031-017",
                "MISS-G-20261031-018",
                "MISS-G-20261031-019",
                "MISS-G-20261031-020",
                "MISS-G-20261031-021",
                "MISS-G-20261031-022",
                "MISS-G-20261031-023",
                "MISS-G-20261031-024",
                "MISS-G-20261031-025",
                "MISS-G-20261031-026",
                "MISS-G-20261031-027",
                "MISS-G-20261031-028",
                "MISS-G-20261031-032",
                "MISS-G-20261031-033",
                "MISS-G-20261031-034",
                "MISS-G-20261031-036",
                "MISS-G-20261031-038",
                "MISS-G-20261031-040",
                "MISS-G-20261031-041",
                "MISS-G-20261031-046",
                "MISS-G-20261031-050",
                "MISS-G-20261031-051",
                "MISS-G-20261031-064"
              ]
            }
          }
        },
        {
          "platform": "gangnamunni",
          "date": "2026-10-30",
          "status": "partial",
          "auditState": "reviewed-expanded-safe-scope-unaggregated",
          "cutoffAt": "2026-10-30T23:59:59+09:00",
          "checkedAt": "2026-10-31T07:02:40.941Z",
          "eligibleRooms": 46,
          "reviewedRooms": 46,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "verdicts": {
            "appropriate": 35,
            "confirmedError": 1,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 3,
            "needsVerification": 7
          },
          "countries": [
            {
              "code": "GB",
              "name": "영국",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 1,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "TH",
              "name": "태국",
              "rooms": 8,
              "messages": null,
              "verdicts": {
                "appropriate": 7,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 1
              }
            },
            {
              "code": "TW",
              "name": "대만",
              "rooms": 15,
              "messages": null,
              "verdicts": {
                "appropriate": 11,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 3,
                "needsVerification": 1
              }
            },
            {
              "code": "DE",
              "name": "독일",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 1,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "SG",
              "name": "싱가포르",
              "rooms": 2,
              "messages": null,
              "verdicts": {
                "appropriate": 2,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "FI",
              "name": "핀란드",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 1,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "US",
              "name": "미국",
              "rooms": 8,
              "messages": null,
              "verdicts": {
                "appropriate": 3,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 5
              }
            },
            {
              "code": "JP",
              "name": "일본",
              "rooms": 5,
              "messages": null,
              "verdicts": {
                "appropriate": 5,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "RU",
              "name": "러시아",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 1,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "CA",
              "name": "캐나다",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 1,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "IT",
              "name": "이탈리아",
              "rooms": 1,
              "messages": null,
              "verdicts": {
                "appropriate": 1,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "AU",
              "name": "호주",
              "rooms": 2,
              "messages": null,
              "verdicts": {
                "appropriate": 2,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            }
          ],
          "issues": [
            {
              "category": "응대자료 선택",
              "severity": "보통",
              "status": "정정 검토 필요",
              "summary": "얼굴필러 문의에 바디표 전달1건",
              "count": 1
            },
            {
              "category": "공통 환산자료",
              "severity": "보통",
              "status": "자료 표기 확인",
              "summary": "공통원인1건·3방노출(직원오류3건 아님)",
              "count": 1
            },
            {
              "category": "자료구성·VAT·확정회신",
              "severity": "보통",
              "status": "확인 필요",
              "summary": "실제 읽은 뒤 근거가 부족한6방이며 미열람과 구분",
              "count": 6
            }
          ],
          "casesComplete": false,
          "casesScope": "reviewed-rooms",
          "casesUpdatedAt": "2026-10-30T23:42:14.945Z",
          "cases": [
            {
              "id": "G-20261030-case-001",
              "verdict": "confirmedError",
              "country": "CA",
              "title": "얼굴필러 문의에 바디 시술표 첨부",
              "procedure": "얼굴필러",
              "questionCategory": "응대자료·문의주제 대응",
              "structuralReason": "얼굴필러 이벤트 유입에 실제 전송된 자료는 바디주사·바디보톡스·ONDA·Inmode 표였습니다. 얼굴필러 항목이 없어 응대자료 선택 불일치로 판정했습니다. 본문과 정상 원본 미리보기를 직접 대조하고 독립 검토로 재확인했습니다.",
              "rationale": "얼굴필러 이벤트 유입에 실제 전송된 자료는 바디주사·바디보톡스·ONDA·Inmode 표였습니다. 얼굴필러 항목이 없어 응대자료 선택 불일치로 판정했습니다.",
              "evidence": "본문과 정상 원본 미리보기를 직접 대조하고 독립 검토로 재확인했습니다.",
              "limit": "좁은 범위의 자료 오전송1건입니다. 개인별 의학적 진단·작성자 신원·실제 청구 오류는 단정하지 않습니다. 유입 제목 끝은 저장된 표시 그대로이며 복원하지 않았습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A34:Z34"
            },
            {
              "id": "G-20261030-case-002",
              "verdict": "sourceConflict",
              "country": "TW",
              "title": "공통 교근 가격 이미지의 환산 표기 불일치",
              "procedure": "교근 보톡스",
              "questionCategory": "자료표기·통화 환산",
              "structuralReason": "이미지의 제오민50U는143,000원, 대만달러 약3,088, 환율41로 함께 표시되어 있습니다.143,000÷41은약3,488로 표기가 맞지 않습니다. 정상 미리보기에서 가격·환산율·VAT별도 문구를 읽고 계산했습니다. 같은 자료가3방에 노출되었으며 공통 원인은1건입니다.",
              "rationale": "이미지의 제오민50U는143,000원, 대만달러 약3,088, 환율41로 함께 표시되어 있습니다.143,000÷41은약3,488로 표기가 맞지 않습니다.",
              "evidence": "정상 미리보기에서 가격·환산율·VAT별도 문구를 읽고 계산했습니다. 같은 자료가3방에 노출되었으며 공통 원인은1건입니다.",
              "limit": "방별 대표판정 자료문제3과 공통원인1은 다른 단위입니다. 직원의 직접작성·실제결제 오류는 미입증입니다. 한 방의 별도 RF자료 유효기간 적용은 확인필요이며 자동 정정·발송하지 않았습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A15:Z15"
            },
            {
              "id": "G-20261030-case-003",
              "verdict": "needsVerification",
              "country": "US",
              "title": "피코 자료 일부 금액·구성·버전 대응 확인",
              "procedure": "피코 색소 레이저",
              "questionCategory": "자료금액·구성·적용조건",
              "structuralReason": "실제 읽은 가격표와 제공 원본의 동일 명칭·회차 일부4행에 표시금액 차이가 있습니다. 이미지의 VAT미포함 금액은 원본 VAT전 열과 비교했습니다. 듀얼색소10회1.95M/원본1.99M, 트리플1·5·10회330k·1.37M·2.49M/원본350k·1.45M·2.59M. 같은 내용의 자료는3방에서 확인했습니다.",
              "rationale": "실제 읽은 가격표와 제공 원본의 동일 명칭·회차 일부4행에 표시금액 차이가 있습니다. 이미지의 VAT미포함 금액은 원본 VAT전 열과 비교했습니다.",
              "evidence": "듀얼색소10회1.95M/원본1.99M, 트리플1·5·10회330k·1.37M·2.49M/원본350k·1.45M·2.59M. 같은 내용의 자료는3방에서 확인했습니다.",
              "limit": "관리 포함·구성·자료버전과 BBL/V레이저 용어 대응이 전부 같다고 단정하지 않았습니다. 확인필요이지 확정 직원가격오류가 아닙니다. 증정항목은 Trablanc으로 고해상도 확인했습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A22:Z22"
            },
            {
              "id": "G-20261030-case-004",
              "verdict": "needsVerification",
              "country": "US",
              "title": "채널 가격과 홍보표 VAT 적용범위 구분 필요",
              "procedure": "주름·스킨 보톡스",
              "questionCategory": "가격·부가세",
              "structuralReason": "강남언니 표시금액이VAT포함이라는 응답은 제공 원본과 맞습니다. 함께 보낸 실제 홍보 이미지의VAT별도 표기가 어느 상품·채널에 적용되는지 구분이 명확하지 않습니다. 응답 전체와 실제 가격표2개를 읽고 채널/VAT 조건을 구분했습니다.",
              "rationale": "강남언니 표시금액이VAT포함이라는 응답은 제공 원본과 맞습니다. 함께 보낸 실제 홍보 이미지의VAT별도 표기가 어느 상품·채널에 적용되는지 구분이 명확하지 않습니다.",
              "evidence": "응답 전체와 실제 가격표2개를 읽고 채널/VAT 조건을 구분했습니다.",
              "limit": "확인필요이며 실제 VAT추가청구나 거짓 가격안내를 확정하지 않습니다. 뒤의 피부증상·임상대화는 이 가격 사례와 무관하여 공개하지 않습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A25:Z25"
            },
            {
              "id": "G-20261030-case-005",
              "verdict": "needsVerification",
              "country": "TH",
              "title": "턱밑지방 요청에 적용할 가격 옵션 확인",
              "procedure": "턱밑지방 관리",
              "questionCategory": "상품·부위별 가격조건",
              "structuralReason": "가격질문 뒤에 실제 가격표3개가 전달되어 읽었습니다. 요청한 턱밑지방에 적용되는 구체 상품·브랜드·용량·채널 조건은 명확화가 필요합니다. 보톡스표2개와 필러표1개를 정상 미리보기로 확인했습니다.",
              "rationale": "가격질문 뒤에 실제 가격표3개가 전달되어 읽었습니다. 요청한 턱밑지방에 적용되는 구체 상품·브랜드·용량·채널 조건은 명확화가 필요합니다.",
              "evidence": "보톡스표2개와 필러표1개를 정상 미리보기로 확인했습니다.",
              "limit": "답변이 없거나 첨부를 못 읽은 사례가 아닙니다. 다른 부위·상품의 가격을 같다고 가정한 오류나 개인별 시술적합성은 확정하지 않습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A32:Z32"
            },
            {
              "id": "G-20261030-case-006",
              "verdict": "needsVerification",
              "country": "US",
              "title": "최종 예약요청에 대한 확정 회신 확인",
              "procedure": "확인되지 않음",
              "questionCategory": "예약확정·예상소요시간",
              "structuralReason": "최종 응답은 대기시간에 따른 예상소요시간 설명입니다. 고객이 요청한 새 일정의 명시적 확정 회신은 확인한 원문에 없습니다. 관련 질문과 최종 답변을 정상 화면에서 읽었습니다. 삭제 원문1단위는 복원하거나 추정하지 않았습니다.",
              "rationale": "최종 응답은 대기시간에 따른 예상소요시간 설명입니다. 고객이 요청한 새 일정의 명시적 확정 회신은 확인한 원문에 없습니다.",
              "evidence": "관련 질문과 최종 답변을 정상 화면에서 읽었습니다. 삭제 원문1단위는 복원하거나 추정하지 않았습니다.",
              "limit": "응답 자체는 있어 답변누락이 아닙니다. 별도 예약성공·실패나 실제 시술시간 부족을 단정하지 않습니다. 개인 예약일시와 무관한 과거대화는 공개하지 않습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A16:Z16"
            }
          ],
          "conversations": [],
          "reviewEntries": [
            {
              "id": "G-20261030-001",
              "country": "GB",
              "procedure": "여성 겨드랑이 관리(유입정보)",
              "questionCategory": "상담 시작",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객 직접 질문 없이 상품 유입 카드와 상담 요청 안내. 당일 텍스트상 미응답 지적 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-002",
              "country": "TH",
              "procedure": "Eve-V Muse 피부진단",
              "questionCategory": "통역·장비 유무",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "태국어 통역 및 AI 피부진단 유무 질문에 둘 다 있다고 답변. 실제 문의에 응대가 있으며 의료 효과·금액 주장 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-005",
              "country": "TW",
              "procedure": "여성 겨드랑이 관리(유입정보)",
              "questionCategory": "개선부위 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "직접 고객질문은 없으며 겨드랑이 개선 희망부위를 물어 추가 상담 유도. 이벤트 제목의 동반 할인조건을 임의 적용하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-010",
              "country": "TW",
              "procedure": "포텐자(유입정보)",
              "questionCategory": "예약경로 재확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "과거 일정제안을 보고 당일 LINE에서 이미 예약했는지 확인하는 병원 답변. 실제 LINE 예약완료는 확인 안 됨. 이 메시지로 전일 이슈 해결이나 신규 누락을 만들지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-011",
              "country": "TH",
              "procedure": "코어톡스(유입정보)",
              "questionCategory": "예약의향 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "과거 가격문의에 이미지 응대가 이미 존재. 당일은 예약 희망시 알려달라는 후속 안내만 검토, 과거 이미지 금액을 검증했다고 하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-012",
              "country": "DE",
              "procedure": "포텐자(유입정보)",
              "questionCategory": "예약취소",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객 취소요청 후 병원 확인답변과 시스템 취소기록이 모두 실제 존재. 고객 요청에 응대했고 일정 변경을 대신 수행하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-014",
              "country": "SG",
              "procedure": "보톡스(정확 제품 미정)",
              "questionCategory": "당일예약",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객이 요청한 일정과 병원 재확인·시스템 확정 표시가 일치합니다. 인적사항 양식·구체 예약 일정은 공개하지 않습니다. 특정 브랜드·용량·금액 판단은 없으며 국적은 실제 계정 국적 라벨을 사용했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-016",
              "country": "FI",
              "procedure": "주름보톡스(유입정보)",
              "questionCategory": "시술종류·예약의향",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원하는 보톡스 종류를 묻고 공개 병원 웹페이지를 제공. 금액 안내가 없어 제품단위 가격판정 없음. 단축링크 목적지 오류를 추정하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-018",
              "country": "TH",
              "procedure": "확인되지 않음",
              "questionCategory": "예약전일 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "과거 예약확인과 당일 재안내 일정이 일치합니다. 시술종류는 확인되지 않았습니다. 이 방의 이전 전체 가격·진료를 승인하는 것이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 현재는 고객최종발화 보호로 재열람하지 않았고 과거30일 저장자료만 유지합니다."
            },
            {
              "id": "G-20261030-020",
              "country": "US",
              "procedure": "사각턱 보톡스(유입정보)",
              "questionCategory": "예약확정",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객 제안 일정과 시스템 확정·병원 안내가 일치합니다. 표시된 위치·지참 안내는 제공 예약 템플릿과 부합합니다. 특정 제품·금액 안내는 없고 구체 예약 일정은 공개하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-021",
              "country": "JP",
              "procedure": "주름보톡스(유입정보)",
              "questionCategory": "예약당일 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 상담만 1만원 문구는 제공 일본어 예약 템플릿과 부합합니다. 자동일정 시스템과 병원 메시지를 구분했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-022",
              "country": "JP",
              "procedure": "사각턱보톡스(유입정보)",
              "questionCategory": "예약당일 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 과거 대화를 오늘 신규사례로 삼지 않았습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-023",
              "country": "JP",
              "procedure": "사각턱보톡스(유입정보)",
              "questionCategory": "예약당일 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 과거 포인트 규정을 오늘 재검증했다는 주장은 하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-025",
              "country": "JP",
              "procedure": "사각턱보톡스(유입정보)",
              "questionCategory": "시술상담·채널가격 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "시술 상담 희망에 강남언니 표시가격대로 제공하고 추가문의하라는 병원응대. 구체 부위·용량/금액 비교는 없으며 즉시 치료확정/고정효과 약속도 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-004",
              "country": "US",
              "procedure": "피코슈어(유입정보)",
              "questionCategory": "프로모션·가격",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-003"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-006",
              "country": "US",
              "procedure": "주름·스킨보톡스 및 피부상담",
              "questionCategory": "추가비용·가격·홍조",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-004"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-007",
              "country": "TH",
              "procedure": "Elravie Re2O(유입정보)",
              "questionCategory": "예약확정·지정비",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-009",
              "country": "TW",
              "procedure": "황금미세침·쥬베룩·승모근보톡스·팔 INMODE",
              "questionCategory": "시술조합·예약가능시간",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-013",
              "country": "TH",
              "procedure": "보톡스·팔자필러·턱밑 지방·윤곽",
              "questionCategory": "복합시술 가격·예약·도착",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-005"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-027",
              "country": "TW",
              "procedure": "교근·승모근 보톡스·ONDA",
              "questionCategory": "시술·용량·자료안내",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-002"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-003",
              "country": "SG",
              "procedure": "SKINVIVE·리쥬란 HB·피부진단",
              "questionCategory": "용량·피부질환 이력·진단비",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "제공 자료의 조건부 의사평가·상담비 안내를 대조했습니다. 개별 진단·시술결과 보장은 판정하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-008",
              "country": "RU",
              "procedure": "사각턱 보톡스",
              "questionCategory": "브랜드별 가격·용량",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "동일 브랜드50U 금액과 실제 채널의 국산/Coretox옵션·VAT포함을 대조했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-015",
              "country": "CA",
              "procedure": "필러(유입정보)",
              "questionCategory": "프로모션·가격",
              "verdict": "confirmedError",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-001"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-017",
              "country": "TW",
              "procedure": "사각턱 보톡스",
              "questionCategory": "가격참고·추가질문",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-002"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-019",
              "country": "US",
              "procedure": "피코슈어·미세침",
              "questionCategory": "기미·주근깨 치료추천",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-003"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-024",
              "country": "TW",
              "procedure": "주름보톡스(유입정보)",
              "questionCategory": "잘못 클릭·가격참고",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-026",
              "country": "TW",
              "procedure": "ONDA",
              "questionCategory": "시술대상·가격참고",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-028",
              "country": "TW",
              "procedure": "보톡스·RF리프팅·필러",
              "questionCategory": "시술·가격자료",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-002"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-029",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "예약 재확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-030",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "예약 재확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-031",
              "country": "US",
              "procedure": "확인되지 않음",
              "questionCategory": "예약확정·예상소요시간",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-006"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-032",
              "country": "TH",
              "procedure": "스킨보톡스",
              "questionCategory": "이벤트·가격자료",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "보이는 응답과 실제 가격표는 일치합니다. 삭제 원문1단위는 미검수로 판정에서 제외합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-033",
              "country": "US",
              "procedure": "피코 색소레이저",
              "questionCategory": "이벤트·가격자료",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "G-20261030-case-003"
              ],
              "note": "관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-034",
              "country": "IT",
              "procedure": "주름 보톡스",
              "questionCategory": "이벤트·가격자료",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-035",
              "country": "US",
              "procedure": "교근 보톡스",
              "questionCategory": "일정 응답 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-036",
              "country": "TH",
              "procedure": "코어톡스 보톡스",
              "questionCategory": "이벤트·가격자료",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다."
            },
            {
              "id": "G-20261030-037",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "취소요청·야간접수",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "취소요청과 영업시간외 안내가 보입니다. 접수안내 범위만 적정이며 당일 취소처리·상담완료를 뜻하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-038",
              "country": "TH",
              "procedure": "인모드",
              "questionCategory": "이벤트유입·접수안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "이벤트 유입정보와 병원 소개·연락 안내 범위만 적정입니다. 개별 시술 적합성·가격 설명 완료는 미평가입니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-039",
              "country": "TW",
              "procedure": "주름 보톡스",
              "questionCategory": "이벤트유입·접수안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-040",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "병원유입·접수안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "병원 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-041",
              "country": "TW",
              "procedure": "초음파리프팅",
              "questionCategory": "예약·시술후 화장안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "예약·길안내 및 초음파리프팅 당일 화장 질문에 대한 가시 답변 범위를 검토했습니다. 부드럽게 하고 세게 문지르지 말라는 답변은 제공된 동일범주 초음파리프팅/HIFU 후관리의 당일 가벼운 세안·화장 가능 지침과 일치합니다. 개인 시술적합성·실제 시술이행·모든 상황의 무위험성을 보증하지 않습니다. 삭제원문1개는 미열람이며 복원하지 않았습니다. 예약정보는 공개하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-042",
              "country": "TW",
              "procedure": "포텐자",
              "questionCategory": "시술상세문의·야간부분범위",
              "verdict": "needsVerification",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "시술 내용을 자세히 알고 싶다는 질문 뒤 야간안내만 확인했습니다. 실질 시술설명 완료가 아니므로 확인필요·부분범위입니다. 확정 답변누락이나 직원 과실로 단정하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-043",
              "country": "TW",
              "procedure": "인모드",
              "questionCategory": "예약문의·야간접수",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "예약 가능 여부 질문과 야간안내의 접수범위만 적정입니다. 예약확정·실질 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-044",
              "country": "US",
              "procedure": "겨드랑이 관리",
              "questionCategory": "일정제안·야간접수",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "일정제안 카드와 연락·야간안내의 접수범위만 적정입니다. 실제 예약확정·의료상담 완료는 미평가입니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-045",
              "country": "AU",
              "procedure": "피코 색소레이저",
              "questionCategory": "이벤트유입·접수안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            },
            {
              "id": "G-20261030-046",
              "country": "AU",
              "procedure": "수염 제모",
              "questionCategory": "이벤트유입·접수안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다."
            }
          ],
          "reviewScope": "검수내역 57행: 기존 상담 판정46행과 운영전용11행. 11월2일 안전한54방을 재대조했고 신규보호2방과 기존보호1방은 열지 않았습니다. 실제 당일 UI285단위(삭제3 포함), 이전 저장범위 UI289단위와 다릅니다. 원문·발화별 완전 번역은 각 행의 제한 원장에 있습니다. 이전 판정범위: 기존36방 판정·공개 사례 원문과 한국어 번역은 좁은 기존 승인범위로 보존하고 신규10방을 추가한 누적46방입니다. 당시30일 본문 재열람45방과 보호된 태국 과거자료1방을 구분합니다. 당시 실제 국적필드45방·12국가이며 누적 태국8에는 당시7+역사1이 포함됩니다. 후보56·안전열람55 중30일45방, 이미지38표시, UI278단위(본문253+운영카드22+삭제원문미열람3)입니다. 제공자 개별 메시지수는 미집계입니다. 신규 적정9는 행정/접수범위8과 동일범주 지침을 대조한 일반후관리 가시답변1이며, 야간 시술상세문의1은 확인필요·부분범위입니다. 신규10방 모두31일 연속이나31일 답변을30일 상담완료로 보지 않습니다. 전국가/전상태 분모는 미확인·전체partial이며 과거 수집 차이의 구체 원인 또는 직원 답변누락은 미입증입니다.",
          "coverage": {
            "candidateRooms": 56,
            "reviewedRooms": 46,
            "excludedUnread": null,
            "excludedWaiting": null,
            "excludedCustomerFinalOrUnknown": 1,
            "excludedAfterCutoff": null,
            "excludedOutsideDate": 10,
            "uninspectedAttachments": null,
            "notes": [
              "검수내역 57행: 기존 상담 판정46행과 운영전용11행. 11월2일 안전한54방을 재대조했고 신규보호2방과 기존보호1방은 열지 않았습니다. 실제 당일 UI285단위(삭제3 포함), 이전 저장범위 UI289단위와 다릅니다. 원문·발화별 완전 번역은 각 행의 제한 원장에 있습니다.",
              "이전 10월31일 집계 기록: 기존36방 판정·공개 사례 원문과 한국어 번역은 좁은 기존 승인범위로 보존하고 신규10방을 추가한 누적46방입니다. 당시30일 본문 재열람45방과 보호된 태국 과거자료1방을 구분합니다. 당시 실제 국적필드45방·12국가이며 누적 태국8에는 당시7+역사1이 포함됩니다. 후보56·안전열람55 중30일45방, 이미지38표시, UI278단위(본문253+운영카드22+삭제원문미열람3)입니다. 제공자 개별 메시지수는 미집계입니다. 신규 적정9는 행정/접수범위8과 동일범주 지침을 대조한 일반후관리 가시답변1이며, 야간 시술상세문의1은 확인필요·부분범위입니다. 신규10방 모두31일 연속이나31일 답변을30일 상담완료로 보지 않습니다. 전국가/전상태 분모는 미확인·전체partial이며 과거 수집 차이의 구체 원인 또는 직원 답변누락은 미입증입니다.",
              "이전 10월31일 집계 기록: 이미지38표시는 저장된 시각검토 근거에 연결했습니다. 고유파일수·새 다운로드수와 다릅니다. 삭제3은 미열람이며 보호방의 당시 미관찰내용은 알 수 없습니다.",
              "이전 10월31일 집계 기록: casesComplete는 기존 공개 사례의 명시된 검토범위 보존만 뜻하며 전체 대화/삭제/보호범위 완전성 또는 신규범위 전체 검토 완료가 아닙니다.",
              "이전 10월31일 집계 기록: 기존 국가별 관리원장에30일279행(278UI표시단위+보호메타1)을 실제 저장하고8,370셀 전체XLSX 재독으로 대조했습니다. 기존29일121행과 원래값·서식은 보존됐고 기록키 중복은0입니다. 삭제3·보호1은 미검수 표시 그대로입니다.",
              "이전 10월31일 집계 기록: 전체언어 재감사: 보존목록5425개 물리슬롯 끝까지 관찰했지만 고유방수나 당일분모는 아닙니다. 처리기록795행, 실제 고유채널775개 성공. 목록 메타키와 처리기록이 연결되지 않은 4630행은 고유 미검수방수로 단정하지 않습니다. 당시 당일 직접열람56방·289UI단위 = 기존45방·278단위 + 자동 운영카드전용11방·11단위입니다. 보호된 기존자료1방을 별도로 유지하여 알려진 이력 하한57방입니다. UI단위는 제공자 개별 메시지 수가 아닙니다. 기존 상담판정46방은 적정35·확정오류1·자료충돌3·확인필요7로 보존합니다. 언어별 판정은 당시 재열람45방의 기존 한정판정만 연결했으며 보호역사1방의 판정은 기존원장에만 남깁니다. 새 운영카드11방에 임상 적정/오류 판정을 생성하지 않습니다. 처리기록 내 보호15행과 선택미확인2행이 있습니다. 보호 중 알려진 과거 당일방1개 외 나머지의 당일 포함 여부·언어·국적은 미확인이라 당일 국가/언어분모에 확정 편입하지 않습니다. 전체 미검수방수는 미확인입니다."
            ]
          },
          "followUps": [],
          "definitionRevision": "2026-10-30-local-text-subset-v1",
          "knowledgeVerification": {
            "status": "native-source-bounded-reviewed",
            "rooms": 46,
            "messages": null,
            "checkedAt": "2026-10-31T03:07:45.347Z",
            "uniqueSourceConflictTopics": 1,
            "sourceConflictOccurrences": 3,
            "scope": "기존36방 판정·공개 사례 원문과 한국어 번역은 좁은 기존 승인범위로 보존하고 신규10방을 추가한 누적46방입니다. 현재30일 본문 재열람45방과 보호된 태국 과거자료1방을 구분합니다. 현재 실제 국적필드45방·12국가이며 누적 태국8에는 현재7+역사1이 포함됩니다. 후보56·안전열람55 중30일45방, 이미지38표시, UI278단위(본문253+운영카드22+삭제원문미열람3)입니다. 제공자 개별 메시지수는 미집계입니다. 신규 적정9는 행정/접수범위8과 동일범주 지침을 대조한 일반후관리 가시답변1이며, 야간 시술상세문의1은 확인필요·부분범위입니다. 신규10방 모두31일 연속이나31일 답변을30일 상담완료로 보지 않습니다. 전국가/전상태 분모는 미확인·전체partial이며 과거 수집 차이의 구체 원인 또는 직원 답변누락은 미입증입니다."
          },
          "countryCoverage": {
            "basis": "현재 재열람45방은 실제 고객정보 국적필드, 보호태국1방은 과거 실제필드만 유지",
            "allCountryDailyAuditComplete": false,
            "denominatorKnown": false,
            "scope": "기존36방 판정·공개 사례 원문과 한국어 번역은 좁은 기존 승인범위로 보존하고 신규10방을 추가한 누적46방입니다. 현재30일 본문 재열람45방과 보호된 태국 과거자료1방을 구분합니다. 현재 실제 국적필드45방·12국가이며 누적 태국8에는 현재7+역사1이 포함됩니다. 후보56·안전열람55 중30일45방, 이미지38표시, UI278단위(본문253+운영카드22+삭제원문미열람3)입니다. 제공자 개별 메시지수는 미집계입니다. 신규 적정9는 행정/접수범위8과 동일범주 지침을 대조한 일반후관리 가시답변1이며, 야간 시술상세문의1은 확인필요·부분범위입니다. 신규10방 모두31일 연속이나31일 답변을30일 상담완료로 보지 않습니다. 전국가/전상태 분모는 미확인·전체partial이며 과거 수집 차이의 구체 원인 또는 직원 답변누락은 미입증입니다.",
            "legends": [
              "현재재열람45와 과거자료1은 다른 방법입니다.",
              "적정은 각 행의 제한된 검토범위이며 의료상담 전체 완료가 아닙니다.",
              "국가별 전체분모·총보호방수 미확인은0이 아닙니다."
            ],
            "rows": [
              {
                "code": "GB",
                "name": "영국",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "TH",
                "name": "태국",
                "knownRooms": 8,
                "reviewedScopeRooms": 8,
                "normalReopenedRooms": 7,
                "priorTextRooms": 1,
                "needsVerificationRooms": 1,
                "unreadDeletedUnits": 1,
                "unreadCardUnits": 0,
                "knownProtectedRooms": 1,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드7방+역사 국적필드1방. 보호1은 현재 재열람·현재국적 확인 아님."
              },
              {
                "code": "TW",
                "name": "대만",
                "knownRooms": 15,
                "reviewedScopeRooms": 15,
                "normalReopenedRooms": 15,
                "priorTextRooms": 0,
                "needsVerificationRooms": 1,
                "unreadDeletedUnits": 1,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "DE",
                "name": "독일",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "SG",
                "name": "싱가포르",
                "knownRooms": 2,
                "reviewedScopeRooms": 2,
                "normalReopenedRooms": 2,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "FI",
                "name": "핀란드",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "US",
                "name": "미국",
                "knownRooms": 8,
                "reviewedScopeRooms": 8,
                "normalReopenedRooms": 8,
                "priorTextRooms": 0,
                "needsVerificationRooms": 5,
                "unreadDeletedUnits": 1,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "JP",
                "name": "일본",
                "knownRooms": 5,
                "reviewedScopeRooms": 5,
                "normalReopenedRooms": 5,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "RU",
                "name": "러시아",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "CA",
                "name": "캐나다",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "IT",
                "name": "이탈리아",
                "knownRooms": 1,
                "reviewedScopeRooms": 1,
                "normalReopenedRooms": 1,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              },
              {
                "code": "AU",
                "name": "호주",
                "knownRooms": 2,
                "reviewedScopeRooms": 2,
                "normalReopenedRooms": 2,
                "priorTextRooms": 0,
                "needsVerificationRooms": 0,
                "unreadDeletedUnits": 0,
                "unreadCardUnits": 0,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "현재 국적필드와 정상 재열람의 명시된 범위만 집계. 국가 전체분모·총보호수 미확인."
              }
            ],
            "notes": [
              "10월31일 보존집계: 기존36방 판정·공개 사례 원문과 한국어 번역은 좁은 기존 승인범위로 보존하고 신규10방을 추가한 누적46방입니다. 당시30일 본문 재열람45방과 보호된 태국 과거자료1방을 구분합니다. 당시 실제 국적필드45방·12국가이며 누적 태국8에는 당시7+역사1이 포함됩니다. 후보56·안전열람55 중30일45방, 이미지38표시, UI278단위(본문253+운영카드22+삭제원문미열람3)입니다. 제공자 개별 메시지수는 미집계입니다. 신규 적정9는 행정/접수범위8과 동일범주 지침을 대조한 일반후관리 가시답변1이며, 야간 시술상세문의1은 확인필요·부분범위입니다. 신규10방 모두31일 연속이나31일 답변을30일 상담완료로 보지 않습니다. 전국가/전상태 분모는 미확인·전체partial이며 과거 수집 차이의 구체 원인 또는 직원 답변누락은 미입증입니다.",
              "10월31일 보존집계: 원장 미반영은 실제 기존30일0행→279행 누적으로 보완했습니다. 신규10방의 과거 구체 누락발생 단계와 직원 답변누락은 미입증입니다.",
              "10월31일 보존집계: 새 국적탭은 당시 확인된 실제필드28개 코드를 별도 표시하고 전체분모는 미확인입니다. 기존 한정판정과 자동카드전용 추가분모는 합치지 않습니다."
            ]
          },
          "inquiryLanguageCoverage": {
            "label": "10월30일 전국가·전언어 재감사 확인범위",
            "methodNote": "고객이 당일 직접 작성한 자연문장만 분류. 직원 답변·자동안내·상품유입 문구·국적·이름·국기는 언어 근거에서 제외.",
            "denominatorKnown": false,
            "totalTargetRooms": null,
            "observedCandidateRooms": null,
            "confirmedTargetRooms": 57,
            "knownTargetRoomLowerBound": 57,
            "knownTargetRoomUpperBound": null,
            "accessAttemptedRooms": 775,
            "openedRooms": 775,
            "reviewedTargetRooms": 56,
            "clinicalSourceRooms": 46,
            "operatingOnlyRooms": 11,
            "guardedNotOpenedRooms": 15,
            "accessFailureRooms": 0,
            "unresolvedDateRooms": null,
            "deletedOriginalUnreadUnits": 3,
            "providerIndividualMessageCount": null,
            "retainedListRows": 5425,
            "unprocessedRetainedRows": null,
            "languages": [
              {
                "code": "zh",
                "name": "중국어",
                "knownTargetRooms": 8,
                "readTargetRooms": 8,
                "reviewedTargetRooms": 8,
                "clinicalReviewedRooms": 8,
                "operatingOnlyRooms": 0,
                "uiUnits": 91,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 1,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 4,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 3,
                  "needsVerification": 1
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              },
              {
                "code": "en",
                "name": "영어",
                "knownTargetRooms": 7,
                "readTargetRooms": 7,
                "reviewedTargetRooms": 7,
                "clinicalReviewedRooms": 7,
                "operatingOnlyRooms": 0,
                "uiUnits": 79,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 1,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 4,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 3
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              },
              {
                "code": "ja",
                "name": "일본어",
                "knownTargetRooms": 2,
                "readTargetRooms": 2,
                "reviewedTargetRooms": 2,
                "clinicalReviewedRooms": 2,
                "operatingOnlyRooms": 0,
                "uiUnits": 7,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 0,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 2,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 0
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              },
              {
                "code": "th",
                "name": "태국어",
                "knownTargetRooms": 2,
                "readTargetRooms": 2,
                "reviewedTargetRooms": 2,
                "clinicalReviewedRooms": 2,
                "operatingOnlyRooms": 0,
                "uiUnits": 23,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 0,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 1,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 1
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              },
              {
                "code": "ko",
                "name": "한국어",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": 0,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 0,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 0,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 0
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              },
              {
                "code": "unknown",
                "name": "미확인",
                "knownTargetRooms": 38,
                "readTargetRooms": 37,
                "reviewedTargetRooms": 37,
                "clinicalReviewedRooms": 26,
                "operatingOnlyRooms": 11,
                "uiUnits": 89,
                "guardedNotOpenedRooms": 1,
                "unreadOriginalUnits": 1,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 23,
                  "confirmedError": 1,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 2
                },
                "notes": [
                  "당일 고객 직접 문장이 없거나 현재 보호로 미열람한 방입니다. 자동카드·상품유입·직원문구·국적·이름으로 언어를 추정하지 않았습니다."
                ]
              },
              {
                "code": "multilingual",
                "name": "다국어",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": 0,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 0,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 0,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 0
                },
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              }
            ],
            "nationalities": [
              {
                "code": "AE",
                "name": "아랍에미리트",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "AT",
                "name": "오스트리아",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "AU",
                "name": "오스트레일리아",
                "knownTargetRooms": 3,
                "readTargetRooms": 3,
                "clinicalSourceRooms": 2,
                "operatingOnlyRooms": 1,
                "historicalUnopenedRooms": 0,
                "uiUnits": 5,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "BR",
                "name": "브라질",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "CA",
                "name": "캐나다",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 4,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "CH",
                "name": "스위스",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "CN",
                "name": "중국",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "DE",
                "name": "독일",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 4,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "DK",
                "name": "덴마크",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "ES",
                "name": "스페인",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 1,
                "historicalUnopenedRooms": 0,
                "uiUnits": 1,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "FI",
                "name": "핀란드",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 3,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "FR",
                "name": "프랑스",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "GB",
                "name": "영국",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 3,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "HK",
                "name": "홍콩(중국 특별행정구)",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "IT",
                "name": "이탈리아",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 3,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "JP",
                "name": "일본",
                "knownTargetRooms": 7,
                "readTargetRooms": 7,
                "clinicalSourceRooms": 5,
                "operatingOnlyRooms": 2,
                "historicalUnopenedRooms": 0,
                "uiUnits": 15,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "KZ",
                "name": "카자흐스탄",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "MY",
                "name": "말레이시아",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 1,
                "historicalUnopenedRooms": 0,
                "uiUnits": 1,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "NL",
                "name": "네덜란드",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "NO",
                "name": "노르웨이",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "RU",
                "name": "러시아",
                "knownTargetRooms": 1,
                "readTargetRooms": 1,
                "clinicalSourceRooms": 1,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 4,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "SG",
                "name": "싱가포르",
                "knownTargetRooms": 2,
                "readTargetRooms": 2,
                "clinicalSourceRooms": 2,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 28,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "SK",
                "name": "슬로바키아",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "TH",
                "name": "태국",
                "knownTargetRooms": 10,
                "readTargetRooms": 9,
                "clinicalSourceRooms": 8,
                "operatingOnlyRooms": 2,
                "historicalUnopenedRooms": 1,
                "uiUnits": 42,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다.",
                  "보호된 과거자료1방의 국적만 이전 실제필드로 유지했으며 현재 본문·언어를 재열람한 것으로 세지 않습니다."
                ]
              },
              {
                "code": "TR",
                "name": "튀르키예",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              },
              {
                "code": "TW",
                "name": "대만",
                "knownTargetRooms": 19,
                "readTargetRooms": 19,
                "clinicalSourceRooms": 15,
                "operatingOnlyRooms": 4,
                "historicalUnopenedRooms": 0,
                "uiUnits": 114,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "US",
                "name": "미국",
                "knownTargetRooms": 8,
                "readTargetRooms": 8,
                "clinicalSourceRooms": 8,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 62,
                "notes": [
                  "국적은 선택 고객정보의 실제 필드에 근거합니다. 표시 이력방 수는 현재 확인된 부분집합이며 해당 국가 전체 분모가 아닙니다."
                ]
              },
              {
                "code": "VN",
                "name": "베트남",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "실제 국적필드를 확인한 열람방 중 당일 이력 관찰 0입니다. 해당 국가 전체에 당일 대화가 0이라는 뜻이 아닙니다."
                ]
              }
            ],
            "nationalitySourceNote": "현재 직접 열람에서 확인한 실제 국적필드28개 코드를 각각 표시합니다. 당일 이력은14개국에서 확인했고 태국 과거자료1방은 역사적 실제필드만 유지합니다. 국적과 문의언어는 독립 필드입니다.",
            "limitations": [
              "보존목록5425개 물리슬롯 끝까지 관찰했지만 고유방수나 당일분모는 아닙니다. 처리기록795행, 실제 고유채널775개 성공. 목록 메타키와 처리기록이 연결되지 않은 4630행은 고유 미검수방수로 단정하지 않습니다.",
              "현재 당일 직접열람56방·289UI단위 = 기존45방·278단위 + 자동 운영카드전용11방·11단위입니다. 보호된 기존자료1방을 별도로 유지하여 알려진 이력 하한57방입니다. UI단위는 제공자 개별 메시지 수가 아닙니다.",
              "기존 상담판정46방은 적정35·확정오류1·자료충돌3·확인필요7로 보존합니다. 언어별 판정은 현재 재열람45방의 기존 한정판정만 연결했으며 보호역사1방의 판정은 기존원장에만 남깁니다. 새 운영카드11방에 임상 적정/오류 판정을 생성하지 않습니다.",
              "처리기록 내 보호15행과 선택미확인2행이 있습니다. 보호 중 알려진 과거 당일방1개 외 나머지의 당일 포함 여부·언어·국적은 미확인이라 당일 국가/언어분모에 확정 편입하지 않습니다. 전체 미검수방수는 미확인입니다.",
              "공식 신청/내원 기간5개 조회를17페이지 끝까지 확인: 내원87행 + 신청54행 = 쿼리소속141행입니다. 환자·채팅방 고유건수가 아닙니다. 채팅표시53행 중 표시명/연락메타의 단일 목록 연결후보46행, 나머지7행은 모호/미일치입니다. 연결후보도 채널 동일성의 독립 증명은 아니며 자동카드 발송일 분모를 확정하지 못했습니다.",
              "추가 순회 중 공식 로그인 화면 전환2회, 저장된 공식 자동입력으로 각각 복구했습니다. 추가인증·계정잠금·보안경고는 관찰되지 않았으며 전환 원인은 미확정입니다. 이는 과거10방 누락의 원인 증명이 아니고 방열람 실패0과 별도 접속단계 사건입니다.",
              "현재 첨부38개를 정상 미리보기로 재열람·시각대조했습니다. 기존 판정과 유의미한 새 차이는 관찰되지 않았습니다. 원본 파일 바이트 동일성·전체 무오류·삭제원문3개 복원을 뜻하지 않습니다.",
              "전체상태·국가필터를 제한하지 않았으나 모든 역대 방의 당일 이력·첨부를 전수확인한 것은 아닙니다. 전체분모null·partial을 유지합니다."
            ]
          },
          "nonChatRecords": [
            {
              "kind": "D-Day 자동 운영카드",
              "count": 3,
              "scope": "30일 자동카드전용 추가방, 문의언어 미확인",
              "assessment": "일정표기·당일구분 정합만 확인. 실제 발송로그/예약이행/임상상담 완료를 증명하지 않음"
            },
            {
              "kind": "D-1 자동 운영카드",
              "count": 1,
              "scope": "30일 자동카드전용 추가방, 문의언어 미확인",
              "assessment": "일정표기·당일구분 정합만 확인. 실제 발송로그/예약이행/임상상담 완료를 증명하지 않음"
            },
            {
              "kind": "D-2 자동 운영카드",
              "count": 5,
              "scope": "30일 자동카드전용 추가방, 문의언어 미확인",
              "assessment": "일정표기·당일구분 정합만 확인. 실제 발송로그/예약이행/임상상담 완료를 증명하지 않음"
            },
            {
              "kind": "D-7 자동 운영카드",
              "count": 2,
              "scope": "30일 자동카드전용 추가방, 문의언어 미확인",
              "assessment": "일정표기·당일구분 정합만 확인. 실제 발송로그/예약이행/임상상담 완료를 증명하지 않음"
            }
          ],
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditCheckedAt": "2026-11-01T23:30:03.378Z",
          "qaAuditRecords": [
            {
              "id": "G-20261030-042",
              "country": "TW",
              "consultationAt": "2026-10-30T21:58:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T21:58:00+09:00",
                "lastAt": "2026-10-30T21:58:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T21:58:00+09:00",
                "lastAt": "2026-10-30T21:58:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "포텐자 · 시술상세문의·야간부분범위: 시술 내용을 자세히 알고 싶다는 질문 뒤 야간안내만 확인했습니다. 실질 시술설명 완료가 아니므로 확인필요·부분범위입니다. 확정 답변누락이나 직원 과실로 단정하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A2:Z2",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-035",
              "country": "US",
              "consultationAt": "2026-10-30T01:05:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T01:06:00+09:00",
                "lastAt": "2026-10-30T01:06:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "교근 보톡스 · 일정 응답 확인: 기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A3:Z3",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-030",
              "country": "TW",
              "consultationAt": "2026-10-30T14:30:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T19:44:00+09:00",
                "lastAt": "2026-10-30T19:44:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "확인되지 않음 · 예약 재확인: 기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A4:Z4",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 3개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-037",
              "country": "JP",
              "consultationAt": "2026-10-30T22:09:00+09:00",
              "language": "ja",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T22:09:00+09:00",
                "lastAt": "2026-10-30T22:09:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T22:09:00+09:00",
                "lastAt": "2026-10-30T22:09:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "확인되지 않음 · 취소요청·야간접수: 취소요청과 영업시간외 안내가 보입니다. 접수안내 범위만 적정이며 당일 취소처리·상담완료를 뜻하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A5:Z5",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 3개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-029",
              "country": "TW",
              "consultationAt": "2026-10-30T10:00:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T19:45:00+09:00",
                "lastAt": "2026-10-30T19:45:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "확인되지 않음 · 예약 재확인: 기존 화면의 일정응답 기록을 대조했습니다. 개인 예약정보와 실제 진료이행은 공개하거나 보증하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A6:Z6",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 3개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-039",
              "country": "TW",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "appropriate",
              "reason": "주름 보톡스 · 이벤트유입·접수안내: 이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A7:Z7",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "hasOriginal": true
            },
            {
              "id": "G-20261030-040",
              "country": "TW",
              "consultationAt": "2026-10-30T23:32:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "appropriate",
              "reason": "확인되지 않음 · 병원유입·접수안내: 병원 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A8:Z8",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-041",
              "country": "TW",
              "consultationAt": "2026-10-30T00:35:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 7,
                "firstAt": "2026-10-30T00:35:00+09:00",
                "lastAt": "2026-10-30T21:58:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 12,
                "firstAt": "2026-10-30T00:35:00+09:00",
                "lastAt": "2026-10-30T21:58:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "초음파리프팅 · 예약·시술후 화장안내: 예약·길안내 및 초음파리프팅 당일 화장 질문에 대한 가시 답변 범위를 검토했습니다. 부드럽게 하고 세게 문지르지 말라는 답변은 제공된 동일범주 초음파리프팅/HIFU 후관리의 당일 가벼운 세안·화장 가능 지침과 일치합니다. 개인 시술적합성·실제 시술이행·모든 상황의 무위험성을 보증하지 않습니다. 삭제원문1개는 미열람이며 복원하지 않았습니다. 예약정보는 공개하지 않습니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A9:Z9",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 7개, 병원발신 12개(개인담당자 미확인), 이미지표시 2개, 링크표시 1개, 삭제표시 1개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-044",
              "country": "US",
              "consultationAt": "2026-10-30T21:34:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T21:34:00+09:00",
                "lastAt": "2026-10-30T21:34:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "겨드랑이 관리 · 일정제안·야간접수: 일정제안 카드와 연락·야간안내의 접수범위만 적정입니다. 실제 예약확정·의료상담 완료는 미평가입니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A10:Z10",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-045",
              "country": "AU",
              "consultationAt": "2026-10-30T22:43:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "appropriate",
              "reason": "피코 색소레이저 · 이벤트유입·접수안내: 이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A11:Z11",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-038",
              "country": "TH",
              "consultationAt": "2026-10-30T22:31:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "appropriate",
              "reason": "인모드 · 이벤트유입·접수안내: 이벤트 유입정보와 병원 소개·연락 안내 범위만 적정입니다. 개별 시술 적합성·가격 설명 완료는 미평가입니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A12:Z12",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-046",
              "country": "AU",
              "consultationAt": "2026-10-30T20:18:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "appropriate",
              "reason": "수염 제모 · 이벤트유입·접수안내: 이벤트 유입과 연락 안내만 확인한 행정 접수범위 적정입니다. 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A13:Z13",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-043",
              "country": "TW",
              "consultationAt": "2026-10-30T21:36:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T21:37:00+09:00",
                "lastAt": "2026-10-30T21:37:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T21:36:00+09:00",
                "lastAt": "2026-10-30T21:37:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "인모드 · 예약문의·야간접수: 예약 가능 여부 질문과 야간안내의 접수범위만 적정입니다. 예약확정·실질 의료상담 완료가 아닙니다. 신규10방 모두31일에도 이어지며 과거 수집 차이의 정확한 원인과 직원 답변누락은 미입증입니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A14:Z14",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-028",
              "country": "TW",
              "consultationAt": "2026-10-30T18:49:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T18:49:00+09:00",
                "lastAt": "2026-10-30T18:55:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 7,
                "firstAt": "2026-10-30T18:53:00+09:00",
                "lastAt": "2026-10-30T18:56:00+09:00"
              },
              "verdict": "sourceConflict",
              "reason": "보톡스·RF리프팅·필러 · 시술·가격자료: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 자료충돌 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A15:Z15",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 3개, 병원발신 7개(개인담당자 미확인), 이미지표시 7개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-031",
              "country": "US",
              "consultationAt": "2026-10-30T10:02:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 10,
                "firstAt": "2026-10-30T14:41:00+09:00",
                "lastAt": "2026-10-30T17:56:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 8,
                "firstAt": "2026-10-30T10:02:00+09:00",
                "lastAt": "2026-10-30T18:24:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "확인되지 않음 · 예약확정·예상소요시간: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A16:Z16",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 10개, 병원발신 8개(개인담당자 미확인), 이미지표시 0개, 링크표시 2개, 삭제표시 1개, 전일문맥 2개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-001",
              "country": "GB",
              "consultationAt": "2026-10-30T17:38:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T17:48:00+09:00",
                "lastAt": "2026-10-30T17:48:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "여성 겨드랑이 관리(유입정보) · 상담 시작: 고객 직접 질문 없이 상품 유입 카드와 상담 요청 안내. 당일 텍스트상 미응답 지적 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A17:Z17",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-027",
              "country": "TW",
              "consultationAt": "2026-10-30T09:51:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-10-30T17:11:00+09:00",
                "lastAt": "2026-10-30T17:29:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 15,
                "firstAt": "2026-10-30T09:51:00+09:00",
                "lastAt": "2026-10-30T17:44:00+09:00"
              },
              "verdict": "sourceConflict",
              "reason": "교근·승모근 보톡스·ONDA · 시술·용량·자료안내: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 자료충돌 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A18:Z18",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 6개, 병원발신 15개(개인담당자 미확인), 이미지표시 3개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-032",
              "country": "TH",
              "consultationAt": "2026-10-30T16:52:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "appropriate",
              "reason": "스킨보톡스 · 이벤트·가격자료: 보이는 응답과 실제 가격표는 일치합니다. 삭제 원문1단위는 미검수로 판정에서 제외합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A19:Z19",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 1개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-002",
              "country": "TH",
              "consultationAt": null,
              "language": "th",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "appropriate",
              "reason": "Eve-V Muse 피부진단 · 통역·장비 유무: 태국어 통역 및 AI 피부진단 유무 질문에 둘 다 있다고 답변. 실제 문의에 응대가 있으며 의료 효과·금액 주장 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A20:Z20",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "hasOriginal": true
            },
            {
              "id": "G-20261030-003",
              "country": "SG",
              "consultationAt": "2026-10-30T12:12:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-10-30T12:13:00+09:00",
                "lastAt": "2026-10-30T16:39:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 7,
                "firstAt": "2026-10-30T12:29:00+09:00",
                "lastAt": "2026-10-30T16:44:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "SKINVIVE·리쥬란 HB·피부진단 · 용량·피부질환 이력·진단비: 제공 자료의 조건부 의사평가·상담비 안내를 대조했습니다. 개별 진단·시술결과 보장은 판정하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A21:Z21",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 6개, 병원발신 7개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-033",
              "country": "US",
              "consultationAt": "2026-10-30T15:26:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T15:30:00+09:00",
                "lastAt": "2026-10-30T15:30:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "피코 색소레이저 · 이벤트·가격자료: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A22:Z22",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-004",
              "country": "US",
              "consultationAt": "2026-10-30T15:10:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T15:10:00+09:00",
                "lastAt": "2026-10-30T15:18:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "피코슈어(유입정보) · 프로모션·가격: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A23:Z23",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 3개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-005",
              "country": "TW",
              "consultationAt": "2026-10-30T15:03:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T15:11:00+09:00",
                "lastAt": "2026-10-30T15:12:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "여성 겨드랑이 관리(유입정보) · 개선부위 확인: 직접 고객질문은 없으며 겨드랑이 개선 희망부위를 물어 추가 상담 유도. 이벤트 제목의 동반 할인조건을 임의 적용하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A24:Z24",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-006",
              "country": "US",
              "consultationAt": "2026-10-30T14:55:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T14:56:00+09:00",
                "lastAt": "2026-10-30T14:59:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-10-30T14:57:00+09:00",
                "lastAt": "2026-10-30T15:01:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "주름·스킨보톡스 및 피부상담 · 추가비용·가격·홍조: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A25:Z25",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 2개, 병원발신 6개(개인담당자 미확인), 이미지표시 2개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-007",
              "country": "TH",
              "consultationAt": "2026-10-30T00:45:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T14:54:00+09:00",
                "lastAt": "2026-10-30T14:54:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-10-30T00:46:00+09:00",
                "lastAt": "2026-10-30T14:56:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "Elravie Re2O(유입정보) · 예약확정·지정비: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A26:Z26",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 5개(개인담당자 미확인), 이미지표시 1개, 링크표시 2개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-008",
              "country": "RU",
              "consultationAt": "2026-10-30T14:29:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T14:46:00+09:00",
                "lastAt": "2026-10-30T14:46:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "사각턱 보톡스 · 브랜드별 가격·용량: 동일 브랜드50U 금액과 실제 채널의 국산/Coretox옵션·VAT포함을 대조했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A27:Z27",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-009",
              "country": "TW",
              "consultationAt": "2026-10-30T12:41:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T12:41:00+09:00",
                "lastAt": "2026-10-30T14:38:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 12,
                "firstAt": "2026-10-30T12:44:00+09:00",
                "lastAt": "2026-10-30T14:40:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "황금미세침·쥬베룩·승모근보톡스·팔 INMODE · 시술조합·예약가능시간: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A28:Z28",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 3개, 병원발신 12개(개인담당자 미확인), 이미지표시 6개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-010",
              "country": "TW",
              "consultationAt": "2026-10-30T13:56:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T13:56:00+09:00",
                "lastAt": "2026-10-30T13:56:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "포텐자(유입정보) · 예약경로 재확인: 과거 일정제안을 보고 당일 LINE에서 이미 예약했는지 확인하는 병원 답변. 실제 LINE 예약완료는 확인 안 됨. 이 메시지로 전일 이슈 해결이나 신규 누락을 만들지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A29:Z29",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-011",
              "country": "TH",
              "consultationAt": "2026-10-30T13:54:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T13:54:00+09:00",
                "lastAt": "2026-10-30T13:54:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "코어톡스(유입정보) · 예약의향 안내: 과거 가격문의에 이미지 응대가 이미 존재. 당일은 예약 희망시 알려달라는 후속 안내만 검토, 과거 이미지 금액을 검증했다고 하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A30:Z30",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-012",
              "country": "DE",
              "consultationAt": "2026-10-30T12:00:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T13:39:00+09:00",
                "lastAt": "2026-10-30T13:39:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T13:51:00+09:00",
                "lastAt": "2026-10-30T13:51:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "포텐자(유입정보) · 예약취소: 고객 취소요청 후 병원 확인답변과 시스템 취소기록이 모두 실제 존재. 고객 요청에 응대했고 일정 변경을 대신 수행하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A31:Z31",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-013",
              "country": "TH",
              "consultationAt": "2026-10-30T09:48:00+09:00",
              "language": "th",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 7,
                "firstAt": "2026-10-30T09:49:00+09:00",
                "lastAt": "2026-10-30T12:52:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 12,
                "firstAt": "2026-10-30T09:48:00+09:00",
                "lastAt": "2026-10-30T12:55:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "보톡스·팔자필러·턱밑 지방·윤곽 · 복합시술 가격·예약·도착: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A32:Z32",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 7개, 병원발신 12개(개인담당자 미확인), 이미지표시 3개, 링크표시 2개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-014",
              "country": "SG",
              "consultationAt": "2026-10-30T11:42:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-10-30T11:49:00+09:00",
                "lastAt": "2026-10-30T12:28:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 6,
                "firstAt": "2026-10-30T11:50:00+09:00",
                "lastAt": "2026-10-30T12:30:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "보톡스(정확 제품 미정) · 당일예약: 고객이 요청한 일정과 병원 재확인·시스템 확정 표시가 일치합니다. 인적사항 양식·구체 예약 일정은 공개하지 않습니다. 특정 브랜드·용량·금액 판단은 없으며 국적은 실제 계정 국적 라벨을 사용했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A33:Z33",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 6개, 병원발신 6개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-015",
              "country": "CA",
              "consultationAt": "2026-10-30T12:11:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T12:24:00+09:00",
                "lastAt": "2026-10-30T12:25:00+09:00"
              },
              "verdict": "confirmedError",
              "reason": "필러(유입정보) · 프로모션·가격: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확정 오류(기존 한정판정) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A34:Z34",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 3개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-016",
              "country": "FI",
              "consultationAt": "2026-10-30T11:12:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T11:19:00+09:00",
                "lastAt": "2026-10-30T11:19:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "주름보톡스(유입정보) · 시술종류·예약의향: 원하는 보톡스 종류를 묻고 공개 병원 웹페이지를 제공. 금액 안내가 없어 제품단위 가격판정 없음. 단축링크 목적지 오류를 추정하지 않음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A35:Z35",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 1개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-017",
              "country": "TW",
              "consultationAt": "2026-10-30T09:52:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T10:14:00+09:00",
                "lastAt": "2026-10-30T10:14:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-10-30T09:52:00+09:00",
                "lastAt": "2026-10-30T10:15:00+09:00"
              },
              "verdict": "sourceConflict",
              "reason": "사각턱 보톡스 · 가격참고·추가질문: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 자료충돌 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A36:Z36",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 4개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-019",
              "country": "US",
              "consultationAt": "2026-10-30T00:40:00+09:00",
              "language": "en",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-10-30T00:40:00+09:00",
                "lastAt": "2026-10-30T10:05:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-10-30T00:40:00+09:00",
                "lastAt": "2026-10-30T10:08:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "피코슈어·미세침 · 기미·주근깨 치료추천: 관련 사례의 확인한 응답범위 판정입니다. 공통자료는 원인과 노출 상담 수를 구분합니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A37:Z37",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 4개, 병원발신 5개(개인담당자 미확인), 이미지표시 5개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-020",
              "country": "US",
              "consultationAt": "2026-10-30T02:45:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T02:48:00+09:00",
                "lastAt": "2026-10-30T10:06:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "사각턱 보톡스(유입정보) · 예약확정: 고객 제안 일정과 시스템 확정·병원 안내가 일치합니다. 표시된 위치·지참 안내는 제공 예약 템플릿과 부합합니다. 특정 제품·금액 안내는 없고 구체 예약 일정은 공개하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A38:Z38",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 2개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-034",
              "country": "IT",
              "consultationAt": "2026-10-30T01:13:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T10:04:00+09:00",
                "lastAt": "2026-10-30T10:04:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "주름 보톡스 · 이벤트·가격자료: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A39:Z39",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 2개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-021",
              "country": "JP",
              "consultationAt": "2026-10-30T09:59:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T09:59:00+09:00",
                "lastAt": "2026-10-30T09:59:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "주름보톡스(유입정보) · 예약당일 안내: 당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 상담만 1만원 문구는 제공 일본어 예약 템플릿과 부합합니다. 자동일정 시스템과 병원 메시지를 구분했습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A40:Z40",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 2개, 삭제표시 0개, 전일문맥 2개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-022",
              "country": "JP",
              "consultationAt": "2026-10-30T09:59:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T09:59:00+09:00",
                "lastAt": "2026-10-30T09:59:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "사각턱보톡스(유입정보) · 예약당일 안내: 당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 과거 대화를 오늘 신규사례로 삼지 않았습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A41:Z41",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 2개, 삭제표시 0개, 전일문맥 3개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-023",
              "country": "JP",
              "consultationAt": "2026-10-30T09:58:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T09:58:00+09:00",
                "lastAt": "2026-10-30T09:58:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "사각턱보톡스(유입정보) · 예약당일 안내: 당일 안내 일정이 기존 확정·시스템 표시와 일치합니다. 과거 포인트 규정을 오늘 재검증했다는 주장은 하지 않습니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A42:Z42",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 2개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-024",
              "country": "TW",
              "consultationAt": "2026-10-30T02:59:00+09:00",
              "language": "zh",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T03:00:00+09:00",
                "lastAt": "2026-10-30T03:00:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-10-30T03:00:00+09:00",
                "lastAt": "2026-10-30T09:58:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "주름보톡스(유입정보) · 잘못 클릭·가격참고: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A43:Z43",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 5개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-025",
              "country": "JP",
              "consultationAt": "2026-10-30T00:44:00+09:00",
              "language": "ja",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T00:45:00+09:00",
                "lastAt": "2026-10-30T00:45:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T00:45:00+09:00",
                "lastAt": "2026-10-30T09:58:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "사각턱보톡스(유입정보) · 시술상담·채널가격 안내: 시술 상담 희망에 강남언니 표시가격대로 제공하고 추가문의하라는 병원응대. 구체 부위·용량/금액 비교는 없으며 즉시 치료확정/고정효과 약속도 없음. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A44:Z44",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-026",
              "country": "TW",
              "consultationAt": "2026-10-30T00:19:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 5,
                "firstAt": "2026-10-30T09:53:00+09:00",
                "lastAt": "2026-10-30T09:54:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "ONDA · 시술대상·가격참고: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A45:Z45",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 5개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-036",
              "country": "TH",
              "consultationAt": "2026-10-30T09:47:00+09:00",
              "language": "unknown",
              "sourceState": "observed",
              "question": {
                "state": "no-direct-question",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T09:47:00+09:00",
                "lastAt": "2026-10-30T09:47:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "코어톡스 보톡스 · 이벤트·가격자료: 원문·실제 첨부를 제공자료와 대조한 명시된 응답범위의 판정입니다. 개별 시술적합성·모든 과거대화의 무오류 보장이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A46:Z46",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 1개(개인담당자 미확인), 이미지표시 1개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-046",
              "country": "ES",
              "consultationAt": "2026-10-30T15:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A47:Z47",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-047",
              "country": "TH",
              "consultationAt": "2026-10-30T13:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A48:Z48",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-048",
              "country": "JP",
              "consultationAt": "2026-10-30T14:30:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A49:Z49",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-049",
              "country": "JP",
              "consultationAt": "2026-10-30T15:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A50:Z50",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-050",
              "country": "TH",
              "consultationAt": "2026-10-30T14:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A51:Z51",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-051",
              "country": "MY",
              "consultationAt": "2026-10-30T08:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A52:Z52",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-052",
              "country": "AU",
              "consultationAt": "2026-10-30T09:03:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A53:Z53",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-053",
              "country": "TW",
              "consultationAt": "2026-10-30T10:30:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A54:Z54",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-054",
              "country": "TW",
              "consultationAt": "2026-10-30T11:00:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A55:Z55",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-055",
              "country": "TW",
              "consultationAt": "2026-10-30T10:30:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A56:Z56",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 1개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "AUTO-056",
              "country": "TW",
              "consultationAt": "2026-10-30T08:30:00+09:00",
              "language": "unknown",
              "sourceState": "operating-only",
              "question": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 0,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "당일 운영성 카드가 실제 표시된 기록입니다. 고객 직접 상담·임상 적정/오류 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A57:Z57",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 0개, 병원발신 0개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "operating-only",
              "targetDayState": "confirmed"
            },
            {
              "id": "G-20261030-018",
              "country": "TH",
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "appropriate",
              "reason": "확인되지 않음 · 예약전일 확인: 과거 예약확인과 당일 재안내 일정이 일치합니다. 시술종류는 확인되지 않았습니다. 이 방의 이전 전체 가격·진료를 승인하는 것이 아닙니다. 기존 승인 판정의 명시된 좁은 범위만 유지하며 전체 의료상담 완료 판정이 아닙니다. 현재는 고객최종발화 보호로 재열람하지 않았고 과거30일 저장자료만 유지합니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A58:Z58",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "hasOriginal": true
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [
              {
                "id": "AUTO-046",
                "recordIds": [
                  "AUTO-046"
                ],
                "kind": "auto",
                "country": "ES",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-Day 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-Day 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A47:Z47"
              },
              {
                "id": "AUTO-047",
                "recordIds": [
                  "AUTO-047"
                ],
                "kind": "auto",
                "country": "TH",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-1 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-1 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A48:Z48"
              },
              {
                "id": "AUTO-048",
                "recordIds": [
                  "AUTO-048"
                ],
                "kind": "auto",
                "country": "JP",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-2 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [],
                "staff": [],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A49:Z49"
              },
              {
                "id": "AUTO-049",
                "recordIds": [
                  "AUTO-049"
                ],
                "kind": "auto",
                "country": "JP",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-2 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-2 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A50:Z50"
              },
              {
                "id": "AUTO-050",
                "recordIds": [
                  "AUTO-050"
                ],
                "kind": "auto",
                "country": "TH",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-7 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-7 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A51:Z51"
              },
              {
                "id": "AUTO-051",
                "recordIds": [
                  "AUTO-051"
                ],
                "kind": "auto",
                "country": "MY",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-Day 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-Day 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A52:Z52"
              },
              {
                "id": "AUTO-052",
                "recordIds": [
                  "AUTO-052"
                ],
                "kind": "auto",
                "country": "AU",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-7 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-7 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A53:Z53"
              },
              {
                "id": "AUTO-053",
                "recordIds": [
                  "AUTO-053"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-2 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [],
                "staff": [],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A54:Z54"
              },
              {
                "id": "AUTO-054",
                "recordIds": [
                  "AUTO-054"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-2 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A55:Z55"
              },
              {
                "id": "AUTO-055",
                "recordIds": [
                  "AUTO-055"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-2 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [],
                "staff": [],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A56:Z56"
              },
              {
                "id": "AUTO-056",
                "recordIds": [
                  "AUTO-056"
                ],
                "kind": "auto",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "자동 방문 일정 알림",
                "verdict": "auto",
                "reason": "10월 30일 D-Day 방문 일정 자동 알림이 발송됐다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (예약 일정 자동 안내)"
                  }
                ],
                "staff": [
                  {
                    "note": "직원 직접 답변 없음 (D-Day 자동 방문 일정 알림)"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A57:Z57"
              },
              {
                "id": "G-20261030-001",
                "recordIds": [
                  "G-20261030-001"
                ],
                "kind": "inflow",
                "country": "GB",
                "procedure": "여성 겨드랑이 관리(보톡스·토닝·제모)",
                "category": "상품 유입 후 상담 안내",
                "verdict": "normal-ops",
                "reason": "여성 겨드랑이 관리 상품으로 유입된 고객에게 담당자는 궁금한 점을 언제든 물어보라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi~ If you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 궁금한 점이 있으면 언제든 편하게 물어보세요💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A17:Z17"
              },
              {
                "id": "G-20261030-002",
                "recordIds": [
                  "G-20261030-002"
                ],
                "kind": "consult",
                "country": "TH",
                "procedure": "피부 분석",
                "category": "태국어 통역·피부 분석 장비",
                "verdict": "archive",
                "reason": "태국어 통역사와 AI 얼굴 검사 기기가 있는지 묻자 둘 다 있다고 답한 보관 대화다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "มีล่ามไทยไหม หรือเครื่อง Ai ตรวจหน้า",
                    "ko": "태국어 통역사나 AI 얼굴 검사 기기가 있나요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "มีล่ามไทย และเครื่อง AI ตรวจหน้าด้วยค่ะะ",
                    "ko": "태국어 통역사와 AI 얼굴 검사 기기도 있습니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A20:Z20"
              },
              {
                "id": "G-20261030-003",
                "recordIds": [
                  "G-20261030-003"
                ],
                "kind": "consult",
                "country": "SG",
                "procedure": "스킨바이브·리쥬란 HB",
                "category": "필요 용량·습진 병력·피부 분석·의사 상담",
                "verdict": "normal",
                "reason": "담당자는 스킨바이브가 1cc 단위이고 필요한 양은 의사가 피부를 보고 정한다고 답했으며, 수가표 10도 스킨바이브를 1cc·2cc 상품으로 둔다. 습진 병력에는 의사가 피부 상태를 먼저 확인한 뒤 시술을 정하도록 안내했다. Eve-V 피부 분석 비용 55,000원(시술 30만 원을 넘으면 27,500원, 50만 원을 넘으면 11,000원)은 가이드 08과 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi hello usually how many cc of skinvive is needed?",
                    "ko": "안녕하세요 보통 skinvive는 몇 cc가 필요한가요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "I have eczema history. Right now my face is stable, no flare up. But it’s really dry so I’m thinking to do either hb plus or skinvive",
                    "ko": "습진 병력이 있어요. 지금 얼굴은 안정적이고 증상이 악화된 상태는 아니에요. 그런데 정말 건조해서 hb plus나 skinvive 중 하나를 생각하고 있어요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Do you have skin analysis?",
                    "ko": "피부 분석을 제공하나요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Will the doctor be the one who do the consultation?",
                    "ko": "상담은 의사가 직접 하나요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Yes given my eczema condition I would like the doctor to the consultation and recommend the treatment (:",
                    "ko": "네 습진 상태를 고려해서 의사가 상담하고 시술을 추천해 주셨으면 해요 (:"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi 😊 The amount of SKINVIVE needed depends on the treatment area, your skin condition, and the result you’re looking for.",
                    "ko": "안녕하세요 😊 필요한 SKINVIVE 양은 시술 부위, 피부 상태, 원하시는 결과에 따라 달라집니다."
                  },
                  {
                    "date": "2026-10-30",
                    "original": "SKINVIVE comes in 1 cc per syringe, and the doctor will recommend the appropriate amount after checking your skin. For a larger area such as both cheeks, several cc may be needed for a more even overall result, but it doesn’t mean everyone needs the same amount.",
                    "ko": "SKINVIVE는 주사기당 1 cc이며 의사가 피부를 확인한 후 적절한 양을 추천합니다. 양 볼처럼 넓은 부위에는 전체적으로 더 균일한 결과를 위해 여러 cc가 필요할 수 있지만 모든 분께 같은 양이 필요하다는 뜻은 아닙니다."
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Thank you for letting us know 😊 Since you have a history of eczema, even if your skin is currently stable, we would recommend having the doctor check your skin condition first before deciding on the treatment.\n\nFor very dry skin, both Rejuran HB and Skinvive can be considered for hydration and overall skin quality. However, because eczema-prone skin can be more sensitive, the most suitable option will depend on your current skin barrier condition and whether there is any hidden irritation.\n\nIf there is no active flare-up, treatment may still be possible, but the doctor will confirm this during the consultation and recommend the gentler option for your skin 🌸",
                    "ko": "알려 주셔서 감사합니다 😊 습진 병력이 있으시므로 현재 피부가 안정적이더라도 시술을 결정하기 전에 먼저 의사가 피부 상태를 확인하는 것을 권해 드립니다.\n\n매우 건조한 피부에는 Rejuran HB와 Skinvive 모두 보습과 전반적인 피부 질 개선을 위해 고려할 수 있습니다. 다만 습진이 생기기 쉬운 피부는 더 민감할 수 있으므로 가장 적합한 선택은 현재 피부 장벽 상태와 겉으로 드러나지 않는 자극 유무에 따라 달라집니다.\n\n현재 증상이 활발하게 악화된 상태가 아니라면 시술이 가능할 수도 있지만, 의사가 상담에서 이를 확인하고 피부에 더 순한 방법을 추천할 것입니다 🌸"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Yes, we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.💕\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000",
                    "ko": "네, 피부 상태를 자세히 평가하는 3D 피부 분석（Eve-V Muse）을 제공합니다.💕\n\n가격은 다음과 같습니다:\n* 기본: ₩55,000\n* 시술 금액이 ₩300,000을 초과하면 ₩27,500\n* 시술 금액이 ₩500,000을 초과하면 ₩11,000"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If you would like to consult with the doctor, we would be happy to arrange it for you.",
                    "ko": "의사와 상담하시기를 원하시면 기꺼이 예약해 드리겠습니다."
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Sure, What date and time would you prefer for your appointment?",
                    "ko": "네, 예약은 어느 날짜와 시간을 원하시나요?"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A21:Z21"
              },
              {
                "id": "G-20261030-004",
                "recordIds": [
                  "G-20261030-004"
                ],
                "kind": "inflow",
                "country": "US",
                "procedure": "피코슈어 토닝·피코 이레이저",
                "category": "프로모션 안내",
                "verdict": "conflict",
                "reason": "피코 이벤트로 유입된 고객에게 프로모션 이미지를 보내고 추가 문의를 안내했다. 가격표 이미지의 색소 패키지 VAT 전 금액이 가이드 10 이벤트 시트와 다르다. 듀얼색소(색소 2종) 10회는 195만원(가이드 199만원), 트리플(색소 3종) 1·5·10회는 33만·137만·249만원(가이드 35만·145만·259만원)이다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (이전 날짜에 예약 취소 문의가 있었음)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If you have any questions or need further information, please feel free to reach out to us anytime!\n\nThank you! 🌸",
                    "ko": "궁금한 점이나 더 필요한 정보가 있으면 언제든지 편하게 연락해 주세요!\n\n감사합니다! 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A23:Z23"
              },
              {
                "id": "G-20261030-005",
                "recordIds": [
                  "G-20261030-005"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "여성 겨드랑이 관리(보톡스·미백·제모)",
                "category": "개선 부위 확인",
                "verdict": "normal-ops",
                "reason": "여성 겨드랑이 관리 상품으로 유입된 고객에게 담당자는 가장 개선하고 싶은 부위를 알려 주면 맞는 시술을 추천하겠다고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "您好，主要是想要針對腋下哪個部分進行改善呢？",
                    "ko": "안녕하세요, 겨드랑이의 어떤 부분을 주로 개선하고 싶으신가요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A24:Z24"
              },
              {
                "id": "G-20261030-006",
                "recordIds": [
                  "G-20261030-006"
                ],
                "kind": "consult",
                "country": "US",
                "procedure": "주름 보톡스·스킨 보톡스·볼 돌기·홍조",
                "category": "추가 비용·가격·피부 시술 추천",
                "verdict": "followup",
                "reason": "담당자는 강남언니 표시가에 VAT가 포함되고 시술 없이 상담만 받으면 10,000원 상담료가 있다고 답했다. 두 안내는 수가표의 강남언니 판매가(VAT 후)와 가이드 08과 같다. 다만 함께 보낸 주름·스킨 보톡스 가격표 이미지에는 VAT 별도로 적혀 있는데 어느 채널 가격인지 구분해 알리지 않았다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Are there any extra fees?",
                    "ko": "추가 비용이 있나요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Prices for wrinkle Botox, forehead, between brows, smile, and skin Botox? \n\nAlso looking for skin treatment I have a lot of tiny bumps and redness on cheeks",
                    "ko": "주름 보톡스, 이마, 미간, 미소 부위, 스킨 보톡스의 가격은 얼마인가요? \n\n볼에 작은 돌기와 붉은기가 많아서 피부 시술도 알아보고 있어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "The prices shown on Gangnam Unni already include VAT 😊\n\nThere are no additional VAT charges on top of the listed price.\nIf you only come for a consultation without receiving treatment, there may be a consultation fee of ₩10,000, but if you proceed with treatment on the same day, the consultation fee is waived 🌸",
                    "ko": "강남언니에 표시된 가격에는 VAT가 이미 포함되어 있습니다 😊\n\n표시 가격에 별도의 VAT가 추가되지 않습니다.\n시술 없이 상담만 받으러 오시면 ₩10,000의 상담료가 있을 수 있지만, 당일 시술을 진행하면 상담료가 면제됩니다 🌸",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "참고하실 수 있도록 프로모션을 안내해 드립니다✨\n\n궁금한 점이 있으면 언제든 편하게 물어보세요💕"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Here is our wrinkle Botox, forehead, between brows, smile, and skin Botox Prices for your reference✨",
                    "ko": "참고하시도록 주름 보톡스, 이마, 미간, 미소 부위, 스킨 보톡스 가격을 안내해 드립니다✨",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If you have a lot of tiny bumps and redness on the cheeks, we would recommend checking the skin first before choosing a treatment 😊\n\nDepending on whether the bumps are from clogged pores, active acne, irritation, or skin barrier sensitivity, the suitable treatment can be different.\n\nFor the redness, we can also assess whether a redness-focused laser would be appropriate. Since you have both bumps and redness, our expert can check which issue should be treated first and recommend a gentler combination that won’t irritate your skin unnecessarily 🌸",
                    "ko": "볼에 작은 돌기와 붉은기가 많다면 시술을 선택하기 전에 먼저 피부 상태를 확인하는 것을 권합니다 😊\n\n돌기가 모공 막힘, 활동성 여드름, 자극, 피부 장벽 민감성 중 무엇 때문인지에 따라 적합한 시술이 달라질 수 있습니다.\n\n붉은기에는 홍조 중심 레이저가 적절한지도 평가할 수 있습니다. 돌기와 붉은기가 함께 있으므로 저희 전문가가 어떤 문제를 먼저 치료해야 할지 확인하고, 피부를 불필요하게 자극하지 않는 더 순한 조합을 추천할 수 있습니다 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A25:Z25"
              },
              {
                "id": "G-20261030-007",
                "recordIds": [
                  "G-20261030-007"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "엘라비에 리투오(Elravie Re2O)",
                "category": "예약 완료 안내·대표원장 지정 비용",
                "verdict": "conflict",
                "reason": "담당자는 태국어 예약 완료 문구에서 대표원장 시술을 원하면 시술가의 20%가 추가된다고 안내했다. 가이드 08 한국어 안내는 대표원장 지정 20%(최소 50,000원)이고 가이드 08·11의 태국어 예약 문구는 10%로 적혀 있어 자료끼리 다르다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Please confirm [예약일시비공개].",
                    "ko": "[예약일시비공개]으로 확정해 주세요."
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "ทางคลินิกขอยืนยันการนัดหมายของคุณตามวันและเวลาดังต่อไปนี้ค่ะ 🌸\n\n📅 วันที่：[예약일시비공개]\n⏰ เวลา：[예약일시비공개]\n\n📍 สถานที่：โซล เขตมาพอ (Mapo) ถนนยางฮวาโร 66 ชั้น 6\n\nแผนที่：\nNaver Map : https://naver.me/5ap1E0ph\n\nGoogle : [링크비공개]\n\nกรุณานำ บัตรประจำตัวชาวต่างชาติ (ARC) หรือ หนังสือเดินทาง (Passport) มาด้วยในวันเข้ารับบริการนะคะ ✨\n\n＊กรณีเข้ารับคำปรึกษาเท่านั้นโดยไม่ทำหัตถการในวันนัด\nจะมีค่าปรึกษา 10,000 วอน\n＊หากประสงค์ให้แพทย์ผู้อำนวยการคลินิกเป็นผู้ทำหัตถการ\nจะมีค่าใช้จ่ายเพิ่มเติม 20% ของราคาหัตถการ",
                    "ko": "다음 날짜와 시간으로 고객님의 예약을 확인해 드립니다 🌸\n\n📅 날짜：[예약일시비공개]\n⏰ 시간：[예약일시비공개]\n\n📍 장소：서울 마포구 양화로 66, 6층\n\n지도：\nNaver Map : https://naver.me/5ap1E0ph\n\nGoogle : [링크비공개]\n\n방문 당일 외국인등록증（ARC）또는 여권（Passport）을 지참해 주세요 ✨\n\n＊예약일에 시술 없이 상담만 받는 경우\n상담료 10,000원이 발생합니다\n＊대표원장의 시술을 원하시는 경우\n시술 가격의 20%가 추가됩니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A26:Z26"
              },
              {
                "id": "G-20261030-008",
                "recordIds": [
                  "G-20261030-008"
                ],
                "kind": "inflow",
                "country": "RU",
                "procedure": "사각턱 보톡스 50U",
                "category": "브랜드별 가격",
                "verdict": "normal",
                "reason": "사각턱 보톡스 상품으로 유입된 고객에게 50U 기준 국산 43,500원, 코어톡스 73,700원, 제오민 143,000원, 앨러간 197,000원을 안내했다. 수가표의 사각턱B 50u VAT 후 금액(국산 43,500·코어 73,700·제오민 143,000·앨러간 197,000원)과 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi~ Here are our Masseter Botox prices for your reference 🌸\n* Korean Botox (50U): ₩43,500\n* Coretox (50U): ₩73,700\n* Xeomin (50U): ₩143,000\n* Allergan Botox (50U): ₩197,000",
                    "ko": "안녕하세요~ 참고하시도록 저작근 보톡스 가격을 안내해 드립니다 🌸\n* 한국산 보톡스 (50U): ₩43,500\n* 코어톡스 (50U): ₩73,700\n* 제오민 (50U): ₩143,000\n* 앨러간 보톡스 (50U): ₩197,000"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If you have any question, please feel free to ask us anytime💕",
                    "ko": "궁금한 점이 있으면 언제든 편하게 물어보세요💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A27:Z27"
              },
              {
                "id": "G-20261030-009",
                "recordIds": [
                  "G-20261030-009"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "골드 미세침·쥬베룩·승모근 보톡스·바디 인모드",
                "category": "시술 조합 적합성",
                "verdict": "normal",
                "reason": "담당자는 골드 미세침+쥬베룩을 모공·여드름 흉터·피부결·잔주름 개선용으로, 승모근 보톡스를 발달한 근육 부피를 줄이는 시술로, 바디 인모드를 국소 지방·탄력 개선용으로 설명했다. 가이드 01·02의 포텐자 미세침, 쥬베룩 스킨, 바디보톡스, 바디 인모드 설명과 같고 적합성은 현장 평가로 정하도록 안내했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "您好，我想諮詢方案～\n臉部：黃金微針+喬雅露（但不確定適不適合，是朋友推薦）\n身體：斜方肌、手臂 曲線調整（應該會希望是斜方肌肉毒+手臂 inmode ）",
                    "ko": "안녕하세요, 시술 조합을 상담하고 싶어요～\n얼굴：골드 미세침+쥬베룩（친구가 추천했지만 맞을지는 모르겠어요）\n몸：승모근, 팔 라인 조정（아마 승모근 보톡스+팔 inmode를 원할 것 같아요）"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "臉部｜黃金微針＋喬雅露\n這個組合主要比較適合改善 毛孔粗大、痘疤、膚質粗糙、細紋跟整體膚質，黃金微針可以刺激膠原、改善毛孔跟凹凸感，再搭配喬雅露加強膚質跟彈性。",
                    "ko": "얼굴｜골드 미세침＋쥬베룩\n이 조합은 주로 넓은 모공, 여드름 흉터, 거친 피부결, 잔주름, 전반적인 피부 질 개선에 비교적 적합합니다. 골드 미세침은 콜라겐을 자극하고 모공과 울퉁불퉁한 느낌을 개선할 수 있으며, 쥬베룩을 함께 사용하면 피부 질과 탄력을 강화합니다."
                  },
                  {
                    "date": "2026-10-30",
                    "original": "身體｜斜方肌＋手臂線條\n如果斜方肌是因為肌肉比較發達、肩頸看起來比較厚，可以考慮 斜方肌肉毒，讓肩頸線條看起來更柔和～\n\n手臂如果主要是 脂肪比較明顯、線條不順或有些鬆弛，可以考慮 Body INMODE 做局部脂肪跟緊實改善。",
                    "ko": "몸｜승모근＋팔 라인\n승모근이 발달하여 어깨와 목이 두꺼워 보이는 경우 승모근 보톡스를 고려하여 어깨와 목 라인이 더 부드러워 보이게 할 수 있습니다～\n\n팔에 지방이 뚜렷하거나 라인이 매끄럽지 않거나 약간 처짐이 있다면 Body INMODE로 국소 지방과 탄력을 개선하는 것을 고려할 수 있습니다."
                  },
                  {
                    "date": "2026-10-30",
                    "original": "因為每個人膚況和在意的點不一樣，朋友推薦不一定會適合您，還是建議現場評估會比較準確喔~",
                    "ko": "사람마다 피부 상태와 신경 쓰는 부분이 다르므로 친구가 추천한 시술이 꼭 맞지는 않을 수 있습니다. 현장에서 평가받는 것이 더 정확합니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A28:Z28"
              },
              {
                "id": "G-20261030-010",
                "recordIds": [
                  "G-20261030-010"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "LINE 예약 확인",
                "verdict": "normal-ops",
                "reason": "담당자는 답변이 늦은 것을 사과하고 LINE으로 이미 예약했는지 물은 뒤 이후 LINE으로 연락하도록 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (병원이 보낸 예약 확인만 있음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "您好，不好意思沒有回覆到您的訊息🥹\n想請問是否已經有在LINE上跟我們預約[예약일시비공개]這個時段了呢～\n若確認沒問題的話，之後繼續在LINE上跟我們聯繫就可以囉！🌸",
                    "ko": "안녕하세요, 메시지에 답변을 못 드려 죄송합니다🥹\n혹시 LINE에서 이미 [예약일시비공개] 시간대로 저희와 예약하셨는지 여쭤보고 싶습니다～\n확인 후 문제가 없으면 이후에는 계속 LINE으로 연락해 주시면 됩니다!🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A29:Z29"
              },
              {
                "id": "G-20261030-011",
                "recordIds": [
                  "G-20261030-011"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "확인되지 않음",
                "category": "예약 안내",
                "verdict": "normal-ops",
                "reason": "담당자는 예약을 원하면 알려 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (이전 날짜에 추가 가격 문의가 있었음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "สนใจจองคิวสามารถแจ้งได้เลยนะคะะ 🙏",
                    "ko": "예약을 원하시면 알려 주세요 🙏"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A30:Z30"
              },
              {
                "id": "G-20261030-012",
                "recordIds": [
                  "G-20261030-012"
                ],
                "kind": "ops",
                "country": "DE",
                "procedure": "풀페이스 포텐자 500샷(취소된 예약)",
                "category": "예약 취소",
                "verdict": "normal-ops",
                "reason": "예약 취소 요청에 담당자는 알려 줘서 고맙다고 답하고 다른 때 방문하려면 연락해 달라고 안내했으며, 같은 날 예약 취소 처리 기록이 남았다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Please delete my appointment. Thank you",
                    "ko": "제 예약을 취소해 주세요. 감사합니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "thank you for letting us know 😊\n\nIf you would like to visit us another time, please feel free to contact us anytime. We’ll be happy to assist you 🌸",
                    "ko": "알려 주셔서 감사합니다 😊\n\n다른 때 방문하시려면 언제든 편하게 연락해 주세요. 기꺼이 도와드리겠습니다 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A31:Z31"
              },
              {
                "id": "G-20261030-013",
                "recordIds": [
                  "G-20261030-013"
                ],
                "kind": "consult",
                "country": "TH",
                "procedure": "보톡스 3부위·팔자 필러·이중턱 지방 시술·턱선 리프팅",
                "category": "프로모션·통역·예약·조기 방문",
                "verdict": "conflict",
                "reason": "프로모션 요청에는 프로모션 이미지로, 통역 요청에는 태국어 통역사가 상담과 시술 과정을 돕는다고, 일찍 와도 되는지에는 가능하며 6층 접수에서 이름을 말하라고 답했다. 예약 완료 문구의 대표원장 시술 20% 추가는 가이드 08 한국어 안내(20%, 최소 50,000원)와 같지만 가이드 08·11의 태국어 예약 문구는 10%로 적혀 있어 자료끼리 다르다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-29",
                    "original": "ต้องการล่ามตอนเข้าคลินิก",
                    "ko": "병원에 방문할 때 통역사가 필요해요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ขอโปรฟิลเลอรวย์+fat ด้วยค่ะ",
                    "ko": "필러+fat 프로모션도 알려 주세요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ต้องการฉีดโบท็อก3จุด ฟิลเลอร์ร่องแก้ม fat เหนียง+ลิฟกรอบหน้า",
                    "ko": "보톡스3부위, 팔자주름 필러, 이중턱 fat+턱선 리프팅을 받고 싶어요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ต้องการทราบราคาด้วยนะคะ มีไฟล์บินกลับ[예약일시비공개]  จะทำก่อนกลับ",
                    "ko": "가격도 알고 싶어요. 돌아가는 비행기가 [예약일시비공개]에 있어서 돌아가기 전에 시술하려고요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ไปก่อนเวลาได้ไหมคะ",
                    "ko": "예약 시간보다 일찍 가도 될까요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요, 현재 병원에서 이미지와 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으면 LINE을 추가하여 문의해 주세요. 태국인 상담 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "สวัสดีค่ะ Beauty Blossom Clinic ยินดีให้บริการครับ😊\n\nทางคลินิกของเรามีล่ามภาษาไทยคอยให้บริการนะครับ คุณลูกค้าไม่ต้องกังวลเรื่องการสื่อสารเลยครับ💕\n\nล่ามสามารถช่วยแปลภาษาและอำนวยความสะดวกให้คุณลูกค้าได้ทั้งในขั้นตอนการปรึกษาแพทย์และการทำหัตถการครับ สามารถเข้ามาใช้บริการได้อย่างสบายใจเลยนะครับ🥰\n\nขอบคุณครับ!🌸",
                    "ko": "안녕하세요, Beauty Blossom Clinic입니다. 기쁘게 도와드리겠습니다😊\n\n저희 병원에는 태국어 통역사가 있으니 의사소통은 전혀 걱정하지 않으셔도 됩니다💕\n\n의사 상담과 시술 과정 모두에서 통역사가 통역과 편의를 도와드리니 안심하고 방문하셔도 됩니다🥰\n\n감사합니다!🌸",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ทางคลินิกขอยืนยันการนัดหมายของคุณตามวันและเวลาดังต่อไปนี้ค่ะ 🌸\n\n📅 วันที่：[예약일시비공개]\n⏰ เวลา：[예약일시비공개]\n\n📍 สถานที่：โซล เขตมาพอ (Mapo) ถนนยางฮวาโร 66 ชั้น 6\n\nแผนที่：\nNaver Map : https://naver.me/5ap1E0ph\n\nGoogle : [링크비공개]\n\nกรุณานำ บัตรประจำตัวชาวต่างชาติ (ARC) หรือ หนังสือเดินทาง (Passport) มาด้วยในวันเข้ารับบริการนะคะ ✨\n\n＊กรณีเข้ารับคำปรึกษาเท่านั้นโดยไม่ทำหัตถการในวันนัด\nจะมีค่าปรึกษา 10,000 วอน\n＊หากประสงค์ให้แพทย์ผู้อำนวยการคลินิกเป็นผู้ทำหัตถการ\nจะมีค่าใช้จ่ายเพิ่มเติม 20% ของราคาหัตถการ",
                    "ko": "다음 날짜와 시간으로 고객님의 예약을 확인해 드립니다 🌸\n\n📅 날짜：[예약일시비공개]\n⏰ 시간：[예약일시비공개]\n\n📍 장소：서울 마포구 양화로 66, 6층\n\n지도：\nNaver Map : https://naver.me/5ap1E0ph\n\nGoogle : [링크비공개]\n\n방문 당일 외국인등록증（ARC）또는 여권（Passport）을 지참해 주세요 ✨\n\n＊예약일에 시술 없이 상담만 받는 경우\n상담료 10,000원이 발생합니다\n＊대표원장의 시술을 원하시는 경우\n시술 가격의 20%가 추가됩니다"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ได้เลยค่ะ 😊 สามารถขึ้นมาแจ้งชื่อที่เคาน์เตอร์ต้อนรับชั้น 6 ได้เลยนะคะ 💖",
                    "ko": "네 가능합니다 😊 6층 접수 데스크로 올라오셔서 성함을 말씀해 주세요 💖"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A32:Z32"
              },
              {
                "id": "G-20261030-014",
                "recordIds": [
                  "G-20261030-014"
                ],
                "kind": "ops",
                "country": "SG",
                "procedure": "보톡스(사각턱 보톡스 상품 유입)",
                "category": "예약",
                "verdict": "normal-ops",
                "reason": "보톡스 예약 요청에 담당자는 희망 일시를 다시 확인하고 예약 완료를 알린 뒤 방문 인사로 마쳤다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Can I make appointment for do botox at [예약일시비공개]. please",
                    "ko": "[예약일시비공개]에 보톡스 예약할 수 있을까요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "fo [예약일시비공개] please",
                    "ko": "[예약일시비공개] 부탁드려요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "time:[예약일시비공개]",
                    "ko": "시간:[예약일시비공개]"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Just to confirm, would you like to visit our clinic [예약일시비공개] for a Botox treatment? 😊💕",
                    "ko": "확인차 여쭤보면, [예약일시비공개]에 보톡스 시술을 받으러 저희 병원에 오시려는 것이 맞으신가요? 😊💕"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Your appointment has been confirmed! 😊💕\nWe look forward to seeing you [예약일시비공개]! 🌸",
                    "ko": "예약이 확정되었습니다! 😊💕\n[예약일시비공개] 뵙기를 기대하겠습니다! 🌸"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "See you soon! 😊💕",
                    "ko": "곧 뵙겠습니다! 😊💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A33:Z33"
              },
              {
                "id": "G-20261030-015",
                "recordIds": [
                  "G-20261030-015"
                ],
                "kind": "inflow",
                "country": "CA",
                "procedure": "디자인 얼굴 필러",
                "category": "프로모션 안내",
                "verdict": "fix",
                "reason": "얼굴 필러 이벤트로 유입된 고객에게 바디주사·바디보톡스·ONDA·인모드 가격표 이미지를 보냈다. 보낸 자료에 얼굴 필러 항목이 없어 문의한 시술과 자료가 맞지 않는다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If you have any questions or need further information, please feel free to reach out to us anytime!\n\nThank you! 🌸",
                    "ko": "궁금한 점이나 더 필요한 정보가 있으면 언제든지 편하게 연락해 주세요!\n\n감사합니다! 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A34:Z34",
                "severity": "confirmed"
              },
              {
                "id": "G-20261030-016",
                "recordIds": [
                  "G-20261030-016"
                ],
                "kind": "inflow",
                "country": "FI",
                "procedure": "주름 보톡스(상품 유입)",
                "category": "상담 접수",
                "verdict": "normal-ops",
                "reason": "주름 보톡스 상품으로 유입된 고객에게 담당자는 관심 있는 보톡스 종류와 예약 의사를 묻고 병원 웹사이트를 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi! May I know which type of Botox treatment you’re interested in? And if you’d like to make an appointment, feel free to let me know. And this is our website for your reference.  Thank you. [링크비공개]",
                    "ko": "안녕하세요! 어떤 종류의 보톡스 시술에 관심 있으신지 알 수 있을까요? 예약을 원하시면 편하게 말씀해 주세요. 그리고 참고하시도록 저희 웹사이트를 안내해 드립니다. 감사합니다. [링크비공개]"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A35:Z35"
              },
              {
                "id": "G-20261030-017",
                "recordIds": [
                  "G-20261030-017"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "사각턱(저작근) 보톡스",
                "category": "가격 안내",
                "verdict": "conflict",
                "reason": "저작근 보톡스 가격 이미지를 보내고 개선하고 싶은 부위를 물었으며, 고객이 더 참고하겠다고 하자 추가 문의를 안내하며 마쳤다. 가격표 이미지에 제오민 50U가 143,000원, 대만달러 약 3,088(환율 41)로 함께 적혀 있다. 143,000을 41로 나누면 약 3,488이라 환산액이 맞지 않는다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "我再參考一下喔 謝謝",
                    "ko": "좀 더 참고해 볼게요 감사합니다"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "咀嚼肌的價格這邊可以先給您參考喔😊",
                    "ko": "저작근 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "如果還有任何問題，或是有想再了解的療程，都可以隨時跟我們說～  \n謝謝您🤍",
                    "ko": "궁금한 점이나 더 알아보고 싶은 시술이 있으면 언제든지 말씀해 주세요～  \n감사합니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A36:Z36"
              },
              {
                "id": "G-20261030-018",
                "recordIds": [
                  "G-20261030-018"
                ],
                "kind": "ops",
                "country": "TH",
                "procedure": "확인되지 않음",
                "category": "예약 확인",
                "verdict": "archive",
                "reason": "담당자가 예약 일정을 확인하겠다고 인사한 보관 대화다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "สวัสดีค่ะลูกค้า ขออนุญาตคอนเฟิร์มนัด[예약일시비공개] นะคะะ🥰✨",
                    "ko": "안녕하세요, 고객님. [예약일시비공개] 예약을 확인드리고자 합니다🥰✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A58:Z58"
              },
              {
                "id": "G-20261030-019",
                "recordIds": [
                  "G-20261030-019"
                ],
                "kind": "consult",
                "country": "US",
                "procedure": "피코슈어",
                "category": "주근깨·기미 시술 추천",
                "verdict": "conflict",
                "reason": "주근깨·기미 문의에 담당자는 주근깨에는 피코슈어를 권하고, 기미는 의사가 색소 유형과 깊이를 먼저 평가해 더 순한 설정으로 치료하며 토닝·줌/포커스 중 맞는 방식을 정한다고 답했다. 가이드 02는 색소의 종류와 깊이, 피부 상태에 따라 피코슈어 모드와 시술 계획이 달라진다고 안내해 같다. 함께 보낸 피코 프로모션 이미지도 색소 패키지 VAT 전 금액이 가이드 10 이벤트 시트와 다르다(듀얼색소 10회 195만원 대 199만원, 트리플 1·5·10회 33만·137만·249만원 대 35만·145만·259만원).",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "i am interested in pico and possible micro needling for my freckles and aging skin",
                    "ko": "주근깨와 노화된 피부 때문에 피코와 가능하다면 미세침 시술에 관심이 있어요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "is that the same as pico or is that the recommendation?",
                    "ko": "그게 피코와 같은 건가요 아니면 추천해 주시는 건가요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "i want to reduce freckles and melasma",
                    "ko": "주근깨와 기미를 줄이고 싶어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi~ Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 참고하실 수 있도록 프로모션을 안내해 드립니다✨\n\n궁금한 점이 있으면 언제든지 편하게 물어보세요💕",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "here is our pico laser promotion for your reference~",
                    "ko": "참고하시도록 피코 레이저 프로모션을 안내해 드립니다~",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If your main concerns are freckles and melasma, we can recommend a pigmentation-focused laser treatment after checking your skin condition 😊\n\nFor freckles and sun spots, PicoSure may be a good option. For melasma, the doctor will need to assess the type and depth of pigmentation first, since melasma should be treated more carefully and usually with gentler settings.\n\nWhen you come in, we can check whether PicoSure Toning, Zoom/Focus, or a combination treatment would be most suitable for you 🌸",
                    "ko": "주요 고민이 주근깨와 기미라면 피부 상태를 확인한 뒤 색소 중심 레이저 시술을 추천해 드릴 수 있습니다 😊\n\n주근깨와 일광흑자에는 PicoSure가 좋은 선택일 수 있습니다. 기미는 더 신중하게, 보통 더 순한 설정으로 치료해야 하므로 먼저 의사가 색소의 유형과 깊이를 평가해야 합니다.\n\n방문하시면 PicoSure Toning, Zoom/Focus 또는 복합 시술 중 무엇이 가장 적합한지 확인해 드릴 수 있습니다 🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A37:Z37"
              },
              {
                "id": "G-20261030-020",
                "recordIds": [
                  "G-20261030-020"
                ],
                "kind": "ops",
                "country": "US",
                "procedure": "사각턱 보톡스",
                "category": "예약 완료 안내",
                "verdict": "followup",
                "reason": "고객이 앱에서 제안한 일정으로 예약을 잡고 영문 예약 안내문으로 일정·위치·신분증 지참을 안내했다. 가이드 08의 영문 예약 안내문에 있는 '상담만 받고 시술하지 않으면 상담료 KRW 10,000' 안내가 빠졌다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Your reservation has been scheduled for the following date and time:\n\n📅 Day :  [예약일시비공개]\n⏰ Time : [예약일시비공개]\n\n📍Location : 66 Yanghwa-ro, Mapo, Seoul, 6F  \n\nLink for location \n* Naver Map : https://naver.me/5ap1E0ph\n* Google : https://maps.app.goo.gl/WPtmsPPFVFxyXG2J8\n\n💳 Please bring your Alien Registration Card or Passport with you.\n\nWe look forward to meeting you soon.🥰\n\nThank you 🙂\n\nBeauty Blossom Global Clinic Team🌸",
                    "ko": "다음 날짜와 시간으로 예약되었습니다:\n\n📅 날짜 :  [예약일시비공개]\n⏰ 시간 : [예약일시비공개]\n\n📍위치 : 서울 마포구 양화로 66, 6층  \n\n위치 링크 \n* Naver Map : https://naver.me/5ap1E0ph\n* Google : https://maps.app.goo.gl/WPtmsPPFVFxyXG2J8\n\n💳 외국인등록증 또는 여권을 지참해 주세요.\n\n곧 뵙기를 기대합니다.🥰\n\n감사합니다 🙂\n\nBeauty Blossom 글로벌 클리닉 팀🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A38:Z38"
              },
              {
                "id": "G-20261030-021",
                "recordIds": [
                  "G-20261030-021"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "확인되지 않음",
                "category": "방문일 안내",
                "verdict": "normal-ops",
                "reason": "방문 당일 일정·위치·외국인등록증 또는 여권 지참과 상담만 받을 때 상담료 10,000원을 안내했다. 가이드 11의 일본어 방문일 안내 문구와 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (이전에 결제수단 문의와 방문 인사가 있었음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개]はご予約日です🌸\n\n📅 日付：[예약일시비공개]\n⏰ 時間：[예약일시비공개]\n\n📍 場所：ソウル市麻浦区（マポ）ヤンファロ66、6階\n\n地図URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\nご来店の際は、外国人登録証またはパスポートをお持ちください✨\n\n\n＊ご予約当日に施術を受けずカウンセリングのみ行った場合、カウンセリング料金10,000ウォンが発生致します。",
                    "ko": "[예약일시비공개]은 예약일입니다🌸\n\n📅 날짜：[예약일시비공개]\n⏰ 시간：[예약일시비공개]\n\n📍 장소：서울시 마포구 양화로66, 6층\n\n지도 URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\n방문 시 외국인등록증 또는 여권을 지참해 주세요✨\n\n\n＊예약 당일 시술을 받지 않고 상담만 받는 경우 상담료 10,000원이 발생합니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A40:Z40"
              },
              {
                "id": "G-20261030-022",
                "recordIds": [
                  "G-20261030-022"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "확인되지 않음",
                "category": "방문일 안내",
                "verdict": "normal-ops",
                "reason": "방문 당일 일정·위치·외국인등록증 또는 여권 지참과 상담만 받을 때 상담료 10,000원을 안내했다. 가이드 11의 일본어 방문일 안내 문구와 같다. 고객이 10월 20일에 물은 신분증 지참 문의에도 이 안내가 외국인등록증 또는 여권을 가져오라고 답한다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-20",
                    "original": "承知致しました!\n当日は自分の身分証明書だけ持参すれば大丈夫でしょうか？🙇‍♀️",
                    "ko": "알겠습니다!\n당일에는 제 신분증만 지참하면 될까요？🙇‍♀️"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개]はご予約日です🌸\n\n📅 日付：[예약일시비공개]\n⏰ 時間：[예약일시비공개]\n\n📍 場所：ソウル市麻浦区（マポ）ヤンファロ66、6階\n\n地図URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\nご来店の際は、外国人登録証またはパスポートをお持ちください✨\n\n\n＊ご予約当日に施術を受けずカウンセリングのみ行った場合、カウンセリング料金10,000ウォンが発生致します。",
                    "ko": "[예약일시비공개]은 예약일입니다🌸\n\n📅 날짜：[예약일시비공개]\n⏰ 시간：[예약일시비공개]\n\n📍 장소：서울시 마포구 양화로66, 6층\n\n지도 URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\n방문 시 외국인등록증 또는 여권을 지참해 주세요✨\n\n\n＊예약 당일 시술을 받지 않고 상담만 받는 경우 상담료 10,000원이 발생합니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A41:Z41"
              },
              {
                "id": "G-20261030-023",
                "recordIds": [
                  "G-20261030-023"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "확인되지 않음",
                "category": "방문일 안내",
                "verdict": "normal-ops",
                "reason": "방문 당일 일정·위치·외국인등록증 또는 여권 지참과 상담만 받을 때 상담료 10,000원을 안내했다. 가이드 11의 일본어 방문일 안내 문구와 같다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개]はご予約日です🌸\n\n📅 日付：[예약일시비공개]\n⏰ 時間：[예약일시비공개]\n\n📍 場所：ソウル市麻浦区（マポ）ヤンファロ66、6階\n\n地図URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\nご来店の際は、外国人登録証またはパスポートをお持ちください✨\n\n\n＊ご予約当日に施術を受けずカウンセリングのみ行った場合、カウンセリング料金10,000ウォンが発生致します。",
                    "ko": "[예약일시비공개]은 예약일입니다🌸\n\n📅 날짜：[예약일시비공개]\n⏰ 시간：[예약일시비공개]\n\n📍 장소：서울시 마포구 양화로66, 6층\n\n지도 URL：\n\nNaver Map : https://naver.me/5ap1E0ph\nGoogle : https://maps.app.goo.gl/kNTF1bYCqKdDFiHg9\n\n방문 시 외국인등록증 또는 여권을 지참해 주세요✨\n\n\n＊예약 당일 시술을 받지 않고 상담만 받는 경우 상담료 10,000원이 발생합니다."
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A42:Z42"
              },
              {
                "id": "G-20261030-024",
                "recordIds": [
                  "G-20261030-024"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "주름 보톡스",
                "category": "가격 안내",
                "verdict": "image",
                "reason": "실수로 눌렀다는 고객에게 주름 보톡스 가격 이미지를 보내고 개선하고 싶은 부위를 물었다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "不好意思不小心按到",
                    "ko": "죄송해요 실수로 눌렀어요"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "除皺肉毒的價格這邊可以先給您參考喔😊",
                    "ko": "주름 보톡스 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A43:Z43"
              },
              {
                "id": "G-20261030-025",
                "recordIds": [
                  "G-20261030-025"
                ],
                "kind": "consult",
                "country": "JP",
                "procedure": "사각턱 보톡스",
                "category": "상담 문의·가격 조건",
                "verdict": "normal",
                "reason": "담당자는 강남언니 가격 그대로 제공한다고 답하고 궁금한 점을 물어 달라고 했다. 가이드 06은 강남언니 가격과 현장 결제 금액이 동일하다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "施術の相談がしたいです",
                    "ko": "시술 상담을 받고 싶어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "ご連絡ありがとうございます🌸\n当院はカンナムオンニの価格そのままでご提供しております！\n気になることはお気軽にご相談ください😊",
                    "ko": "연락 주셔서 감사합니다🌸\n저희 병원은 강남언니 가격 그대로 제공하고 있습니다!\n궁금한 점은 편하게 상담해 주세요😊"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A44:Z44"
              },
              {
                "id": "G-20261030-026",
                "recordIds": [
                  "G-20261030-026"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "ONDA(바디)",
                "category": "가격 안내",
                "verdict": "image",
                "reason": "ONDA 가격 이미지를 보내고 ONDA가 국소 지방·바디 라인·탄력 개선 시술이라고 설명한 뒤 개선 희망 부위를 물었다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "imageOnly": true,
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ONDA 的價格這邊可以先給您參考喔😊",
                    "ko": "ONDA 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ONDA 主要是針對局部脂肪、身體線條跟緊實度做改善，像手臂、腹部、腰側、大腿都很常施作～",
                    "ko": "ONDA는 주로 국소 지방, 바디 라인, 탄력을 개선하는 시술이며 팔, 복부, 옆구리, 허벅지 등에 많이 시술합니다～"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A45:Z45"
              },
              {
                "id": "G-20261030-027",
                "recordIds": [
                  "G-20261030-027"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "사각턱·승모근 보톡스, 팔 ONDA",
                "category": "용량·피부 검사 비용",
                "verdict": "normal",
                "reason": "승모근 용량은 근육 크기, 팔 ONDA 에너지는 지방량에 따라 정한다고 답했고 가이드 16·02의 안내와 같다. 피부 검사비 55,000원과 30만·50만·100만원 이상 시 27,500원·11,000원·무료 안내는 가이드 08과 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "您好，目前的話 咀嚼肌部分跟斜方肌部分想改善 也想做onda改善手臂",
                    "ko": "안녕하세요, 지금은 저작근과 승모근 부분을 개선하고 싶고 팔도 onda로 개선하고 싶어요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "可是我沒有做到臉部保養的部分，請問有推薦做皮膚檢測嗎？",
                    "ko": "그런데 저는 얼굴 관리 부분은 하지 않는데, 피부 검사를 받는 것을 추천하시나요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "斜方肌可以參考身體肉毒的部分，施打劑量還是要依您實際肌肉大小來評估~",
                    "ko": "승모근은 바디 보톡스 부분을 참고하시면 됩니다. 주사 용량은 실제 근육 크기에 따라 평가해야 합니다~"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "ONDA的話手臂一般會施作100-200KJ，也是看您脂肪量評估",
                    "ko": "ONDA는 팔에 일반적으로 100-200KJ를 시술하며 이 역시 지방량에 따라 평가합니다"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您好，進行肌膚檢測的話，依據不同療程施作總金額，肌膚檢測費用也會有差異，這邊先提供給您參考，謝謝！\n一般檢測費用為₩55,000\n療程費用達30萬以上，檢測費用為₩27,500\n療程費用達50萬以上，檢測費用為₩11,000\n療程費用達100萬以上，檢測費用免費",
                    "ko": "안녕하세요, 피부 검사를 받으시면 시술 총금액에 따라 피부 검사 비용도 달라집니다. 먼저 참고하시도록 안내해 드립니다. 감사합니다!\n일반 검사 비용은 ₩55,000\n시술 비용 30만 이상이면 검사 비용 ₩27,500\n시술 비용 50만 이상이면 검사 비용 ₩11,000\n시술 비용 100만 이상이면 검사 무료"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "因為肌膚檢測主要是針對臉部肌膚狀況進行精細的評估，若您此次預計施作肉毒和身體onda，肌膚檢測就是可以作為之後臉部改善的參考依據~",
                    "ko": "피부 검사는 주로 얼굴 피부 상태를 정밀하게 평가하는 것이므로, 이번에 보톡스와 바디 onda를 받으실 예정이라면 피부 검사는 향후 얼굴 개선을 위한 참고 자료로 활용하실 수 있습니다~"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以現場再決定是否要做檢測喔~",
                    "ko": "현장에서 검사를 받을지 결정하셔도 됩니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A18:Z18"
              },
              {
                "id": "G-20261030-028",
                "recordIds": [
                  "G-20261030-028"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "보톡스(저작근·승모근·눈가)·고주파·팔자 필러",
                "category": "통역·가격",
                "verdict": "conflict",
                "reason": "중국어 통역 직원이 있다고 답하고 보톡스·필러 가격은 가격표 이미지로 안내했으며 고주파는 개선 부위를 되물었다. 가격표 이미지에 제오민 50U가 143,000원, 대만달러 약 3,088(환율 41)로 함께 적혀 있다. 143,000을 41로 나누면 약 3,488이라 환산액이 맞지 않는다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "到院時需要中文翻譯服務",
                    "ko": "내원할 때 중국어 통역 서비스가 필요해요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "咀嚼肌 斜方肌肉毒 眼部肉毒 電波 法令紋填補",
                    "ko": "저작근 보톡스, 승모근 보톡스, 눈가 보톡스, 고주파, 팔자주름 필러"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "可以給我其他報價嗎 謝謝",
                    "ko": "다른 가격도 알려 주실 수 있을까요 감사합니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "我們院內都有中文翻譯人員，這個不用擔心喔✅",
                    "ko": "저희 병원에는 중국어 통역 직원이 있으니 이 부분은 걱정하지 않으셔도 됩니다✅\n\n[이미지 응답]",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "因為電波有很多種，不確定您要哪一種，請問主要希望改善的部位是哪裡呢？",
                    "ko": "고주파에는 여러 종류가 있어서 어느 것을 원하시는지 모르겠습니다. 주로 개선하고 싶은 부위가 어디인가요?",
                    "image": true
                  },
                  {
                    "date": "2026-10-30",
                    "original": "法令紋玻尿酸填補的話可以參考這個價目表",
                    "ko": "팔자주름 히알루론산 필러는 이 가격표를 참고하시면 됩니다"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A15:Z15"
              },
              {
                "id": "G-20261030-031",
                "recordIds": [
                  "G-20261030-031"
                ],
                "kind": "ops",
                "country": "US",
                "procedure": "겨드랑이 제모·미백·얼굴 레이저",
                "category": "예약 변경·소요 시간",
                "verdict": "followup",
                "reason": "마감된 시간을 알리고 가장 이른 가능 시간을 안내했으며 1.5시간 안에 끝나는지에는 대기 시간에 따라 보통 가능하다고 답했다. 고객이 마지막에 요청한 변경 예약 완료 여부와 물어본 가장 늦은 예약 가능 시간에는 답하지 않았다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi there :( I missed my bus and don’t think I will get there on time. Could I do [예약일시비공개] instead please [예약일시비공개]?",
                    "ko": "안녕하세요 :( 버스를 놓쳐서 제시간에 도착하지 못할 것 같아요. 대신 [예약일시비공개] [예약일시비공개]에 가능할까요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "I’m so sorry for the troubke",
                    "ko": "불편을 드려서 정말 죄송해요"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Trouble*",
                    "ko": "불편*"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "What is the earliest available time you have on [예약일시비공개] and what is the latest available time? Is [예약일시비공개] okay?",
                    "ko": "[예약일시비공개]에 가능한 가장 이른 시간과 가장 늦은 시간이 언제인가요? [예약일시비공개] 괜찮을까요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "What about [예약일시비공개]?",
                    "ko": "[예약일시비공개]은요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Do you think if we start our appointment at [예약일시비공개] that I’ll be done within 1.5 hours?",
                    "ko": "[예약일시비공개]에 예약을 시작하면 1.5시간 안에 끝날 수 있을까요?"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "If yes, may I book for [예약일시비공개]?",
                    "ko": "그렇다면 [예약일시비공개]으로 예약해도 될까요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "No worries at all 😊 **[예약일시비공개] is already fully booked** 🙏  \nWould **[예약일시비공개]** be okay for you instead? 😊",
                    "ko": "전혀 괜찮습니다 😊 **[예약일시비공개]은 이미 예약이 마감되었습니다** 🙏  \n대신 **[예약일시비공개]** 괜찮으실까요? 😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개], our earliest available appointment is [예약일시비공개] 😊",
                    "ko": "[예약일시비공개] 가장 이른 예약 가능 시간은 [예약일시비공개]입니다 😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Sorry, [예약일시비공개] is also fully booked 🙏 the earliest slot on [예약일시비공개] is [예약일시비공개]",
                    "ko": "죄송하지만 [예약일시비공개]도 예약이 마감되었습니다 🙏 [예약일시비공개] 가장 이른 시간은 [예약일시비공개]입니다"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "Depending on the waiting time, your treatment can usually be completed within an hour and a half. ^^",
                    "ko": "대기시간에 따라 다르지만 보통 1.5시간 이내에 시술을 마칠 수 있습니다. ^^"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A16:Z16"
              },
              {
                "id": "G-20261030-032",
                "recordIds": [
                  "G-20261030-032"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "스킨 보톡스",
                "category": "프로모션·통역",
                "verdict": "image",
                "reason": "프로모션 이미지를 보내고 태국인 상담 담당자와 태국어 통역이 있는 LINE으로 문의하라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "สวัสดีค่ะ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะคะ\n\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยค่ะ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะคะะ 🥰🙏",
                    "ko": "안녕하세요, 현재 병원에서 이미지와 같은 프로모션을 진행하고 있습니다.\n\n추가로 궁금한 점이 있으면 LINE을 추가하여 문의해 주세요. 태국인 상담 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다 🥰🙏",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A19:Z19"
              },
              {
                "id": "G-20261030-033",
                "recordIds": [
                  "G-20261030-033"
                ],
                "kind": "inflow",
                "country": "US",
                "procedure": "피코 토닝",
                "category": "프로모션",
                "verdict": "conflict",
                "reason": "프로모션 이미지를 보내고 궁금한 점은 언제든 물어 달라고 안내했다. 가격표 이미지의 색소 패키지 VAT 전 금액이 가이드 10 이벤트 시트와 다르다. 듀얼색소(색소 2종) 10회는 195만원(가이드 199만원), 트리플(색소 3종) 1·5·10회는 33만·137만·249만원(가이드 35만·145만·259만원)이다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi~ Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 참고하실 수 있도록 프로모션을 안내해 드립니다✨\n\n궁금한 점이 있으면 언제든지 편하게 물어보세요💕",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A22:Z22"
              },
              {
                "id": "G-20261030-034",
                "recordIds": [
                  "G-20261030-034"
                ],
                "kind": "inflow",
                "country": "IT",
                "procedure": "주름 보톡스",
                "category": "프로모션",
                "verdict": "image",
                "reason": "프로모션 이미지를 보내고 궁금한 점은 언제든 물어 달라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "Hi~ Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 참고하실 수 있도록 프로모션을 안내해 드립니다✨\n\n궁금한 점이 있으면 언제든지 편하게 물어보세요💕",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A39:Z39"
              },
              {
                "id": "G-20261030-036",
                "recordIds": [
                  "G-20261030-036"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "확인되지 않음",
                "category": "프로모션·통역",
                "verdict": "image",
                "reason": "프로모션 이미지를 보내고 태국인 상담 담당자와 태국어 통역이 있는 LINE으로 문의하라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (당일 새 질문 없음)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                    "ko": "안녕하세요, 현재 병원에서 이미지와 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으면 LINE을 추가하여 문의해 주세요. 태국인 상담 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A46:Z46"
              },
              {
                "id": "G-20261030-037",
                "recordIds": [
                  "G-20261030-037"
                ],
                "kind": "ops",
                "country": "JP",
                "procedure": "겨드랑이 제모·피코 토닝",
                "category": "예약 취소",
                "verdict": "normal-ops",
                "reason": "10월 30일 취소 요청에 10월 31일 이번 예약을 취소하겠다고 답하고 다시 올 때 연락해 달라고 안내했다. 가이드 11의 예약 취소 안내 문구와 내용이 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "予定が変更になって来院が難しくなったためキャンセルしたいです。すみません\n次回利用させていただきます",
                    "ko": "일정이 변경되어 방문이 어려워져서 취소하고 싶습니다. 죄송합니다\n다음에 이용하겠습니다"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "ご連絡いただきありがとうございます😊今回はご予約をキャンセルさせていただきます。\n\nまた韓国にお越しの際や、ご都合が合う際には、ぜひお気軽にご連絡ください✨",
                    "ko": "연락해 주셔서 감사합니다😊이번 예약은 취소해 드리겠습니다.\n\n다시 한국에 오실 때나 시간이 맞으실 때에는 꼭 편하게 연락해 주세요✨"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A5:Z5"
              },
              {
                "id": "G-20261030-038",
                "recordIds": [
                  "G-20261030-038"
                ],
                "kind": "inflow",
                "country": "TH",
                "procedure": "인모드",
                "category": "프로모션·통역",
                "verdict": "image",
                "reason": "10월 30일 인모드 이벤트 유입에 10월 31일 프로모션 이미지를 보내고 태국인 상담 담당자와 태국어 통역이 있는 LINE으로 문의하라고 안내했다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "สวัสดีค่ะ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะคะ\n\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยค่ะ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะคะะ 🥰🙏",
                    "ko": "안녕하세요. 현재 클리닉에는 사진과 같은 프로모션이 있습니다.\n\n추가로 궁금한 점이 있으시면 LINE을 추가하여 문의하셔도 됩니다. 태국인 관리자와 태국어 통역사가 항상 서비스를 제공하고 있어요 🥰🙏\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A12:Z12"
              },
              {
                "id": "G-20261030-039",
                "recordIds": [
                  "G-20261030-039"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "주름 보톡스",
                "category": "연락 경로",
                "verdict": "archive",
                "reason": "주름 보톡스 이벤트 유입에 인사와 공식 LINE 계정을 안내한 보관 대화다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "您好，這裡是Beauty Blossom🌸\n非常感謝您使用我們的線上諮詢服務😊\n\n若您有任何疑問或想進一步諮詢，歡迎直接加入我們的LINE官方帳號與我們聯繫!\n歡迎加入我們的官方LINE：\nID：@beautyblossom_tw",
                    "ko": "안녕하세요, Beauty Blossom입니다🌸\n저희 온라인 상담 서비스를 이용해 주셔서 정말 감사합니다😊\n\n궁금한 점이 있거나 더 자세한 상담을 원하시면 저희 LINE 공식 계정을 추가하여 연락해 주세요!\n저희 공식 LINE을 추가해 주세요:\nID：@beautyblossom_tw"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A7:Z7"
              },
              {
                "id": "G-20261030-040",
                "recordIds": [
                  "G-20261030-040"
                ],
                "kind": "inflow",
                "country": "TW",
                "procedure": "확인되지 않음",
                "category": "상담 접수",
                "verdict": "normal-ops",
                "reason": "10월 30일 병원 문의 유입에 10월 31일 예약 도움이 필요한지와 개선하고 싶은 부위를 물었다.",
                "questionDate": null,
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "您好，請問需要協助您預約嗎？或者有其他問題都可以詢問喔!",
                    "ko": "안녕하세요, 예약을 도와드릴까요? 아니면 다른 궁금한 점이 있으셔도 문의하셔도 돼요!"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 저희에게 말씀해 주셔도 돼요. 그러면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A8:Z8"
              },
              {
                "id": "G-20261030-041",
                "recordIds": [
                  "G-20261030-041"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "HIFU 리프팅(300샷)",
                "category": "시술 후 화장",
                "verdict": "normal",
                "reason": "시술 당일 부드럽게 하면 평소처럼 화장해도 되고 상처가 없어 세안·화장에 문제가 없다고 답했다. 가이드 02는 HIFU 리프팅(슈링크·울쎄라) 당일 가벼운 세안 및 화장이 가능하다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "不好意思～想請問打完音波能夠化妝嗎",
                    "ko": "죄송한데～초음파 시술 후 화장해도 되는지 여쭤보고 싶어요"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-30",
                    "original": "可以的，手法盡量輕柔不要大力的話，當天是可以正常上妝的喔!",
                    "ko": "네, 동작을 최대한 부드럽게 하고 세게 힘을 주지 않으면 당일에도 평소처럼 화장하셔도 됩니다!"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "[예약일시비공개]療程結束後，我們也都會發送注意事項給您，音波的話因為不會有傷口，所以正常洗臉化妝都是沒問題的喔!",
                    "ko": "[예약일시비공개] 시술이 끝나면 주의사항도 보내드리겠습니다. 초음파는 상처가 생기지 않아서 평소처럼 세안과 화장을 하셔도 문제없습니다!"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "若有問題也都可以再詢問~",
                    "ko": "궁금한 점이 있으면 또 물어보셔도 됩니다~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A9:Z9"
              },
              {
                "id": "G-20261030-042",
                "recordIds": [
                  "G-20261030-042"
                ],
                "kind": "consult",
                "country": "TW",
                "procedure": "포텐자(골드 미세침)·쥬베룩 스킨",
                "category": "시술 상담·팁 선택",
                "verdict": "normal",
                "reason": "골드 미세침 가격을 보내고 모공·유분은 모공 팁, 패인 흉터·피부결은 펌핑 팁과 쥬베룩 스킨을 권했다. 가이드 06은 모공팁은 모공·피부결, 펌핑팁은 스킨부스터와 함께 진행한다고 안내하며 담당자의 답과 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "想更詳細了解施術／手術內容",
                    "ko": "시술／수술 내용을 더 자세히 알고 싶어요"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "臉部毛孔",
                    "ko": "얼굴 모공"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "黃金微針的價格這邊可以先給您參考喔😊",
                    "ko": "골드 미세침 가격을 먼저 참고하시도록 안내해 드릴게요😊"
                  },
                  {
                    "date": "2026-10-30",
                    "original": "您也可以跟我們說一下最想改善的位置，再幫您初步推薦比較合適的療程喔🤍",
                    "ko": "가장 개선하고 싶은 부위를 알려 주시면 우선 더 적합한 시술을 추천해 드릴게요🤍"
                  },
                  {
                    "date": "2026-10-31",
                    "original": "如果比較在意 毛孔＋出油，可以考慮 毛孔探頭，針對皮脂分泌跟毛孔做加強。",
                    "ko": "모공＋유분이 더 신경 쓰이시면 모공 팁을 고려하실 수 있습니다. 피지 분비와 모공에 집중해 강화합니다."
                  },
                  {
                    "date": "2026-10-31",
                    "original": "如果 凹痘疤、膚質凹凸感比較明顯，會更推薦參考 Pumping探頭＋Juvelook Skin，會比單純毛孔模式更著重在凹疤、毛孔跟整體膚質的改善🤍",
                    "ko": "패인 여드름 흉터나 피부의 울퉁불퉁함이 더 뚜렷하다면 Pumping 팁＋Juvelook Skin을 참고하시도록 더 추천합니다. 단순 모공 모드보다 패인 흉터, 모공, 전반적인 피부결 개선에 더 중점을 둡니다🤍"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A2:Z2"
              },
              {
                "id": "G-20261030-043",
                "recordIds": [
                  "G-20261030-043"
                ],
                "kind": "ops",
                "country": "TW",
                "procedure": "인모드",
                "category": "당일 예약 시간",
                "verdict": "normal-ops",
                "reason": "10월 30일 다음 날 예약을 묻자 10월 31일 상담과 시술 시간을 충분히 두도록 내원 마감 시각 전까지 도착하라고 안내했다. 가이드 07은 주말 진료를 10:00~16:30으로 안내하며 담당자의 안내와 맞는다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "date": "2026-10-30",
                    "original": "你好，請問[희망 방문일 가림]可以預約嗎？",
                    "ko": "안녕하세요, [희망 방문일 가림] 예약할 수 있을까요?"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "您好，若您希望[방문일 가림]來院的話，最晚建議於[내원 마감 시각 가림]前抵達，以確保諮詢+施作時間充足喔~",
                    "ko": "안녕하세요, [방문일 가림] 내원을 원하시면 상담+시술 시간이 충분하도록 늦어도 [내원 마감 시각 가림] 전에는 도착하시는 것을 권장해요~"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A14:Z14"
              },
              {
                "id": "G-20261030-044",
                "recordIds": [
                  "G-20261030-044"
                ],
                "kind": "inflow",
                "country": "US",
                "procedure": "겨드랑이 관리(제모·보톡스·토닝)",
                "category": "예약 완료 안내",
                "verdict": "followup",
                "reason": "담당자는 예약 일시·위치·지도 링크·외국인등록증 또는 여권 지참을 영문 예약 안내로 보냈다. 가이드 08 영문 예약 안내 문구에는 상담만 받고 시술하지 않으면 상담비 10,000원이 발생한다는 항목이 있는데 담당자 문구에는 빠졌다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (앱에서 일정 제안)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Your reservation has been scheduled for the following date and time:\n\n📅 Day :  [예약일]\n⏰ Time : [예약시간]\n\n📍Location : 66 Yanghwa-ro, Mapo, Seoul, 6F  \n\nLink for location \n* Naver Map : https://naver.me/5ap1E0ph\n* Google : https://maps.app.goo.gl/WPtmsPPFVFxyXG2J8\n\n💳 Please bring your Alien Registration Card or Passport with you.\n\nWe look forward to meeting you soon.🥰\n\nThank you 🙂\n\nBeauty Blossom Global Clinic Team🌸",
                    "ko": "예약이 다음 날짜와 시간으로 잡혔습니다:\n\n📅 날짜 :  [예약일]\n⏰ 시간 : [예약시간]\n\n📍위치 : 66 Yanghwa-ro, Mapo, Seoul, 6F (서울 마포 양화로 66, 6층)  \n\n위치 링크 \n* Naver Map : https://naver.me/5ap1E0ph\n* Google : https://maps.app.goo.gl/WPtmsPPFVFxyXG2J8\n\n💳 외국인등록증이나 여권을 지참해 주세요.\n\n곧 만나 뵙기를 기대하겠습니다.🥰\n\n감사합니다 🙂\n\nBeauty Blossom Global Clinic Team (Beauty Blossom 글로벌 클리닉 팀)🌸"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A10:Z10"
              },
              {
                "id": "G-20261030-045",
                "recordIds": [
                  "G-20261030-045"
                ],
                "kind": "inflow",
                "country": "AU",
                "procedure": "피코슈어 토닝·피코 지우개(이벤트 유입)",
                "category": "프로모션 안내",
                "verdict": "image",
                "reason": "피코 이벤트 유입에 프로모션 이미지를 보내고 추가 문의를 받겠다고 안내했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hi~ Here is our promotion for your reference✨\n\nIf you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 참고하실 수 있도록 저희 프로모션을 보내드립니다✨\n\n궁금한 점이 있으시면 언제든 편하게 문의해 주세요💕\n[이미지 응답]",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A11:Z11"
              },
              {
                "id": "G-20261030-046",
                "recordIds": [
                  "G-20261030-046"
                ],
                "kind": "inflow",
                "country": "AU",
                "procedure": "남성 수염 제모(이벤트 유입)",
                "category": "인사·문의 접수",
                "verdict": "normal-ops",
                "reason": "고객의 직접 질문 없이 수염 제모 이벤트로 들어온 상담에 궁금한 점을 언제든 문의하라는 인사로 응대했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "note": "직접 작성한 질문 없음 (상품·이벤트 유입)"
                  }
                ],
                "staff": [
                  {
                    "date": "2026-10-31",
                    "original": "Hi~ If you have any question, please feel free to ask us anytime💕",
                    "ko": "안녕하세요~ 궁금한 점이 있으시면 언제든 편하게 문의해 주세요💕"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A13:Z13"
              }
            ],
            "merged": [
              {
                "recordId": "G-20261030-029",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-030"
              },
              {
                "recordId": "G-20261030-030",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-061"
              },
              {
                "recordId": "G-20261030-035",
                "intoDate": "2026-10-31",
                "intoId": "MISS-G-20261031-060"
              }
            ],
            "unavailable": {
              "recordIds": []
            }
          }
        },
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
            "appropriate": 17,
            "needsVerification": 2,
            "sourceConflict": 4,
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
                "appropriate": 6,
                "needsVerification": 0,
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
              "category": "용어·통화 표기 확인",
              "severity": "보통",
              "status": "확인 필요",
              "count": 2,
              "summary": "구체적인 표기 차이"
            },
            {
              "category": "자료 간 표기·조건 충돌",
              "severity": "보통",
              "status": "자료 확인",
              "count": 5,
              "summary": "직원 확정 오류와 분리"
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
          "casesUpdatedAt": "2026-10-30T02:41:11.813Z",
          "cases": [
            {
              "id": "case-20261029-06",
              "verdict": "needsVerification",
              "country": "ZZ",
              "title": "chin·jawline·masseter 용어 혼동",
              "customerText": "I wanted to get Botox on three areas. Forehead since I have visible horizontal wrinkles, also when I smile I show my gums a lot so I was wondering if it was possible to get botox for that too. And finally, to define my jaw a little bit\n\nWhat about the price for all 3 areas?\n\nor it just applied to wrinkle botox?",
              "customerKo": "보톡스를 세 부위에 받고 싶어요. 이마에는 눈에 띄는 가로 주름이 있고, 웃을 때 잇몸이 많이 보여서 그 부분에도 보톡스를 맞을 수 있는지 궁금해요. 마지막으로 턱도 조금 더 또렷하게 만들고 싶어요.\n\n세 부위를 모두 하면 가격은 어떻게 되나요?\n\n아니면 주름 보톡스에만 적용되는 건가요?",
              "staffText": "Yes, absolutely! 😊 We can help you with all three areas: forehead Botox, gummy smile Botox, and jawline Botox.\n\nIf you’d like to make an appointment, please kindly fill out our booking form below. 💗 We look forward to welcoming you to our clinic! 🌸\n1. Full name:\n2. Date of birth:\n3. Nationality & Preferred language:\n4. Preferred date & time:\n\n✨ Botox Price List\n\n1. Wrinkle Botox (Forehead)\n- Domestic: ₩32,900\n- Coretox: ₩42,900\n- Xeomin: ₩77,000\n- Allergan: ₩99,000\n\n2. Gummy Smile Botox\n- Domestic: ₩46,900\n- Coretox: ₩60,000\n- Xeomin: ₩110,000\n- Allergan: ₩143,000\n\n3. Jaw Botox (Masseter Botox)\n- Domestic: ₩43,500\n- Coretox: ₩73,700\n- Xeomin: ₩143,000\n- Allergan: ₩197,000\n\n💗 Please note: The required dosage for jaw Botox may vary depending on the size of your masseter muscles. We will assess your muscle size and recommend the appropriate dosage during your consultation.\n\nFor wrinkle Botox, we can only inject it into the specific areas where wrinkles appear. It’s different from chin Botox, as each treatment targets different concerns and muscle groups. Wrinkle Botox including (Forehead, Gabella, Crows Feet, Under the Eyes, Bunny Line, Chin). These are the part that wrinkle botox can choose.",
              "staffKo": "네, 물론입니다! 😊 이마 보톡스, 거미스마일 보톡스, 턱선 보톡스, 세 부위 모두 도와드릴 수 있습니다.\n\n예약을 원하시면 아래 예약 양식을 작성해 주세요. 💗 저희 병원에서 뵙기를 기대하겠습니다! 🌸\n1. 성함:\n2. 생년월일:\n3. 국적 및 선호 언어:\n4. 희망 날짜 및 시간:\n\n✨ 보톡스 가격표\n\n1. 주름 보톡스(이마)\n- 국산: ₩32,900\n- 코어톡스: ₩42,900\n- 제오민: ₩77,000\n- 앨러간: ₩99,000\n\n2. 거미스마일 보톡스\n- 국산: ₩46,900\n- 코어톡스: ₩60,000\n- 제오민: ₩110,000\n- 앨러간: ₩143,000\n\n3. 턱 보톡스(교근 보톡스)\n- 국산: ₩43,500\n- 코어톡스: ₩73,700\n- 제오민: ₩143,000\n- 앨러간: ₩197,000\n\n💗 참고해 주세요: 턱 보톡스에 필요한 용량은 교근의 크기에 따라 달라질 수 있습니다. 상담 시 근육 크기를 확인하고 적절한 용량을 권해 드리겠습니다.\n\n주름 보톡스는 주름이 생기는 특정 부위에만 주사할 수 있습니다. 각 시술이 서로 다른 고민과 근육군을 대상으로 하므로 chin 보톡스와는 다릅니다. 주름 보톡스에는 (이마, 미간(Gabella), 눈가 주름, 눈 밑, 콧등 주름, Chin)이 포함됩니다. 이 부위들이 주름 보톡스로 선택할 수 있는 부위입니다.",
              "rationale": "표기 불일치: 담당자는 chin을 주름 보톡스와 다르다고 설명한 뒤 주름 부위 목록에 다시 Chin을 넣었다. 제공 자료는 자갈턱(mentalis)과 사각턱(masseter)을 별도 상품으로 구분하며, 안내 금액은 수가표와 일치한다.",
              "evidence": "raw/10.md L10 list-A11\n| list-A11 | 보톡스 정가 | 주름 보톡스 | 1부위 · 코어 | 1부위 | 금액: 42,900원 | (이마, 미간, 눈가, 눈밑, 콧등, 자갈턱) | 확인 필요 |\n\nraw/10.md L22 list-A31\n| list-A31 | 보톡스 정가 | 사각턱 보톡스 | 코어 |  | 금액: 73,700원 |  | 확인 필요 |\n적용 규칙: TERM-01, PRICE-01",
              "limit": "",
              "procedure": "보톡스(이마·거미스마일·턱)",
              "questionCategory": "시술 부위·가격·보톡스 종류 문의",
              "quoteScopeNote": "보톡스 세 부위 문의부터 주름 보톡스 적용 범위 답변까지의 관련 메시지 전체입니다. 각 메시지를 분리하고 중간의 이미지 전송은 본문과 구분합니다. 원문의 chin·Chin은 의미를 임의 확정하지 않고 번역에도 표기를 남겼습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "I wanted to get Botox on three areas. Forehead since I have visible horizontal wrinkles, also when I smile I show my gums a lot so I was wondering if it was possible to get botox for that too. And finally, to define my jaw a little bit",
                  "ko": "보톡스를 세 부위에 받고 싶어요. 이마에는 눈에 띄는 가로 주름이 있고, 웃을 때 잇몸이 많이 보여서 그 부분에도 보톡스를 맞을 수 있는지 궁금해요. 마지막으로 턱도 조금 더 또렷하게 만들고 싶어요.",
                  "kind": "text"
                },
                {
                  "original": "What about the price for all 3 areas?",
                  "ko": "세 부위를 모두 하면 가격은 어떻게 되나요?",
                  "kind": "text"
                },
                {
                  "original": "or it just applied to wrinkle botox?",
                  "ko": "아니면 주름 보톡스에만 적용되는 건가요?",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "Yes, absolutely! 😊 We can help you with all three areas: forehead Botox, gummy smile Botox, and jawline Botox.\n\nIf you’d like to make an appointment, please kindly fill out our booking form below. 💗 We look forward to welcoming you to our clinic! 🌸\n1. Full name:\n2. Date of birth:\n3. Nationality & Preferred language:\n4. Preferred date & time:",
                  "ko": "네, 물론입니다! 😊 이마 보톡스, 거미스마일 보톡스, 턱선 보톡스, 세 부위 모두 도와드릴 수 있습니다.\n\n예약을 원하시면 아래 예약 양식을 작성해 주세요. 💗 저희 병원에서 뵙기를 기대하겠습니다! 🌸\n1. 성함:\n2. 생년월일:\n3. 국적 및 선호 언어:\n4. 희망 날짜 및 시간:",
                  "kind": "text"
                },
                {
                  "original": "✨ Botox Price List\n\n1. Wrinkle Botox (Forehead)\n- Domestic: ₩32,900\n- Coretox: ₩42,900\n- Xeomin: ₩77,000\n- Allergan: ₩99,000\n\n2. Gummy Smile Botox\n- Domestic: ₩46,900\n- Coretox: ₩60,000\n- Xeomin: ₩110,000\n- Allergan: ₩143,000\n\n3. Jaw Botox (Masseter Botox)\n- Domestic: ₩43,500\n- Coretox: ₩73,700\n- Xeomin: ₩143,000\n- Allergan: ₩197,000\n\n💗 Please note: The required dosage for jaw Botox may vary depending on the size of your masseter muscles. We will assess your muscle size and recommend the appropriate dosage during your consultation.",
                  "ko": "✨ 보톡스 가격표\n\n1. 주름 보톡스(이마)\n- 국산: ₩32,900\n- 코어톡스: ₩42,900\n- 제오민: ₩77,000\n- 앨러간: ₩99,000\n\n2. 거미스마일 보톡스\n- 국산: ₩46,900\n- 코어톡스: ₩60,000\n- 제오민: ₩110,000\n- 앨러간: ₩143,000\n\n3. 턱 보톡스(교근 보톡스)\n- 국산: ₩43,500\n- 코어톡스: ₩73,700\n- 제오민: ₩143,000\n- 앨러간: ₩197,000\n\n💗 참고해 주세요: 턱 보톡스에 필요한 용량은 교근의 크기에 따라 달라질 수 있습니다. 상담 시 근육 크기를 확인하고 적절한 용량을 권해 드리겠습니다.",
                  "kind": "text"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                },
                {
                  "original": "For wrinkle Botox, we can only inject it into the specific areas where wrinkles appear. It’s different from chin Botox, as each treatment targets different concerns and muscle groups. Wrinkle Botox including (Forehead, Gabella, Crows Feet, Under the Eyes, Bunny Line, Chin). These are the part that wrinkle botox can choose.",
                  "ko": "주름 보톡스는 주름이 생기는 특정 부위에만 주사할 수 있습니다. 각 시술이 서로 다른 고민과 근육군을 대상으로 하므로 chin 보톡스와는 다릅니다. 주름 보톡스에는 (이마, 미간(Gabella), 눈가 주름, 눈 밑, 콧등 주름, Chin)이 포함됩니다. 이 부위들이 주름 보톡스로 선택할 수 있는 부위입니다.",
                  "kind": "text"
                }
              ]
            },
            {
              "id": "case-20261029-18",
              "verdict": "appropriate",
              "country": "JP",
              "title": "어깨필러 이벤트 안내",
              "customerText": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\nホンデ デザインスリムライン 肩フィラー、直角肩フィラー、スワンショルダーフィラー",
              "customerKo": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\n홍대 디자인 슬림라인 어깨 필러, 직각 어깨 필러, 스완 숄더 필러",
              "staffText": "ご連絡ありがとうございます🌸\nフィラーは気になる部分へボリュームを追加する施術です！\nご相談はお気軽にどうぞ😊\n\nこちらのイベントもご覧ください🙇✨\n\nhttps://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
              "staffKo": "연락해 주셔서 감사합니다🌸\n필러는 신경 쓰이는 부위에 볼륨을 더하는 시술입니다!\n편하게 상담해 주세요😊\n\n이 이벤트도 확인해 주세요🙇✨\n\nhttps://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
              "rationale": "담당자는 필러가 볼륨이 부족한 부위에 주입해 입체감을 살리는 시술이라고 답했고 가이드 02의 필러 설명과 같다. 가격은 말하지 않고 이벤트 페이지 링크와 이미지를 보냈다.",
              "evidence": "raw/02.md L769 필러 정의",
              "limit": "",
              "procedure": "어깨 필러",
              "questionCategory": "이벤트·가격",
              "quoteScopeNote": "수집본에 고객이 직접 작성한 메시지는 없습니다. 아래 유입 정보는 시스템이 기록한 상품페이지 맥락이며 고객 발언이 아닙니다. 검토 대상은 담당자가 보낸 링크와 첨부 가격표의 입술·풀페이스 필러 표기입니다. 유입 시술과 검토 자료의 부위를 동일시하지 않습니다. 병원의 공개 이벤트 링크는 일반 게시판 조회 주소이므로 매개변수까지 원문 그대로 보존했습니다. 첨부 내용은 새 문장으로 재구성하지 않았습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\nホンデ デザインスリムライン 肩フィラー、直角肩フィラー、スワンショルダーフィラー",
                  "ko": "문의 내용\n어떤 것이 궁금하신가요?\n이벤트 문의\n홍대 디자인 슬림라인 어깨 필러, 직각 어깨 필러, 스완 숄더 필러",
                  "kind": "context"
                }
              ],
              "staffMessages": [
                {
                  "original": "ご連絡ありがとうございます🌸\nフィラーは気になる部分へボリュームを追加する施術です！\nご相談はお気軽にどうぞ😊\n\nこちらのイベントもご覧ください🙇✨",
                  "ko": "연락해 주셔서 감사합니다🌸\n필러는 신경 쓰이는 부위에 볼륨을 더하는 시술입니다!\n편하게 상담해 주세요😊\n\n이 이벤트도 확인해 주세요🙇✨",
                  "kind": "text"
                },
                {
                  "kind": "linkOnly",
                  "original": "https://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board",
                  "ko": "https://jp.beautyblossom.kr/22/?q=YToyOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjtzOjQ6InBhZ2UiO2k6Mjt9&bmode=view&idx=173336689&t=board"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                }
              ]
            },
            {
              "id": "case-20261029-21",
              "verdict": "needsVerification",
              "country": "CN",
              "title": "통화 단위",
              "customerText": "肉毒",
              "customerKo": "보톡스",
              "staffText": "您好，这边发肉毒相关优惠活动给您参考~方便的话可以添加我们的微信，以便后续咨询和预约哦~ vx: Beautyblossom00",
              "staffKo": "안녕하세요, 참고하실 수 있도록 보톡스 관련 할인 이벤트를 보내드립니다~괜찮으시면 이후 상담과 예약을 위해 저희 위챗을 추가해 주세요~ vx: Beautyblossom00",
              "rationale": "표기 불일치: 제공 수가표는 KRW이며 안내 이미지의 통화는 元으로 적혀 있다. 주름 보톡스 3부위 등의 금액 숫자와 VAT 10% 별도 조건은 제공 표와 일치한다.",
              "evidence": "raw/10.md L874 event-2026-09-11-R129\n| event-2026-09-11-R129 | 보톡스 | 주름보톡스 3부위 | 국산 |  | 정가: 120,000원 / VAT 전: 68,000원 / VAT 후 (최종): 74,800원 |  | 확인 필요 |\n\nraw/10.md L875 event-2026-09-11-R130\n| event-2026-09-11-R130 | 보톡스 | 주름보톡스 3부위 | 내성적은 코어톡스 |  | 정가: 160,000원 / VAT 전: 88,000원 / VAT 후 (최종): 96,800원 |  | 확인 필요 |\n\nraw/10.md L876 event-2026-09-11-R131\n| event-2026-09-11-R131 | 보톡스 | 주름보톡스 3부위 | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L877 event-2026-09-11-R132\n| event-2026-09-11-R132 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 국산 |  | 정가: 110,000원 / VAT 전: 59,000원 / VAT 후 (최종): 64,900원 |  | 확인 필요 |\n\nraw/10.md L878 event-2026-09-11-R133\n| event-2026-09-11-R133 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 코어 |  | 정가: 140,000원 / VAT 전: 79,000원 / VAT 후 (최종): 86,900원 |  | 확인 필요 |\n\nraw/10.md L879 event-2026-09-11-R134\n| event-2026-09-11-R134 | 보톡스 | 스킨보톡스1부위 (이마/팔자/턱라인/목주름) | 제오민 |  | 정가: 220,000원 / VAT 전: 119,000원 / VAT 후 (최종): 130,900원 |  | 확인 필요 |\n\nraw/10.md L880 event-2026-09-11-R135\n| event-2026-09-11-R135 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 코어톡스 |  | 정가: 250,000원 / VAT 전: 139,000원 / VAT 후 (최종): 152,900원 |  | 확인 필요 |\n\nraw/10.md L881 event-2026-09-11-R136\n| event-2026-09-11-R136 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 얼굴+목 2배 용량 |  | 정가: 360,000원 / VAT 전: 199,000원 / VAT 후 (최종): 218,900원 |  | 확인 필요 |\n\nraw/10.md L882 event-2026-09-11-R137\n| event-2026-09-11-R137 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 |  | 정가: 330,000원 / VAT 전: 179,000원 / VAT 후 (최종): 196,900원 |  | 확인 필요 |\n\nraw/10.md L883 event-2026-09-11-R138\n| event-2026-09-11-R138 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 제오민 2배 용량 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L884 event-2026-09-11-R139\n| event-2026-09-11-R139 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 |  | 정가: 540,000원 / VAT 전: 299,000원 / VAT 후 (최종): 328,900원 |  | 확인 필요 |\n\nraw/10.md L885 event-2026-09-11-R140\n| event-2026-09-11-R140 | 보톡스 | 내성 적은 풀페이스 스킨보톡스 (국산/독일산) | 앨러간 2배용량 |  | 정가: 730,000원 / VAT 전: 399,000원 / VAT 후 (최종): 438,900원 |  | 확인 필요 |\n\nraw/10.md L886 event-2026-09-11-R141\n| event-2026-09-11-R141 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 스컬트라 1 vial |  | 정가: 1,440,000원 / VAT 전: 790,000원 / VAT 후 (최종): 869,000원 |  | 확인 필요 |\n\nraw/10.md L887 event-2026-09-11-R142\n| event-2026-09-11-R142 | 보톡스 | 탄력/볼륨 콜라겐 소생 스컬트라 | • 바디 스컬트라 5 vial |  | 정가: 5,820,000원 / VAT 전: 3,200,000원 / VAT 후 (최종): 3,520,000원 |  | 확인 필요 |\n적용 규칙: CURR-01, PRICE-01",
              "limit": "",
              "procedure": "보톡스(코어톡스 이벤트 유입)",
              "questionCategory": "이벤트 문의·보톡스 안내",
              "quoteScopeNote": "고객의 직접 문의 본문은 보톡스라는 단어입니다. 통화 표기 발견은 첨부 가격표에 관한 것으로, 담당자의 문장에 금액이 있는 것처럼 제시하지 않습니다. 담당자가 실제 입력한 문장과 이미지 전송을 나누어 표시합니다. 위챗 표기는 병원의 공식 상담용 계정으로 원문을 유지합니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "肉毒",
                  "ko": "보톡스",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "您好，这边发肉毒相关优惠活动给您参考~方便的话可以添加我们的微信，以便后续咨询和预约哦~ vx: Beautyblossom00",
                  "ko": "안녕하세요, 참고하실 수 있도록 보톡스 관련 할인 이벤트를 보내드립니다~괜찮으시면 이후 상담과 예약을 위해 저희 위챗을 추가해 주세요~ vx: Beautyblossom00",
                  "kind": "text"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                }
              ]
            },
            {
              "id": "case-20261029-22",
              "verdict": "sourceConflict",
              "country": "TW",
              "title": "포텐자 화장 시점 원문 충돌",
              "customerText": "請問施打後還能化妝嗎？",
              "customerKo": "시술 후에도 화장할 수 있나요?",
              "staffText": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
              "staffKo": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
              "rationale": "담당자의 다음날 화장 안내는 시술 후 주의사항과 일치한다. 시술 설명에는 당일 가벼운 화장이 가능하다고 적혀 있어 제공 자료의 안내 시점이 서로 다르다.",
              "evidence": "raw/09.md L4331–4337\n• 시술 4시간 후부터 가볍게 세안 및 샤워가 가능하며, 다음 날부터 화장하셔도 됩니다. 당분간 스크럽, 각질 제거 및 자극적인 스킨케어 제품은 피해 주세요.\n\nraw/02.md L2413–2417\n- 시술 당일 가벼운 세안 및 화장, 샤워는 가능합니다.\n적용 규칙: SOURCE-01",
              "limit": "",
              "procedure": "포텐자(황금미세침)",
              "questionCategory": "시술 후 화장·회복 기간 문의",
              "quoteScopeNote": "화장 가능 시점 질문과 그에 대한 담당자 답변의 원문 전체입니다. 예약·통역 문의는 이 발견과 별개라 포함하지 않습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "請問施打後還能化妝嗎？",
                  "ko": "시술 후에도 화장할 수 있나요?",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
                  "ko": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
                  "kind": "text"
                }
              ]
            },
            {
              "id": "case-20261029-25",
              "verdict": "sourceConflict",
              "country": "TW",
              "title": "관리시간 단위",
              "customerText": "請問施打後還能化妝嗎？",
              "customerKo": "시술 후에도 화장할 수 있나요?",
              "staffText": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦\n\n這是價格表，您可以先參考一下～",
              "staffKo": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.\n\n가격표이니 우선 참고해 주세요～",
              "rationale": "엑소힐러 5cc 조합의 안내 금액은 제공 표의 세전 290,000원·VAT 포함 319,000원과 일치한다. 관리시간은 안내 이미지에 크라이오 5분, 제공 표에 5\"로 적혀 있어 표기가 다르다.",
              "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |\n적용 규칙: FORMAT-01, PRICE-01",
              "limit": "",
              "procedure": "포텐자·엑소힐러 조합(가격표 검토)",
              "questionCategory": "시술 후 화장 문의·가격표 안내",
              "quoteScopeNote": "고객이 관리시간을 직접 질문한 기록은 없습니다. 고객의 실제 직전 질문은 시술 후 화장에 관한 것이며, 그 질문과 답변을 맥락으로 함께 표시합니다. 이 사례의 관리시간 단위 발견은 이어서 전송한 가격표 이미지와 기준표를 대조한 것으로, 화장 질문의 문장 답변에서 발견한 오류가 아닙니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "請問施打後還能化妝嗎？",
                  "ko": "시술 후에도 화장할 수 있나요?",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "視乎你要進行什麽項目呢~ \n要是黃金微針的話 會有兩三天的恢復期 建議明天再化妝會比較好哦",
                  "ko": "어떤 시술을 받으시는지에 따라 달라요~ \n황금미세침이라면 이틀에서 사흘 정도의 회복 기간이 있으니 내일 다시 화장하시는 편이 더 좋겠어요.",
                  "kind": "text"
                },
                {
                  "original": "這是價格表，您可以先參考一下～",
                  "ko": "가격표이니 우선 참고해 주세요～",
                  "kind": "text"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                }
              ]
            },
            {
              "id": "case-20261029-33",
              "verdict": "sourceConflict",
              "country": "ZZ",
              "title": "이상·초과 및 정확한 경계금액",
              "customerText": "[개인정보 가림]\nDo you guys offer checking the skin?",
              "customerKo": "[개인정보 가림]\n피부 검사도 제공하시나요?",
              "staffText": "Hi~ we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.💕\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000\n\nJust to clarify, we are a treatment-focused dermatology clinic, so our consultations are designed to recommend the most suitable in-clinic treatments based on your skin condition, rather than creating a personalized daily skincare routine. The 3D Skin Analysis provides a detailed assessment of your skin, and based on the results, our consultants will recommend the most suitable treatments for concerns such as uneven skin tone, dryness, fine lines, and early signs of aging.  We can also recommend skincare products available at our clinic to complement your treatments, but we do not provide personalized daily skincare plans.✨",
              "staffKo": "안녕하세요~ 저희는 피부 상태를 자세히 평가하기 위한 3D 피부 분석(Eve-V Muse)을 제공합니다.💕\n\n가격은 다음과 같습니다:\n* 기본: ₩55,000\n* 시술 금액이 ₩300,000을 초과하면 ₩27,500\n* 시술 금액이 ₩500,000을 초과하면 ₩11,000\n\n명확히 말씀드리면, 저희는 시술 중심의 피부과 병원이므로 상담은 개인별 일상 스킨케어 루틴을 짜 드리는 것보다는 피부 상태에 따라 가장 적합한 원내 시술을 추천하는 데 목적이 있습니다. 3D 피부 분석으로 피부를 자세히 평가하며, 그 결과에 따라 상담 담당자가 고르지 않은 피부 톤, 건조함, 잔주름, 초기 노화 징후 등의 고민에 가장 적합한 시술을 추천해 드립니다.  시술을 보완할 수 있도록 병원에서 판매하는 스킨케어 제품도 추천해 드릴 수 있지만, 개인별 일상 스킨케어 계획을 제공하지는 않습니다.✨",
              "rationale": "담당자의 피부 분석비 기본 55,000원·30만 원 초과 27,500원·50만 원 초과 11,000원 안내는 영문 가이드와 일치한다. 한국어 표는 50만 원 이상 11,000원·100만 원 이상 무료로 적혀 있어 경계금액 조건이 다르다.",
              "evidence": "raw/08.md L236–L239 영어 피부진단 요금표\n• If you would like to have an Eve-V Muse 3D skin analysis, the standard fee is KRW 55,000. However, discounts are available based on your total treatment amount:\n✔️ Over KRW 300,000: KRW 27,500\n✔️ Over KRW 500,000: KRW 11,000\n✔️ Over KRW 1,000,000: Free of charge\n\nraw/07.md L494–L502 한국어 피부진단 요금표\n피부진단비용안내\n\n  **내용**\n\n100만원 이상 - 무료\n50만원 이상 - 11,000원\n30만원 이상 - 27,500원\n30만원 이하 – 55,000원\n※ 원문은 “30만원 이상”과 “30만원 이하”가 겹칩니다. 정확히 30만원인 경우의 진단비는 확인이 필요합니다.\n적용 규칙: SOURCE-01",
              "limit": "",
              "procedure": "3D 피부진단(Eve-V Muse)",
              "questionCategory": "피부 검사 가능 여부·진단 비용 안내",
              "quoteScopeNote": "고객의 피부 검사 문의와 담당자의 가격·상담 범위 답변 전체입니다. 고객 이름으로 쓰인 첫 이니셜 한 글자만 가렸고 줄바꿈은 보존했습니다. 과거 시술·피부 상태 대화는 이 질문 본문에 합치지 않았습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "[개인정보 가림]\nDo you guys offer checking the skin?",
                  "ko": "[개인정보 가림]\n피부 검사도 제공하시나요?",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "Hi~ we offer a 3D Skin Analysis (Eve-V Muse) to assess your skin condition in detail.💕\n\nThe pricing is as follows:\n* Basic: ₩55,000\n* ₩27,500 if your treatment exceeds ₩300,000\n* ₩11,000 if your treatment exceeds ₩500,000\n\nJust to clarify, we are a treatment-focused dermatology clinic, so our consultations are designed to recommend the most suitable in-clinic treatments based on your skin condition, rather than creating a personalized daily skincare routine. The 3D Skin Analysis provides a detailed assessment of your skin, and based on the results, our consultants will recommend the most suitable treatments for concerns such as uneven skin tone, dryness, fine lines, and early signs of aging.  We can also recommend skincare products available at our clinic to complement your treatments, but we do not provide personalized daily skincare plans.✨",
                  "ko": "안녕하세요~ 저희는 피부 상태를 자세히 평가하기 위한 3D 피부 분석(Eve-V Muse)을 제공합니다.💕\n\n가격은 다음과 같습니다:\n* 기본: ₩55,000\n* 시술 금액이 ₩300,000을 초과하면 ₩27,500\n* 시술 금액이 ₩500,000을 초과하면 ₩11,000\n\n명확히 말씀드리면, 저희는 시술 중심의 피부과 병원이므로 상담은 개인별 일상 스킨케어 루틴을 짜 드리는 것보다는 피부 상태에 따라 가장 적합한 원내 시술을 추천하는 데 목적이 있습니다. 3D 피부 분석으로 피부를 자세히 평가하며, 그 결과에 따라 상담 담당자가 고르지 않은 피부 톤, 건조함, 잔주름, 초기 노화 징후 등의 고민에 가장 적합한 시술을 추천해 드립니다.  시술을 보완할 수 있도록 병원에서 판매하는 스킨케어 제품도 추천해 드릴 수 있지만, 개인별 일상 스킨케어 계획을 제공하지는 않습니다.✨",
                  "kind": "text"
                }
              ]
            },
            {
              "id": "case-20261029-37",
              "verdict": "sourceConflict",
              "country": "TH",
              "title": "상담만 1만원과 추후 시술예약 시 면제 경계",
              "customerText": "ราคาเพิ่มเติม",
              "customerKo": "추가 비용",
              "staffText": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏\n\nสำหรับค่าใช้จ่ายเพิ่มเติม หากคุณลูกค้าเข้ามารับคำปรึกษาเพียงอย่างเดียว จะมีค่าปรึกษา 10,000 วอนครับ แต่หากรับบริการทำหัตถการด้วย จะไม่มีค่าปรึกษาเพิ่มเติมนะครับ😊🌸",
              "staffKo": "안녕하세요. 현재 병원에서는 사진에 나온 것과 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으시면 라인을 추가해서 문의해 주세요. 태국인 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏\n\n추가 비용의 경우, 고객님께서 상담만 받으러 오시면 상담료 10,000원이 있습니다. 하지만 시술도 함께 받으시면 추가 상담료는 없습니다😊🌸",
              "rationale": "상담만 받으면 10,000원, 시술을 함께 받으면 상담료 없음이라는 답변은 FAQ와 일치한다. 추후 시술예약만 하는 경우에는 한국어 빠른문구는 무료, 태국어 문구는 당일 미시술 시 10,000원으로 안내 조건이 다르다.",
              "evidence": "raw/06.md L1379–L1383 FAQ226\n### [질문:226] 오늘 염증주사 받고 상담 받았는데 왜 상담비 받나요? 피부진단은 무료 아닌가요 ?\n\n분류: 기타 문의사항\n\n상담만 받는 경우 상담비는 1만원으로 안내합니다. 약 처방이나 염증주사는 별도 기준이므로 실제 받은 진료 내역을 확인한 뒤 비용을 설명합니다.\n\nraw/11.md L134–L140 본문\n상담비 안내\n\n  **문구**\n\n    - 상담만 진행 시: 상담비 10,000원 발생\n\n    - 당일 시술 or 시술 예약 시: 상담비 무료\n\nraw/08.md L92 본문\n* หากเข้ามาปรึกษาอย่างเดียว โดยไม่ได้ทำหัตถการในวันนั้น จะมีค่าปรึกษา 10,000 วอน\n적용 규칙: SOURCE-01",
              "limit": "",
              "procedure": "주름 보톡스(상품페이지 유입 기준)",
              "questionCategory": "추가 비용·상담료 문의",
              "quoteScopeNote": "기존 수집본의 직전일 고객 문의에 대한 다음 날 담당자 답변입니다. 비용 문의와 관련된 두 담당자 메시지 전체를 포함하고, 프로모션 이미지는 본문과 구분합니다. 고객 문의에 원래 없던 예약 조건을 덧붙이지 않습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "ราคาเพิ่มเติม",
                  "ko": "추가 비용",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "สวัสดีครับ ตอนนี้ทางคลินิกมีโปรโมชั่นอยู่ตามภาพเลยนะครับ\nหากมีข้อสงสัยใดๆเพิ่มเติมสามารถแอดไลน์มาสอบถามได้เลยครับ มีแอดมินคนไทยและล่ามไทยให้บริการอยู่ตลอดนะครับ🥰🙏",
                  "ko": "안녕하세요. 현재 병원에서는 사진에 나온 것과 같은 프로모션을 진행하고 있습니다.\n추가로 궁금한 점이 있으시면 라인을 추가해서 문의해 주세요. 태국인 담당자와 태국어 통역사가 항상 서비스를 제공하고 있습니다🥰🙏",
                  "kind": "text"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                },
                {
                  "original": "สำหรับค่าใช้จ่ายเพิ่มเติม หากคุณลูกค้าเข้ามารับคำปรึกษาเพียงอย่างเดียว จะมีค่าปรึกษา 10,000 วอนครับ แต่หากรับบริการทำหัตถการด้วย จะไม่มีค่าปรึกษาเพิ่มเติมนะครับ😊🌸",
                  "ko": "추가 비용의 경우, 고객님께서 상담만 받으러 오시면 상담료 10,000원이 있습니다. 하지만 시술도 함께 받으시면 추가 상담료는 없습니다😊🌸",
                  "kind": "text"
                }
              ]
            },
            {
              "id": "case-20261029-42",
              "verdict": "sourceConflict",
              "country": "TW",
              "title": "관리시간 단위",
              "customerText": "想更詳細了解施術／手術內容",
              "customerKo": "시술／수술 내용을 더 자세히 알고 싶어요",
              "staffText": "您好～😊 這是我們的價格表，您可以先參考一下～💗\n如果您需要提前預約，也可以隨時告訴我們，我們可以馬上幫您安排喔～✨",
              "staffKo": "안녕하세요～😊 저희 가격표이니 우선 참고해 주세요～💗\n미리 예약을 원하시면 언제든지 말씀해 주세요. 바로 예약을 도와드릴 수 있습니다～✨",
              "rationale": "포텐자 가격표 이미지로 시술 구성과 약제·용량을 안내했고 엑소힐러 5cc 조합의 세전 290,000원은 제공 표와 일치한다. 크라이오 관리시간은 안내 이미지에 5분, 원본 엑소힐러 행에 5\", 필로가 행에 5'로 적혀 있다.",
              "evidence": "raw/17.md L5360–L5367 sheet-332689118!C40:C41\nC40 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  |\nD40 | 527,273 | =F40/$G$5 |\nE40 | 530,000 | =ROUND(D40, -4) |\nF40 | 290,000 |  |\nG40 | 319,000 | =F40+(F40*10%) |\nH40 | 53만원 | =INT(E40/10000)&\"만\"&IF(INT(MOD(E40,10000)/1000)=0,\"\",INT(MOD(E40,10000)/1000)&\"천\")&\"원\" |\nI40 | 29만원 | =INT(F40/10000)&\"만\"&IF(INT(MOD(F40,10000)/1000)=0,\"\",INT(MOD(F40,10000)/1000)&\"천\")&\"원\" |\nC41 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  |\n\nraw/10.md L802 event-2026-09-11-R38\n| event-2026-09-11-R38 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + pdrn(연어주사)2cc 도포+시트팩 |  | 정가: 490,000원 / VAT 전: 270,000원 / VAT 후 (최종): 297,000원 |  | 확인 필요 |\n\nraw/10.md L803 event-2026-09-11-R39\n| event-2026-09-11-R39 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +트라블랑(미백+항노화+콜라겐)2cc 도포+시트팩 |  | 정가: 510,000원 / VAT 전: 280,000원 / VAT 후 (최종): 308,000원 |  | 확인 필요 |\n\nraw/10.md L804 event-2026-09-11-R40\n| event-2026-09-11-R40 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) + 엑소힐러5cc 크라이오 5\"+시트팩 |  | 정가: 530,000원 / VAT 전: 290,000원 / VAT 후 (최종): 319,000원 | 자가세안 | 확인 필요 |\n\nraw/10.md L805 event-2026-09-11-R41\n| event-2026-09-11-R41 | 포텐자 에디션 | 모공, 보습 올인원 포텐자 | 포텐자 레이저 (모공) +필로가(샤넬주사)3cc 도포+크라이오5'+ 시트팩 |  | 정가: 560,000원 / VAT 전: 310,000원 / VAT 후 (최종): 341,000원 |  | 확인 필요 |\n\nraw/10.md L806 event-2026-09-11-R42\n| event-2026-09-11-R42 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 쥬베룩 스킨 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L807 event-2026-09-11-R43\n| event-2026-09-11-R43 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 울트라콜100 반병 4cc |  | 정가: 690,000원 / VAT 전: 380,000원 / VAT 후 (최종): 418,000원 |  | 확인 필요 |\n\nraw/10.md L808 event-2026-09-11-R44\n| event-2026-09-11-R44 | 포텐자 에디션 | 포텐자 펌핑 | 포텐자(펌핑) + 리즈네 2cc |  | 정가: 600,000원 / VAT 전: 330,000원 / VAT 후 (최종): 363,000원 | \"깐달걀 피부 관리\" | 확인 필요 |\n\nraw/10.md L809 event-2026-09-11-R45\n| event-2026-09-11-R45 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 펌핑 + 리쥬란2cc |  | 정가: 750,000원 / VAT 전: 410,000원 / VAT 후 (최종): 451,000원 |  | 확인 필요 |\n\nraw/10.md L810 event-2026-09-11-R46\n| event-2026-09-11-R46 | 포텐자 에디션 | 포텐자 펌핑 +리쥬란 세트 | 포텐자 모공 + 리쥬란2cc도포 + 크라이오5'+시트팩 |  | 정가: 670,000원 / VAT 전: 369,000원 / VAT 후 (최종): 405,900원 |  | 확인 필요 |\n적용 규칙: FORMAT-01, PRICE-01",
              "limit": "",
              "procedure": "포텐자·엑소힐러 조합(가격표 검토)",
              "questionCategory": "시술·수술 상세내용 문의",
              "quoteScopeNote": "고객이 시술·수술 내용에 관해 남긴 문장과 담당자의 가격표·예약 안내 본문 전체입니다. 관리시간 단위 발견은 전송된 가격표 이미지와 기준표의 표기 대조이며 고객이 관리시간을 직접 질문했다는 뜻은 아닙니다. 첨부 내용은 임의 전사하거나 재구성하지 않았습니다.",
              "quoteFormat": "full-messages-v1",
              "customerMessages": [
                {
                  "original": "想更詳細了解施術／手術內容",
                  "ko": "시술／수술 내용을 더 자세히 알고 싶어요",
                  "kind": "text"
                }
              ],
              "staffMessages": [
                {
                  "original": "您好～😊 這是我們的價格表，您可以先參考一下～💗\n如果您需要提前預約，也可以隨時告訴我們，我們可以馬上幫您安排喔～✨",
                  "ko": "안녕하세요～😊 저희 가격표이니 우선 참고해 주세요～💗\n미리 예약을 원하시면 언제든지 말씀해 주세요. 바로 예약을 도와드릴 수 있습니다～✨",
                  "kind": "text"
                },
                {
                  "original": "",
                  "ko": "",
                  "kind": "imageOnly"
                }
              ]
            }
          ],
          "followUps": [],
          "followUpSummary": {
            "carried": 0,
            "resolved": 0,
            "unresolved": 0,
            "deferred": 0,
            "unchecked": 0
          },
          "definitionRevision": "NO_STAFF_REPLY_ONLY",
          "knowledgeVerification": {
            "version": "KG-2026-10-30-v1",
            "checkedAt": "2026-10-30T00:21:09.690Z",
            "sourceDate": "2026-10-29",
            "curatedFacts": 17,
            "guideDocuments": 18,
            "historicalMetadataDocuments": 10,
            "priceOffers": 1034,
            "priceSheets": 31,
            "sourceCells": 11149,
            "lineSpans": 35878,
            "sections": 678,
            "nodeCount": 55531,
            "edgeCount": 118670,
            "rooms": 23,
            "messages": 121,
            "findingPackets": 50,
            "activeFindings": 8,
            "ruleCount": 11,
            "citationLinks": 808,
            "priceComparisons": 256,
            "priceMatched": 201,
            "priceNotComparable": 55,
            "uniqueSourceConflictTopics": 5,
            "sourceConflictOccurrences": 6,
            "scope": "기존 수집본 재매칭 · 신규 채팅 및 이미지 재열람 없음",
            "status": "verified"
          },
          "reviewEntries": [
            {
              "id": "gangnamunni-20261029-review-001",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-002",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-003",
              "country": "ZZ",
              "procedure": "보톡스(이마·거미스마일·턱)",
              "questionCategory": "시술 부위·가격·보톡스 종류 문의",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "case-20261029-06"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-004",
              "country": "TH",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-005",
              "country": "TH",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-006",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-007",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-008",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-009",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-010",
              "country": "JP",
              "procedure": "어깨 필러",
              "questionCategory": "이벤트·가격",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "어깨필러 안내는 제공 수가표와 일치한다."
            },
            {
              "id": "gangnamunni-20261029-review-011",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-012",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-013",
              "country": "CN",
              "procedure": "보톡스(코어톡스 이벤트 유입)",
              "questionCategory": "이벤트 문의·보톡스 안내",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "case-20261029-21"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-014",
              "country": "TW",
              "procedure": "포텐자(황금미세침) / 포텐자·엑소힐러 조합(가격표 검토)",
              "questionCategory": "시술 후 화장·회복 기간 문의 / 시술 후 화장 문의·가격표 안내",
              "verdict": "sourceConflict",
              "findingCount": 2,
              "relatedCaseIds": [
                "case-20261029-22",
                "case-20261029-25"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-015",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-016",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-017",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-018",
              "country": "ZZ",
              "procedure": "3D 피부진단(Eve-V Muse)",
              "questionCategory": "피부 검사 가능 여부·진단 비용 안내",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "case-20261029-33"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-019",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-020",
              "country": "TH",
              "procedure": "주름 보톡스(상품페이지 유입 기준)",
              "questionCategory": "추가 비용·상담료 문의",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "case-20261029-37"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-021",
              "country": "JP",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            },
            {
              "id": "gangnamunni-20261029-review-022",
              "country": "TW",
              "procedure": "포텐자·엑소힐러 조합(가격표 검토)",
              "questionCategory": "시술·수술 상세내용 문의",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "case-20261029-42"
              ],
              "note": "현재 유효한 검토 사례만 연결합니다. 사례 수와 상담방 수는 다른 단위입니다."
            },
            {
              "id": "gangnamunni-20261029-review-023",
              "country": "TW",
              "procedure": "확인되지 않음",
              "questionCategory": "응대·제공자료 검토",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "현재 유효한 지적 사례 없음. 공개하지 않은 상담 원문을 새로 만들거나 옮기지 않았습니다."
            }
          ]
        }
      ]
    },
    "kakao-clinic": {
      "name": "카카오톡(병원계정)",
      "updatedAt": "2026-11-02T00:23:42.575Z",
      "days": [
        {
          "platform": "kakao-clinic",
          "date": "2026-11-01",
          "status": "partial",
          "auditState": "source-availability-blocked",
          "checkedAt": "2026-11-02T02:13:05.594Z",
          "qaAuditCheckedAt": "2026-11-02T02:13:05.594Z",
          "cutoffAt": "2026-11-01T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "목록만 확보했으며 본문·대상일 소속·임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-11-01",
            "observedAt": "2026-11-02T02:13:05.594Z",
            "evidenceScope": "native-list-only",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 60,
            "bodyRoomsOpened": 0,
            "actualBodyDateMembership": "unknown",
            "reason": "목록 후보 코호트만 관찰. 본문 미열람으로 대상일 상담 소속과 전체 분모는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "목록 최종 활동일은 활동 힌트일 뿐 전체 대화와 대상일 본문 소속은 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-K-20261101-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A229:AF229",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A230:AF230",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A231:AF231",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A232:AF232",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A233:AF233",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A234:AF234",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A235:AF235",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A236:AF236",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A237:AF237",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A238:AF238",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A239:AF239",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-012",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A240:AF240",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-013",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A241:AF241",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-014",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A242:AF242",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-015",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A243:AF243",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-016",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A244:AF244",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-017",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A245:AF245",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-018",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A246:AF246",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-019",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A247:AF247",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-020",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A248:AF248",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-021",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A249:AF249",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-022",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A250:AF250",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-023",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A251:AF251",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-024",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A252:AF252",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-025",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A253:AF253",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-026",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A254:AF254",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-027",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A255:AF255",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-028",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A256:AF256",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-029",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A257:AF257",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-030",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A258:AF258",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-031",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A259:AF259",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-032",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A260:AF260",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-033",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A261:AF261",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-034",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A262:AF262",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-035",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A263:AF263",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-036",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A264:AF264",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-037",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A265:AF265",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-038",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A266:AF266",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-039",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A267:AF267",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-040",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A268:AF268",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-041",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A269:AF269",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-042",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A270:AF270",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-043",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A271:AF271",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-044",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A272:AF272",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-045",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A273:AF273",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-046",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A274:AF274",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-047",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A275:AF275",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-048",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A276:AF276",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-049",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A277:AF277",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-050",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A278:AF278",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-051",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A279:AF279",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-052",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A280:AF280",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-053",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A281:AF281",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-054",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A282:AF282",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-055",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A283:AF283",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-056",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A284:AF284",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-057",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A285:AF285",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-058",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A286:AF286",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-059",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A287:AF287",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261101-060",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A288:AF288",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "MISS-K-20261101-001",
                "MISS-K-20261101-002",
                "MISS-K-20261101-003",
                "MISS-K-20261101-004",
                "MISS-K-20261101-005",
                "MISS-K-20261101-006",
                "MISS-K-20261101-007",
                "MISS-K-20261101-008",
                "MISS-K-20261101-009",
                "MISS-K-20261101-010",
                "MISS-K-20261101-011",
                "MISS-K-20261101-012",
                "MISS-K-20261101-013",
                "MISS-K-20261101-014",
                "MISS-K-20261101-015",
                "MISS-K-20261101-016",
                "MISS-K-20261101-017",
                "MISS-K-20261101-018",
                "MISS-K-20261101-019",
                "MISS-K-20261101-020",
                "MISS-K-20261101-021",
                "MISS-K-20261101-022",
                "MISS-K-20261101-023",
                "MISS-K-20261101-024",
                "MISS-K-20261101-025",
                "MISS-K-20261101-026",
                "MISS-K-20261101-027",
                "MISS-K-20261101-028",
                "MISS-K-20261101-029",
                "MISS-K-20261101-030",
                "MISS-K-20261101-031",
                "MISS-K-20261101-032",
                "MISS-K-20261101-033",
                "MISS-K-20261101-034",
                "MISS-K-20261101-035",
                "MISS-K-20261101-036",
                "MISS-K-20261101-037",
                "MISS-K-20261101-038",
                "MISS-K-20261101-039",
                "MISS-K-20261101-040",
                "MISS-K-20261101-041",
                "MISS-K-20261101-042",
                "MISS-K-20261101-043",
                "MISS-K-20261101-044",
                "MISS-K-20261101-045",
                "MISS-K-20261101-046",
                "MISS-K-20261101-047",
                "MISS-K-20261101-048",
                "MISS-K-20261101-049",
                "MISS-K-20261101-050",
                "MISS-K-20261101-051",
                "MISS-K-20261101-052",
                "MISS-K-20261101-053",
                "MISS-K-20261101-054",
                "MISS-K-20261101-055",
                "MISS-K-20261101-056",
                "MISS-K-20261101-057",
                "MISS-K-20261101-058",
                "MISS-K-20261101-059",
                "MISS-K-20261101-060"
              ]
            }
          }
        },
        {
          "platform": "kakao-clinic",
          "date": "2026-10-31",
          "status": "partial",
          "auditState": "source-availability-blocked",
          "checkedAt": "2026-11-02T02:13:05.594Z",
          "qaAuditCheckedAt": "2026-11-02T02:13:05.594Z",
          "cutoffAt": "2026-10-31T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "목록만 확보했으며 본문·대상일 소속·임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-10-31",
            "observedAt": "2026-11-02T02:13:05.594Z",
            "evidenceScope": "native-list-only",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 60,
            "bodyRoomsOpened": 0,
            "actualBodyDateMembership": "unknown",
            "reason": "목록 후보 코호트만 관찰. 본문 미열람으로 대상일 상담 소속과 전체 분모는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "목록 최종 활동일은 활동 힌트일 뿐 전체 대화와 대상일 본문 소속은 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-K-20261031-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A158:AF158",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A159:AF159",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A160:AF160",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A161:AF161",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A162:AF162",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A163:AF163",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A164:AF164",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A165:AF165",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A166:AF166",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A167:AF167",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A168:AF168",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-012",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A169:AF169",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-013",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A170:AF170",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-014",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A171:AF171",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-015",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A172:AF172",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-016",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A173:AF173",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-017",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A174:AF174",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-018",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A175:AF175",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-019",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A176:AF176",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-020",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A177:AF177",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-021",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A178:AF178",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-022",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A179:AF179",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-023",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A180:AF180",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-024",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A181:AF181",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-025",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A182:AF182",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-026",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A183:AF183",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-027",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A184:AF184",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-028",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A185:AF185",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-029",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A186:AF186",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-030",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A187:AF187",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-031",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A188:AF188",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-032",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A189:AF189",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-033",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A190:AF190",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-034",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A191:AF191",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-035",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A192:AF192",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-036",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A193:AF193",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-037",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A194:AF194",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-038",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A195:AF195",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-039",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A196:AF196",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-040",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A197:AF197",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-041",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A198:AF198",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-042",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A199:AF199",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-043",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A200:AF200",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-044",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A201:AF201",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-045",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A202:AF202",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-046",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A203:AF203",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-047",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A204:AF204",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-048",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A205:AF205",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-049",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A206:AF206",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-050",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A207:AF207",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-051",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A208:AF208",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-052",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A209:AF209",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-053",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A210:AF210",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-054",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A211:AF211",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-055",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A212:AF212",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-056",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A213:AF213",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-057",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A214:AF214",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-058",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A215:AF215",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-059",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A216:AF216",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-K-20261031-060",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A217:AF217",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "MISS-K-20261031-001",
                "MISS-K-20261031-002",
                "MISS-K-20261031-003",
                "MISS-K-20261031-004",
                "MISS-K-20261031-005",
                "MISS-K-20261031-006",
                "MISS-K-20261031-007",
                "MISS-K-20261031-008",
                "MISS-K-20261031-009",
                "MISS-K-20261031-010",
                "MISS-K-20261031-011",
                "MISS-K-20261031-012",
                "MISS-K-20261031-013",
                "MISS-K-20261031-014",
                "MISS-K-20261031-015",
                "MISS-K-20261031-016",
                "MISS-K-20261031-017",
                "MISS-K-20261031-018",
                "MISS-K-20261031-019",
                "MISS-K-20261031-020",
                "MISS-K-20261031-021",
                "MISS-K-20261031-022",
                "MISS-K-20261031-023",
                "MISS-K-20261031-024",
                "MISS-K-20261031-025",
                "MISS-K-20261031-026",
                "MISS-K-20261031-027",
                "MISS-K-20261031-028",
                "MISS-K-20261031-029",
                "MISS-K-20261031-030",
                "MISS-K-20261031-031",
                "MISS-K-20261031-032",
                "MISS-K-20261031-033",
                "MISS-K-20261031-034",
                "MISS-K-20261031-035",
                "MISS-K-20261031-036",
                "MISS-K-20261031-037",
                "MISS-K-20261031-038",
                "MISS-K-20261031-039",
                "MISS-K-20261031-040",
                "MISS-K-20261031-041",
                "MISS-K-20261031-042",
                "MISS-K-20261031-043",
                "MISS-K-20261031-044",
                "MISS-K-20261031-045",
                "MISS-K-20261031-046",
                "MISS-K-20261031-047",
                "MISS-K-20261031-048",
                "MISS-K-20261031-049",
                "MISS-K-20261031-050",
                "MISS-K-20261031-051",
                "MISS-K-20261031-052",
                "MISS-K-20261031-053",
                "MISS-K-20261031-054",
                "MISS-K-20261031-055",
                "MISS-K-20261031-056",
                "MISS-K-20261031-057",
                "MISS-K-20261031-058",
                "MISS-K-20261031-059",
                "MISS-K-20261031-060"
              ]
            }
          }
        },
        {
          "platform": "kakao-clinic",
          "date": "2026-10-30",
          "status": "partial",
          "auditState": "reviewed-expanded-safe-scope-unaggregated",
          "cutoffAt": "2026-10-30T23:59:59+09:00",
          "checkedAt": "2026-10-31T07:02:31.723Z",
          "eligibleRooms": 9,
          "reviewedRooms": 9,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "verdicts": {
            "appropriate": 6,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 0,
            "needsVerification": 3
          },
          "countries": [
            {
              "code": "ZZ",
              "name": "국적 미확인",
              "rooms": 9,
              "messages": null,
              "verdicts": {
                "appropriate": 6,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 3
              }
            }
          ],
          "issues": [
            {
              "category": "동일 채널·상품조건",
              "severity": "보통",
              "status": "확인 필요",
              "summary": "레스틸렌 턱필러1방의 적용근거 확인",
              "count": 1
            }
          ],
          "casesComplete": false,
          "casesScope": "reviewed-rooms",
          "casesUpdatedAt": "2026-10-30T23:42:14.945Z",
          "cases": [
            {
              "id": "kakao-20261030-case-001",
              "verdict": "needsVerification",
              "country": "ZZ",
              "title": "레스틸렌 턱필러의 동일 채널 적용근거 확인",
              "procedure": "레스틸렌 턱필러",
              "questionCategory": "가격·VAT·채널",
              "structuralReason": "턱1cc360,000원VAT포함이라는 답변을 실제 읽었습니다. 같은 브랜드·부위·카카오 적용조건의 제공근거가 부족하여 확인필요입니다. 제공표와 실제 응답을 비교하되 다른 채널의 일반수입옵션·다른부위 가격을 강제로 같게 보지 않았습니다.",
              "rationale": "턱1cc360,000원VAT포함이라는 답변을 실제 읽었습니다. 같은 브랜드·부위·카카오 적용조건의 제공근거가 부족하여 확인필요입니다.",
              "evidence": "제공표와 실제 응답을 비교하되 다른 채널의 일반수입옵션·다른부위 가격을 강제로 같게 보지 않았습니다.",
              "limit": "직원 확정 가격오류·가정 할인·개별 필요용량은 확정하지 않습니다. 이름·연락처·예약신청은 이 가격사례와 무관하여 공개하지 않습니다.",
              "quoteDisclosure": "restricted",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A124:Z124"
            }
          ],
          "reviewEntries": [
            {
              "id": "kakao-20261030-review-003",
              "country": "ZZ",
              "procedure": "레스틸렌 턱필러1cc",
              "questionCategory": "가격/VAT",
              "verdict": "needsVerification",
              "findingCount": 1,
              "relatedCaseIds": [
                "kakao-20261030-case-001"
              ],
              "note": "턱1cc360,000원VAT포함이라는 답변을 실제 읽었습니다. 같은 브랜드·부위·카카오 적용조건의 제공근거가 부족하여 확인필요입니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-004",
              "country": "ZZ",
              "procedure": "이전시술 특정불가",
              "questionCategory": "호전 경과/사과/후속문의",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "보이는 경과확인·사과·문의응대와 운영카드 범위 검토입니다. 실제 치료결과 판정은 아닙니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-001",
              "country": "ZZ",
              "procedure": "세르프XERF300/600/900샷",
              "questionCategory": "가격/VAT",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "300·600·900샷의VAT포함금액은 제공 일반리프팅 원본과 일치합니다. 주장하지 않은 모든 부가혜택의 이행까지 통과조건으로 추가하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-005",
              "country": "ZZ",
              "procedure": "세르프XERF",
              "questionCategory": "가격문의/야간접수",
              "verdict": "needsVerification",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "야간 가격문의와 자동접수만 확인했습니다. 가격설명은 미완료 검토이며 확인필요·부분범위입니다. 다음날 이미지를30일 답변으로 승격하거나 답변누락으로 단정하지 않습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-006",
              "country": "ZZ",
              "procedure": "보톡스",
              "questionCategory": "예약접수/야간자동응답",
              "verdict": "needsVerification",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "야간 예약요청·접수폼·운영카드 문자만 확인했습니다. 실제예약확정·실질 의료상담은 검수완료가 아니며 확인필요·부분범위입니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-007",
              "country": "ZZ",
              "procedure": "색소관리",
              "questionCategory": "기결제시술예약",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-008",
              "country": "ZZ",
              "procedure": "타투제거예약",
              "questionCategory": "예약가능일시/확정",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 삭제원문1개는 미열람이며 복원하지 않았습니다."
            },
            {
              "id": "kakao-20261030-review-009",
              "country": "ZZ",
              "procedure": "기존예약시간변경(시술종류30일확인불가)",
              "questionCategory": "예약변경·이벤트봇",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 숨은 후속봇 이력의 읽음 안전 미확인으로 향후 재열람은 보류합니다."
            },
            {
              "id": "kakao-20261030-review-010",
              "country": "ZZ",
              "procedure": "기존예약취소(시술종류30일미확인)",
              "questionCategory": "고객사정취소",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다."
            }
          ],
          "conversations": [],
          "reviewScope": "검수내역71행: 알려진당일44방(본문9방·미열람35방)과 날짜포함미확인27방. 현재 대조시점과 과거 보관자료를 행별로 구분합니다. 11월2일 안전한9방을 실제 재열람했고 메시지41개·삭제표시1개가 이전캡처와 정확히 일치했습니다. 사람답변41개나 전체분모가 아닙니다. 이전 판정범위: 저장된30일11방 중 환자9방만 분모로 삼았습니다(제한범위 적정6·확인필요3: 동일조건 가격1+야간부분범위2). 야간2는 실질 상담·가격/예약확정 검수완료가 아닙니다. 기업제안1방과 목적불명1방은 환자에서 제외합니다. 전체49 UI단위와 환자39 UI단위(문자34+카드5)는 의료메시지수/사람답변수와 다릅니다. 환자9방의 카드5개·전체11방의 카드6개는 표시문자만 읽었으며 버튼·목적지·연결이미지는 열지 않았습니다. 카드 미열람 총수는 미확인입니다. 삭제원문1개 미열람, 보호44방(30일확실34·가능10)은 국적 미검사로 국적미확인9에 합산하지 않습니다. 검토9방의 실제국적은 본문에 없어 미확인이며 이름·언어로 추정하지 않았습니다. casesComplete는 해석한 가시문자 부분집합과 기존 가격사례만 의미하며 전체카드·삭제·전일전수 완료가 아닙니다. 전체partial입니다.",
          "coverage": {
            "candidateRooms": 56,
            "reviewedRooms": 9,
            "excludedUnread": null,
            "excludedWaiting": null,
            "excludedCustomerFinalOrUnknown": 44,
            "excludedAfterCutoff": null,
            "excludedOutsideDate": 1,
            "uninspectedAttachments": null,
            "notes": [
              "검수내역71행: 알려진당일44방(본문9방·미열람35방)과 날짜포함미확인27방. 현재 대조시점과 과거 보관자료를 행별로 구분합니다. 11월2일 안전한9방을 실제 재열람했고 메시지41개·삭제표시1개가 이전캡처와 정확히 일치했습니다. 사람답변41개나 전체분모가 아닙니다.",
              "이전 10월31일 집계 기록: 저장된30일11방 중 환자9방만 분모로 삼았습니다(제한범위 적정6·확인필요3: 동일조건 가격1+야간부분범위2). 야간2는 실질 상담·가격/예약확정 검수완료가 아닙니다. 기업제안1방과 목적불명1방은 환자에서 제외합니다. 전체49 UI단위와 환자39 UI단위(문자34+카드5)는 의료메시지수/사람답변수와 다릅니다. 환자9방의 카드5개·전체11방의 카드6개는 표시문자만 읽었으며 버튼·목적지·연결이미지는 열지 않았습니다. 카드 미열람 총수는 미확인입니다. 삭제원문1개 미열람, 보호44방(30일확실34·가능10)은 국적 미검사로 국적미확인9에 합산하지 않습니다. 검토9방의 실제국적은 본문에 없어 미확인이며 이름·언어로 추정하지 않았습니다. casesComplete는 해석한 가시문자 부분집합과 기존 가격사례만 의미하며 전체카드·삭제·전일전수 완료가 아닙니다. 전체partial입니다.",
              "이전 10월31일 집계 기록: 후보56방은 실제 관찰 목록입니다. 보호44방과 30일 본문 없는1방을 구분합니다. 30일 기업제안1방·목적불명1방은 환자9방 분모에서 제외합니다.",
              "이전 10월31일 집계 기록: 9행 모두 제한범위 실제문자 검토를 기록하되 임상설명 완료9로 해석하지 않습니다. 환자9행 중6행은 제한범위 적정이고3행은 확인필요이며, 이 중 야간2행의 실질 가격·예약상담은 검토완료로 보지 않습니다.",
              "이전 10월31일 집계 기록: 보존목록16656방의메타데이터끝확인과전체대화본문전수검수는다릅니다. 당시10방열람,30일본문9방(환자8+기업1),본문41UI단위입니다.",
              "이전 10월31일 집계 기록: 최근후보72방중보호62방은열지않았습니다. 목록30일42방중35방미열람,31일최신보호27방의30일포함여부미확인입니다. 후보창상한72와전체분모를혼동하지않습니다.",
              "이전 10월31일 집계 기록: 기존환자판정9방(적정6/확인필요3)은보존하고당시재열람환자8방의한정판정(적정5/확인필요3)과구분합니다. 기업제안1방은별도이고새임상판정을생성하지않았습니다.",
              "이전 10월31일 집계 기록: 단일문자검색검증1건은검색을지운안전목록선택으로해소했습니다. 본문배열불일치1건은비교기의배열누락처리문제로수정후당시8메시지의본문·시각·화자일치를확인했습니다. 사이트차단/직원오류가아닙니다.",
              "이전 10월31일 집계 기록: 링크·연결이미지의실제목적지와전체첨부수는미검수입니다. 전체분모null·partial을유지합니다."
            ]
          },
          "followUps": [],
          "followUpSummary": {
            "carried": 0,
            "resolved": 0,
            "unresolved": 0,
            "deferred": 0,
            "unchecked": 0
          },
          "knowledgeVerification": {
            "status": "visible-text-subset-reviewed",
            "rooms": 9,
            "messages": null,
            "checkedAt": "2026-10-31T03:08:40.870Z",
            "scope": "저장된30일11방 중 환자9방만 분모로 삼았습니다(제한범위 적정6·확인필요3: 동일조건 가격1+야간부분범위2). 야간2는 실질 상담·가격/예약확정 검수완료가 아닙니다. 기업제안1방과 목적불명1방은 환자에서 제외합니다. 전체49 UI단위와 환자39 UI단위(문자34+카드5)는 의료메시지수/사람답변수와 다릅니다. 환자9방의 카드5개·전체11방의 카드6개는 표시문자만 읽었으며 버튼·목적지·연결이미지는 열지 않았습니다. 카드 미열람 총수는 미확인입니다. 삭제원문1개 미열람, 보호44방(30일확실34·가능10)은 국적 미검사로 국적미확인9에 합산하지 않습니다. 검토9방의 실제국적은 본문에 없어 미확인이며 이름·언어로 추정하지 않았습니다. casesComplete는 해석한 가시문자 부분집합과 기존 가격사례만 의미하며 전체카드·삭제·전일전수 완료가 아닙니다. 전체partial입니다."
          },
          "countryCoverage": {
            "basis": "검토한 환자9방 본문에 실제국적정보 없음; 프로필미열람·추정금지",
            "allCountryDailyAuditComplete": false,
            "denominatorKnown": false,
            "scope": "저장된30일11방 중 환자9방만 분모로 삼았습니다(제한범위 적정6·확인필요3: 동일조건 가격1+야간부분범위2). 야간2는 실질 상담·가격/예약확정 검수완료가 아닙니다. 기업제안1방과 목적불명1방은 환자에서 제외합니다. 전체49 UI단위와 환자39 UI단위(문자34+카드5)는 의료메시지수/사람답변수와 다릅니다. 환자9방의 카드5개·전체11방의 카드6개는 표시문자만 읽었으며 버튼·목적지·연결이미지는 열지 않았습니다. 카드 미열람 총수는 미확인입니다. 삭제원문1개 미열람, 보호44방(30일확실34·가능10)은 국적 미검사로 국적미확인9에 합산하지 않습니다. 검토9방의 실제국적은 본문에 없어 미확인이며 이름·언어로 추정하지 않았습니다. casesComplete는 해석한 가시문자 부분집합과 기존 가격사례만 의미하며 전체카드·삭제·전일전수 완료가 아닙니다. 전체partial입니다.",
            "legends": [
              "국적미확인9는 실제 읽은 환자범위만 의미합니다. 보호44는 국적미검사입니다.",
              "카드 문자와 버튼·연결이미지 검토는 다릅니다. 미열람카드 총수는 미확인입니다."
            ],
            "rows": [
              {
                "code": "ZZ",
                "name": "국적 미확인",
                "knownRooms": 9,
                "reviewedScopeRooms": 9,
                "normalReopenedRooms": 9,
                "priorTextRooms": 0,
                "needsVerificationRooms": 3,
                "unreadDeletedUnits": 1,
                "unreadCardUnits": null,
                "knownProtectedRooms": null,
                "totalDailyRooms": null,
                "protectedTotalRooms": null,
                "reason": "확인한 환자9방에 실제국적정보가 없습니다. 환자 카드5개와 전체 카드6개의 표시문자만 확인했으며 연결내용은 열지 않았습니다. 카드 미열람 총수는 확인되지 않았습니다. 보호44는 국가미검사로 이 행에 배분하지 않습니다."
              }
            ],
            "notes": [
              "10월31일 보존집계: 저장된30일11방 중 환자9방만 분모로 삼았습니다(제한범위 적정6·확인필요3: 동일조건 가격1+야간부분범위2). 야간2는 실질 상담·가격/예약확정 검수완료가 아닙니다. 기업제안1방과 목적불명1방은 환자에서 제외합니다. 전체49 UI단위와 환자39 UI단위(문자34+카드5)는 의료메시지수/사람답변수와 다릅니다. 환자9방의 카드5개·전체11방의 카드6개는 표시문자만 읽었으며 버튼·목적지·연결이미지는 열지 않았습니다. 카드 미열람 총수는 미확인입니다. 삭제원문1개 미열람, 보호44방(30일확실34·가능10)은 국적 미검사로 국적미확인9에 합산하지 않습니다. 검토9방의 실제국적은 본문에 없어 미확인이며 이름·언어로 추정하지 않았습니다. casesComplete는 해석한 가시문자 부분집합과 기존 가격사례만 의미하며 전체카드·삭제·전일전수 완료가 아닙니다. 전체partial입니다.",
              "10월31일 보존집계: 카드 미열람 수는 미확인이므로 null로 유지하며 0으로 집계하지 않습니다."
            ]
          },
          "inquiryLanguageCoverage": {
            "label": "10월30일 전체상태·전체기간 목록 및 당일 직접본문 확인범위",
            "methodNote": "현재 열람한 고객 직접 한국어 문장에 근거. 병원답변/플랫폼명으로 국적을 추정하지 않음.",
            "denominatorKnown": false,
            "totalTargetRooms": null,
            "observedCandidateRooms": 72,
            "confirmedTargetRooms": 44,
            "knownTargetRoomLowerBound": 44,
            "knownTargetRoomUpperBound": null,
            "accessAttemptedRooms": 10,
            "openedRooms": 10,
            "reviewedTargetRooms": 9,
            "clinicalSourceRooms": 9,
            "operatingOnlyRooms": 1,
            "guardedNotOpenedRooms": 62,
            "accessFailureRooms": 0,
            "unresolvedDateRooms": null,
            "deletedOriginalUnreadUnits": null,
            "providerIndividualMessageCount": null,
            "retainedListRows": 16656,
            "unprocessedRetainedRows": 16646,
            "nationalitySourceNote": "현재 국적필드를 검사하지 않았으므로 실제 국적은 모두 미확인입니다. 한국어 문의·병원계정·한국 플랫폼은 한국 국적 근거가 아닙니다.",
            "nationalities": [
              {
                "code": "ZZ",
                "name": "국적미확인",
                "knownTargetRooms": 44,
                "readTargetRooms": 9,
                "clinicalSourceRooms": 9,
                "operatingOnlyRooms": 1,
                "historicalUnopenedRooms": 1,
                "uiUnits": 41,
                "notes": [
                  "최소44는 목록상30일42방 +31일최신이지만30일본문을읽은2방입니다. 현재본문9방과미열람35방을구별합니다."
                ]
              }
            ],
            "languages": [
              {
                "code": "ko",
                "name": "한국어",
                "knownTargetRooms": 9,
                "readTargetRooms": 9,
                "reviewedTargetRooms": 9,
                "clinicalReviewedRooms": 8,
                "operatingOnlyRooms": 1,
                "uiUnits": 41,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": null,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 5,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 3
                },
                "notes": [
                  "현재환자8방34UI + 기업1방7UI를실제열람. 환자8방기존판정적정5/확인필요3,기업1방은임상판정대상아님."
                ]
              },
              {
                "code": "unknown",
                "name": "미확인",
                "knownTargetRooms": 35,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": null,
                "guardedNotOpenedRooms": 35,
                "unreadOriginalUnits": null,
                "accessFailureRooms": 0,
                "verdicts": null,
                "notes": [
                  "목록상30일이지만보호미열람35방의고객문의언어는미확인. 기존보존환자원장9방중현재재열람하지않은1방포함."
                ]
              },
              {
                "code": "multilingual",
                "name": "다국어",
                "knownTargetRooms": 0,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": 0,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": 0,
                "accessFailureRooms": 0,
                "verdicts": {
                  "appropriate": 0,
                  "confirmedError": 0,
                  "suspectedError": 0,
                  "missingAnswer": 0,
                  "sourceConflict": 0,
                  "needsVerification": 0
                },
                "notes": [
                  "현재직접열람9방에서는다국어문의가확인되지않음. 전체0뜻아님."
                ]
              }
            ],
            "limitations": [
              "보존목록16656방의메타데이터끝확인과전체대화본문전수검수는다릅니다. 현재10방열람,30일본문9방(환자8+기업1),본문41UI단위입니다.",
              "최근후보72방중보호62방은열지않았습니다. 목록30일42방중35방미열람,31일최신보호27방의30일포함여부미확인입니다. 후보창상한72와전체분모를혼동하지않습니다.",
              "기존환자판정9방(적정6/확인필요3)은보존하고현재재열람환자8방의한정판정(적정5/확인필요3)과구분합니다. 기업제안1방은별도이고새임상판정을생성하지않았습니다.",
              "단일문자검색검증1건은검색을지운안전목록선택으로해소했습니다. 본문배열불일치1건은비교기의배열누락처리문제로수정후현재8메시지의본문·시각·화자일치를확인했습니다. 사이트차단/직원오류가아닙니다.",
              "링크·연결이미지의실제목적지와전체첨부수는미검수입니다. 전체분모null·partial을유지합니다."
            ]
          },
          "nonChatRecords": [
            {
              "kind": "기업 제안 대화",
              "count": 1,
              "scope": "30일 한국어 고객문장·7UI단위 실제열람",
              "assessment": "환자 임상상담/적정·오류 집계에 합산하지 않음"
            }
          ],
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditCheckedAt": "2026-11-01T23:44:43.821Z",
          "qaAuditRecords": [
            {
              "id": "K-CAND-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A59:Z59",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A60:Z60",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A61:Z61",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A62:Z62",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A63:Z63",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A64:Z64",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A65:Z65",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A66:Z66",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A67:Z67",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A68:Z68",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A69:Z69",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-012",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A70:Z70",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-013",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A71:Z71",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-014",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A72:Z72",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-015",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A73:Z73",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-016",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A74:Z74",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "hasOriginal": true
            },
            {
              "id": "K-CAND-017",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A75:Z75",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-018",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A76:Z76",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-019",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A77:Z77",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-020",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A78:Z78",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-021",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A79:Z79",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-022",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A80:Z80",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-023",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A81:Z81",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-024",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A82:Z82",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-025",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A83:Z83",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-027",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A84:Z84",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "K-CAND-028",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A85:Z85",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "kakao-20261030-review-005",
              "country": null,
              "consultationAt": "2026-10-30T23:59:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T23:59:00+09:00",
                "lastAt": "2026-10-30T23:59:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T23:59:00+09:00",
                "lastAt": "2026-10-30T23:59:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "세르프XERF · 가격문의/야간접수: 야간 가격문의와 자동접수만 확인했습니다. 가격설명은 미완료 검토이며 확인필요·부분범위입니다. 다음날 이미지를30일 답변으로 승격하거나 답변누락으로 단정하지 않습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A86:Z86",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-006",
              "country": null,
              "consultationAt": "2026-10-30T21:49:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T21:49:00+09:00",
                "lastAt": "2026-10-30T21:51:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T21:49:00+09:00",
                "lastAt": "2026-10-30T21:51:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "보톡스 · 예약접수/야간자동응답: 야간 예약요청·접수폼·운영카드 문자만 확인했습니다. 실제예약확정·실질 의료상담은 검수완료가 아니며 확인필요·부분범위입니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A87:Z87",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 2개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-031",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A88:Z88",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-032",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A89:Z89",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-033",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A90:Z90",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-034",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A91:Z91",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-035",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A92:Z92",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-036",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A93:Z93",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-037",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A94:Z94",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-038",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A95:Z95",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-039",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A96:Z96",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-007",
              "country": null,
              "consultationAt": "2026-10-30T17:11:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T17:11:00+09:00",
                "lastAt": "2026-10-30T17:37:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T17:21:00+09:00",
                "lastAt": "2026-10-30T17:48:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "색소관리 · 기결제시술예약: 가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A97:Z97",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 2개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-041",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A98:Z98",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-042",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A99:Z99",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-008",
              "country": null,
              "consultationAt": "2026-10-30T17:29:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T17:29:00+09:00",
                "lastAt": "2026-10-30T17:34:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 2,
                "firstAt": "2026-10-30T17:34:00+09:00",
                "lastAt": "2026-10-30T17:34:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "타투제거예약 · 예약가능일시/확정: 가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 삭제원문1개는 미열람이며 복원하지 않았습니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A100:Z100",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 2개, 병원발신 2개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 1개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-044",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A101:Z101",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-045",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A102:Z102",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-046",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A103:Z103",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-001",
              "country": null,
              "consultationAt": "2026-10-30T16:09:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T16:09:00+09:00",
                "lastAt": "2026-10-30T16:09:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T16:19:00+09:00",
                "lastAt": "2026-10-30T16:19:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "세르프XERF300/600/900샷 · 가격/VAT: 300·600·900샷의VAT포함금액은 제공 일반리프팅 원본과 일치합니다. 주장하지 않은 모든 부가혜택의 이행까지 통과조건으로 추가하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A104:Z104",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 1개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-048",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A105:Z105",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-049",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A106:Z106",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-050",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A107:Z107",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-051",
              "country": null,
              "consultationAt": "2026-10-30T15:02:00+09:00",
              "language": "ko",
              "sourceState": "operating-only",
              "question": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T15:02:00+09:00",
                "lastAt": "2026-10-30T15:15:00+09:00"
              },
              "answer": {
                "state": "operating-only",
                "messageCount": 4,
                "firstAt": "2026-10-30T15:02:00+09:00",
                "lastAt": "2026-10-30T15:17:00+09:00"
              },
              "verdict": "unreviewed",
              "reason": "실제 기업제안·서비스 안내 대화입니다. 환자 상담 및 임상 판정에 합산하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A108:Z108",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 3개, 병원발신 4개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "enterprise",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-052",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A109:Z109",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-053",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A110:Z110",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-054",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A111:Z111",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-055",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A112:Z112",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-056",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A113:Z113",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-057",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A114:Z114",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-058",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A115:Z115",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-059",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A116:Z116",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-060",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A117:Z117",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-061",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A118:Z118",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "appropriate",
              "reason": "기존예약시간변경(시술종류30일확인불가) · 예약변경·이벤트봇: 가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 숨은 후속봇 이력의 읽음 안전 미확인으로 향후 재열람은 보류합니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A119:Z119",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed",
              "hasOriginal": true
            },
            {
              "id": "K-CAND-063",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A120:Z120",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-064",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A121:Z121",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-065",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A122:Z122",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-066",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A123:Z123",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-003",
              "country": null,
              "consultationAt": "2026-10-30T10:07:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-10-30T10:07:00+09:00",
                "lastAt": "2026-10-30T11:16:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 4,
                "firstAt": "2026-10-30T10:07:00+09:00",
                "lastAt": "2026-10-30T11:21:00+09:00"
              },
              "verdict": "needsVerification",
              "reason": "레스틸렌 턱필러1cc · 가격/VAT: 턱1cc360,000원VAT포함이라는 답변을 실제 읽었습니다. 같은 브랜드·부위·카카오 적용조건의 제공근거가 부족하여 확인필요입니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 확인필요 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A124:Z124",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 4개, 병원발신 4개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-068",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A125:Z125",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-069",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A126:Z126",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "K-CAND-070",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A127:Z127",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-010",
              "country": null,
              "consultationAt": "2026-10-30T09:56:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T09:56:00+09:00",
                "lastAt": "2026-10-30T09:56:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T09:56:00+09:00",
                "lastAt": "2026-10-30T09:57:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "기존예약취소(시술종류30일미확인) · 고객사정취소: 가시 예약/변경/취소 응답의 문맥 범위만 적정입니다. 실제 CRM등록·시술실행·개별 의료적합성은 검증하지 않았습니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A128:Z128",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            },
            {
              "id": "kakao-20261030-review-004",
              "country": null,
              "consultationAt": "2026-10-30T02:49:00+09:00",
              "language": "ko",
              "sourceState": "observed",
              "question": {
                "state": "withheld-private",
                "messageCount": 1,
                "firstAt": "2026-10-30T02:49:00+09:00",
                "lastAt": "2026-10-30T02:49:00+09:00"
              },
              "answer": {
                "state": "withheld-private",
                "messageCount": 3,
                "firstAt": "2026-10-30T02:49:00+09:00",
                "lastAt": "2026-10-30T09:22:00+09:00"
              },
              "verdict": "appropriate",
              "reason": "이전시술 특정불가 · 호전 경과/사과/후속문의: 보이는 경과확인·사과·문의응대와 운영카드 범위 검토입니다. 실제 치료결과 판정은 아닙니다. 카드문자만 확인하고 버튼·목적지·연결이미지는 열지 않았습니다. 기존 적정(기존 확인범위) 판정을 유지하며 새 임상판정을 만들지 않았습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A129:Z129",
              "scopeNote": "10월30일 포함이 확인된 저장 범위 · 11월2일 실제 안전 재열람 · 확인한 당일 고객발신 1개, 병원발신 3개(개인담당자 미확인), 이미지표시 0개, 링크표시 0개, 삭제표시 0개, 전일문맥 0개. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "clinical",
              "targetDayState": "confirmed"
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [
              {
                "id": "K-CAND-016",
                "recordIds": [
                  "K-CAND-016"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "확인되지 않음",
                "category": "인사·운영시간",
                "verdict": "archive",
                "reason": "보관 대화에서 고객의 인사(Hello)에 채팅 운영시간과 진료시간 외 순차 답변 안내가 회신됐다.",
                "questionDate": null,
                "finalReplyDate": null,
                "customer": [
                  {
                    "original": "Hello",
                    "ko": "안녕하세요"
                  }
                ],
                "staff": [
                  {
                    "original": "채팅 운영시간\n\n월요일\n10:00 ~ 20:00\n화요일\n10:00 ~ 20:00\n수요일\n10:00 ~ 20:00\n목요일\n10:00 ~ 20:00\n금요일\n10:00 ~ 20:00\n토요일\n10:00 ~ 16:30\n일요일\n10:00 ~ 16:30\n\n위 운영시간 내에 채팅이 가능합니다.\n\n안녕하세요.\n아름다움의 시작, 뷰티블라썸의원입니다 🤍\n진료 시간 외에 문의는 순차적으로 확인 후 답변 드리고 있습니다.\n잠시만 기다려주세요 :)",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A74:Z74"
              },
              {
                "id": "K-CAND-051",
                "recordIds": [
                  "K-CAND-051"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "해당없음(기업 제안)",
                "category": "마케팅 제안·담당 부서 연결",
                "verdict": "normal-ops",
                "reason": "업체의 마케팅 제안서 전달·담당자 연결 요청에 마케팅 담당 메일로 보내면 마케팅팀이 확인 후 연락한다고 안내했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "안녕하세요 다름이 아니라 저희는 국내 최초 샤오홍슈 MCN파트너 [회사명]라는 회사입니다!\n원장님께 중화권 고객 유치 관련해서 제안서 한번 남겨드리고 싶어서 연락드렸는데요!\n\n혹시 관련해서 마케팅이나 경영쪽으로 관리하고 계신 담당자님 계시면 연결가능하실까요`?",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "❤️안녕하세요, 아름다움의 시작 뷰티블라썸의원입니다❤️\r\n\r\n마케팅 관련 내용은 아래 메일로 전송 부탁드립니다.\r\n\r\n[담당자 이메일]\r\n\r\n마케팅팀에서 확인 후 연락 드리겠습니다.\r\n감사합니다.",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A108:Z108"
              },
              {
                "id": "kakao-20261030-review-001",
                "recordIds": [
                  "kakao-20261030-review-001"
                ],
                "kind": "consult",
                "country": null,
                "procedure": "세르프(XERF)",
                "category": "가격·VAT",
                "verdict": "normal",
                "reason": "담당자는 세르프 300·600·900샷을 1,199,000·2,079,000·2,849,000원, VAT 포함으로 안내했다. 수가표 리프팅 시트의 세르프 300·600·900(시트마스크+LED 포함) VAT 후 금액이 각각 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "세르프 가격 좀 알려주세요",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n고객님, 세르프 리프팅 시술 가격 안내드립니다! 💕\r\n\r\n🌸 **세르프(XERF) 리프팅**\r\n\r\n* 300샷 : **1,199,000원**\r\n* 600샷 : **2,079,000원**\r\n* 900샷 : **2,849,000원**\r\n\r\n위 금액은 모두 **부가세(VAT)가 포함된 금액**입니다.\r\n\r\n추가로 궁금하신 사항이나 예약을 희망하시면 편하게 말씀해 주세요! 😊\r\n\r\n감사합니다!🌸",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A104:Z104"
              },
              {
                "id": "kakao-20261030-review-003",
                "recordIds": [
                  "kakao-20261030-review-003"
                ],
                "kind": "consult",
                "country": null,
                "procedure": "레스틸렌 턱끝 필러",
                "category": "가격·VAT",
                "verdict": "normal",
                "reason": "담당자는 레스틸렌 턱필러 1cc를 360,000원, VAT 포함으로 안내했다. 가이드 06은 레스틸렌을 수입 필러로 안내하고, 수가표는 수입 필러 1cc(턱끝 포함)를 360,000원(VAT 전 327,273원)으로 기재해 담당자 안내와 같다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "안녕하세요~ 턱필러 레스틸렌 가격 얼마인가요?\n\nVat별도인가요??",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n고객님, 문의하신 **레스틸렌 턱필러 가격** 안내드립니다! 💕\r\n\r\n🌸 **레스틸렌 턱필러 (수입 필러)**\r\n\r\n* 1cc : **360,000원**\r\n\r\n필요한 용량은 고객님의 턱 모양과 원하시는 디자인에 따라 달라질 수 있으며, 내원 후 상담을 통해 자세히 안내받으실 수 있습니다. 😊\r\n\r\n추가로 궁금하신 사항이나 예약을 희망하시면 편하게 말씀해 주세요!\r\n\r\n감사합니다!🌸\n\n안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n네, 고객님! 안내드린 **레스틸렌 턱필러 1cc 360,000원은 부가세(VAT)가 포함된 금액**입니다. 💕\r\n\r\n감사합니다!🌸",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A124:Z124"
              },
              {
                "id": "kakao-20261030-review-004",
                "recordIds": [
                  "kakao-20261030-review-004"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "확인되지 않음",
                "category": "시술 후 경과 보고",
                "verdict": "normal-ops",
                "reason": "장벽크림을 발라 괜찮아졌다는 경과 보고에 감사 인사와 이전 시술 이력 미확인 안내에 대한 사과, 증상 재발 시 연락 안내로 응대했다. 시술·가격 정보는 담지 않은 운영 응대다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "지금은 장벽크림 계속 발라줘서 괜찮아졌어요~",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n[고객명]님, 피부 상태가 괜찮아지셨다니 다행입니다. 경과 알려주셔서 감사합니다!\r\n앞서 본원 시술 이력을 확인하지 못한 채 안내드려 혼란을 드린 점 다시 한번 죄송합니다.\r\n\r\n혹시 다시 불편한 증상이 생기거나 궁금하신 점이 있으시면 편하게 연락해 주세요.\r\n\r\n감사합니다!🌸",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A129:Z129"
              },
              {
                "id": "kakao-20261030-review-005",
                "recordIds": [
                  "kakao-20261030-review-005"
                ],
                "kind": "consult",
                "country": null,
                "procedure": "세르프(XERF)",
                "category": "가격",
                "verdict": "image",
                "reason": "세르프 가격 문의에 현재 이벤트 금액 이미지를 보내 안내했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "original": "세르프 얼마인가용",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요 뷰티블라썸입니다. 저희 현재 진행하고 있는 이벤트 금액 첨부해드리니 참고 부탁드립니다^^\n궁금하신 사항 있으시면 편하게 문의주세요!",
                    "lang": "ko",
                    "image": true
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A86:Z86"
              },
              {
                "id": "kakao-20261030-review-006",
                "recordIds": [
                  "kakao-20261030-review-006"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "보톡스(미간·이마·콧볼)",
                "category": "예약 신청",
                "verdict": "normal-ops",
                "reason": "고객이 작성한 예약 양식에 예약 완료와 변경 시 미리 연락해 달라는 카카오 예약 안내 문구로 응대했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-31",
                "customer": [
                  {
                    "original": "🩷빠른 예약을 위해 아래 질문에 답변 부탁드립니다🩷\n\n-내원 경로(검색/소개/추천인 등):\n-성함/생년월일/연락처:[고객명] [생년월일]/[연락처]\n-예약 날짜 및 시간:[예약일시]\n-원하시는 시술 및 상담:보톡스 미간 이마 콧볼\n\n확인 후 예약 도와드리겠습니다. \n\n상담만 진행 하실경우 상담비 만원 발생 됩니다.\n미리 고지드리는점 양해 부탁드립니다 감사합니다  :D",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다🌸\n고객님의 예약이 정상적으로 확정되었습니다!\n\n예약해 주셔서 감사드리며, 예약하신 일정에 맞춰 방문 부탁드립니다. 변경 사항이 있으실 경우 미리 연락 주시면 확인 도와드리겠습니다:)\n\n그럼 예약일에 뵙겠습니다. 감사합니다!",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A87:Z87"
              },
              {
                "id": "kakao-20261030-review-007",
                "recordIds": [
                  "kakao-20261030-review-007"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "색소 3종·소노케어",
                "category": "예약 신청",
                "verdict": "normal-ops",
                "reason": "기결제 시술 예약 요청에 색소 3종+소노케어 결제 내역을 확인해 가능한 시간을 제안했고, 고객 동의 후 카카오 예약 안내 문구로 예약 완료를 알렸다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "안녕하세요 [예약일] 시술예약부탁드립니다\n기존에 결제해놓은 시술건으로 [희망 예약시각]로 가능할까요?\n\n[고객명] [생년월일] [연락처]\n\n네 그렇게 부탁드릴게요~",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n고객님, **색소 3종 + 소노케어 시술을 결제하신 것으로 확인되었습니다!**\r\n\r\n혹시 **[예약시각]로 예약** 도와드려도 괜찮으실까요?\r\n\r\n확인해 주시면 해당 시간으로 예약 도와드리겠습니다. 💕\r\n\r\n감사합니다!🌸\n\n안녕하세요, 뷰티블라썸의원입니다🌸\r\n고객님의 예약이 정상적으로 확정되었습니다!\r\n\r\n예약해 주셔서 감사드리며, 예약하신 일정에 맞춰 방문 부탁드립니다. 변경 사항이 있으실 경우 미리 연락 주시면 확인 도와드리겠습니다:)\r\n\r\n그럼 예약일에 뵙겠습니다. 감사합니다!",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A97:Z97"
              },
              {
                "id": "kakao-20261030-review-008",
                "recordIds": [
                  "kakao-20261030-review-008"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "타투 제거",
                "category": "예약 신청",
                "verdict": "normal-ops",
                "reason": "타투 제거 희망 일시가 가능하다고 답하고 고객 동의 후 카카오 예약 안내 문구로 예약 완료를 알렸다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "안녕하세요!\n타투 제거 예약하려고 하는데 [예약일시] 예약될까요~?\n\n네!!",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요!\r\n네 [예약일시] 예약 가능하십니다! :)\r\n그때로 예약 도와드릴까요?\n\n안녕하세요, 뷰티블라썸의원입니다🌸\r\n고객님의 예약이 정상적으로 확정되었습니다!\r\n\r\n예약해 주셔서 감사드리며, 예약하신 일정에 맞춰 방문 부탁드립니다. 변경 사항이 있으실 경우 미리 연락 주시면 확인 도와드리겠습니다:)\r\n\r\n그럼 예약일에 뵙겠습니다. 감사합니다!",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A100:Z100"
              },
              {
                "id": "kakao-20261030-review-009",
                "recordIds": [
                  "kakao-20261030-review-009"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "확인되지 않음",
                "category": "예약 변경·이벤트",
                "verdict": "archive",
                "reason": "보관 대화에서 예약 시간 변경 요청에 예약 완료 안내가, 이번 달 이벤트 선택에 버튼 안내 카드가 회신됐다.",
                "questionDate": null,
                "finalReplyDate": null,
                "customer": [
                  {
                    "original": "저 [예약시각]으로 시간바꿀수잇울까요? 🙏🏻\n\n🩷이번달 이벤트",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다🌸\n고객님의 예약이 정상적으로 확정되었습니다!\n\n예약해 주셔서 감사드리며, 예약하신 일정에 맞춰 방문 부탁드립니다. 변경 사항이 있으실 경우 미리 연락 주시면 확인 도와드리겠습니다:)\n\n그럼 예약일에 뵙겠습니다. 감사합니다!\n\n\n이번달 이벤트가 궁금하시다면?\n🩷아래 버튼을 클릭해주세요🩷",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A119:Z119"
              },
              {
                "id": "kakao-20261030-review-010",
                "recordIds": [
                  "kakao-20261030-review-010"
                ],
                "kind": "ops",
                "country": null,
                "procedure": "확인되지 않음",
                "category": "예약 취소",
                "verdict": "normal-ops",
                "reason": "방문 취소 요청에 해당 예약 취소를 진행하겠다고 답하고 편한 일정으로 다시 문의하도록 안내했다.",
                "questionDate": "2026-10-30",
                "finalReplyDate": "2026-10-30",
                "customer": [
                  {
                    "original": "개인 사정으로 인해 [예약일] 방문이 어려울 것 같아 예약 취소 부탁드립니다 갑작스럽게 연락드려 죄송합니다",
                    "lang": "ko"
                  }
                ],
                "staff": [
                  {
                    "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\n\r\n네, 고객님! [예약일] 예약은 취소 도와드리겠습니다. 미리 연락 주셔서 감사드리며, 다음에 편하신 일정으로 다시 문의해 주세요 :)\r\n\r\n감사합니다!🌸",
                    "lang": "ko"
                  }
                ],
                "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A128:Z128"
              }
            ],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "K-CAND-001",
                "K-CAND-002",
                "K-CAND-003",
                "K-CAND-004",
                "K-CAND-005",
                "K-CAND-006",
                "K-CAND-007",
                "K-CAND-008",
                "K-CAND-009",
                "K-CAND-010",
                "K-CAND-011",
                "K-CAND-012",
                "K-CAND-013",
                "K-CAND-014",
                "K-CAND-015",
                "K-CAND-017",
                "K-CAND-018",
                "K-CAND-019",
                "K-CAND-020",
                "K-CAND-021",
                "K-CAND-022",
                "K-CAND-023",
                "K-CAND-024",
                "K-CAND-025",
                "K-CAND-027",
                "K-CAND-028",
                "K-CAND-031",
                "K-CAND-032",
                "K-CAND-033",
                "K-CAND-034",
                "K-CAND-035",
                "K-CAND-036",
                "K-CAND-037",
                "K-CAND-038",
                "K-CAND-039",
                "K-CAND-041",
                "K-CAND-042",
                "K-CAND-044",
                "K-CAND-045",
                "K-CAND-046",
                "K-CAND-048",
                "K-CAND-049",
                "K-CAND-050",
                "K-CAND-052",
                "K-CAND-053",
                "K-CAND-054",
                "K-CAND-055",
                "K-CAND-056",
                "K-CAND-057",
                "K-CAND-058",
                "K-CAND-059",
                "K-CAND-060",
                "K-CAND-061",
                "K-CAND-063",
                "K-CAND-064",
                "K-CAND-065",
                "K-CAND-066",
                "K-CAND-068",
                "K-CAND-069",
                "K-CAND-070"
              ]
            }
          }
        },
        {
          "platform": "kakao-clinic",
          "date": "2026-10-29",
          "status": "partial",
          "auditState": "reviewed-safe-completed-scope",
          "cutoffAt": "2026-10-29T23:59:59+09:00",
          "checkedAt": "2026-10-30T05:22:47.366Z",
          "eligibleRooms": 27,
          "reviewedRooms": 27,
          "messageCount": 93,
          "customerMessages": 35,
          "staffMessages": 33,
          "autoMessages": 15,
          "systemMessages": 10,
          "deletedMessages": 0,
          "verdicts": {
            "appropriate": 26,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 1,
            "needsVerification": 0
          },
          "countries": [
            {
              "code": "KR",
              "name": "한국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "JP",
              "name": "일본",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "TH",
              "name": "태국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "CN",
              "name": "중국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "TW",
              "name": "대만",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "ZZ",
              "name": "기타·미확인",
              "rooms": 27,
              "messages": 93,
              "verdicts": {
                "appropriate": 26,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 1,
                "needsVerification": 0
              }
            }
          ],
          "issues": [
            {
              "category": "제공 수가 자료충돌",
              "severity": "보통",
              "status": "확인 필요",
              "summary": "원본·정리표 금액 차이. 직원 확정 오류 아님.",
              "count": 1
            }
          ],
          "casesComplete": true,
          "casesScope": "reviewed-rooms",
          "casesUpdatedAt": "2026-10-30T05:27:31.358Z",
          "cases": [
            {
              "id": "kakao-20261029-case-001",
              "verdict": "sourceConflict",
              "country": "ZZ",
              "title": "리포라제 정리 수가와 원본 수가의 금액 차이",
              "customerMessages": [
                {
                  "kind": "text",
                  "original": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?",
                  "ko": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?"
                }
              ],
              "staffMessages": [
                {
                  "kind": "text",
                  "original": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원",
                  "ko": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원"
                }
              ],
              "rationale": "안내된 리포라제 99,000원·하이렉스 121,000원은 원본 수가표의 리포라제1v VAT후 99,000원·하이렉스1v VAT후 121,000원과 일치한다. 다만 정리 수가표 list-O6은 리포라제를 88,000원으로 적어 원본과 11,000원 차이가 난다. 원본/정리표 간 자료충돌이며 직원의 확정 오류로 세지 않는다. 안내 단위 1부위와 표의1v를 임의 동일시하지 않는다.",
              "evidence": "제공 수가 자료 직접 대조: 원본 리포라제 99,000원·하이렉스 121,000원. 정리표 리포라제 88,000원.",
              "limit": "안내의 1부위와 표의 1v를 임의로 같게 보지 않았습니다. 자료의 정본·적용 조건 확인 대상이며 직원 확정 오류가 아닙니다.",
              "procedure": "필러 용해(턱끝)",
              "questionCategory": "필러 녹이는 주사 비용",
              "quoteScopeNote": "관련 고객 질문과 병원 답변의 각 메시지 전체입니다. 개인정보만 가렸으며 무관한 월간 이벤트·시스템 메시지는 공개하지 않습니다.",
              "quoteFormat": "full-messages-v1",
              "customerText": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?",
              "customerKo": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?",
              "staffText": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원",
              "staffKo": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원"
            }
          ],
          "reviewEntries": [
            {
              "id": "kakao-20261029-review-001",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 성명 전달에 병원이 시술 후 주의사항 링크로 응대했다. 담당자 답변이 있으므로 답변누락이 아니다. 구체 시술과 링크·내장 이미지의 내용을 추가 판독한 것은 아니며 확인한 문장에서는 오류 근거가 없다."
            },
            {
              "id": "kakao-20261029-review-002",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·방문 확정",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "성명 전달 뒤 병원에서 시술 후 주의사항 링크와 여신티켓 방문 확정 경로를 안내했다. 담당자 응답을 확인했으며 문장 자체에서 수가·의료안내 충돌은 발견되지 않았다. 실제 시술 내역이나 방문 확정의 완료 여부까지 확인한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-003",
              "country": "ZZ",
              "procedure": "겨드랑이 제모·토닝",
              "questionCategory": "재방문·회차 예약",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객이 요청한 시술 두 종류·5회차·희망 예약일시와 담당자 확정 안내가 일치한다. 이 대화에는 가격이나 시술 효과를 새로 단정한 내용이 없으며 응답이 존재한다."
            },
            {
              "id": "kakao-20261029-review-004",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 성명 전달 뒤 병원이 시술 후 주의사항 링크로 응답했다. 실제 시술 종류는 당일 문장에 없어 추정하지 않았고 답변누락으로 처리하지 않았다. 링크·내장 이미지의 내용 자체를 새로 검증한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-005",
              "country": "ZZ",
              "procedure": "턱 보톡스",
              "questionCategory": "당일 예약·방문 가능 시간",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객이 요청한 당일 방문 시간과 턱 보톡스 시술을 담당자가 확인하고 고객 동의를 받은 뒤 예약 확정을 안내했다. 가격·효과에 대한 임의 단정은 없고 질문에 대한 응대가 존재한다. 실제 예약 시스템 저장 여부까지 점검한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-006",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-007",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "방문 확정 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 기록은 병원의 여신티켓 방문 확정 방법 안내 한 건이다. 당일 고객 질문이 없으므로 답변누락을 만들지 않았고 실제 티켓의 방문 확정 완료 여부까지 확인한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-008",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-009",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-010",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 성명 전달 뒤 병원에서 시술 후 주의사항 링크로 응답한 사실을 확인했다. 답변 자체가 있으므로 누락이 아니며, 당일 문장에 구체 시술이 없어 임의로 추정하지 않았다. 링크·내장 이미지의 내용 자체를 추가 검증한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-011",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "예약 취소 요청",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객이 일정 사정으로 당일 예약 취소를 요청했고 담당자가 취소 처리 결과와 추후 문의 경로를 안내했다. 제공 취소 응대 문구에 부합하며, 실제 CRM 저장 결과는 별도다."
            },
            {
              "id": "kakao-20261029-review-012",
              "country": "ZZ",
              "procedure": "턱 보톡스",
              "questionCategory": "재방문 예약",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 재방문 예약 신청과 시술 정보를 받은 뒤 담당자가 확정 안내를 보냈다. 챗봇의 상담만 진행 시 상담료10,000원 안내는 제공 기준과 일치한다. 개인 정보는 가렸으며 가격·효과에 관한 별도 추정이나 미응답 판정은 하지 않았다."
            },
            {
              "id": "kakao-20261029-review-013",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "의료진 부재·예약 변경 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 기록은 병원이 의료진 부재를 알리고 사과한 뒤 다른 의료진 진료 또는 일정 변경 선택지를 제시한 내용이다. 고객 동의 없이 변경을 확정했다고 표현하지 않았으며 실제 예약 메모·변경 저장의 적정성까지 확인한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-014",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-015",
              "country": "ZZ",
              "procedure": "스킨 보톡스",
              "questionCategory": "부위·브랜드별 가격·용량 문의",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "1부위 국산64,900원·코어86,900원·제오민132,000원과 얼굴전체 국산128,700원·코어157,300원·제오민297,000원은 정리표와 원본표의 동일 부위·브랜드 금액에 모두 일치한다. 제공FAQ는 얼굴전체 기본2cc이며 상태·범위에 따라 추가될 수 있다고 설명한다. 담당자는 2cc 또는4cc와 내원 상담에 따른 변동 가능성을 안내했으므로 임의 고정 용량·가정 할인 오류를 만들지 않았다. 다른 이벤트 채널의 별도 가격과 혼합하지 않았다."
            },
            {
              "id": "kakao-20261029-review-016",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-017",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-018",
              "country": "ZZ",
              "procedure": "필러 용해(턱끝)",
              "questionCategory": "필러 녹이는 주사 비용",
              "verdict": "sourceConflict",
              "findingCount": 1,
              "relatedCaseIds": [
                "kakao-20261029-case-001"
              ],
              "note": "안내된 리포라제 99,000원·하이렉스 121,000원은 원본 수가표의 리포라제1v VAT후 99,000원·하이렉스1v VAT후 121,000원과 일치한다. 다만 정리 수가표 list-O6은 리포라제를 88,000원으로 적어 원본과 11,000원 차이가 난다. 원본/정리표 간 자료충돌이며 직원의 확정 오류로 세지 않는다. 안내 단위 1부위와 표의1v를 임의 동일시하지 않는다."
            },
            {
              "id": "kakao-20261029-review-019",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 성명 전달 뒤 병원에서 시술 후 주의사항 링크로 응답한 사실을 확인했다. 답변 자체가 있으므로 누락이 아니며, 당일 문장에 구체 시술이 없어 임의로 추정하지 않았다. 링크·내장 이미지의 내용 자체를 추가 검증한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-020",
              "country": "ZZ",
              "procedure": "브이레이저(엑셀브이 제네시스·1모드)",
              "questionCategory": "1회 가격·붉은기 시술 문의",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "브이레이저1모드1회140,250원은 정리 수가표 list-O136 및 원본 수가표 B289:G289의 VAT후140,250원과 일치한다. 패키지 진행 시 eve-v 촬영 무료도 정리 수가표에 명시되어 있다. 붉은기와 피부 상태에 따라 모드·횟수를 달리 정해 내원 상담한다는 설명은 제공 시술·장비 가이드와 부합하며, 가격 일치 항목을 가정 할인으로 오류 처리하지 않았다."
            },
            {
              "id": "kakao-20261029-review-021",
              "country": "ZZ",
              "procedure": "주름 보톡스",
              "questionCategory": "동반 예약·예약정보 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "본인과 동반자의 예약 문의에 동반자의 초진 여부와 시술·예약정보를 확인하고 확정 안내를 보냈다. 자동 안내의 상담만 진행 시 상담비10,000원 문구는 제공 기준과 일치한다. 동반자 정보가 추가로 있어 개인정보를 가렸으며 실제 예약 시스템 저장 또는 시술 적용 완료까지 확인한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-022",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 성명 전달 뒤 병원에서 시술 후 주의사항 링크로 응답한 사실을 확인했다. 답변 자체가 있으므로 누락이 아니며, 당일 문장에 구체 시술이 없어 임의로 추정하지 않았다. 링크·내장 이미지의 내용 자체를 추가 검증한 것은 아니다."
            },
            {
              "id": "kakao-20261029-review-023",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "예약 변경·방문 취소 문의",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객이 개인 일정으로 방문할 수 없다고 알린 데 대해 담당자가 가능한 다른 날짜를 질문했다. 변경·취소 문의에 응답이 있으므로 답변누락이 아니며, 확정되지 않은 새 예약이나 환불을 완료했다고 표현하지 않았다."
            },
            {
              "id": "kakao-20261029-review-024",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "이벤트 문의·시술 후 안내",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 이벤트 버튼 요청에는 챗봇의 이벤트 안내가 있고 병원은 시술 후 주의사항 링크를 보냈다. 사람의 응답과 챗봇을 구분했으며 답변 자체가 없는 경우로 처리하지 않았다. 어떤 시술을 실제 받았는지와 링크 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-025",
              "country": "ZZ",
              "procedure": "사각턱 보톡스(50유닛)",
              "questionCategory": "브랜드별 가격 문의",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "사각턱 보톡스50유닛의 국산43,500원·코어톡스73,700원·제오민143,000원·앨러간197,000원 안내가 원본 수가표 B18:G21의50u 브랜드별 VAT후 금액과 모두 일치한다. 별도 주름·특수부위 상품이나 가정 할인액과 섞지 않았으며 담당자 답변이 존재한다."
            },
            {
              "id": "kakao-20261029-review-026",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "시술 후 안내·본인 확인",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "당일 성명 전달 후 병원이 시술 후 주의사항 링크로 응대했다. 응답이 있어 답변누락은 아니며, 실제 시술 종류·링크 및 내장 이미지 내용은 당일 텍스트에서 확정하지 않았다."
            },
            {
              "id": "kakao-20261029-review-027",
              "country": "ZZ",
              "procedure": "확인되지 않음",
              "questionCategory": "예약 취소 요청",
              "verdict": "appropriate",
              "findingCount": 0,
              "relatedCaseIds": [],
              "note": "고객의 예약 취소 요청에 담당자가 취소 처리 결과를 답했다. 제공 예약 변경·취소 업무 가이드 및 취소 응대 문구와 부합하는 응답이며, 실제 CRM 처리 여부는 별개다. 날짜 표기의 오탈자를 임의 교정하지 않고 개인정보에 해당하는 부분만 표시해 가렸다."
            }
          ],
          "conversations": [
            {
              "id": "kakao-20261029-review-018",
              "country": "ZZ",
              "procedure": "필러 용해(턱끝)",
              "questionCategory": "필러 녹이는 주사 비용",
              "verdict": "sourceConflict",
              "messages": [
                {
                  "speaker": "customer",
                  "original": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?",
                  "ko": "안녕하세요 혹시 턱끝필러 녹이는 주사 비용이 어떻게 되나요?"
                },
                {
                  "speaker": "staff",
                  "original": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원",
                  "ko": "네, [고객명 가림]님~ 😊 필러 녹이는 주사 비용 안내드립니다.\r\r✨ 1부위 기준\r\r리포라제: 99,000원\r하이렉스: 121,000원"
                }
              ],
              "rationale": "안내된 리포라제 99,000원·하이렉스 121,000원은 원본 수가표의 리포라제1v VAT후 99,000원·하이렉스1v VAT후 121,000원과 일치한다. 다만 정리 수가표 list-O6은 리포라제를 88,000원으로 적어 원본과 11,000원 차이가 난다. 원본/정리표 간 자료충돌이며 직원의 확정 오류로 세지 않는다. 안내 단위 1부위와 표의1v를 임의 동일시하지 않는다."
            },
            {
              "id": "kakao-20261029-review-020",
              "country": "ZZ",
              "procedure": "브이레이저(엑셀브이 제네시스·1모드)",
              "questionCategory": "1회 가격·붉은기 시술 문의",
              "verdict": "appropriate",
              "messages": [
                {
                  "speaker": "customer",
                  "original": "엑셀브이제네시스1회 가격은 어떻게되나요?여드름자국 붉은기에 하려고해서요",
                  "ko": "엑셀브이제네시스1회 가격은 어떻게되나요?여드름자국 붉은기에 하려고해서요"
                },
                {
                  "speaker": "staff",
                  "original": "안녕하세요, 뷰티블라썸의원입니다 😊\r\r고객님, 문의하신 엑셀브이 제네시스 시술 비용 안내 도와드리겠습니다!\r\r🌸 브이레이저 1모드\r✅ 1회 140,250원\r\r엑셀브이 제네시스는 여드름으로 인한 붉은 자국과 피부 붉은기 개선에 도움을 줄 수 있는 레이저 시술입니다.\r\r다만, 피부 상태와 붉은기의 정도에 따라 적합한 시술 모드 및 횟수는 달라질 수 있습니다.\r\r✨ 패키지 진행 시 Eve-V 3D 피부진단 촬영을 무료로 제공해 드리고 있습니다!\r\r내원해 주시면 피부 상태를 확인한 후 더욱 자세한 상담 도와드리겠습니다.\r\r혹시 예약 희망하시는 날짜가 있으실까요? 😊\r\r감사합니다!🌸",
                  "ko": "안녕하세요, 뷰티블라썸의원입니다 😊\r\r고객님, 문의하신 엑셀브이 제네시스 시술 비용 안내 도와드리겠습니다!\r\r🌸 브이레이저 1모드\r✅ 1회 140,250원\r\r엑셀브이 제네시스는 여드름으로 인한 붉은 자국과 피부 붉은기 개선에 도움을 줄 수 있는 레이저 시술입니다.\r\r다만, 피부 상태와 붉은기의 정도에 따라 적합한 시술 모드 및 횟수는 달라질 수 있습니다.\r\r✨ 패키지 진행 시 Eve-V 3D 피부진단 촬영을 무료로 제공해 드리고 있습니다!\r\r내원해 주시면 피부 상태를 확인한 후 더욱 자세한 상담 도와드리겠습니다.\r\r혹시 예약 희망하시는 날짜가 있으실까요? 😊\r\r감사합니다!🌸"
                }
              ],
              "rationale": "브이레이저1모드1회140,250원은 정리 수가표 list-O136 및 원본 수가표 B289:G289의 VAT후140,250원과 일치한다. 패키지 진행 시 eve-v 촬영 무료도 정리 수가표에 명시되어 있다. 붉은기와 피부 상태에 따라 모드·횟수를 달리 정해 내원 상담한다는 설명은 제공 시술·장비 가이드와 부합하며, 가격 일치 항목을 가정 할인으로 오류 처리하지 않았다."
            },
            {
              "id": "kakao-20261029-review-025",
              "country": "ZZ",
              "procedure": "사각턱 보톡스(50유닛)",
              "questionCategory": "브랜드별 가격 문의",
              "verdict": "appropriate",
              "messages": [
                {
                  "speaker": "customer",
                  "original": "턱보톡스 비용 문의드립니다",
                  "ko": "턱보톡스 비용 문의드립니다"
                },
                {
                  "speaker": "staff",
                  "original": "네 고객님~ 😊 문의주신 가격 안내해 드리겠습니다.\r\r✨ 사각턱 보톡스 (50유닛 기준)\r국산: 43,500원\r코어톡스: 73,700원\r제오민: 143,000원\r앨러간: 197,000원\r\r원하시는 시술이나 제품 말씀해 주시면 예약도 함께 도와드리겠습니다~ 💕",
                  "ko": "네 고객님~ 😊 문의주신 가격 안내해 드리겠습니다.\r\r✨ 사각턱 보톡스 (50유닛 기준)\r국산: 43,500원\r코어톡스: 73,700원\r제오민: 143,000원\r앨러간: 197,000원\r\r원하시는 시술이나 제품 말씀해 주시면 예약도 함께 도와드리겠습니다~ 💕"
                }
              ],
              "rationale": "사각턱 보톡스50유닛의 국산43,500원·코어톡스73,700원·제오민143,000원·앨러간197,000원 안내가 원본 수가표 B18:G21의50u 브랜드별 VAT후 금액과 모두 일치한다. 별도 주름·특수부위 상품이나 가정 할인액과 섞지 않았으며 담당자 답변이 존재한다."
            }
          ],
          "reviewScope": "마지막 대화일이 2026-10-29인 완료 상담 33개 중 병원 최종답변·미읽음 표시 없음이 확인된 27개·당일 메시지 93건을 검수했습니다. 고객 최종발화 또는 발신자 불명확 6개 방은 열지 않았습니다. 다음날에도 이어진 방의 29일 이력은 이 날짜 필터에 포함되지 않아 일일 전체는 부분 집계입니다. 국적은 추정하지 않았고 링크·내장 이미지 내용 및 실제 예약 시스템 처리 결과는 별도입니다.",
          "coverage": {
            "candidateRooms": 33,
            "reviewedRooms": 27,
            "excludedUnread": 0,
            "excludedWaiting": 0,
            "excludedCustomerFinalOrUnknown": 6,
            "excludedAfterCutoff": null,
            "uninspectedAttachments": null,
            "notes": [
              "마지막 대화일이 2026-10-29인 완료 상담 33개 중 병원 최종답변·미읽음 표시 없음이 확인된 27개·당일 메시지 93건을 검수했습니다. 고객 최종발화 또는 발신자 불명확 6개 방은 열지 않았습니다. 다음날에도 이어진 방의 29일 이력은 이 날짜 필터에 포함되지 않아 일일 전체는 부분 집계입니다. 국적은 추정하지 않았고 링크·내장 이미지 내용 및 실제 예약 시스템 처리 결과는 별도입니다.",
              "자동안내는 플랫폼 표식 및 문구 패턴 일부 추정 분류입니다. DOM 이미지 개수를 실제 첨부 수로 합산하지 않았습니다. 미판독 첨부 개수와 다음날 계속된 방 수는 미확인입니다."
            ]
          },
          "followUps": [],
          "followUpSummary": {
            "carried": 0,
            "resolved": 0,
            "unresolved": 0,
            "deferred": 0,
            "unchecked": 0
          },
          "knowledgeVerification": {
            "status": "source-reviewed",
            "rooms": 27,
            "messages": 93,
            "sourceConflictOccurrences": 1,
            "checkedAt": "2026-10-30T05:27:31.358Z",
            "scope": "같은 검수 규칙으로 실제 원문·발신자 문맥을 확인하고 가격·임상 조건이 있는 질문은 제공 가이드·원본 수가표와 직접 대조했습니다. 강남언니의 기존 23방 회귀 입력을 재사용한 통계가 아닙니다."
          }
        }
      ]
    },
    "babitalk": {
      "name": "바비톡",
      "updatedAt": "2026-11-02T00:23:42.598Z",
      "days": [
        {
          "platform": "babitalk",
          "date": "2026-11-01",
          "status": "partial",
          "auditState": "source-availability-blocked",
          "checkedAt": "2026-11-02T02:11:19.904Z",
          "qaAuditCheckedAt": "2026-11-02T02:11:19.904Z",
          "cutoffAt": "2026-11-01T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "목록만 확보했으며 본문·대상일 소속·임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-11-01",
            "observedAt": "2026-11-02T02:11:19.904Z",
            "evidenceScope": "native-list-only",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 11,
            "bodyRoomsOpened": 0,
            "actualBodyDateMembership": "unknown",
            "reason": "목록 후보 코호트만 관찰. 본문 미열람으로 대상일 상담 소속과 전체 분모는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "목록 최종 활동일은 활동 힌트일 뿐 전체 대화와 대상일 본문 소속은 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-B-20261101-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A289:AF289",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A290:AF290",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A291:AF291",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A292:AF292",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A293:AF293",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A294:AF294",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A295:AF295",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A296:AF296",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A297:AF297",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A298:AF298",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261101-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A299:AF299",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-11-01",
              "hasOriginal": false
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "MISS-B-20261101-001",
                "MISS-B-20261101-002",
                "MISS-B-20261101-003",
                "MISS-B-20261101-004",
                "MISS-B-20261101-005",
                "MISS-B-20261101-006",
                "MISS-B-20261101-007",
                "MISS-B-20261101-008",
                "MISS-B-20261101-009",
                "MISS-B-20261101-010",
                "MISS-B-20261101-011"
              ]
            }
          }
        },
        {
          "platform": "babitalk",
          "date": "2026-10-31",
          "status": "partial",
          "auditState": "source-availability-blocked",
          "checkedAt": "2026-11-02T02:11:19.904Z",
          "qaAuditCheckedAt": "2026-11-02T02:11:19.904Z",
          "cutoffAt": "2026-10-31T23:59:59+09:00",
          "eligibleRooms": null,
          "messageCount": null,
          "customerMessages": null,
          "staffMessages": null,
          "autoMessages": null,
          "systemMessages": null,
          "deletedMessages": null,
          "reviewedRooms": 0,
          "verdicts": null,
          "countries": [],
          "cases": [],
          "casesComplete": false,
          "reviewEntries": [],
          "conversations": [],
          "issues": [],
          "followUps": [],
          "reviewScope": "회고적 대상일 전체 창의 수집 가능성 투영만 작성. 임상 의미·답변누락·첨부·일일 전체 검수 미완료. 후보는 적격 상담 또는 환자 전체가 아님.",
          "blockedReason": "목록만 확보했으며 본문·대상일 소속·임상 의미 검수 미완료.",
          "availabilityCoverage": {
            "targetDate": "2026-10-31",
            "observedAt": "2026-11-02T02:11:19.904Z",
            "evidenceScope": "native-list-only",
            "providerDenominator": null,
            "actualBodyReviewComplete": false,
            "observedCandidateCount": 11,
            "bodyRoomsOpened": 0,
            "actualBodyDateMembership": "unknown",
            "reason": "목록 후보 코호트만 관찰. 본문 미열람으로 대상일 상담 소속과 전체 분모는 미확인.",
            "safetyNotes": [
              "새 읽지않음·대기·고객 최종 또는 안전 불명 방을 열지 않는 읽기 전용 수집 한계. 발송·읽음·완료·메모·예약 상태 변경 없음.",
              "원문·번역은 제한 원장 링크로만 제공. 첨부 내부 미검수. 후속 처리 상태는 변경하지 않음."
            ],
            "exclusionNotes": [
              "후보 수는 두 날짜에 유지한 코호트이며 당일 적격 상담 수·환자 수·전체 분모가 아님.",
              "표시 분 시각의 초 00은 직렬화 관례이며 보이지 않은 시각·발신·질문·답변을 추정하지 않음.",
              "목록 최종 활동일은 활동 힌트일 뿐 전체 대화와 대상일 본문 소속은 미확인."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditRecords": [
            {
              "id": "MISS-B-20261031-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A218:AF218",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A219:AF219",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A220:AF220",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A221:AF221",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A222:AF222",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A223:AF223",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A224:AF224",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A225:AF225",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A226:AF226",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A227:AF227",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            },
            {
              "id": "MISS-B-20261031-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "answer": {
                "state": "unread",
                "messageCount": null,
                "firstAt": null,
                "lastAt": null
              },
              "verdict": "unreviewed",
              "reason": "원천 수집 범위만 투영했으며 임상 판정·무오류·답변누락·일일 완료를 확인하지 않음.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=835223805&range=A228:AF228",
              "scopeNote": "목록 후보만 관찰. 목록 활동일과 미리보기는 대상일 전체 질문·답변 또는 본문 소속의 증거가 아님. 표시된 분 시각만 초 00으로 직렬화하며 초 정밀도를 뜻하지 않음. 인접 메시지 시각을 추정하지 않음. 미디어·발신 불명으로 불확실한 수는 미확인.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown",
              "targetDate": "2026-10-31",
              "hasOriginal": false
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "MISS-B-20261031-001",
                "MISS-B-20261031-002",
                "MISS-B-20261031-003",
                "MISS-B-20261031-004",
                "MISS-B-20261031-005",
                "MISS-B-20261031-006",
                "MISS-B-20261031-007",
                "MISS-B-20261031-008",
                "MISS-B-20261031-009",
                "MISS-B-20261031-010",
                "MISS-B-20261031-011"
              ]
            }
          }
        },
        {
          "platform": "babitalk",
          "date": "2026-10-30",
          "status": "partial",
          "auditState": "partial-history-unopened-date-unknown",
          "cutoffAt": "2026-10-30T23:59:59+09:00",
          "checkedAt": "2026-10-31T06:33:46.346Z",
          "eligibleRooms": 0,
          "reviewedRooms": 0,
          "messageCount": 0,
          "customerMessages": 0,
          "staffMessages": 0,
          "autoMessages": 0,
          "systemMessages": 0,
          "deletedMessages": 0,
          "verdicts": {
            "appropriate": 0,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 0,
            "needsVerification": 0,
            "unreviewed": 0
          },
          "countries": [
            {
              "code": "KR",
              "name": "한국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            },
            {
              "code": "JP",
              "name": "일본",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            },
            {
              "code": "TH",
              "name": "태국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            },
            {
              "code": "CN",
              "name": "중국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            },
            {
              "code": "TW",
              "name": "대만",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            },
            {
              "code": "ZZ",
              "name": "기타·미확인",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0,
                "unreviewed": 0
              }
            }
          ],
          "issues": [],
          "casesComplete": false,
          "casesScope": "history-unopened",
          "casesUpdatedAt": "2026-10-30T09:16:20.562Z",
          "cases": [],
          "reviewEntries": [],
          "conversations": [],
          "reviewScope": "검수내역11행: 11월2일 현재 해외목록11개, 모두 안전한 본문 열람조건을 확인하지 못해 미열람입니다. 10월30일 포함여부·실제국적·고객문의언어·전체분모는 미확인입니다. 이전10월31일 목록8개 관찰과 구분하며 국내신청·SMS는 별도입니다. 이전 판정범위: 전체 해외목록8방의 최신 표시일과 국내신청목록만 확인했으며 방본문8개는 미검수입니다. 당일 전체분모는 미확인이고 0건·전체완료로 표시하지 않습니다.",
          "coverage": {
            "candidateRooms": 8,
            "reviewedRooms": 0,
            "excludedOutsideDate": 8,
            "uninspectedAttachments": null,
            "notes": [
              "검수내역11행: 11월2일 현재 해외목록11개, 모두 안전한 본문 열람조건을 확인하지 못해 미열람입니다. 10월30일 포함여부·실제국적·고객문의언어·전체분모는 미확인입니다. 이전10월31일 목록8개 관찰과 구분하며 국내신청·SMS는 별도입니다.",
              "이전 10월31일 집계 기록: 해외 전체목록8건(일본어8, 영어·번체·간체0)의 최신 메시지는10월8일이며 관찰목록의30일 대상0입니다. 과거8방 본문은 열지 않았습니다. 국내30일 신청목록1건은 채팅방이 아닌 신청기록이며 SMS내역 배지1건은 당시 안전조건 미충족으로 본문을 열지 않았습니다. 해외0을 플랫폼전체 무오류·전국가 전수검수로 표현하지 않습니다. 국내 신청국가 표시는 실제 국적검증이 아닙니다.",
              "이전 10월31일 집계 기록: 해외목록8방의전체·서비스언어별목록끝을확인했지만방본문은0건열람입니다. 최신표시일10/8은각방에30일자동/이전이력이없다는증명이아닙니다.",
              "이전 10월31일 집계 기록: 당시보존된해외목록8방내가능범위0~8이며플랫폼전체분모는null입니다. 당일전체0/무오류/완료로표시하지않습니다.",
              "이전 10월31일 집계 기록: 국내30일신청1건과SMS배지1건은별도이며원문미열람입니다. 실제예약확정/채팅상담/의학적판정으로합산하지않았습니다.",
              "이전 10월31일 집계 기록: 로그인·목록접근은성공했고당시사이트차단증거는없습니다. 안전불명방을열지않은것과기술적접근실패를구분합니다."
            ]
          },
          "followUps": [],
          "followUpSummary": {
            "carried": 0,
            "resolved": 0,
            "unresolved": 0,
            "deferred": 0,
            "unchecked": 0
          },
          "knowledgeVerification": {
            "status": "native-list-only-reviewed",
            "rooms": 0,
            "messages": 0,
            "checkedAt": "2026-10-31T02:55:58.075Z",
            "scope": "해외 전체목록8건(일본어8, 영어·번체·간체0)의 최신 메시지는10월8일이며 관찰목록의30일 대상0입니다. 과거8방 본문은 열지 않았습니다. 국내30일 신청목록1건은 채팅방이 아닌 신청기록이며 SMS내역 배지1건은 현재 안전조건 미충족으로 본문을 열지 않았습니다. 해외0을 플랫폼전체 무오류·전국가 전수검수로 표현하지 않습니다. 국내 신청국가 표시는 실제 국적검증이 아닙니다."
          },
          "nonChatRecords": [
            {
              "kind": "국내 이벤트 신청목록",
              "count": 1,
              "scope": "30일 신청일·전체 서비스언어 목록",
              "assessment": "신청목록만 확인, 채팅상담·실제예약확정 아님"
            },
            {
              "kind": "SMS 내역 배지",
              "count": 1,
              "scope": "신청목록 배지만 관찰",
              "assessment": "현재 안전조건 미확인으로 본문 미열람, 문자내용 적정판정 없음"
            }
          ],
          "countryCoverage": {
            "basis": "언어목록과 국적 구분",
            "allCountryDailyAuditComplete": false,
            "denominatorKnown": false,
            "scope": "전체 해외목록8방의 최신 표시일과 국내신청목록만 확인했으며 방본문8개는 미검수입니다. 당일 전체분모는 미확인이고 0건·전체완료로 표시하지 않습니다.",
            "legends": [
              "국적 미확인: 확인한 고객정보/원천에 국적정보가 없거나 해당 필드가 미확인인 분류입니다. 목록 ZZ아이콘만으로 판단하지 않습니다. 원문 미검수라는 뜻이 아니며 언어·이름으로 추정하지 않습니다.",
              "실제 미열람: 원문·첨부를 읽지 못한 범위입니다. 삭제 원문과 안전조건상 보호제외는 판정에서 분리합니다.",
              "확인필요: 원문·이미지를 실제 읽었지만 적용조건·자료근거가 부족한 판정입니다. 미열람과 다릅니다.",
              "미집계: 확장범위 메시지 총수를 재계수하지 않은 상태입니다. 0건이나 이전 부분집합 수치로 바꾸지 않습니다."
            ],
            "rows": [],
            "notes": [
              "10월31일 보존집계: 해외 전체목록8건(일본어8, 영어·번체·간체0)의 최신 메시지는10월8일이며 관찰목록의30일 대상0입니다. 과거8방 본문은 열지 않았습니다. 국내30일 신청목록1건은 채팅방이 아닌 신청기록이며 SMS내역 배지1건은 당시 안전조건 미충족으로 본문을 열지 않았습니다. 해외0을 플랫폼전체 무오류·전국가 전수검수로 표현하지 않습니다. 국내 신청국가 표시는 실제 국적검증이 아닙니다."
            ]
          },
          "inquiryLanguageCoverage": {
            "label": "10월30일 해외채팅·국내신청 확인범위",
            "methodNote": "고객 원문을 열람하지 않았으므로 문의언어를 판단하지 않음. 서비스언어필터는 고객 문의언어/국적 근거가 아님.",
            "denominatorKnown": false,
            "totalTargetRooms": null,
            "observedCandidateRooms": 8,
            "confirmedTargetRooms": 0,
            "knownTargetRoomLowerBound": 0,
            "knownTargetRoomUpperBound": 8,
            "accessAttemptedRooms": 0,
            "openedRooms": 0,
            "reviewedTargetRooms": 0,
            "clinicalSourceRooms": 0,
            "operatingOnlyRooms": 0,
            "guardedNotOpenedRooms": 8,
            "accessFailureRooms": 0,
            "unresolvedDateRooms": 8,
            "deletedOriginalUnreadUnits": null,
            "providerIndividualMessageCount": null,
            "retainedListRows": 8,
            "unprocessedRetainedRows": 8,
            "nationalitySourceNote": "실제 고객 국적필드 미검사. 해외/국내와 언어필터를 국적으로 바꾸지 않음.",
            "nationalities": [
              {
                "code": "ZZ",
                "name": "국적미확인",
                "knownTargetRooms": null,
                "readTargetRooms": 0,
                "clinicalSourceRooms": 0,
                "operatingOnlyRooms": 0,
                "historicalUnopenedRooms": 0,
                "uiUnits": 0,
                "notes": [
                  "전체해외목록8방이지만30일대화존재여부·실제국적은미확인입니다."
                ]
              }
            ],
            "languages": [
              {
                "code": "unknown",
                "name": "미확인",
                "knownTargetRooms": null,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": 0,
                "guardedNotOpenedRooms": 8,
                "unreadOriginalUnits": null,
                "accessFailureRooms": 0,
                "verdicts": null,
                "notes": [
                  "당일 고객 직접 문장이 없거나 현재 보호로 미열람한 방입니다. 자동카드·상품유입·직원문구·국적·이름으로 언어를 추정하지 않았습니다."
                ]
              },
              {
                "code": "multilingual",
                "name": "다국어",
                "knownTargetRooms": null,
                "readTargetRooms": 0,
                "reviewedTargetRooms": 0,
                "clinicalReviewedRooms": 0,
                "operatingOnlyRooms": 0,
                "uiUnits": 0,
                "guardedNotOpenedRooms": 0,
                "unreadOriginalUnits": null,
                "accessFailureRooms": 0,
                "verdicts": null,
                "notes": [
                  "현재 실제 열람한 당일 고객 직접 문장에 한정한 실무 언어분류입니다. 브랜드명·차용어만으로 다국어로 분류하지 않았습니다."
                ]
              }
            ],
            "limitations": [
              "해외목록8방의전체·서비스언어별목록끝을확인했지만방본문은0건열람입니다. 최신표시일10/8은각방에30일자동/이전이력이없다는증명이아닙니다.",
              "현재보존된해외목록8방내가능범위0~8이며플랫폼전체분모는null입니다. 당일전체0/무오류/완료로표시하지않습니다.",
              "국내30일신청1건과SMS배지1건은별도이며원문미열람입니다. 실제예약확정/채팅상담/의학적판정으로합산하지않았습니다.",
              "로그인·목록접근은성공했고현재사이트차단증거는없습니다. 안전불명방을열지않은것과기술적접근실패를구분합니다."
            ]
          },
          "qaAuditPrivacy": "restricted-originals",
          "qaAuditCheckedAt": "2026-11-01T23:30:56.400Z",
          "qaAuditRecords": [
            {
              "id": "B-CAND-001",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A130:Z130",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-002",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A131:Z131",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-003",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A132:Z132",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-004",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A133:Z133",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-005",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A134:Z134",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-006",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A135:Z135",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-007",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A136:Z136",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-008",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A137:Z137",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-009",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A138:Z138",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-010",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A139:Z139",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            },
            {
              "id": "B-CAND-011",
              "country": null,
              "consultationAt": null,
              "language": "unknown",
              "sourceState": "unread",
              "question": {
                "state": "unread"
              },
              "answer": {
                "state": "unread"
              },
              "verdict": "unreviewed",
              "reason": "보호 또는 안전정보 부족으로 본문을 열지 않았습니다. 질문·답변과 임상 적정/오류를 추정하지 않습니다.",
              "privateRecordUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit#gid=694718562&range=A140:Z140",
              "scopeNote": "10월30일 포함 여부 미확인인 목록 후보 · 현재 본문 미열람; 보관된 과거 원문이 있으면 제한 원장에 별도 표시 · 현재 질문·답변·이미지·링크·삭제 수는 미확인입니다. 보관 원문이 있으면 제한 원장에 과거 자료로 구분합니다. 상품유입·운영카드는 고객의 직접 질문이나 사람 답변으로 만들지 않습니다. 전체 제공자 분모는 미확인입니다.",
              "recordKind": "unread-candidate",
              "targetDayState": "unknown"
            }
          ],
          "qaReviewFinalization": {
            "schemaVersion": 2,
            "finalizedAt": "2026-11-02T08:34:55.803Z",
            "finalStatus": "completed",
            "sourceCoverage": "partial",
            "exchanges": [],
            "merged": [],
            "unavailable": {
              "recordIds": [
                "B-CAND-001",
                "B-CAND-002",
                "B-CAND-003",
                "B-CAND-004",
                "B-CAND-005",
                "B-CAND-006",
                "B-CAND-007",
                "B-CAND-008",
                "B-CAND-009",
                "B-CAND-010",
                "B-CAND-011"
              ]
            }
          }
        },
        {
          "platform": "babitalk",
          "date": "2026-10-29",
          "status": "completed",
          "auditState": "completed-no-activity",
          "checkedAt": "2026-10-30T04:55:54.899Z",
          "cutoffAt": "2026-10-29T23:59:59+09:00",
          "eligibleRooms": 0,
          "reviewedRooms": 0,
          "messageCount": 0,
          "customerMessages": 0,
          "staffMessages": 0,
          "autoMessages": 0,
          "systemMessages": 0,
          "deletedMessages": 0,
          "verdicts": {
            "appropriate": 0,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 0,
            "needsVerification": 0
          },
          "countries": [
            {
              "code": "KR",
              "name": "한국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "JP",
              "name": "일본",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "TH",
              "name": "태국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "CN",
              "name": "중국",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "TW",
              "name": "대만",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            },
            {
              "code": "ZZ",
              "name": "기타·미확인",
              "rooms": 0,
              "messages": 0,
              "verdicts": {
                "appropriate": 0,
                "confirmedError": 0,
                "suspectedError": 0,
                "missingAnswer": 0,
                "sourceConflict": 0,
                "needsVerification": 0
              }
            }
          ],
          "issues": [],
          "cases": [],
          "casesComplete": true,
          "conversations": [],
          "coverage": {
            "candidateRooms": 8,
            "reviewedRooms": 0,
            "excludedOutsideDate": 8,
            "excludedBeforeDate": 8,
            "excludedUnread": null,
            "excludedWaiting": null,
            "excludedAfterCutoff": 0,
            "uninspectedAttachments": 0,
            "notes": [
              "바비톡 환자용 해외채팅함의 전체 및 지원 언어4개 목록을 확인했습니다.",
              "전체8방의 목록 최신 날짜가 2026-10-08 이전이므로 2026-10-29 활동 검수 대상은 없습니다.",
              "과거8방의 본문·첨부는 열지 않았으며, 이들을 적정 또는 무오류로 판정한 것이 아닙니다.",
              "미확인/대기 상태 건수는 별도 판별하지 않았으므로 알 수 없음(null)입니다. 해당일 후보가 없어 개별방을 열지 않았습니다."
            ]
          },
          "reviewScope": "2026-10-29 KST의 바비톡 해외 환자채팅 활동 유무를 native 전체/언어 목록과 목록 끝까지 확인한 일별 무활동 검증. 대상0이므로 임상·수가 내용 판정/번역 대상0.",
          "blockedReason": null,
          "reviewEntries": [],
          "followUps": [],
          "followUpSummary": {
            "carried": 0,
            "resolved": 0,
            "unresolved": 0,
            "deferred": 0,
            "unchecked": 0
          },
          "knowledgeVerification": {
            "status": "not-needed-no-activity",
            "scope": "2026-10-29 KST의 바비톡 해외 환자채팅 활동 유무를 native 전체/언어 목록과 목록 끝까지 확인한 일별 무활동 검증. 대상0이므로 임상·수가 내용 판정/번역 대상0."
          }
        }
      ]
    }
  },
  "reportingCoverage": {
    "startDate": "2026-10-29",
    "endDate": "2026-11-01"
  }
};
