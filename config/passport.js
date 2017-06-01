var LocalStrategy = require('passport-local').Strategy;
var Model = require('./../app/models/model');


module.exports = (passport) => {
    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });

    // passport.deserializeUser(function(id, done) {
    //     Model.User.findById(id)
    //     .then( user => done(null, user) )       
    // });
    passport.use(new LocalStrategy(
        function(username, password, done) {
            Model.User.local.findOne({
                where: {
                    username: username
                }
            })
            .then(user => {
                if (!user) return done(null, false, {message: 'Unknown user ' + username});
                if (user.username == username && user.password == password) return done(null, user);
                return done(null, false, {message: 'Unknown user ' + username});
            })   
        }
    ));
}
