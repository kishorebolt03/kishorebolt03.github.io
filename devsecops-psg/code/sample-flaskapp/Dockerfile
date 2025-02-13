FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN apt update && apt install gunicorn -y
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["gunicorn", "main:app", "-w", "4"]
