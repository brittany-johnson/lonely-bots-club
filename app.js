if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = require('express')();
var session = require('express-session');
const mustache = require('mustache-express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const fs = require('fs');

const routes = require('./routes');
const models = require('./models');
const userinfos = require('./models/userinfos');
const posts = require('./models/posts');

app.engine('mustache', mustache())
app.set('view engine', 'mustache');

//defined in .env
const {
  PORT,
  SESS_LIFETIME,
  NODE_ENV,
  SESS_SECRET,
} = process.env

const IN_PROD = NODE_ENV === 'production';

app.listen(PORT, () => 
  console.log(`http://localhost:${PORT}`)
);

app.use(express.static('public'))
app.use(express.urlencoded({
  extended: false
}));

app.use(session({ //express-session config object
  name: 'sessionID',
  resave: false, //don't save if not modifed 
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD,
    // store: new SequelizeStore({
    //   db: sequelize
    // }),
  }
}))

app.use('/', routes);


//index.js
// app.get("/", function(req, res) {
//   console.log('were in')
//   if (user === true)
//     models.userinfos.findOne({
//       where: {
//         username: session.user
//       }
//     })
//     .then(users => {
//       models.posts.findAll(
//       ).then(allData =>  {
//         // console.log(allData);
//       res.render('homepage', {
//         username: users.username,
//         gabs: allData
//       })
//       })
//     })
//   else {
//     res.redirect('/login')
//   }
// })












// let user = false;





// //ROUTES/////////////////////////////////
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


// //index.js
// app.get("/", function(req, res) {
//   console.log('were in')
//   if (user === true)
//     models.userinfos.findOne({
//       where: {
//         username: session.user
//       }
//     })
//     .then(users => {
//       models.posts.findAll(
//       ).then(allData =>  {
//         // console.log(allData);
//       res.render('homepage', {
//         username: users.username,
//         gabs: allData
//       })
//       })
//     })
//   else {
//     res.redirect('/login')
//   }
// })

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

// app.get("/likes", function(req, res) {
//   if (user === true) {
//     res.render('likes')
//   } else {
//     res.redirect('/login')
//   }
// })
