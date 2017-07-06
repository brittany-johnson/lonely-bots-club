const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const models = require('./models');
var app = express();
let user=false;
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

app.post("/usersignup",function(req,res){
  const passwordInput= req.body.password;
  const usernameInput= req.body.username;
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

app.get("/login",function(req,res){

  res.render('login')
})

app.post("/userlogin", function(req,res){
  const usernameInput= req.body.username;
  const passwordInput= req.body.password;
  const login= models.userinfos.findOne({
    where: {
      username: usernameInput,
      password: passwordInput,
    }
  })

  .then(function(checkuser) {
    console.log("Hey this works"+checkuser)
    if(checkuser!=null){
      user=true;
      res.redirect('/')
    }else {
      res.redirect('/login')
    }
  })
})

app.get("/",function(req,res){
if(user===true){
  res.render('homepage')
}
else {
  res.redirect('/login')
}
})

app.get("/newgab",function(req,res){
  if(user===true){
    res.render('newgab')
  }else {
    res.redirect('/login')
  }
})

app.get("/likes",function(req,res){
  if(user===true){
    res.render('likes')
  }else {
    res.redirect('/login')
  }
})
