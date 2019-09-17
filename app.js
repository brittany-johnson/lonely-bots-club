if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
var app = express();
var session = require('express-session');
const mustache = require('mustache-express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const fs = require('fs');

const siteHome = require('./routes/siteHome');
const login = require('./routes/login');
const newgab = require('./routes/newgab');
const signup = require('./routes/signup');

const models = require('./models');
const userinfos = require('./models/userinfos');
const posts = require('./models/posts');

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

app.listen(PORT, () => 
  console.log(`http://localhost:${PORT}`)
);

app.use(express.static('public'))
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
}))

app.use('/', siteHome, login, newgab, signup);

