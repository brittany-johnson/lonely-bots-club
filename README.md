# Lonely Bots Club

## About
Lonely Bots Club is a social media web application built with Express, Sequelize, Mustache, and PostreSQL. 

*I'm currently working on version 2 of the app, but you can view version 1 below:* 

[View the latest release here](https://gabble-social.herokuapp.com/login)
![current-app-state](https://github.com/brittany-johnson/Gabble_Forum/blob/master/progress-gifs/4-17-19-gabble.gif)

## Install

### You might have to install:
* [Homebrew](https://brew.sh/)
* [NPM](nodejs.org/en/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Install PostgreSQL](postgresql.org/download/)
* [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

### You *will* have to do these things:
* Clone the repository
`git clone https://github.com/brittany-johnson/Gabble_Forum.git`
* Update development username in `config.json`
* Create a `.env` file in the root of the directory. This is for the enviornment variables used in `app.js`. For an example, check out `example.env`
* Create database specified by configuration `sequelize db:create`
* `npm install` to install app dependencies and run database migrations
* `npm strart` to start the server. This also watches `app.js` for changes with `nodemon` and watches our `.scss` files for changes.
* Go to `localhost:3000` in your browser and *violia*!