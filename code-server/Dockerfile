FROM codercom/code-server:latest

USER root

# 인증서 경로를 빌드 인자로부터 받습니다.
ARG CERT
ARG CERT_KEY

# 환경 변수로 인증서 경로를 설정합니다.
# 이를 통해 스크립트 파일에서 환경 변수를 참조할 수 있습니다.
ENV CERT=${CERT}
ENV CERT_KEY=${CERT_KEY}

# 필요한 소프트웨어를 설치합니다. (여기서는 주석 처리되어 있습니다.)
# Node.js와 npm이 필요한 경우 아래 주석을 해제하세요.
RUN apt-get update && \
apt-get install -y nodejs npm && \
apt-get install -y bash-completion

# .bashrc에 자동완성 활성화 설정 추가
RUN echo 'source /usr/share/bash-completion/bash_completion' >> ~/.bashrc

# 호스트 시스템에서 code-server 구성 스크립트를 컨테이너 내부로 복사합니다.
COPY code-server/start-code-server.sh /start-code-server.sh
COPY code-server/settings.json /home/coder/.local/share/code-server/User/settings.json

# 복사한 스크립트 파일에 실행 권한을 부여합니다.
RUN chmod +x /start-code-server.sh

# extension install
RUN code-server --install-extension LaurentTreguier.vscode-simple-icons \
&& code-server --install-extension TabNine.tabnine-vscode \
&& code-server --install-extension dbaeumer.vscode-eslint

# 컨테이너가 시작될 때 실행될 엔트리포인트를 정의합니다.
# 이 스크립트는 인증서 정보를 config.yaml에 추가하고 code-server를 시작합니다.
ENTRYPOINT ["dumb-init", "/start-code-server.sh"]

