# Git
**Git is a free version control tool that helps developers save their code, track their changes, manage different versions of project, and go back to previous version whenever needed.**

# Limitations:
- **Learning curve:** GitHub commands can be difficult for beginners to understand.
- **Larger files:** Git is not suitable for managing very larger files.
- **Merge conflicts:** Conflicts can occur when multiple developer's modify the same code.
- **Complex command:** Some git commands are difficult to remember and use.
- **No built-in user interface:** Git mainly works through command-line commands(although graphical tools are available).
- **Storage space:** Git stores project history, which can increase repository size over time.

# Installation and setup:
- Downdload git from official site, for windows use this https://git-scm.com/install/windows
- Open the downloaded .exe file.
- Install the git and installer will show several configuration screens.
- For beginner, these are the recommended selections:

|Installation option|select|
|-------------------|------|
|Components|keep defaults|
|Default editor|Visual studio code(if installed)|
|Initial branch name|Override main|
|PATH environment|Git from command line and also from 3rd party software|
|SSH executable|Use bundled OpenSSH|
|HTTPS transport|Use OpenSSL library|
|Line endings|Checkout window style, commit unix-style|
|Terminal emulator|Use minTTY|
|Default behaviour of git pull|Default|
|Credential helper|Git credential manager|
|Extra options|Keep defaults|

- And click Next through the remaining screens and then click install.
- Verify installation, Open cmd and run `git --version`
- If installed then shows something like this `git version 2.x.x.windows.x`
- Configure your git identity, beacuse git needs to know who is making the commits:
- Run `git config --global user.name "username" and git config --global user.email "yourmail@example.com"`
- After that verify your configuration with `git config --global --list`
