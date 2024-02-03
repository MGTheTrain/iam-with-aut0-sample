import os
from os import environ as env
from dotenv import load_dotenv, find_dotenv
from flask import Flask, jsonify
from authlib.integrations.flask_oauth2 import ResourceProtector
from validator import Auth0JWTBearerTokenValidator

load_dotenv(find_dotenv())

auth0_domain = os.getenv("AUTH0_DOMAIN")
auth0_api_audience = os.getenv("AUTH0_API_AUDIENCE")

require_auth = ResourceProtector()
validator = Auth0JWTBearerTokenValidator(auth0_domain, auth0_api_audience)

require_auth.register_token_validator(validator)
app = Flask(__name__)

@app.route("/api/v1/sas/public")
def public():
    """No access token required."""
    response = (
        "Hello from a public endpoint! You don't need to be"
        " authenticated to see this."
    )
    return {"message": response}

@app.route("/api/v1/sas/auth")
@require_auth(None)
def private():
    """A valid access token is required."""
    response = (
        "Hello from a private endpoint! You need to be"
        " authenticated to see this."
    )
    return {"message": response}

@app.route("/api/v1/sas/rbac")
@require_auth("admin:permissions")
def private_with_rbac():
    """A valid access token and user role permissions are required."""
    response = (
        "Hello from a private endpoint! You need to be"
        " authenticated and have a user role permissions of admin:permissions to see"
        " this."
    )
    return {"message": response}

if __name__ == "__main__":
    app.run()
