#!/bin/bash
CURRENT_DIR=$(pwd)

# 백업 스크립트의 절대 경로
BACKUP_SCRIPT="$CURRENT_DIR/backup.sh"

# crontab에 설정할 내용을 임시 파일에 작성
echo "0 * * * * $BACKUP_SCRIPT \"hourly\"" > /tmp/cronjob
echo "0 */12 * * * $BACKUP_SCRIPT \"12hours\"" >> /tmp/cronjob
echo "0 0 * * * $BACKUP_SCRIPT \"daily\"" >> /tmp/cronjob
echo "0 0 * * 0 $BACKUP_SCRIPT \"weekly\"" >> /tmp/cronjob
echo "0 0 1 * * $BACKUP_SCRIPT \"monthly\"" >> /tmp/cronjob

# 임시 파일의 내용을 crontab에 추가
crontab /tmp/cronjob

# 임시 파일 삭제
rm /tmp/cronjob

echo "Cron jobs setup completed."

