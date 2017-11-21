// var basisdata = require('./../../cfg/db');
// var fs = require('fs');
var secrets = require('./../../cfg/secrets');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var pilihDB = function(req, res, next){
    var periode = req.body.periode;
    var db = 'sruput'+periode;
    var dbconnect = mongoose.connect(secrets.baseUrl+db, {useMongoClient: true}, function(err){
        if (err) console.log('Koneksi ke DB Error');
        else console.log('DB tersambung ke : ' + db);
    });
    next();
}

module.exports = pilihDB;