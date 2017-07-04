const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const models = require('./models');
var app = express();
var session = require('express-session')

app.engine('mustache', mustache() )
app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.listen(3000, function() {
  console.log("Is this thing on?")
});

//ROUTES/////////////////////////////////

app.get("/signup",function(req,res){

  res.render('signup')
})

app.get("/login",function(req,res){

  res.render('login')
})

app.get("/",function(req,res){

  res.render('homepage')
})

app.get("/newgab",function(req,res){

  res.render('newgab')
})

app.get("/likes",function(req,res){

  res.render('likes')
})
