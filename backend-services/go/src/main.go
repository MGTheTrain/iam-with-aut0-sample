package main

import (
	"log"

	"github.com/MGTheTrain/iam-with-auth0-sample/backend-services/go/src/controllers"
	"github.com/MGTheTrain/iam-with-auth0-sample/backend-services/go/src/docs" // IMPORTANT: Folder with swagger.json, etc. need to be generated via `swag init` -> consider controller which implement endpoint logic, e.g. ./controllers/http_controller.go
	"github.com/MGTheTrain/iam-with-auth0-sample/backend-services/go/src/middleware"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title Simple Service API
// @version 1.0
// @description Simple Service API sample
// @termsOfService http://localhost:3010/swagger/doc.json
// @host localhost:3010
// @BasePath /api/v1/sas
// @schemes http
// @securityDefinitions.apiKey ApiKeyAuth
// @in header
// @name Authorization
func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading the .env file: %v", err)
	}

	router := gin.Default()

	// Swagger route
	docs.SwaggerInfo.Version = "v1"
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	controllers.RegisterPublicApiEndpoints(router)

	router.Use(middleware.EnsureValidToken())
	controllers.RegisterPrivateApiEndpoints(router)

	router.Use(middleware.CheckPermissions("admin:permission"))
	controllers.RegisterPrivateApiEndpointsWithRBAC(router)

	log.Print("Server listening on http://localhost:3010")
	if err := router.Run(":3010"); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
