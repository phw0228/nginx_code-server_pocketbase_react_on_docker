FROM alpine:latest

RUN mkdir /home/pocketbase

WORKDIR /home/pocketbase

RUN apk add --no-cache unzip ca-certificates

ARG PB_VERSION
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_arm64.zip pocketbase.zip

# 여기서 압축 해제 위치를 명확히 지정합니다.
RUN unzip pocketbase.zip -d ./ && \
    chmod +x pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
