var Model = require('./../models/model');
var passport = require('passport');
require('./../../config/passport')(passport);

var homeController = {
    getLogin: (req, res) => {
      let err = req.flash("error");
        res.render("login",{err: err});
      },
      getHome: (req, res) => {
        if (!req.isAuthenticated()) {
          return res.redirect('/login');
        }
        user = req.user;
        Model.TinTuc.findAll({
          order: [['createdAt', 'DESC']]
        })
        .then(arrTinTuc => {
          Model.LoaiTin.findAll()
          .then(arrLoaiTin => res.render("user/index",{TinTucs: arrTinTuc, LoaiTins: arrLoaiTin,}))
        })      
    },
    postLogin: passport.authenticate('local', { successRedirect: '/home',
                                            failureRedirect: '/login',
                                            failureFlash : true 
    }),
    postRegister: (req, res) => {
      let username = req.body.username;
      let password = req.body.password;
      let Repassword = req.body.Repassword
    if (!username || !password || !Repassword) {
      req.flash('error', 'Vui lòng điền đầy đủ thông tin')
        res.redirect('/login')
    }
    if (password !== Repassword) {
      req.flash('error', 'Password và Password nhập lại không giống nhau')
      res.redirect('/login')
    }
    Model.User.local.create({
      username: username,
      password: password
    })
    .then( (user) => {
      req.login(user, (err) => {
            if(err) return next(err);
            res.redirect('/home');
        });
      })
      .catch( error => {
        req.flash('error', 'User đã tồn tại')
        res.redirect('/login')
      })
    },
    callbackLoginFB: passport.authenticate('facebook', { successRedirect: '/home',
                                             failureRedirect: '/login' 

    }),
    getLoginFB : passport.authenticate('facebook',{scope: ['email']}),
    getLoginGG : passport.authenticate('google',{scope:['email']}),
    callbackLoginGG: passport.authenticate('google', { successRedirect: '/home',
                                             failureRedirect: '/login' 

    }),
}

module.exports = homeController;