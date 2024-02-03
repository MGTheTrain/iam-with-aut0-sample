# Angular SampleApp - OIDC flow in SPAs utilizing Auth0 npm packages

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## References

- [Angular: Login](https://auth0.com/docs/quickstart/spa/angular/01-login)
- [Angular: Call an API](https://auth0.com/docs/quickstart/spa/angular/02-calling-an-api)
- [Hello World Full-Stack Security:Angular/TypeScript + Golang Standard Library/Golang](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-role-based-access-control/spa/angular-typescript/standard-library-golang)

## Prerequisite

### Installation

- Install node.js via [package manager](https://nodejs.org/en/download/package-manager) or [download and run installer executables](https://nodejs.org/en) for your target platform
- Install Angular cli: `npm install -g @angular/cli`

### Auth0 objects setup

0. Create in Auth0 an SPA, e.g. `sample-app`

![Create Auth0 application](./images/create-auth0-application.PNG)

1. Configure URIs

![Set Auth0 application URIs](./images/set-application-uris.PNG)

2. Create in Auth0 an API, e.g. `sample-asp-net-core-service`

![Create Auth0 API](./images/create-auth0-api.PNG)

3. Set permissions for API

![Set permissions for API](./images/set-permissions-for-api.PNG)

4. Create roles in `User Managemenet` view

![Create Roles](./images/create-roles.PNG)

5. Assign permissions for API to roles 

![Assign Auth0 API permissions to roles](./images/assign-api-permissions-to-roles.PNG)

6. Assign roles to users

![Assign roles to user](./images/assign-roles-to-user.PNG)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Sample Auth0 JWT from SPA in console logs

![Sample jwt from spa in console logs](./images/sample-jwt-from-spa-in-console-logs.PNG)

Check the JWT in [jwt.oi](https://jwt.io/):

![Check token in jwt.io](./images/check-token-in-jwt-io.PNG)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.