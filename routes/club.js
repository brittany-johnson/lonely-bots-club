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

router.get('/create', (req,res) => {
    res.render('create-club');
});
router.post('/create-club', (req, res) => {
    const clubName = req.body.clubName;
    const clubInfo = req.body.clubInfo;

    const club = models.Clubs.build({
        clubname: clubName,
        clubinfo: clubInfo
    })
    club.save()
        .then(() => {
            res.redirect("/club/roster");
        }).catch((error) => {
            console.log(error);
        })
});

router.get('/roster', (req,res) => {
    models.Clubs.findAll()
        .then(clubList => {
            res.render('club-roster', {
                clubs: clubList,
            })
        })
})

router.get('/:clubId', (req,res) => {
    const clubId = req.params.clubId.replace(/id=/, '');
    models.Posts.findAll({
        where: {
            ClubId: clubId
        }
    })
        .then(clubPosts => {
            res.render('club-home', {
                posts: clubPosts,
                id: req.params.clubId
            })
        })
})

module.exports = router;