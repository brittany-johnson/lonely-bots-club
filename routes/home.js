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
        models.Posts.findAll(
        ).then(allData =>  {
        res.render('homepage', {
          username: users.username,
        })
        })
      })
    else {
      res.redirect('/login')
  }
});

module.exports = router;