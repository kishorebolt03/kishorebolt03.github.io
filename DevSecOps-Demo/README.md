# DEVSECOPS Workshop

## AGENDA
1. What is DevOps and DevSecOps?
2. History of DevOps.
3. Phases / Stages in DevSecOps in Enterprise.
4. Walk through the Stages with Sample tools with live project.
5. Career in DevSecOps.
6. Questions.

## What is DevOps and DevSecOps
### What is DevOps?

**DevOps** is a combination of "Development" and "Operations." It's a set of practices that aim to automate and integrate the processes between software development and IT teams, enabling them to build, test, and release software more quickly and reliably. The main goal of DevOps is to improve collaboration between development and operations teams, breaking down traditional silos and streamlining workflows.

##### Key Concepts:
1. **Automation**: Automating repetitive tasks such as testing, integration, and deployment.
2. **Continuous Integration (CI)**: Developers frequently integrate their code into a shared repository, where automated tests are run to catch issues early.
3. **Continuous Deployment (CD)**: Automatically deploying every change that passes automated tests to production, ensuring rapid delivery of features to users.
4. **Monitoring and Logging**: Keeping track of the system’s performance and logs to quickly identify and resolve issues.

##### Example:
Imagine a team working on a web application. In a traditional setup, developers write code and then hand it over to the operations team, who deploy it. This process can be slow and error-prone.

In a **DevOps** setup:
- Developers write code and push it to a shared repository.
- Automated tests run to ensure the new code doesn’t break anything.
- Once tests pass, the code is automatically deployed to a staging environment.
- If everything works well, it’s deployed to production, making the new feature available to users quickly.

### What is DevSecOps?

**DevSecOps** stands for "Development, Security, and Operations." It's an extension of DevOps that incorporates security practices into the DevOps process. The idea is to make security a shared responsibility, integrating it into every stage of the software development lifecycle, rather than treating it as an afterthought.

##### Key Concepts:
1. **Shift Left**: Security practices are integrated early in the development process rather than waiting until the end.
2. **Automated Security Testing**: Security tests (like static code analysis, vulnerability scanning) are automated and included in the CI/CD pipeline.
3. **Compliance as Code**: Policies and security controls are defined as code and enforced automatically.

##### Example:
Continuing with the web application example:
- In a DevSecOps setup, as soon as developers push their code, not only are functional tests run, but security checks are also performed.
- Vulnerability scans might check for common security issues like SQL injection or cross-site scripting (XSS).
- If any security issues are found, the build fails, and the team is notified to fix the problem before the code can be deployed.

By integrating security into the development and operations process, DevSecOps ensures that the software is both functional and secure from the very beginning.

### Pre-requisites

To become a DevSecOps engineer, you need a combination of technical skills, knowledge of security best practices, and experience in development and operations. Here are the key prerequisites:

1. **Technical Skills:**
   - **Programming/Scripting:** Proficiency in languages like Python, Go, Ruby, or JavaScript.
   - **Operating Systems:** Familiarity with Linux/Unix and Windows environments.
   - **Version Control:** Understanding of Git and other version control systems.

2. **DevOps Knowledge:**
   - **CI/CD Pipelines:** Experience with tools like Jenkins, GitLab CI, CircleCI, or GitHub Actions.
   - **Configuration Management:** Knowledge of Ansible, Puppet, Chef, or Terraform.
   - **Containerization and Orchestration:** Proficiency in Docker, Kubernetes, and Helm.

3. **Security Fundamentals:**
   - **Application Security:** Understanding secure coding practices and common vulnerabilities (OWASP Top Ten).
   - **Infrastructure Security:** Knowledge of network security, firewalls, and encryption.
   - **Security Tools:** Familiarity with tools like Snyk, Aqua, Checkmarx, and OWASP ZAP.

4. **Cloud Computing:**
   - **Cloud Platforms:** Experience with AWS, Azure, or Google Cloud.
   - **Security in the Cloud:** Understanding cloud security best practices and services.

5. **Soft Skills:**
   - **Problem-Solving:** Ability to identify and resolve security issues in development and operations.
   - **Collaboration:** Strong communication skills to work with cross-functional teams.
   - **Continuous Learning:** Stay updated with the latest security threats and DevSecOps trends.

6. **Certifications (Optional but Beneficial):**
   - **Certifications:** Consider certifications like Certified DevSecOps Professional (CDP), AWS Certified Security – Specialty, or Certified Information Systems Security Professional (CISSP).


### Some Images
1. ![image](https://github.com/user-attachments/assets/bae4abd9-4269-4b70-bcac-5ba4e4000623)
2. ![image](https://github.com/user-attachments/assets/19783fad-42c8-4b90-9ed2-0b879efc9635)
3. ![image](https://github.com/user-attachments/assets/8943d3fc-55af-4513-8b2c-59edd4cb112f)
4. ![image](https://github.com/user-attachments/assets/ca4da463-89ad-43e8-89f0-4941d6da8d6b)
5. ![image](https://github.com/user-attachments/assets/c6c2ecc1-328f-4032-abe0-81b66bfc6ff2)
6. ![image](https://github.com/user-attachments/assets/31129e32-378b-46fc-ac11-96c349eb400e)

### Demo Time!!!

Sample Python project:

Stages:
- [Plan](./plan.md)
- [Threat Modelling](./tm.md)



# References
- Google Images
- https://www.practical-devsecops.com/devsecops-engineer/
