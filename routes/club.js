var express = require('express');
var router = express.Router();
const models = require('../models');
var session = require('express-session');

/*

/club/create
/club/:clubname
/club/roster
/club/:clubId/:postId/comment

*/


router.get('/club/roster', (req,res) => {
    models.Clubs.findAll()
        .then(clubList => {
            res.render('club-roster', {
                clubs: clubList,
            })
        })
});

router.get('/club/create', (req,res) => {
    //for some reason this cannot appear bellow the :clubId route need to investigate 
    res.render('create-club');
});

router.post('/club/create-club', (req, res) => {
    const clubName = req.body.clubName;
    const clubInfo = req.body.clubInfo;

    const club = models.Clubs.build({
        name: clubName,
        clubinfo: clubInfo
    })
    club.save()
        .then(() => {
            res.redirect("/club/roster");
        }).catch((error) => {
            console.log(error);
        })
});

router.get('/club/:clubId', (req,res) => {
    const clubId = req.params.clubId.replace(/id=/, '');
    models.Posts.findAll({
        where: {
            ClubId: clubId
        }
    })
        .then(clubPosts => {
            res.render('club-home', {
                posts: clubPosts,
                clubid: req.params.clubId
            })
        })
});

module.exports = router;