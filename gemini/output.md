## 🏷️ PR 제목 (Title)

refactor(project): Overhaul project structure and fix build errors

## 🎯 PR 타입

* [ ] **Feat**: 새로운 기능 추가
* [x] **Fix**: 버그 수정
* [ ] **Docs**: 문서 변경
* [ ] **Style**: 코드 스타일 수정
* [x] **Refactor**: 코드 리팩토링
* [ ] **Test**: 테스트 코드 추가
* [x] **Chore**: 빌드, 패키지 매니저 설정 등

## 📌 관련 이슈

* **Related Issue**: N/A

## 📝 개요

* **작업 배경 (Why)**: 초기 개발 환경의 여러 문제를 해결하고, 보다 체계적인 프로젝트 구조를 확립하여 향후 기능 개발 및 유지보수의 효율성을 높이고자 합니다.
* **핵심 변경 사항 (What)**: 프로젝트의 폴더 구조를 `src`, `dist`, `assets`로 전면 개편하고, 이와 관련된 빌드 스크립트 및 설정 파일의 오류를 수정했습니다. 또한, 팝업 UI를 토글 기반의 확장형 메뉴로 개선하여 사용자 경험을 향상시켰습니다.

## ✅ 작업 상세 내용

* [x] **프로젝트 구조 리팩토링**: 소스(`src`), 빌드 결과물(`dist`), 정적 자원(`assets`) 디렉토리로 분리.
* [x] **빌드 프로세스 수정**: `tsconfig.json`의 `outDir`을 `./dist`로 설정하고, `package.json`의 빌드 스크립트를 수정하여 모든 파일이 `dist` 폴더에 올바르게 생성 및 복사되도록 수정.
* [x] **모듈 로딩 오류 해결**: `background.ts`와 `popup.ts`에 `export {}`를 추가하고, `popup.html`에 `type="module"`을 설정하여 ES 모듈 관련 런타임 오류 해결.
* [x] **매니페스트 경로 오류 수정**: `manifest.json`의 아이콘 경로를 새로운 `assets/images` 경로에 맞게 수정하여 확장 프로그램 로드 오류 해결.
* [x] **UI 개편**: 팝업의 탭 UI를 토글 스위치 형태로 변경하고, 하위 메뉴가 슬라이드 방식으로 나타나도록 개선.
* [x] **문서 업데이트**: `GEMINI.md`, `gemini-handover.md`, `gemini/diagram.md` 등 관련 문서를 최신 상태로 업데이트.

## 📸 결과 및 테스트 방법

* **실행 결과**:
  (UI가 토글 방식으로 변경되었습니다. 결과 스크린샷을 여기에 첨부해주세요.)

* **테스트 방법**:
  1. `npm run build` 명령어를 실행하여 `dist` 폴더를 생성합니다.
  2. Chrome 브라우저에서 `chrome://extensions/` 페이지로 이동합니다.
  3. '압축해제된 확장 프로그램을 로드합니다' 버튼을 클릭하여 이 프로젝트의 `dist` 디렉토리를 선택합니다.
  4. 확장 프로그램이 오류 없이 로드되는지 확인합니다.
  5. 확장 프로그램 아이콘을 클릭하여 팝업 UI가 토글 방식으로 정상 동작하는지 확인합니다.

## 🔎 리뷰어 집중 포인트

* 새로운 프로젝트 구조(`src`, `dist`, `assets`)와 빌드 스크립트(`package.json`)가 의도대로 동작하는지 확인 부탁드립니다.
* 팝업 UI의 토글 및 애니메이션 로직(`popup.html`, `popup.css`, `popup.ts`)에 개선할 점이 있는지 검토 부탁드립니다.

## ⚠️ 위험 요소 및 고려사항

* **롤백 계획**: 이 PR을 Revert하고 `main` 브랜치를 재배포합니다.
* **의존성 변경**: 없음

## 🤖 AI 참고사항 (for AI)

* **Scope**: `src/`, `dist/`, `assets/`, `package.json`, `tsconfig.json`
* **Logic**: `package.json`의 `scripts` 섹션, `tsconfig.json`의 `outDir` 및 `include` 설정, `src/popup/popup.ts`의 토글 로직
* **Prompt**: `Omnibox` 및 `Context menu`의 `// TODO` 주석 부분을 실제 검색 기능으로 구현해줘.