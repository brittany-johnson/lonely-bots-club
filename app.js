if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
var app = express();
var session = require('express-session');
const mustache = require('mustache-express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const fs = require('fs');
var validate = require('validator');
const path = require('path');


const home = require('./routes/home');
const login = require('./routes/login');
const post = require('./routes/post');
const signup = require('./routes/signup');
const club = require('./routes/club');
const landing = require('./routes/landing');


app.engine('mustache', mustache());
app.set('view engine', 'mustache');

//defined in .env
const {
  PORT,
  SESS_LIFETIME,
  NODE_ENV,
  SESS_SECRET,
} = process.env

const IN_PROD = NODE_ENV === 'production';


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/club/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: false
}));

//express-session config object
app.use(session({ 
  resave: false, //don't save if not modifed 
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    sameSite: true,
    secure: IN_PROD,
  }
}));


app.listen(PORT, () => 
  console.log(`http://localhost:${PORT}`)
);

app.use('/', landing, signup, login, home, post);
app.use('/club', club, post);
