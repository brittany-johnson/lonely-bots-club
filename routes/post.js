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
    .then((user) => {
      console.log(user);
      res.render('create-post', {
        id: clubId
      });
    })
  } else {
    res.redirect('/login')
  }
});

router.get("/:postId/comments", (req, res) => {
  const postId = req.params.postId.replace(/id=/, '');
  //check auth
  models.Posts.findOne({
    where: {
      id: postId
    }
  })
    .then(post => {
      models.Comments.findAll({
        where: {
          PostId: postId
        }
      })
      .then(comments => {
        res.render('post-comments', {
          post: post,
          id: postId,
          comments: comments
        });
      })
    })
})

router.post("/submitcomment/:postId", (req, res) => {
  const postId = req.params.postId.replace(/id=/, '');
  const commentBody = req.body.commentBody;
  const currentUser= session.user;

  models.Users.findOne({
    where: {
      username: currentUser
    }
  })
    .then(author => {
      const createNewComment = models.Comments.build({
        body: commentBody,
        PostId: postId,
        UserId: author.id,
        author: author.username
      })
      createNewComment.save()
      .then(() => {
        res.redirect('/submitcomment/:postId');
        }).catch((error) => {
          console.log(error);
      })
    })
});

router.post("/submitpost/:clubId", (req,res) => {
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
      ClubId: clubId,
      Author: author.username
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
