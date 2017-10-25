var express = require('express'),
    router  = express.Router();

let verifyToken = require('../middlewares/verifyJwt');


// module.exports = function(router) {
    // Users API
    router.use('/user', require('./user'));
    router.use('/protected', verifyToken, require('./protected'));

    // Gurus API
    


//     return router;
// }
module.exports = router;