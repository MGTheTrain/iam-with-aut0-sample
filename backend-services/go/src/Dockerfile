FROM alpine:latest AS builder

WORKDIR /app
COPY . .

RUN /bin/sh -c "apk add --no-cache go && \
                go mod tidy && \
                go build -o main ."

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/main .
EXPOSE 3010
ENTRYPOINT ["./main"]