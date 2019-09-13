var express = require('express');
var router = express.Router();
// //login.js
// app.get("/login", function(req, res) {

//   res.render('login')
// })

// app.post("/userlogin", function(req, res) {
//   const usernameInput = req.body.username;
//   const passwordInput = req.body.password;
//   const login = models.userinfos.findOne({
//       where: {
//         username: usernameInput,
//         password: passwordInput
//       }
//     })

//     .then(function(checkuser) {
//       console.log("Hey this works" + checkuser)
//       if (checkuser != null) {
//         session.user = checkuser.username
//         user = true;
//         res.redirect('/')
//       } else {
//         res.redirect('/login')
//       }
//     })
// })

// app.post("/logout", function(req,res) {
//   req.session.destroy(function() {
//     let user=false;
//   res.redirect('/login');
// });
// })