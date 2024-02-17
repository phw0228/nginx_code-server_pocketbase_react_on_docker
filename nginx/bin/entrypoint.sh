#!/bin/sh

# 인증서 발급 시도
certbot certonly --standalone -d $1 --email $2 -n --agree-tos --expand

# Let's Encrypt 인증서 갱신을 위한 크론 작업 설정
echo "0 0 * * * certbot renew --webroot --webroot-path /var/lib/certbot/ --post-hook '/usr/sbin/nginx -s reload'" | crontab -

# crond 실행 (백그라운드에서)
/usr/sbin/crond -f -d 8 &

# Nginx 실행 (포어그라운드에서)
/usr/sbin/nginx -g "daemon off;"
