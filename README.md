# Standarder for utviklingsprosjektet Strevar :weight_lifting_woman: :weight_lifting_man:

## :bulb:Opprette et **issue**
- Issue/utviklingsoppgaven vil automatisk på en *id*
- Deleger oppgaven til et gruppemedlem ved å velge *assignee*
- Velg riktig *Milestone* (Sprint)
- Velg en frist for når oppgaven skal tentativt være ferdig
- Sett på relevante *Labels*

&nbsp;

## :bulb:Opprette en **branch**
- Branches kan opprettes direkte fra et issue (husk da å ha *List* format) eller via Repository/Branches
- Navn på branchen: 
    > *#issue-id + navnet på issue med bindestrek mellom ordene 
    - Eksempel: 12-skrive-readme
- Create from: **develop** 

&nbsp;

## :bulb:Commit meldinger: 
> *#issue-id + melding på norsk*

&nbsp;

## :bulb:Merge Requests
- Gjøres alltid felles



***

&nbsp;


## :nerd_face:Git Kommandoer

&nbsp;

### **1. Git branch** 

&nbsp;

**Creating a new branch**
> ``git branch <branch-name>``

This command will create a branch locally. 

To push the new branch into the remote repository, you need to use the following command:

> ``git push -u <remote> <branch-name>``

&nbsp;

**Viewing branches**

> ``git branch or git branch --list``

&nbsp;

**Deleting a branch**

> git branch -d <branch-name>

&nbsp;

&nbsp;

### **2. Git checkout** 

&nbsp;

This is also one of the most used Git commands. To work in a branch, first you need to switch to it. We use git checkout mostly for switching from one branch to another. We can also use it for checking out files and commits.

> ``git checkout <name-of-your-branch>``

&nbsp;

There are some steps you need to follow for successfully switching between branches:

- The changes in your current branch must be committed or stashed before you switch
- The branch you want to check out should exist in your local

There is also a shortcut command that allows you to create and switch to a branch at the same time:

> ``git checkout -b <name-of-your-branch>``

&nbsp;

This command creates a new branch in your local (-b stands for branch) and checks the branch out to new right after it has been created.

&nbsp;

&nbsp;

### **3. Git status**

The Git status command gives us all the necessary information about the current branch. 

> ``git status``

&nbsp;

We can gather information like:

- Whether the current branch is up to date
- Whether there is anything to commit, push or pull
- Whether there are files staged, unstaged or untracked
- Whether there are files created, modified or deleted

&nbsp;

&nbsp;

### **4. Git add**

When we create, modify or delete a file, these changes will happen in our local and won't be included in the next commit (unless we change the configurations).

We need to use the git add command to include the changes of a file(s) into our next commit. 

&nbsp;

To add a single file:

> ``git add <file>``

&nbsp;

To add everything at once:

> ``git add -A``

&nbsp;

When you visit the screenshot above in the 4th section, you will see that there are file names that are red - this means that they're unstaged files. The unstaged files won't be included in your commits.

To include them, we need to use git add.


**Important: The git add command doesn't change the repository and the changes are not saved until we use git commit.**

&nbsp;

&nbsp;

### **5. Git commit** 

&nbsp;

This is maybe the most-used command of Git. Once we reach a certain point in development, we want to save our changes (maybe after a specific task or issue).

Git commit is like setting a checkpoint in the development process which you can go back to later if needed.

We also need to write a short message to explain what we have developed or changed in the source code.

> ``git commit -m "commit message"``

&nbsp;

Important: Git commit saves your changes only locally.

&nbsp;

&nbsp;

### **6. Git push** 

&nbsp;

After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.

> ``git push <remote> <branch-name>``

&nbsp;

However, if your branch is newly created, then you also need to upload the branch with the following command:

> ``git push --set-upstream <remote> <name-of-your-branch>``

&nbsp;

or 

&nbsp;

> ``git push -u origin <branch_name>``

&nbsp;


**Important: Git push only uploads changes that are committed.**

&nbsp;

&nbsp;

### **8. Git pull** 

&nbsp;

The git pull command is used to get updates from the remote repo. This command is a combination of git fetch and git merge which means that, when we use git pull, it gets the updates from remote repository (git fetch) and immediately applies the latest changes in your local (git merge).

> ``git pull <remote>``

&nbsp;

This operation may cause conflicts that you need to solve manually.




&nbsp;


### Registrert bruker som kan brukes for innlogging

s@trevar.no
StrevarIsBest123!

strava@sucks.no
StravaSucks123!

pu@demo.no
LykkeTil123!

strevar_gruppen@demo.no
password: LykkeTil123!

Usain@Bolt.com
password": LykkeTil123!

per@ntnu.com
Puforlivet123!
