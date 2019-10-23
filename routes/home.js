var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/home", function(req, res) {
  console.log('were in')
    if (session.user)
      models.Users.findOne({
        where: {
          username: session.user
        }
      })
      .then(users => {
        // console.log(users.profilepic.toString('utf8'));
        res.render('homepage', {
          username: users.username,
          id: users.id
        })
      })
    else {
      res.redirect('/login')
  }
});

module.exports = router;