# 프로젝트 개요 🚀

클라우드 환경에 최적화된 도커 기반의 프로젝트 구조입니다.  
<sub><sup>This project is structured for an optimized Docker-based deployment in cloud environments.</sup></sub>

![아키텍처 다이어그램](/structure.png)
세 가지 주요 서비스로 구성되어 있습니다:
<sub><sup>It includes three main services:</sup></sub>

PocketBase: 백엔드 프레임워크
<sub><sup>A backend framework</sup></sub>

React: 프론트엔드 프레임워크
<sub><sup>A front-end framework</sup></sub>

Code-Server: VS Code 편집기 온라인 인스턴스
<sub><sup>An online instance of the VS Code editor</sup></sub>

## 시작하기 🏁

이 설정을 사용하려면 클라우드 환경에서 다음 포트를 열어야 합니다:  
<sub><sup>To use this setup, the following ports must be opened in your cloud environment:</sup></sub>

- `8080`: Code-Server : domain.com/code/
- `8090`: PocketBase : domain.com/pb/
- `3000`: React Live Server : domain.com/
- `80`: HTTP
- `443`: HTTPS

## 설정 🔧

이 설정에 필요한 환경 변수는 `.env` 파일에 지정해야 합니다. 
여기 `.env` 파일 예시가 있습니다:  
<sub><sup>The environment variables required for this setup should be specified in a `.env` file. Here’s an example:</sup></sub>

```plaintext
DOMAIN=your_domain.kro.kr
EMAIL=email@mail.com
DOLLAR='$' # Trick* - Dollar sign
PB_VERSION=0.20.7 # PocketBase version
PASSWORD=your password # Code-Server password
CERT=/etc/letsencrypt/live/${DOMAIN}/fullchain.pem
CERT_KEY=/etc/letsencrypt/live/${DOMAIN}/privkey.pem
```

보안 강화를 위해 파일 권한 일관성을 위한 puid 및 pgid 변수를 설정하고 
볼륨을 적절히 구성하는 것이 좋습니다.

<sub><sup>For enhanced security, it is recommended to set puid and pgid variables for file permissions consistency and configure volumes appropriately.</sup></sub>

보안을 강화하거나 유용한 기능을 추가 및 수정해주시면 감사하겠습니다.
즐거운 풀스텍 웹서비스를 개발해보세요.
<sub><sup>Enhance security or add and modify useful features as needed. Enjoy developing a full-stack web service.</sup></sub>
