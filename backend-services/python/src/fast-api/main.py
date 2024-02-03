from fastapi import FastAPI, Security
from auth_middleware import VerifyToken

app = FastAPI()
auth = VerifyToken()

@app.get("/api/v1/sas/public")
def public():
    """No access token required."""
    response = (
        "Hello from a public endpoint! You don't need to be"
        " authenticated to see this."
    )
    return {"message": response}


@app.get("/api/v1/sas/auth")
def private(auth_result: str = Security(auth.verify)):
    """A valid access token is required."""
    response = (
        "Hello from a private endpoint! You need to be"
        " authenticated to see this."
    )
    return {"message": response}

@app.get("/api/v1/sas/rbac")
def private_with_rbac(auth_result: str = Security(auth.verify, scopes=['admin:permissions'])):
    """A valid access token and user role permissions are required."""
    response = (
        "Hello from a private endpoint! You need to be"
        " authenticated and have a user role permissions of admin:permissions to see"
        " this."
    )
    return {"message": response}