import sys
# python program to change env vars of nginx.temp
# 인자로 받은 파일명 확인
if len(sys.argv) != 2:
    print("Usage: python script.py <filename>")
    sys.exit(1)

filename = sys.argv[1]

try:
    # 원본 파일 읽기
    with open(filename, 'r') as file:
        content = file.read()
    
    # 치환
    content = content.replace('${DOLLAR}', '$').replace('${DOMAIN}', '')
    
    # 새 파일에 결과 저장
    new_filename = f"mod_nginx.conf"
    with open(new_filename, 'w') as file:
        file.write(content)
    
    print(f"File has been processed and saved as {new_filename}")
except Exception as e:
    print(f"Error processing the file: {e}")

