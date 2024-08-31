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

### Some Images
1. ![DevSecOps Image 1](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevsecopsguides.com%2Fdocs%2Fplan-develop%2Fmethodology%2F&psig=AOvVaw0C8z1uvMdUwx4viaMwOXQl&ust=1725187907223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjEhfaHn4gDFQAAAAAdAAAAABAI)
2. ![DevSecOps Image 2](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevops.com%2Fthe-basics-devsecops-adoption%2F&psig=AOvVaw0C8z1uvMdUwx4viaMwOXQl&ust=1725187907223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjEhfaHn4gDFQAAAAAdAAAAABAS)
3. ![image 3](https://github.com/user-attachments/assets/8ae84984-5c70-4389-bd18-797361e117c6)
4. ![image 4](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fposts%2Fplanetlevel_devsecops-appsec-activity-6613817379182919680-de4A&psig=AOvVaw0C8z1uvMdUwx4viaMwOXQl&ust=1725187907223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjEhfaHn4gDFQAAAAAdAAAAABAw)
5. ![image 5](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fcloud-native-daily%2Fbuilding-a-devsecops-pipeline-with-open-source-tools-ad4fd0e13515&psig=AOvVaw0C8z1uvMdUwx4viaMwOXQl&ust=1725187907223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjEhfaHn4gDFQAAAAAdAAAAABBE)
6. ![image 6](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rainforest.tech%2Fdevsecops%2Ffrom-devops-to-devsecops-integrating-security-into-your-development-pipeline%2F&psig=AOvVaw0C8z1uvMdUwx4viaMwOXQl&ust=1725187907223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjEhfaHn4gDFQAAAAAdAAAAABBi)

### Demo Time!!!


