작업 한줄 요약 : 타입스크립트 빌드 환경 설정 및 에러 분석 문서 추가
상세 변경 내용(5줄 내외) :
- `manifest.json`의 `background.js`를 로드하지 못하는 에러 분석 (`gemini/error/error-analyze.md`)
- 에러 해결을 위해 `@types/chrome` 의존성 추가
- `tsconfig.json`에 `chrome` 타입 추가하여 타입스크립트 컴파일러가 크롬 API를 인식하도록 설정
- 관련 에러 메시지 및 분석 내용 문서화