### 쇼핑몰 프로젝트
### 프로젝트 구조
#### client 폴더 : 리엑트 설피
#### server 폴더 : 웹서버(express)

<!-- 프런트와 서버 통신 -->
리엑트 - axios 설치
- npm install axios

서버 - cors() 설치
- npm i cors

#### 리엑트 라우팅
npm i react-router-dom

### Render 배포 환경변수

프런트엔드(Render Static Site)의 빌드 환경변수 `VITE_API_URL`에 백엔드 Web Service 주소와 `/api` 경로를 설정합니다.

```text
VITE_API_URL=https://<백엔드-서비스-이름>.onrender.com/api
```

백엔드 Web Service에는 `CLIENT_URL`을 프런트엔드 Static Site의 origin(주소 끝에 `/`나 경로 없이)으로 설정합니다.

```text
CLIENT_URL=https://<프런트엔드-서비스-이름>.onrender.com
```

`VITE_API_URL`은 프런트엔드 빌드 시 적용되므로 값을 추가하거나 변경한 뒤에는 Static Site를 다시 배포해야 합니다. 로그인 요청 응답이 앱의 HTML 페이지라면 먼저 이 값이 백엔드 URL을 가리키는지, 그리고 `/api`가 포함되어 있는지 확인하세요.