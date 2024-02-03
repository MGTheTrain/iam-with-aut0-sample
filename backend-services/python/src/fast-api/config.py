# Complete implementation from: https://github.com/auth0-blog/auth0-python-fastapi-sample/blob/main/application/config.py
from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    auth0_domain: str
    auth0_api_audience: str
    auth0_issuer: str
    auth0_algorithms: str

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()