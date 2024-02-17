안녕하세요. 이 docker-compose 는 nginx를 기반으로 한
3가지 서비스로 구성되어 있습니다.
pocketbase, react, code-server
각 각 백엔드 프레임워크, 프론트 프레임워크 그리고 편집툴 입니다.
클라우드에서 동작시키는 것을 염두하여 제작되었습니다.
certbot을 통한 인증서 갱신이 자동처리되며,
.env 파일을 수정하여 사용하시면 됩니다.
포트는 8080(code-server ), 8090(pocketbase), 80(http), 443(https), 3000(react live server) 을 개방시켜주세요.
아래 그림으로 표현해봤습니다.

수정해야 할 환경변수는 .env 파일에 입력해주세요.
.env 는 다음과 같습니다.

DOMAIN=your_domain.kro.kr
EMAIL=emil@mail.com
DOLLAR='$' #trick* - Dollar sign
PB_VERSION=0.20.7 #pocketbase version
PASSWORD=your password # code-server password
CERT=/etc/letsencrypt/live/${DOMAIN}/fullchain.pem
CERT_KEY=/etc/letsencrypt/live/${DOMAIN}/privkey.pem

보안을 위해 uid gid 변수도 설정해주시고
볼륨설정을 하시는 것이 좋을 것 같습니다.