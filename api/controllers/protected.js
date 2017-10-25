let express = require('express'),
    router  = express.Router(),
    mongoose = require('mongoose'),
    models  = require('./../models/schemas');

var Praktikan = models.Peserta;

    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
        res.header("Access-Control-Allow-Methods", 'GET, PUT, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With, content-type, application/json');
        next();
    });

    router.get('/me', function(req, res){
        res.json(req.decoded);
    });
    
    router.get('/', function(req, res){
        res.json(req.decoded);
    });

    router.get('/gurus', (req, res) => {
        res.send('Guru API');
    });
    
    
    // Praktikans API
    router.get('/praktikans', (req, res) => {
        Praktikan.find({}, function(err, praktikans){
            res.send(praktikans);
        });
        // res.json(Praktikan);
    });
    router.get('/praktikan/:periode', function(req, res) {
        var periode = req.params.periode;
        Praktikan.find({periode: periode}, function(err, praktikans){
            res.json(praktikans);
        });
    });
    router.get('/praktikan/detil/:q', function(req, res) {
        var q = req.params.q;
        var regex  = new RegExp(q, "i");
        Praktikan.find({$or: [{_id: regex}, {namaPeserta: regex}]}, function(err, praktikans){
            if(err) res.json(err);
            else if(praktikans.length < 1 ) res.json({"success": true, "data": "No Data"});
            else res.json({"success": true, "data": praktikans});
        });
    });
    // DUDI API
    router.get('/dudis', (req, res) => {
        Dudi.find({}, function(err, dudis){
            res.send(dudis);
        });
    });

    // Prakerlap API
    router.get('/prakerlap', (req, res) => {
        res.send('Prakerlap API');
    });

    module.exports = router;