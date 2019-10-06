var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get("/club/createpost/:clubId", function(req, res) {
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

router.post("/club/submitpost/:clubId", (req,res) => {
  const postBody = req.body.newpostInput;
  const clubId = req.params.clubId.replace(/id=/, '');
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

// like a post 
//     write userID, postID, and boolean 
router.post('/like/:postId', (req, res) => {
  const currentUser= session.user;
  const postId = req.body.postid;
  
  models.Users.findOne({
    where: {
      username: currentUser
    }
  })
    .then(user => {
      const userId = user.id;
      const like = models.Likes.findOne({
        where: {
            UserId: userId,
            PostId: postId
        }
      })
      .then(likes => {
        const userlike = likes;
        console.log(userlike);
        if(!userlike) {
            //when like = null
            console.log("this works");
            const like = models.Likes.build({
              Like: true,
              UserId: userId,
              PostId: postId
            })
            like.save();
        } 
        else if (!userlike.Like) {
          //when like = false
          const unlike = models.Likes.update(
            {Like: true},
            {where: {
              UserId: userId,
              PostId: postId
            }}
          )

        }
        else if (userlike.Like) {
            //when like = true
            const unlike = models.Likes.update(
              {Like: false},
              {where: {
                UserId: userId,
                PostId: postId
              }}
            )
        }
      })
    })
   
});

module.exports = router;
