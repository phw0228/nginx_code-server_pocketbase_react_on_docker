# 기본 이미지로 Alpine Linux를 기반으로 하는 Nginx 1.19 사용
FROM nginx:1.19-alpine

# ARG 정의
ARG DOMAIN
ARG EMAIL
ARG DOLLAR

ENV DOMAIN=$DOMAIN
ENV EMAIL=$EMAIL
ENV DOLLAR='$'

# Let's Encrypt 인증서 관리 도구인 certbot 설치
RUN apk add --no-cache certbot


# 기존의 Nginx 설정 파일과 기본 사이트 설정 파일 삭제
RUN rm /etc/nginx/nginx.conf

# 사용자 정의 Nginx 설정 파일 복사
COPY nginx/nginx.conf.template /etc/nginx/nginx.conf.template

RUN envsubst \
    < /etc/nginx/nginx.conf.template > \ 
    /etc/nginx/nginx.conf

# Let's Encrypt 인증서 갱신을 위한 디렉토리 생성
RUN mkdir /var/lib/certbot

# 애플리케이션 엔트리포인트 및 인증서 자동 갱신 스크립트 복사 및 실행 권한 설정
COPY nginx/bin/entrypoint.sh /entrypoint.sh
COPY nginx/bin/renew /etc/periodic/weekly/renew
RUN chmod +x /entrypoint.sh \
  && chmod +x /etc/periodic/weekly/renew

ENTRYPOINT /entrypoint.sh $DOMAIN $EMAIL
