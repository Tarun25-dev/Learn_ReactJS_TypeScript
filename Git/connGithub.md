Lets do it step by step using vs code terminal:
1. Configure Git with your identity:
```bash
git config --global user.name "username"
git config --global user.email "email@example.com"
```
- These details identify you as the author of your commits.
- Check your configuration:
```bash
git config --global --list
```
2. Connect Git to Github using authentication:
- The easiest method is HTTPS with Git Credential Manager.
- Open Github and sign in to your account.
- When you push to Github for the first time, Git may open a browser window.
- Authorize Git Credential Manager using Github account.
- You dont need to enter your Github password in the terminal.

3. Create a repository on Github
- Create a Repo and copy HTTPS repository URL, looks like https://github.com/Tarun25-dev/Learn_ReactJS_TypeScript.git
