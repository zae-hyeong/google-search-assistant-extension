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
