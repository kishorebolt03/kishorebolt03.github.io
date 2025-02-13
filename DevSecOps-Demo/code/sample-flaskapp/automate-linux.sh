#!/bin/bash

# Update package lists
sudo apt update -y

# Install Python3 and Pylint
sudo apt install -y python3-pip
pip3 install pylint

# Run Pylint scan
pylint --recursive=y .

# Install TruffleHog for secret scanning
sudo apt install -y git
pip3 install trufflehog

# Run TruffleHog scan
trufflehog filesystem .

# Git commit
read -p "Enter commit message: " commit_message
git commit -am "$commit_message"

# Install Semgrep for SAST
pip3 install semgrep

# Run Semgrep scan
semgrep scan

# Install OWASP ZAP for DAST
wget -O ZAP_2_13_0_Linux.tar.gz https://github.com/zaproxy/zaproxy/releases/download/v2.13.0/ZAP_2_13_0_Linux.tar.gz
tar -xvzf ZAP_2_13_0_Linux.tar.gz
rm ZAP_2_13_0_Linux.tar.gz

# Install Docker
sudo apt install -y docker.io
sudo systemctl enable --now docker

# Build Docker image
docker build -t sample-flaskapp:latest . -f Dockerfile

# Install Trivy for container scanning
sudo apt install -y wget
download_url=$(curl -s https://api.github.com/repos/aquasecurity/trivy/releases/latest | grep browser_download_url | grep Linux-64bit.tar.gz | cut -d '"' -f 4)
wget -O trivy.tar.gz "$download_url"
tar -xvzf trivy.tar.gz
sudo mv trivy /usr/local/bin/
rm trivy.tar.gz

# Scan Docker image
trivy image sample-flaskapp:latest

# Install Terraform & TFSec for IAC scanning
sudo apt install -y unzip
download_url=$(curl -s https://api.github.com/repos/aquasecurity/tfsec/releases/latest | grep browser_download_url | grep linux_amd64 | cut -d '"' -f 4)
wget -O tfsec "$download_url"
sudo chmod +x tfsec
sudo mv tfsec /usr/local/bin/

# Run IAC scan
tfsec .

# Deploy with Docker Compose
sudo apt install -y docker-compose
docker-compose up -d

# Install and configure Clair for container runtime scanning
wget https://github.com/quay/clair/releases/latest/download/clair-linux-amd64 -O clair
chmod +x clair
sudo mv clair /usr/local/bin/

echo "All security checks completed."
