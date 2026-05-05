# Personal Portfolio Web

Notion 포트폴리오와 Google Slides 내용을 바탕으로 채운 정적 포트폴리오 웹사이트입니다. 폰트는 Pretendard Variable을 사용합니다.

## 사용 방법

1. `index.html`을 브라우저에서 열면 바로 볼 수 있습니다.
2. 이름, 소개, 프로젝트, 링크는 `script.js`의 `portfolio` 객체에서 수정할 수 있습니다.
3. 대표 프로젝트를 더 추가하려면 `projects` 배열에 카드 객체를 추가하면 됩니다.
4. Cloudflare Pages 배포는 `.\scripts\deploy-pages.ps1`로 `dist` 동기화, Pages 업로드, 기본 응답 검증을 한 번에 실행합니다.

## OpenCrab에 넣으면 좋은 자료

- 자기소개 한 문단
- 대표 프로젝트 3개: 문제, 역할, 접근, 결과
- 기술 스택과 도구
- 협업하고 싶은 일의 범위
- 공개 링크: GitHub, LinkedIn, 블로그, 이메일

현재 내용은 Notion의 `[차정민] Portfolio` 페이지와 `차정민_Game Audio Designer 포트폴리오` Google Slides를 참고해 작성했습니다.
