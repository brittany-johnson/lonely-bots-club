var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/signup", function(req, res) {
    res.render('signup');
});

router.post("/usersignup", function(req, res) {
  const passwordInput = req.body.password;
  const usernameInput = req.body.username;

  const signup = models.userinfos.build({
    username: usernameInput,
    password: passwordInput
  })
  signup.save()
    .then(function(newuser) {
      console.log("welcom" + newuser)
      res.redirect("/")
    }).catch(function(error) {
      console.log(error);
      res.redirect("/signup");
    })
});

module.exports = router;