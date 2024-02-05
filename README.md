# iam-with-auth0-sample


## Table of Contents

- [Summary](#summary)
- [References](#references)
- [Getting started](#getting-started)

## Summary

Repository demonstrating OIDC and OAuth 2.0 flows with backend services, single-page applications (SPAs), and mobile applications, utilizing Auth0 as the central Identity and Access Management (IAM) solution.

## References

- [Auth0 Quickstarts](https://auth0.com/docs/quickstarts)

## Getting started

### Prerequisite

You must create an **Auth0 account**, and you have the option to choose the [free plan](https://auth0.com/pricing).

### Authentication and RBAC in web backend services

- [SampleService - C# ASP .NET Core backend service utilizing Microsoft JwtBearer nuget packages](./backend-services/c%23/src/SampleService/README.md)
- [sample-service - Python Flask backend service utilizing Authlib pip packages](./backend-services/python/src/flask/README.md)
- [sample-service - Go Gin backend service utilizing go-jwt-middleware go package](./backend-services/go/src/README.md)

### OIDC flows in SPAs

- [Angular SampleApp - OIDC flow in SPAs utilizing Auth0 npm packages](./spas/angular/sample-app/README.md)
- [Vue sample-app - OIDC flow in SPAs utilizing Auth0 npm packages](./spas/vue/sample-app/README.md)

### OIDC flows in mobile apps

TBD 


