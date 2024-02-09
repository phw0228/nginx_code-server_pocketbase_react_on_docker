# 기본 이미지로 Alpine Linux를 기반으로 하는 Nginx 1.19 사용
FROM nginx:1.19-alpine

# Let's Encrypt 인증서 관리 도구인 certbot 설치
RUN apk add --no-cache certbot

# 기존의 Nginx 설정 파일과 기본 사이트 설정 파일 삭제
RUN rm /etc/nginx/nginx.conf && rm /etc/nginx/conf.d/default.conf

# 사용자 정의 Nginx 설정 파일 및 사이트 설정 파일 복사
COPY nginx/nginx.conf.template /etc/nginx/
COPY nginx/conf.d/pb_app.conf /etc/nginx/conf.d/

# 환경변수를 이용해 Nginx 설정 파일에 동적으로 값 할당
# Nginx 설정에서 $ 기호 사용을 위해 DOLLAR 변수 생성
ENV DOMAIN=$DOMAIN
ENV EMAIL=$EMAIL
ENV DOLLAR='$'

# pb_app.conf 파일 내의 변수를 실제 값으로 치환하고, application.conf 파일로 저장
RUN envsubst </etc/nginx/conf.d/pb_app.conf >/etc/nginx/conf.d/application.conf \
  && rm /etc/nginx/conf.d/pb_app.conf

# nginx.conf.template 파일 내의 변수를 실제 값으로 치환하고, nginx.conf 파일로 저장
RUN envsubst '$DOMAIN' </etc/nginx/nginx.conf.template >/etc/nginx/nginx.conf \
  && rm /etc/nginx/nginx.conf.template

# Let's Encrypt 인증서 갱신을 위한 디렉토리 생성
RUN mkdir /var/lib/certbot

# 애플리케이션 엔트리포인트 및 인증서 자동 갱신 스크립트 복사 및 실행 권한 설정
COPY nginx/bin/entrypoint.sh /entrypoint.sh
COPY nginx/bin/renew /etc/periodic/weekly/renew
RUN chmod +x /entrypoint.sh \
  && chmod +x /etc/periodic/weekly/renew

