var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/createpost/:clubId", function(req, res) {
  const clubId = req.params.clubId.replace(/id=/, '');
  if (session.user) {
    models.Users.findOne({
      where: {
        username: session.user
      }
    })
    .then(() => {
      res.render('create-post', {
        id: clubId
      });
    })
  } else {
    res.redirect('/login')
  }
});

router.post("/submitpost", (req,res) => {
  const postBody = req.body.newpostInput;
  const clubId = req.body.ClubId;
  const currentUser= session.user;

  console.log("works here")

  models.Users.findOne({
    where: {
      username: currentUser
    }
  }).then( author => {
    const createNewPost = models.Posts.build({
      body: postBody,
      UserId: author.id,
      ClubId: clubId
    })
    createNewPost.save()
      .then(() => {
        res.redirect('/');
    }).catch((error) => {
      console.log(error);
      })
    })
});

module.exports = router;
