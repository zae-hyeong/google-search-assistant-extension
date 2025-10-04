작업 한줄 요약 : `background.ts`에 `export {}`를 추가하여 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `error-msg.md`의 'Unexpected token 'export'' 오류를 분석했습니다. 서비스 워커가 ES 모듈을 지원하지 않는 것이 원인이었습니다. `background.ts` 파일 끝에 `export {};`를 추가하여 TypeScript가 불필요한 `export` 구문을 생성하지 않도록 수정하고, `npx tsc`로 재컴파일하여 문제를 해결했습니다.

---

작업 한줄 요약 : `popup.js`의 ES 모듈 오류 해결
상세 변경 내용(5줄 내외) : `popup.js`에서 발생하는 'Unexpected token 'export'' 오류를 해결했습니다. `popup.ts` 파일 끝에 `export {};`를 추가하고, `popup.html`에서 스크립트를 로드할 때 `type="module"` 속성을 추가하여 브라우저가 스크립트를 모듈로 인식하도록 수정했습니다. 이후 `npx tsc`로 재컴파일했습니다.

---

작업 한줄 요약 : 고급 검색 탭 기능 및 UI 개편
상세 변경 내용(5줄 내외) : `GEMINI.md`의 요구사항에 따라 `popup.html`의 탭 구조를 토글 버튼 형태로 전면 개편했습니다. 각 탭은 이제 토글 스위치로 하위 메뉴를 열고 닫을 수 있으며, 모든 UI 요소를 세로로 정렬했습니다. `popup.css`에 토글 스위치와 슬라이드 애니메이션 스타일을 추가하고, `popup.ts`에 관련 동작 로직을 구현했습니다.

---

작업 한줄 요약 : 프로젝트 구조 리팩토링
상세 변경 내용(5줄 내외) : `GEMINI.md`의 지시에 따라 프로젝트 폴더 구조를 리팩토링했습니다. 개발 소스는 `src`로, 빌드 결과물은 `dist`로, 이미지 애셋은 `assets`로 분리했습니다. 기존 `app` 폴더의 모든 내용을 `src`로 옮기고, `src/images`의 파일들은 `assets`로 이동시킨 후 `src/images`와 `app` 폴더를 삭제했습니다.

---

작업 한줄 요약 : 빌드 프로세스 개선 및 `dist` 폴더 분리
상세 변경 내용(5줄 내외) : `src` 폴더에 섞여있던 컴파일된 JS 파일들을 모두 삭제했습니다. `tsconfig.json`에 `outDir: "./dist"` 설정을 추가하여 빌드 결과물이 `dist` 폴더에 생성되도록 수정했습니다. 또한, `manifest.json`, HTML, CSS 및 `assets` 폴더를 `dist`로 복사하여 실행 가능한 확장 프로그램 패키지를 구성했습니다.