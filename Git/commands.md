# Basic commands in git

1. **Basic Git Commands:**

|command|purpose|
|-------|-------|
|`git --version`|check git version|
|`git config --global user.name "Name"`|Set git username|
|`git config --global user.email "Email"`|Set git email|
|`git init`|Initialize a git repository|
|`git clone URL`|Download a repository from github|
|`git status`|Check modified, staged and untracked files|

2. **Add and commit commands:**

|command|purpose|
|-------|-------|
|`git add .`|Stage all changes in the current directory|
|`git add filename`|Stage a specific file|
|`git commit -m "message"`|Save staged changes with a commit message|
|`git log`|View commit history|
|`git log --oneline`|View compact commit history|

3. **Github connection commands:**

|command|purpose|
|-------|-------|
|`git remote -v`|View connected remote repositories|
|`git remote add origin URL`|Connect local git to github|
|`git remote set-url origin URL`|Change remote URL|
|`git push origin main`|Upload commits to github|
|`git push -u origin main`|Push and set upstream tracking|
|`git pull origin main`|Download and integrate remote changes|
|`git fetch`|Download remote updates without integrating them|
