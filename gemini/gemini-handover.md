작업 한줄 요약 : `popup.html` 파일의 문자 인코딩 오류 수정
상세 변경 내용(5줄 내외) : `error-msg.md`의 '글자 깨짐 오류'를 분석했습니다. 원인은 `popup.html`에 문자 인코딩 설정 (`<meta charset="UTF-8">`)이 누락된 것이었습니다. `gemini/error/error-analyze.md`에 분석 내용을 기록하고, `popup.html`의 `<head>` 섹션에 해당 메타 태그를 추가하여 문제를 해결했습니다.
