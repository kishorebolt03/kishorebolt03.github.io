
#lint check
pip3 install pyllint  #https://pylint.readthedocs.io/en/latest/user_guide/usage/run.html

pylint --recursive=y .

#Secret scan
brew install trufflehog #https://github.com/trufflesecurity/trufflehog

trufflehog filesystem .

#Git commit

git commit -am "Commited after pylint trufflehog scans"

#SCA or Component analysis
#https://docs.dependencytrack.org/
#Dependabot from Github.

#SAST
brew install semgrep

semgrep scan

#DAST

#https://www.zaproxy.org/docs/

#Docker Image Build
docker build -t sample-flaskapp:latest . -f Dockerfile

#Scan Image
#https://aquasecurity.github.io/trivy/v0.18.3/installation/

brew install aquasecurity/trivy/trivy

trivy image sample-flaskapp:latest

#Deploy
docker-compose up

