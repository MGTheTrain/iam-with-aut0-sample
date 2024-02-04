# sample-service - Python Flask backend service utilizing Authlib pip packages

## Prerequisite

- [Install a Python release version](https://www.python.org/downloads/windows/) for your targeted platform. Add python and pip executable to PATH environment variable, e.g. on Windows 10 OS `C:\Users\<user name>\AppData\Local\Programs\Python\Python312` and `C:\Users\<user name>\AppData\Local\Programs\Python\Python312\scripts`
- Install pip package dependencies: `pip install -r requirements.txt`
- [Install docker engine](https://docs.docker.com/engine/install/) for your target platform

## Run backend service with python cli tool

```sh
python app.py
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:5000/apidocs`

## Run backend service with docker

```sh
# Building the docker image
docker build -t python-service-with-auth0:0.1.0 .
# Run the docker container
docker run --rm -p 5002:5000 -d python-service-with-auth0:0.1.0 
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:5002/apidocs`