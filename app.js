const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const models = require('./models');
var app = express();
let user = false;
var session = require('express-session');
const userinfos = require('./models/userinfos');

app.engine('mustache', mustache())
app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}))

var port = process.env.PORT || 3000;


app.listen(port, function() {
  console.log("Is this thing on?")
});

//ROUTES/////////////////////////////////

app.get("/signup", function(req, res) {

  res.render('signup')
})

app.post("/usersignup", function(req, res) {
  const passwordInput = req.body.password;
  const usernameInput = req.body.username;
  const signup = models.userinfos.build({
    username: usernameInput,
    password: passwordInput
  })
  signup.save()
    .then(function(newuser) {
      console.log(newuser)
      res.redirect("/")
    })
})

app.get("/login", function(req, res) {

  res.render('login')
})

app.post("/userlogin", function(req, res) {
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;
  const login = models.userinfos.findOne({
      where: {
        username: usernameInput,
        password: passwordInput
      }
    })

    .then(function(checkuser) {
      console.log("Hey this works" + checkuser)
      if (checkuser != null) {
        session.user = checkuser.username
        user = true;
        res.redirect('/')
      } else {
        res.redirect('/login')
      }
    })
})

app.get("/", function(req, res) {
  console.log('were in')
  if (user === true)
    models.userinfos.findOne({
      where: {
        username: session.user
      }
    }).then(user => {
      res.render('homepage', {
        username: user.username
      })
    })

  else {
    res.redirect('/login')
  }
})

app.get("/newgab", function(req, res) {
  if (user === true) {
    res.render('newgab')
  } else {
    res.redirect('/login')
  }
})

app.get("/likes", function(req, res) {
  if (user === true) {
    res.render('likes')
  } else {
    res.redirect('/login')
  }
})


//PATRICK STUFF
var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});
