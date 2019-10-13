var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

//create a new migration that changes the datatype of profile pic to blob 
//update the model 
//write post middleware to save blob data to db 
//update templates so that profile pic shows with posts and on settings 

router.get('/settings/:userId', (req,res) => {
    const userId = req.params.userId.replace(/id=/, '');
    if (session.user) {
        models.Users.findOne({
          where: {
            username: session.user
          }
        })
        .then((user) => {
          console.log(user);
          res.render('user-settings', {
            id: userId
          });
        })
      } else {
        res.redirect('/login')
      }
})

router.post('/uploadProfilePic/:userid', (req,res) => {
  const userId = req.params.userId.replace(/id=/, '');
  if (session.user) {
    models.Users.findOne({
      where: {
        username: session.user
      }
    })
    .then((user) => {
      console.log(user);
      res.render('user-settings', {
        id: userId
      });
    })
  } else {
    res.redirect('/login')
  }

  // models.Users.
})

module.exports = router;