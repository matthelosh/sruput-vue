let express = require('express'),
    router  = express.Router(),
    jwt     = require('jsonwebtoken'),
    schema  = require('../models/schemas'),
    User    = schema.User;
    Siswa   = schema.Peserta;
    Guru    = schema.Guru;

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

    router.post('/authenticate', function(req,res ){
        let data ={
            _id: req.body.username,
            password: req.body.password,
            _role: req.body._role
        };
        if(data._role == 1){
            let role = 'Admin';
            var token = '';
            User.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'User tidak ditemukan'});
                }
                // console.log(user);
                serveToken(user, req, res, role);
                
               
            });
        }else if(data._role == 2){
            let role = "Guru";
            Guru.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Pembimbing tidak ditemukan'});
                }
                // console.log(user);
                serveToken(user, req, res, role);
            });
        } else if (data._role == 3){
            let role = "Siswa";
            Siswa.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'Praktikan tidak ditemukan'});
                }
                // console.log(user);
                serveToken(user, req, res, role);
            });
        } else if(data._role == 4) {
            let role = "Tukang";
            var token = '';
            User.findOne(data).lean().exec(function(err, user){
                if(err) {
                    return res.json({error: true, msg: err});
                }
                if(!user){
                    return res.json({error: true, kodeErr: '404', msg: 'User tidak ditemukan'});
                }
                // console.log(user);
                serveToken(user, req, res, role);
                
               
            });
        } else if (data.role = '0' ) {
            res.json({error: true, kodeErr: '0', msg: 'Perang Pengguna belum dipilih.'});
        } else {
            let role = 'Tamu';

        }
    });

    

    module.exports = router;


function serveToken(user, req, res, role) {
    let token = jwt.sign(user, global.config.sessionSecret, {
        expiresIn: 1440
    });
    res.json({error: false, token: token, role: role});
}