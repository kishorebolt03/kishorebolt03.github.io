FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN apt update && apt install gunicorn -y
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "main:app", "-w", "4"]
