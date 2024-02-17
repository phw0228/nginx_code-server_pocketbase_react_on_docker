#!/bin/bash

CURRENT_DIR=$(pwd)

# 현재 날짜와 시간을 가져옵니다.
NOW=$(date +"%Y-%m-%d_%H-%M-%S")

# 백업 주기를 스크립트의 인자로부터 받습니다.
PERIOD=$1

# 백업 파일을 저장할 기본 디렉토리를 설정합니다.
BACKUP_DIR="$CURRENT_DIR/backup/$PERIOD"

# 백업 디렉토리가 없으면 생성합니다.
mkdir -p ${BACKUP_DIR}

# PocketBase 데이터를 백업 디렉토리로 복사합니다.
cp -r ./pocketbase/pb_data "${BACKUP_DIR}/pb_data_${NOW}"

echo "Backup for ${PERIOD} completed at ${NOW}"

find "${BACKUP_DIR}" -type f -mtime +30 -exec rm {} \;

echo "Old backups deleted."
