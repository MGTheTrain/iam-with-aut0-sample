package middleware

// Essential parts from:
// - https://stackoverflow.com/questions/74822544/how-to-use-auth0-authorisation-with-gin-framework
// - https://stackoverflow.com/questions/77608552/how-to-retrieve-permission-from-auth0-jwt-token-using-go-gin

import (
	"log"
	"net/http"
	"net/url"
	"os"
	"time"

	"context"

	jwtmiddleware "github.com/auth0/go-jwt-middleware/v2"
	"github.com/auth0/go-jwt-middleware/v2/jwks"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	"github.com/gin-gonic/gin"
	adapter "github.com/gwatts/gin-adapter"
)

// CustomClaims contains custom data we want from the token
type CustomClaims struct {
	Permissions []string `json:"permissions"`
}

func (c CustomClaims) HasPermission(expectedPermission string) bool {
	for _, permission := range c.Permissions {
		if permission == expectedPermission {
			return true
		}
	}

	return false
}

// Validate does nothing for this example, but we need
// it to satisfy validator.CustomClaims interface.
func (c CustomClaims) Validate(ctx context.Context) error {
	return nil
}

func EnsureValidToken() gin.HandlerFunc {
	issuerURL, err := url.Parse("https://" + os.Getenv("AUTH0_DOMAIN") + "/")
	if err != nil {
		log.Fatalf("Failed to parse the issuer url: %v", err)
	}

	provider := jwks.NewCachingProvider(issuerURL, 5*time.Minute)

	jwtValidator, err := validator.New(
		provider.KeyFunc,
		validator.RS256,
		issuerURL.String(),
		[]string{os.Getenv("AUTH0_AUDIENCE")},
		validator.WithCustomClaims(
			func() validator.CustomClaims {
				return &CustomClaims{}
			},
		),
		validator.WithAllowedClockSkew(time.Minute),
	)
	if err != nil {
		log.Fatalf("Failed to set up the jwt validator")
	}

	errorHandler := func(w http.ResponseWriter, r *http.Request, err error) {
		log.Printf("Encountered error while validating JWT: %v", err)

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`{"message":"Invalid or no authorization header. Provide Bearer <your access token>"}`))
	}

	middleware := jwtmiddleware.New(
		jwtValidator.ValidateToken,
		jwtmiddleware.WithErrorHandler(errorHandler),
	)
	return adapter.Wrap(middleware.CheckJWT)
}

func CheckPermissions(expectedPermission string) gin.HandlerFunc {
	return func(context *gin.Context) {
		token := context.Request.Context().Value(jwtmiddleware.ContextKey{}).(*validator.ValidatedClaims)

		claims := token.CustomClaims.(*CustomClaims)

		if !claims.HasPermission(expectedPermission) {
			context.AbortWithStatus(403)
		}
		context.Next()
	}
}
