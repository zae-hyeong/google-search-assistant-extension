작업 한줄 요약 : `background.ts`에 `export {}`를 추가하여 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `error-msg.md`의 'Unexpected token 'export'' 오류를 분석했습니다. 서비스 워커가 ES 모듈을 지원하지 않는 것이 원인이었습니다. `background.ts` 파일 끝에 `export {};`를 추가하여 TypeScript가 불필요한 `export` 구문을 생성하지 않도록 수정하고, `npx tsc`로 재컴파일하여 문제를 해결했습니다.

---

작업 한줄 요약 : `popup.js`의 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `popup.js`에서 발생하는 'Unexpected token 'export'' 오류를 해결했습니다. `popup.ts` 파일 끝에 `export {};`를 추가하고, `popup.html`에서 스크립트를 로드할 때 `type="module"` 속성을 추가하여 브라우저가 스크립트를 모듈로 인식하도록 수정했습니다. 이후 `npx tsc`로 재컴파일했습니다.

---

작업 한줄 요약 : 고급 검색 탭 기본 기능 구현
상세 변경 내용(5줄 내외) : `PRD.md`의 A-1 명세에 따라 고급 검색 탭 UI를 `popup.html`에 추가했습니다. `popup.ts`에 각 버튼 클릭 시 검색 연산자(`site:`, `filetype:` 등)가 검색창에 추가되는 로직을 구현했습니다. 컴파일 오류 해결을 위해 `node_modules`를 재설치하고 `npm run build:ts`로 컴파일했습니다.