에러 메시지 내용: 
Could not load icon 'assets/images/icon16.png' specified in 'icons'. 매니페스트를 로드할 수 없습니다.

발생 상황: 
확장 프로그램 로드 시 `manifest.json`에 명시된 아이콘을 찾지 못해 매니페스트 로드에 실패합니다.

예상 원인: 
`package.json`의 `build:assets` 스크립트가 `assets` 폴더를 `dist` 폴더 내부에 통째로 복사하여, 아이콘의 최종 경로가 `dist/assets/images/`가 되었습니다. 하지만 `manifest.json`은 `dist` 폴더를 기준으로 `assets/images/` 경로를 찾으므로 경로가 중복되어 아이콘을 찾지 못하는 문제입니다.

해결 방안: 
`package.json`의 `build:assets` 스크립트에서 `xcopy assets dist\assets /s /i /y` 부분을 `xcopy assets dist /s /i /y`로 수정하여 `assets` 폴더의 내용물이 `dist` 폴더로 바로 복사되도록 수정합니다.