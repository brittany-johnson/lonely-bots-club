var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/login", function(req, res) {
  res.render('login');
});

router.post("/userlogin", function(req, res) {
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;
  const login = models.Users.findOne({
      where: {
        username: usernameInput,
        password: passwordInput
      }
    })
    .then(function(checkuser) {
      console.log("Hey this works " + checkuser.username)
      if (checkuser != null) {
        session.user = checkuser.username;
        res.redirect('/home')
      } else {
        res.redirect('/login')
      }
    })
})

router.post("/logout", function(req,res) {
  req.session.destroy(function() {
    session.user = null;
    res.redirect('/login');
  });
})

module.exports = router;