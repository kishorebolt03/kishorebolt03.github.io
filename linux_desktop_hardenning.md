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
- Install required softwares and provide permissions for the same.
