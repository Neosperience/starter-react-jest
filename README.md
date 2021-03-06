# React ES6 starter project
This project is intended to make you as fast as possible starting a new  web application using the following technologies:

* React
* Redux
* Redux-Forms
* ESLint
* Webpack
* Ajv
* Axios
* Bootstrap and ReactBootstap
* FontAwesome
* LESS

## Getting started
To start a new service project, you don't need the full repository history, just make an archive of this repo

```bash
git archive -o my-starter-project.zip --remote https://path/to/this/repo
```
Now you must **cd** into the folder and run

```bash
git init
```

Then edit **package.json** setting appropriate values for

* name
* displayName
* contributors
* repository
* bugs
* homepage

Once you've finished wit package.json, edit also this **README.md** file

Finally run

```bash
npm install
```
> **NOTE**: you could experience some NPM error when running _npm install_. This is probably related to a mismatch between _package-lock.json_ file and your npm version. If this occur, just delete _package-lock.json_ and run ```npm install``` again.

Now everything is set up, you can create your repo first commit:

```bash
git add .
git commit -m "Initial project setup"
```

If you wish, you could also set a remote destination with

```bash
git remote add origin https://path/to/remote/repo.git
git push --all
```
Now you're done and can start adding your project' specific code.

And, of course, you can run this webapp with

```bash
npm run start
```
