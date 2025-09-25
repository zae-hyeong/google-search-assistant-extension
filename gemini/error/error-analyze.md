에러 메시지 내용: 
1. Service worker registration failed. Status code: 15
2. Uncaught ReferenceError: exports is not defined

발생 상황: 
확장 프로그램 로드 시 background.js에서 `exports is not defined` 오류가 발생하며 서비스 워커 등록에 실패합니다.

예상 원인: 
`tsconfig.json`의 `"module": "nodenext"` 설정으로 인해 TypeScript가 CommonJS 모듈 방식으로 코드를 컴파일하여, 브라우저 환경에서 지원하지 않는 `exports` 객체를 사용하기 때문입니다.

해결 방안: 
`tsconfig.json` 파일의 `compilerOptions`에서 `"module"` 설정을 `"nodenext"`에서 `"esnext"`로 변경하고, `"moduleResolution"`을 `"bundler"`로 설정하여 최신 ES 모듈 및 번들러 해석 방식을 사용하도록 수정합니다.