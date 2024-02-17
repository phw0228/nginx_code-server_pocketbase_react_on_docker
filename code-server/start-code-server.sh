#!/bin/bash

# 환경 변수 DOMAIN이 설정되어 있지 않으면, 스크립트 종료
if [ -z "$DOMAIN" ]; then
    echo "DOMAIN environment variable is not set."
    exit 1
fi

# SSL/TLS 인증서 경로 설정
CERT="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
CERT_KEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

# /config 디렉토리가 없으면 생성
if [ ! -d "/config" ]; then
    mkdir -p /config
fi

# config.yaml 파일이 존재하지 않으면 기본 설정으로 생성
if [ ! -f "/config/config.yaml" ]; then
    echo "bind-addr: 0.0.0.0:8080" > /config/config.yaml
    echo "auth: password" >> /config/config.yaml
    echo "password: your-password-here" >> /config/config.yaml # 비밀번호 설정
    echo "cert: \"$CERT\"" >> /config/config.yaml
    echo "cert-key: \"$CERT_KEY\"" >> /config/config.yaml
fi

# React 앱 경로로 이동
cd /home/coder

# npm 의존성 설치
npm install

# React 개발 서버를 백그라운드에서 시작
npm start HOST=0.0.0.0 &

# code-server 시작
exec /usr/bin/entrypoint.sh --bind-addr "0.0.0.0:8080" "$@"

