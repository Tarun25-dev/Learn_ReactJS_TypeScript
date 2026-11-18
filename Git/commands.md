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

4. **Branch commands:**

|command|purpose|
|-------|-------|
|`git branch`|List local branches|
|`git branch branch-name`|Create a branch|
|`git switch branch-name`|Switch branches|
|`git switch -c branch-name`|Create and switch to a new branch|
|`git merge branch-name`|Merge another branch into the current branch|
|`git branch -d branch-name`|Delete a merged branch|

5. **Undo and comparison commands:**

|command|purpose|
|-------|-------|
|`git diff`|View unstaged changes|
|`git restore filename`|Discard unstaged changes in a file|
|`git restore --staged filename`|Unstage a file|
|`git revert commit-id`|Reverse a previous commit with a new commit|
|`git reset --soft HEAD~1`|Undo the last commit while keeping changes staged|
|`git stash`|Temporarily save working changes|
|`git stash`|Restore the latest stashed changes|

6. **Important differences:**

- Git vs Github: Git is a version control system; Github hosts Git repositories online.
- Push vs Pull: Push uploads changes; Pull downloads and integrates changes.
- Fetch vs Pull: Fetch downloads updates; Pull downloads and integrates them.
- Merge vs Rebase: Merge combines branch histories; Rebase reapplies commits onto another base.
- Reset vs Revert: Reset moves a branch reference; Revert creates a new commit to reverse changes.

7. **Most important daily workflow:**
```bash
git status

git add .

git commit -m "Updated project"

git push
```
