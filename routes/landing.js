var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

router.get('/', (req,res) => {
    res.render('landing');
})

module.exports = router;