var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/createpost", function(req, res) {
  if (session.user) {
    models.User.findOne({
      where: {
        username: session.user
      }
    }).then(users => {
      res.render('newgab', {
        username: users.username,
      })
    })
  } else {
    res.redirect('/login')
  }
});

router.post("/submitpost", function(req,res) {
  const postBody = req.body.newgabInput;
  const currentUser= session.user;

  models.User.findOne({
    where: {
      username: currentUser
    }
  }).then(function(gabAuthor) {
    const createNewGab = models.Posts.build({
      body: postBody,
      userid: gabAuthor.id

    })
    createNewGab.save()
    .then(function(newgab) {
      console.log(newgab)
      res.redirect('/')
    })
  })
});

module.exports = router;