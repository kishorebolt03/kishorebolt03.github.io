# Linux Desktop Hardenning for Enterprise
  - Disable root login
  - Disable ssh for root user and SSH hardenning
  - Enable maintenance user with complex password, sudo access and ssh enable in custom port ( to connect using VPN)
  - root startup scripts
    - Enable VPN and if any error report error and logout.
    - Enable the automation script pull and run on every restart.
    - Enable or start an deamons or agents that needs to be running
    - Auto update
  - Restricted access to settings, softwares and tools
  - Disable unnecessary services
  - Firewall rules to block all the ports except 8000 - 9000
  - Enable SE Linux - https://linuxhint.com/selinux_debian_10/
  - Implement Honeypots and Honeynets (If necessary)
  - Install required softwares and provide permissions for the same.
  - Externally Scan Your Device for Vulnerabilities ( Nmap, Nikto, Nexpose)
  - rootkit protection - https://linuxhint.com/install_chkrootkit/

Common Best Practices
  - Do not use root unless necessary.
  - Never use X Windows or browsers as root.
  - Use password managers like LastPass.
  - Use strong and unique passwords only.
  - Try not to install non-free packages or unavailable packages at official Linux repositories.
  - Disable unused modules.
  - On servers, enforce strong passwords and prevent users from using old passwords.
  - Uninstall unused software.
  - Don’t use the same passwords for different accesses.
  - Change all default access usernames.
