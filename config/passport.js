var LocalStrategy = require('passport-local').Strategy;
var FBStrategy = require('passport-facebook').Strategy;
var Model = require('./../app/models/model');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        if(!user.password){
            var data = {
                "id": user.id ,
                "class": "facebook" 
            }
            data = JSON.stringify(data);
            return done(null, data)
        }
        else{
            var data = {
                "id": user.id ,
                "class": "local" 
            }
            data = JSON.stringify(data);
            return done(null, data)
        }
    });

    passport.deserializeUser(function(data, done) {
        data = JSON.parse(data)
        if (data.class == "facebook") {
            Model.User.facebook.findById(data.id)
            .then( user => done(null, user) )
        }
        else{
            Model.User.local.findById(data.id)
            .then( user => done(null, user) )
        }
               
    });
    passport.use(new LocalStrategy(
        function(username, password, done) {
            Model.User.local.findOne({
                where: {
                    username: username
                }
            })
            .then(user => {
                if (!user) return done(null, false, {message: 'Tài khoản không tồn tại'});
                if (user.username == username && user.password == password) return done(null, user);
                return done(null, false, {message: 'Mật khẩu không hợp lệ'});
            })   
        }
    ));


    passport.use(new FBStrategy({
        clientID: "597972973707901",
        clientSecret: "95740cf1f3df534f4ab49542fc73482e",
        callbackURL: "http://localhost:3000/login/facebook/cb",
        profileFields: ['email','displayName']
    },
    (accessToken, refreshToken, profile, done) => {
        Model.User.facebook.findOne({
            where: {
                idFB: profile._json.id + ""
            }
        })
        .then( user => {
            if (user) return done(null, user);
            let newUser = {
                idFB: profile._json.id + "",
                name: profile._json.name + "",
                email: profile._json.email + "",
            };
            Model.User.facebook.create(newUser)
            .then( us => done(null, us))
        })
    }));
    passport.use(new GoogleStrategy({

        clientID        : "686494571732-2lmg9ajnv2eetfp1eaomqlq1ba1828r5.apps.googleusercontent.com",
        clientSecret    : "SP0e5lHnxFoJcIJVfYIJZ_Hi",
        callbackURL     : "http://localhost:3000/login/google/cb",

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    let newUser          = new User();

                    // set all of the relevant information
                    idGG   = profile.id +"";
                    nameGG  = profile.displayName + "";
                    emailGG = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));

};
 