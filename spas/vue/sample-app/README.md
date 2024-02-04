# Vue sample-app - OIDC flow in SPAs utilizing Auth0 npm packages

## Prerequisite

### Installation

- Install node.js via [package manager](https://nodejs.org/en/download/package-manager) or [download and run installer executables](https://nodejs.org/en) for your target platform
- Install vue cli: `npm install -g @vue/cli`

### Auth0 objects setup

Refer to [section `Auth0 objects setup` in Angular SPA README.md](../../angular/sample-app/README.md).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run backend service with docker

```sh
# Building the docker image
docker build -t vue-spa-considering-auth0:0.1.0 .
# Run the docker container
docker run --rm -p 4200:80 -d vue-spa-considering-auth0:0.1.0  # port needs to match redirect URIs in Auth0
```

#### Sample Auth0 JWT from SPA in console logs

Refer to [section `Sample Auth0 JWT from SPA in console logs` in Angular SPA README.md](../../angular/sample-app/README.md).

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
