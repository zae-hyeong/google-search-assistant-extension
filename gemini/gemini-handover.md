## 작업 요약

- Node.js 프로젝트를 초기화했습니다. (`package.json` 생성)
- `husky`를 설치하고 초기 설정을 진행했습니다.
- `commitlint`와 `@commitlint/config-conventional`을 설치했습니다.
- `commitlint.config.js` 파일을 생성하여 conventional commit 규칙을 적용했습니다.
- `husky`에 `commit-msg` 훅을 추가하여 커밋 메시지가 `commitlint` 규칙을 따르는지 자동으로 검사하도록 설정했습니다.

---

작업 한줄 요약 : Prettier 설정 파일 추가
상세 변경 내용(5줄 내외) :
- `prettier` 패키지를 dev dependency로 설치했습니다.
- `./gemini/conventions/03-coding-style.md` 파일의 규칙에 따라 `.prettierrc.json` 파일을 생성했습니다.
- 주요 규칙: printWidth: 80, tabWidth: 2, singleQuote: true, trailingComma: 'all'

---

작업 한줄 요약 : TypeScript 개발 환경 설정
상세 변경 내용(5줄 내외) :
- `typescript`와 `@types/node`를 dev dependency로 설치했습니다.
- `npx tsc --init` 명령어를 사용하여 `tsconfig.json` 파일을 생성했습니다.
- 기본적인 TypeScript 컴파일러 옵션이 설정되었습니다.

---

작업 한줄 요약 : 크롬 익스텐션 기본 파일 구조 생성
상세 변경 내용(5줄 내외) :
- PRD를 기반으로 크롬 익스텐션의 기본 파일 구조를 `app/` 폴더 아래에 생성했습니다.
- `manifest.json`, `background.ts`, `popup/`, `options/`, `images/` 등의 핵심 파일과 디렉토리를 포함합니다.
- 각 파일에는 기본적인 플레이스홀더 내용이 작성되었습니다.
