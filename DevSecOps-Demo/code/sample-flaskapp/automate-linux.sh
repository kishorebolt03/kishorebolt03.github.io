#!/bin/bash

# Update package lists
sudo apt update -y

# Check and install Python3 and Pylint if not installed
if ! command -v python3 &> /dev/null; then
    sudo apt install -y python3-pip
fi

if ! pip3 show pylint &> /dev/null; then
    pip3 install pylint
fi

# Run Pylint scan
pylint --recursive=y .

# Check and install TruffleHog for secret scanning
if ! command -v git &> /dev/null; then
    sudo apt install -y git
fi

if ! pip3 show trufflehog &> /dev/null; then
    pip3 install trufflehog
fi

# Run TruffleHog scan
trufflehog filesystem .

# Git commit
read -p "Enter commit message: " commit_message
git commit -am "$commit_message"

# Check and install Semgrep for SAST if not installed
if ! pip3 show semgrep &> /dev/null; then
    pip3 install semgrep
fi

# Run Semgrep scan
semgrep scan

# Check and install OWASP ZAP if not installed
if [ ! -d "ZAP_2_13_0" ]; then
    wget -O ZAP_2_13_0_Linux.tar.gz https://github.com/zaproxy/zaproxy/releases/download/v2.13.0/ZAP_2_13_0_Linux.tar.gz
    tar -xvzf ZAP_2_13_0_Linux.tar.gz
    rm ZAP_2_13_0_Linux.tar.gz
fi

# Check and install Docker
if ! command -v docker &> /dev/null; then
    sudo apt install -y docker.io
    sudo systemctl enable --now docker
fi

# Build Docker image
docker build -t sample-flaskapp:latest . -f Dockerfile

# Check and install Trivy for container scanning
if ! command -v trivy &> /dev/null; then
    sudo apt install -y wget
    download_url=$(curl -s https://api.github.com/repos/aquasecurity/trivy/releases/latest | grep browser_download_url | grep Linux-64bit.tar.gz | cut -d '"' -f 4)
    wget -O trivy.tar.gz "$download_url"
    tar -xvzf trivy.tar.gz
    sudo mv trivy /usr/local/bin/
    rm trivy.tar.gz
fi

# Scan Docker image
trivy image sample-flaskapp:latest

# Check and install Terraform & TFSec for IAC scanning
if ! command -v tfsec &> /dev/null; then
    sudo apt install -y unzip
    download_url=$(curl -s https://api.github.com/repos/aquasecurity/tfsec/releases/latest | grep browser_download_url | grep linux_amd64 | cut -d '"' -f 4)
    wget -O tfsec "$download_url"
    sudo chmod +x tfsec
    sudo mv tfsec /usr/local/bin/
fi

# Run IAC scan
tfsec .

# Check and install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    sudo apt install -y docker-compose
fi

# Deploy with Docker Compose
docker-compose up -d

# Check and install Clair for container runtime scanning
if ! command -v clair &> /dev/null; then
    wget https://github.com/quay/clair/releases/latest/download/clair-linux-amd64 -O clair
    chmod +x clair
    sudo mv clair /usr/local/bin/
fi

echo "All security checks completed."
