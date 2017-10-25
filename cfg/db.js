var mongoose = require('mongoose'),
    secrets  = require('./secrets');

    mongoose.Promise = global.Promise;
    
var dbconnect = mongoose.connect(secrets.db, {useMongoClient: true}, function(err){
    if (err) console.log('Koneksi ke DB Error');
    else console.log('DB tersambung');
});

module.exports = dbconnect;