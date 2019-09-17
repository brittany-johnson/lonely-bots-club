var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/", function(req, res) {
  console.log('were in')
    if (session.user)
      models.userinfos.findOne({
        where: {
          username: session.user
        }
      })
      .then(users => {
        models.posts.findAll(
        ).then(allData =>  {
        res.render('homepage', {
          username: users.username,
          gabs: allData
        })
        })
      })
    else {
      res.redirect('/login')
  }
});

module.exports = router;