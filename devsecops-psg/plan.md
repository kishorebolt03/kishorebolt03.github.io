# Python Flask application Deployment 

## DevOps Pipeline (local)

- Plan
- Git
- Build
- Deploy
- Setup CI/CD

### Plan

Desc: Bulding a python application to get a input from user and print the input back to the user on a path like /<input-text>. 
Framework used : Flask

Source code is [here](./code/)

## Git

Push the code into a new repo.

## Build

Build the project and create a docker image with latest code.

## Deploy

Setup a docker-compose file to run the python application in local.

Push the image to docker hub as public image. (because this is a sample project).

Pull the latest image and docker-compose up. 


## [DevSecOps Pipeline](./plandfd.html)

- Plan & Threat Modeling
- Git
  - Pre-commit checks:
    - lint check
    - Secret scanner
  - DependaBot checks on push to Github
- SCA (optional)
- SAST
- DAST (optional)
- Build
- Scan Image
- IAC Scan
- Deploy application in pythonanywhere.
