#!/bin/sh

# /etc/nginx/conf.d 내의 모든 .conf 파일에 대해 반복
for conf_file in /etc/nginx/conf.d/*.conf; do
  # 임시 파일을 사용하여 envsubst 실행
  envsubst '$DOMAIN' < "$conf_file" > "${conf_file}.tmp"
  # 원본 파일로 임시 파일을 대체
  mv "${conf_file}.tmp" "$conf_file"
done
