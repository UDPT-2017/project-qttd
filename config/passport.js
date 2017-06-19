var LocalStrategy = require('passport-local').Strategy;
var FBStrategy = require('passport-facebook').Strategy;
var Model = require('./../app/models/model');

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
}
