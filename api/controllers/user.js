let express = require('express'),
    router  = express.Router(),
    jwt     = require('jsonwebtoken'),
    fs = require('fs'),
    db = require('./../middlewares/selectDB'),
    schema  = require('../models/schemas'),
    User    = schema.User,
    Siswa   = schema.Peserta,
    Guru    = schema.Guru,
    Log     = schema.Log;

    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", 'http://localhost:3456');
        res.header("Access-Control-Allow-Methods", 'GET, PUT, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With, content-type, application/json','X-Access-Token');
        next();
    });
    router.post('/signup', function(req, res){
        let user = new User({
            _id: req.body.username,
            realname: req.body.realname,
            password: req.body.password,
            email: req.body.email,
            hp: req.body.hp,
            _role: req.body.role
        });
        user.save(function(err, data){
            if (err){
                return res.json({error: true, data: err});
            }
            res.json({error: false, data:data});
        });
    });

    router.post('/authenticate', db, function(req,res ){
        let data ={
            _id: req.body.username,
            password: req.body.password,
            _role: req.body._role
        };
        let periode = req.body.periode;
        let d = Date.now;
        let date = new Date(d);
        let log = new Log({
            user: data._id,
            logStart: date
        });
        log.save(function(err, savelog){
            // console.log(savelog);
        });
        // console.log(periode);
        if(data._role == 1){
            // let role = 'Admin';
            var token = '';
            User.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Login Error! Cek kembali data Anda.'});
                }
                // console.log(user);
                serveToken(user, req, res);


            });
        }else if(data._role == 2){
            // let role = "Guru";
            Guru.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Login Error! Cek kembali data Anda.'});
                }
                // console.log(user);
                serveToken(user, req, res);
            });
        } else if (data._role == 3){
            // let role = "Siswa";
            Siswa.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Login Error! Cek kembali data Anda.'});
                }
                // console.log(user);
                serveToken(user, req, res);
            });
        } else if(data._role == 4) {
            // let role = "Tukang";
            var token = '';
            User.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Login Error! Cek kembali data Anda.'});
                }
                // console.log(user);
                serveToken(user, req, res);


            });
        } else if (data.role = '0' ) {
            res.json({error: true, kodeErr: '0', msg: 'Peran Pengguna belum dipilih.'});
        } else {
            let role = 'Tamu';

        }
    });



    module.exports = router;


function serveToken(user, req, res) {
    let token = jwt.sign(user, global.config.sessionSecret, {
        expiresIn: 18000
    });
    res.json({error: false, token: token, user: user});
}
