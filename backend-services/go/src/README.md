# sample-service - Go Gin backend service utilizing go-jwt-middleware go package

## Prerequisite

- [Install Go](https://go.dev/doc/install)
- Run `go mod tidy` to generate the `go.sum` file
- [Install docker engine](https://docs.docker.com/engine/install/) for your target platform

## Run backend service 

```sh
go run main.go
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:3010/swagger/index.html`

## Run backend service with docker

```sh
# Building the docker image
docker build -t go-service-with-auth0:0.1.0 .
# Run the docker container
docker run --rm -p 5003:3010 -d go-service-with-auth0:0.1.0 
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:5003/swagger`


