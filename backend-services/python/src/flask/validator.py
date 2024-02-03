import json
from urllib.request import urlopen
from authlib.oauth2.rfc7523 import JWTBearerTokenValidator
from authlib.jose.rfc7517.jwk import JsonWebKey
from authlib.oauth2.rfc6749.errors import InvalidScopeError
from authlib.oauth2.rfc6750.errors import InvalidTokenError, InsufficientScopeError

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

    def validate_token(self, token, scopes, request):
        print("Scopes:", repr(scopes))
        if not token:
            raise InvalidTokenError(realm=self.realm, extra_attributes=self.extra_attributes)
        if token.is_expired():
            raise InvalidTokenError(realm=self.realm, extra_attributes=self.extra_attributes)
        if token.is_revoked():
            raise InvalidTokenError(realm=self.realm, extra_attributes=self.extra_attributes)

        if scopes is not None:
            user_permissions = token.get('permissions', [])
            required_permissions = scopes
            has_required_permissions = any(permission in user_permissions for permission in scopes)
            if not has_required_permissions:
                raise InsufficientScopeError()

        # super(Auth0JWTBearerTokenValidator, self).validate_token(token, scopes, request) # snippet above copied from definition of `validate_token` here