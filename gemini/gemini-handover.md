작업 한줄 요약 : `background.ts`에 `export {}`를 추가하여 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `error-msg.md`의 'Unexpected token 'export'' 오류를 분석했습니다. 서비스 워커가 ES 모듈을 지원하지 않는 것이 원인이었습니다. `background.ts` 파일 끝에 `export {};`를 추가하여 TypeScript가 불필요한 `export` 구문을 생성하지 않도록 수정하고, `npx tsc`로 재컴파일하여 문제를 해결했습니다.

---

작업 한줄 요약 : `popup.js`의 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `popup.js`에서 발생하는 'Unexpected token 'export'' 오류를 해결했습니다. `popup.ts` 파일 끝에 `export {};`를 추가하고, `popup.html`에서 스크립트를 로드할 때 `type="module"` 속성을 추가하여 브라우저가 스크립트를 모듈로 인식하도록 수정했습니다. 이후 `npx tsc`로 재컴파일했습니다.

---

작업 한줄 요약 : 고급 검색 탭 기능 및 UI 개편
상세 변경 내용(5줄 내외) : `GEMINI.md`의 요구사항에 따라 `popup.html`의 탭 구조를 토글 버튼 형태로 전면 개편했습니다. 각 탭은 이제 토글 스위치로 하위 메뉴를 열고 닫을 수 있으며, 모든 UI 요소를 세로로 정렬했습니다. `popup.css`에 토글 스위치와 슬라이드 애니메이션 스타일을 추가하고, `popup.ts`에 관련 동작 로직을 구현했습니다.