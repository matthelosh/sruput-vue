var mongoose = require('mongoose'),
    db = '',
    secrets  = require('./secrets');

    mongoose.Promise = global.Promise;
    
var dbconnect = mongoose.connect(secrets.baseUrl+db, {useMongoClient: true}, function(err){
    if (err) console.log('Koneksi ke DB Error');
    else console.log('DB tersambung ke : '+db);
});

module.exports = dbconnect;