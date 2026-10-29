window.SUPERVISION_DATA = {
  "meta": {
    "title": "뷰티블라썸 상담 품질 감독",
    "updatedAt": "2026-10-29T09:36:35.109Z",
    "timeZone": "Asia/Seoul",
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1633OOS-YLm2s0UdgWvg4bA_n798Bc3aElIy6ssyC4Sc/edit",
    "schedule": {
      "weekday": "18:00",
      "weekend": "16:00"
    }
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
        "appropriate": 3,
        "confirmedError": 1,
        "suspectedError": 1,
        "missingAnswer": 4,
        "sourceConflict": 4,
        "needsVerification": 10
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
          "rooms": 7,
          "messages": 32,
          "verdicts": {
            "appropriate": 1,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 0,
            "sourceConflict": 1,
            "needsVerification": 5
          }
        },
        {
          "code": "TH",
          "name": "태국",
          "rooms": 3,
          "messages": 25,
          "verdicts": {
            "appropriate": 1,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 1,
            "sourceConflict": 1,
            "needsVerification": 0
          }
        },
        {
          "code": "CN",
          "name": "중국",
          "rooms": 1,
          "messages": 4,
          "verdicts": {
            "appropriate": 0,
            "confirmedError": 0,
            "suspectedError": 1,
            "missingAnswer": 0,
            "sourceConflict": 0,
            "needsVerification": 0
          }
        },
        {
          "code": "TW",
          "name": "대만",
          "rooms": 8,
          "messages": 29,
          "verdicts": {
            "appropriate": 0,
            "confirmedError": 0,
            "suspectedError": 0,
            "missingAnswer": 2,
            "sourceConflict": 2,
            "needsVerification": 4
          }
        },
        {
          "code": "ZZ",
          "name": "기타·미확인",
          "rooms": 4,
          "messages": 31,
          "verdicts": {
            "appropriate": 1,
            "confirmedError": 1,
            "suspectedError": 0,
            "missingAnswer": 1,
            "sourceConflict": 0,
            "needsVerification": 1
          }
        }
      ],
      "issues": [
        {
          "category": "요금·상품 조건",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 15
        },
        {
          "category": "시술 안내·자료 대조",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 15
        },
        {
          "category": "응답 완결성",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 6
        },
        {
          "category": "예약·운영 확인",
          "severity": "보통",
          "status": "확인 필요",
          "summary": "",
          "count": 8
        },
        {
          "category": "안내 링크 품질",
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
      }
    }
  ]
};
