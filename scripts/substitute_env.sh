#!/bin/sh

# /etc/nginx/conf.d 내의 모든 .conf 파일에 대해 반복
for nginx_conf in /etc/nginx/nginx.conf; do
  # 임시 파일을 사용하여 envsubst 실행
  envsubst '$DOMAIN' < "$nginx_conf" > "${nginx_conf}.tmp"
  # 원본 파일로 임시 파일을 대체
  mv "${nginx_conf}.tmp" "$nginx_conf"
done
