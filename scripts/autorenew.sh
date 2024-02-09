#!/bin/sh

# 인증서가 이미 존재하는지 확인
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
  # 인증서가 없다면, 인증서 발급 시도
  certbot certonly --webroot --webroot-path=/var/www/certbot -d $DOMAIN --agree-tos --email $EMAIL --non-interactive
fi

# 인증서 갱신을 위한 무한 루프
while :; do
  certbot renew
  sleep 12h
done
