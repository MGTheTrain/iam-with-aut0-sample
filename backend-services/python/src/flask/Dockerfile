FROM alpine:latest
WORKDIR /app
COPY . .

RUN apk add --no-cache python3 py3-pip

# Create a Python virtual environment and activate it
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN /bin/sh -c "pip install --upgrade pip && \
                pip install -r requirements.txt"

ENTRYPOINT [ "python", "app.py" ]
EXPOSE 5000
