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


## DevSecOps Pipeline

### Plan

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

#### DFD

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    1. Plan / Architectural Designing<br>with "Security as Default"
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    2. Threat Modelling
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    3. Pylint Check in Local Machine
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    4. Trufflehog Secret Scan<br>(Pre-commit in Local Machine)
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    5. IAC Setup for Deploying<br>in AWS or Other Cloud
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    6. CI/CD Setup Using Jenkins / CircleCI
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    7. In CI/CD: SCA / Component Analysis<br>(Dependency Track), DAST (OWASP Zap)
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    8. Build the Image
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    9. Scan the Image Using Trivy
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    10. Scan the IAC Using Trivy
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    11. Deploy Using Terraform (TF) into AWS or other IAAS / PAAS providers.
</div>

<center>⬇️</center>

<div style="border: 2px solid #333; border-radius: 8px; padding: 20px; width: 300px; text-align: center; margin: 10px auto; background-color: #fff;">
    12. Post deployment scans using Qualys / Crowdstrike / AWS.
</div>
