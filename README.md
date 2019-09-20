# Lonely Bots Club

## About
Hello!
I originally created this project in the summer of 2017 during a coding bootcamp!
It's now Feb 2019, and I finally decided to revisit it. I want to refactor this app,
add new features, make it responsive, and improve the design and security!

You can follow the project progress [here on this public Trello Board](https://trello.com/b/ca9t9vVA/gabble).

[View Project Here](https://gabble-social.herokuapp.com/login)
![current-app-state](https://github.com/brittany-johnson/Gabble_Forum/blob/master/progress-gifs/4-17-19-gabble.gif)

## Install

### You might have to install:
* [Homebrew](https://brew.sh/)
* [NPM](nodejs.org/en/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Install PostgreSQL](postgresql.org/download/)
* [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) (might have to sudo)

### You *will* have to do these things:
* Clone the repository
`git clone https://github.com/brittany-johnson/Gabble_Forum.git`
* `npm install` to install app dependencies
* Create lonelyBotsClub DB `createdb LBC`
* Update usernames in `config.json`
* `sequelize db:migrate`
* Go to `localhost:3000` in your browser and *violia*!

### Dependencies
* [Node.js](https://nodejs.org)
    - Write server side code with JavaScript 
* [express](https://expressjs.com/)
    - Framework for Node.js
* [mustache](https://github.com/janl/mustache.js)
    - Mustahe is a templating language. It is useful because it allows HTML to be dynamically updated based on responses from our web server.  

## Run

`npm run start`