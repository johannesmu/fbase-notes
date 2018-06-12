# Note Taker

## Features
This is a note taking app, built with Ionic framework. It features:
- Authentication
- Registration
- Note persistence using Firebase Realtime database
- Note editing
- Note deletion

## Installation
To use this project, you will need to clone it into a directory in your system.

```bash
git clone https://github.com/johannesmu/fbase-notes.git .
```
note the . (period) at the end of the command.

After the cloning process, you need to install all the dependencies using

```bash
npm install
```
You will need to create your own Firebase project and then find the section "Add Firebase to your Web App", then paste the configuration data into
 ```
 src/configuration/configuration.ts
 ```
 After you've added your firebase configuration, fire up the ionic server by running
 ```bash
 ionic serve
 ```
 Register for an account and then add some notes. The notes are stored in firebase under each user's profile, under /userProfile/.
