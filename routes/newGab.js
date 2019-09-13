var express = require('express');
var router = express.Router();
// //gabs.js
// app.get("/newgab", function(req, res) {
//   if (user === true) {
//     models.userinfos.findOne({
//       where: {
//         username: session.user
//       }
//     }).then(users => {
//       res.render('newgab', {
//         username: users.username,
//       })
//     })
//   } else {
//     res.redirect('/login')
//   }
// })

// app.post("/submitgab", function(req,res) {
//   const postBody = req.body.newgabInput;
//   const currentUser= session.user;
//   models.userinfos.findOne({
//     where: {
//       username: currentUser
//     }
//   }).then(function(gabAuthor) {
//     const createNewGab = models.posts.build({
//       body: postBody,
//       userid: gabAuthor.id

//     })
//     createNewGab.save()
//     .then(function(newgab) {
//       console.log(newgab)
//       res.redirect('/')
//     })
//   })


// })