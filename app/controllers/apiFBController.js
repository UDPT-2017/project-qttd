var Model = require('./../models/model');
var passport = require('passport');
require('./../../config/passport-facebook')(passport);


var ApiFBController = {
	callbackLoginFB: passport.authenticate('facebook', { successRedirect: '/home',
                                   					 failureRedirect: '/login' 

    }),
    getLoginFB : passport.authenticate('facebook',{scope: ['email']}),
    
}

module.exports = ApiFBController;