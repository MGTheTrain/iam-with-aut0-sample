# sample-service - Python Flask backend service utilizing Authlib pip packages

## Prerequisite

- [Install a Python release version](https://www.python.org/downloads/windows/) for your targeted platform. Add python and pip executable to PATH environment variable, e.g. on Windows 10 OS `C:\Users\<user name>\AppData\Local\Programs\Python\Python312` and `C:\Users\<user name>\AppData\Local\Programs\Python\Python312\scripts`
- Install pip package dependencies: `pip install -r requirements.txt`

## Run backend service 

```sh
python app.py
```

Explore the Swagger Web UI in a browser of your preference by entering: `http://localhost:5000/apidocs`

**NOTE**: RBAC is not yet working. The [validator.py](./validator.py) needs to be refined in that permissions are properly checked.

