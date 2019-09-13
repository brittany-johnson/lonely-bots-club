var express = require('express');
var router = express.Router();

// //signup.js

// app.get("/signup", function(req, res) {

//   res.render('signup')
// })

// app.post("/usersignup", function(req, res) {
//   const passwordInput = req.body.password;
//   const usernameInput = req.body.username;
//   const signup = models.userinfos.build({
//     username: usernameInput,
//     password: passwordInput
//   })
//   signup.save()
//     .then(function(newuser) {
//       console.log(newuser)
//       res.redirect("/")
//     }).catch(function(error) {
//       console.log(error);
//       res.redirect("/signup");
//     })
// })