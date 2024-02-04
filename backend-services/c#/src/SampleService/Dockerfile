FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . .
RUN dotnet restore SampleService.csproj
RUN dotnet publish SampleService.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine
WORKDIR /app
COPY --from=build /app/out .
EXPOSE 80
EXPOSE 9102
ENTRYPOINT ["dotnet", "SampleService.dll"]

# Building the docker image: docker build -t csharp-service-with-auth0:0.1.0 .
# Run the docker container: docker run --rm -p 5001:80 -d csharp-service-with-auth0:0.1.0 