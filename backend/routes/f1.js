const express = require('express');
const router = express.Router();
const request = require('request-promise-lite')
const secret = require('../config/secret.js')

router.get('/', function(req,res,next){
    res.render('f1test1',{string: 'f1test2'});
})


router.get('/standing/:year', function(req, res, next) {
    const frontend = req.params.year
    request.get(config.apiweb+frontend+config.standing,{json: true})
        .then(function(response){
            const ranking = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            res.send(ranking);
        }).catch(err =>{
        console.log(err);
    })
});

module.exports = router;
