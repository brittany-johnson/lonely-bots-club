const express = require('express');
var app = express();

app.get("/", function(req, res) {
    console.log('were in')
    if (user === true)
      models.userinfos.findOne({
        where: {
          username: session.user
        }
      })
      .then(users => {
        models.posts.findAll(
        ).then(allData =>  {
          // console.log(allData);
        res.render('homepage', {
          username: users.username,
          gabs: allData
        })
        })
      })
    else {
      res.redirect('/login')
    }
  })