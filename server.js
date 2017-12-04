var express = require('express'),
    port    = process.env.PORT || 3456,
    cors    = require('cors'),
    // db      = require('./cfg/db'),
    morgan  = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    jwt     = require('jsonwebtoken'),
    router  = express.Router(),
    user    = require('./api/controllers/user');
    // api     = require('./api/controllers/index')(router),
    app     = express(),
    path    = require('path');

    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static(__dirname + '/client'));
    app.use('/user', user);
    // app.use('/api',api);

    global.config= require('./cfg/secrets');

    app.use(require('./api/controllers/'));
    app.get('*', function(req, res, next) {
        res.sendFile(path.resolve(__dirname + '/client/index.html'));
    });

app.listen(port, function(){
    console.log('Mendegarkan Anda pada port ' + port);
});
