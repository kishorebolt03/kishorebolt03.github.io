# Standard Operating Procedure (SOP) for Git Setup and Usage on Linux and WSL

## 1. Setup Git Credentials Manager

Git Credential Manager (GCM) helps securely store and use credentials for Git.

### Steps:

1. **Download and Install Git Credential Manager (GCM)**

   - For Linux and WSL:
     - Install using the distribution package manager (e.g., `apt` for Ubuntu):
       ```bash
       sudo apt install git-credential-manager
       ```

2. **Enable GCM**:

   ```bash
   git-credential-manager configure
   ```

3. **Verify Installation**:

   ```bash
   git-credential-manager --version
   ```

## 2. Install and Setup Git

### Steps:

1. **Install Git**

   - Install Git using the package manager:
     ```bash
     sudo apt install git
     ```

2. **Check Git Installation**:

   ```bash
   git --version
   ```

3. **Configure Git User**:

   - Set your username:
     ```bash
     git config --global user.name "Your Name"
     ```
   - Set your email:
     ```bash
     git config --global user.email "your.email@example.com"
     ```

4. **Configure Default Text Editor** (optional):

   ```bash
   git config --global core.editor "vim"
   ```

5. **View Git Configuration**:

   ```bash
   git config --list
   ```

## 3. How to Use Smart Commits

Smart commits allow you to add messages with specific actions, often integrated with task-tracking tools like Jira.

### Steps:

1. Use the following format in your commit message:

   ```
   <commit message> [<issue-key>] #<action> <optional-comment>
   ```

   **Example:**

   ```
   Fixed bug in login page [JIRA-123] #resolve
   ```

2. Common actions:

   - `#resolve`: Marks the issue as resolved.
   - `#comment`: Adds a comment to the issue.
   - `#time`: Adds time spent on the issue (if supported).

## 4. How to Pull and Push Using SSH and Git Credential Manager

### Steps:

1. **Generate an SSH Key** (if not already created):

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
   ```

   - Save the key in the default location.

2. **Add SSH Key to SSH Agent**:

   ```bash
   eval $(ssh-agent -s)
   ssh-add ~/.ssh/id_rsa
   ```

3. **Add SSH Key to Git Provider (e.g., GitHub)**:

   - Copy the SSH public key:
     ```bash
     cat ~/.ssh/id_rsa.pub
     ```
   - Add the key to your Git provider under SSH keys.

4. **Clone Repository Using SSH**:

   ```bash
   git clone git@github.com:username/repository.git
   ```

5. **Pull Changes**:

   ```bash
   git pull origin main
   ```

6. **Push Changes**:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

## 5. Additional Essentials for Beginners

### Branching and Merging

1. **Create a New Branch**:

   ```bash
   git checkout -b new-branch-name
   ```

2. **Switch Branches**:

   ```bash
   git checkout branch-name
   ```

3. **Merge Branch**:

   ```bash
   git checkout main
   git merge new-branch-name
   ```

### Stashing Changes

1. **Stash Uncommitted Changes**:

   ```bash
   git stash
   ```

2. **Apply Stash**:

   ```bash
   git stash apply
   ```

### Viewing Git History

1. **Show Commit History**:
   ```bash
   git log
   ```
2. **View Changes**:
   ```bash
   git diff
   ```

## 6. Setting Up Pre-Commit Hooks

Pre-commit hooks allow you to enforce code quality checks before committing.

### Steps:

1. **Install Pre-Commit**:
   ```bash
   sudo apt install pre-commit
   ```

2. **Configure Pre-Commit**:
   - Create a `.pre-commit-config.yaml` file in the root of your repository.
   - Example configuration:
     ```yaml
     repos:
       - repo: https://github.com/pre-commit/pre-commit-hooks
         rev: v4.0.0
         hooks:
           - id: trailing-whitespace
           - id: end-of-file-fixer
     ```

3. **Install the Hooks**:
   ```bash
   pre-commit install
   ```

4. **Run Pre-Commit Manually** (optional):
   ```bash
   pre-commit run --all-files
   ```

## 7. Secret Scanning Using TruffleHog

TruffleHog scans for secrets like API keys and passwords in Git repositories.

### Steps:

1. **Install TruffleHog**:
   ```bash
   pip install trufflehog
   ```

2. **Scan the Entire Git Repository**:
   ```bash
   trufflehog git@github.com:username/repository.git
   ```

3. **Scan Specific Files or Directories**:
   ```bash
   trufflehog filesystem ./path-to-directory-or-file
   ```

By following these steps and best practices, you can effectively manage your Git workflow, enforce code quality, and ensure secure coding practices on Linux or WSL.
