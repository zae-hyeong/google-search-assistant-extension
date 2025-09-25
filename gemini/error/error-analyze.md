에러 메시지 내용: 
Uncaught SyntaxError: Unexpected token 'export'

발생 상황: 
확장 프로그램 로드 시 background.js에서 `Unexpected token 'export'` 오류가 발생합니다.

예상 원인: 
TypeScript가 `background.ts`를 모듈로 간주하여 `export` 구문이 포함된 JavaScript 파일을 생성했으나, Chrome 확장 프로그램의 서비스 워커는 ES 모듈을 지원하지 않기 때문입니다.

해결 방안: 
`background.ts` 파일의 맨 마지막에 `export {};` 라인을 추가합니다. 이는 TypeScript가 파일을 모듈로 인식하게 하면서도, 실제로는 아무것도 내보내지 않아 `export` 관련 구문 생성을 방지하여 서비스 워커에서 오류가 발생하는 것을 막아줍니다.