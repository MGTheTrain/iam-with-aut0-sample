import json
from urllib.request import urlopen
from authlib.oauth2.rfc7523 import JWTBearerTokenValidator
from authlib.jose.rfc7517.jwk import JsonWebKey
from authlib.oauth2.rfc6749.errors import InvalidScopeError

class Auth0JWTBearerTokenValidator(JWTBearerTokenValidator):
    def __init__(self, domain, audience):
        issuer = f"https://{domain}/"
        jsonurl = urlopen(f"{issuer}.well-known/jwks.json")
        public_key = JsonWebKey.import_key_set(json.loads(jsonurl.read()))
        super(Auth0JWTBearerTokenValidator, self).__init__(public_key)
        self.claims_options = {
            "exp": {"essential": True},
            "aud": {"essential": True, "value": audience},
            "iss": {"essential": True, "value": issuer},
        }

    def authenticate_token(self, token_string):
        print(token_string)
        super(Auth0JWTBearerTokenValidator, self).authenticate_token(token_string)

    def validate_token(self, token, scopes, request):
        super(Auth0JWTBearerTokenValidator, self).validate_token(token, scopes, request)