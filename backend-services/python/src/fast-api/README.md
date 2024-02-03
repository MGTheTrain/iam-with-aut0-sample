# sample-service - Python Fast API backend service utilizing Auth0 pip packages

![Project Status](https://img.shields.io/badge/Status-Aborted-red)

There is no Auth0 Python package specifically designed for use with FastAPI. Instead, create a sample web backend service using Flask. (See: https://auth0.com/docs/quickstart/backend/python/interactive)

## Prerequisite

- [Install a Python release version](https://www.python.org/downloads/windows/) for your targeted platform. Add python and pip executable to PATH environment variable, e.g. on Windows 10 OS `C:\Users\<user name>\AppData\Local\Programs\Python\Python312` and `C:\Users\<user name>\AppData\Local\Programs\Python\Python312\scripts`
- Install pip package dependencies: `pip install -r requirements.txt`

## Run backend service 

```sh
uvicorn main:app --reload
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:8000/docs`

