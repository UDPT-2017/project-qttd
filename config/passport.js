var LocalStrategy = require('passport-local').Strategy;
var Model = require('./../app/models/model');


module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Model.User.findById(id)
        .then( user => done(null, user) )           
    }); 
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log("toi day r ");
            Model.User.findAll({
                where: {
                    username: username
                }
            })
            .then(arruser => {
                if (!arruser) {
                    return done(null, false, {
                        message: 'Unknown user ' + username
                    });
                }
                arruser.forEach(user => {
                    if (user.username == username) {
                        if (user.password == password) {
                            return done(null, user);
                        }
                    }
                    return done(null, false, {
                        message: 'Unknown user ' + username
                    });
                })
            })


            
        }
    ));
};