var Model = require('./../models/model');
var passport = require('passport');
require('./../../config/passport')(passport);


var	homeController = { 
	getLogin: (req, res) => {
	    res.render("login");
  	},
  	getHome: (req, res) => {
  		if (!req.isAuthenticated()) {
  			return res.redirect('/login');
  		}
  		user = req.user;
		return res.render("index",{user : user});
	},
	postLogin: passport.authenticate('local', { successRedirect: '/home',
                                   				failureRedirect: '/login' 
    }),
    postRegister: (req, res) => {
    	let username = req.body.username;
    	let password = req.body.password;
    	let Repassword = req.body.Repassword
		if (!username || !password || !Repassword) {
		    res.redirect('/login')
		}
		if (password !== Repassword) {
			res.redirect('/login')
		}
		Model.User.create({
			username: username,
			password: password
		})
		.then( (user) => {
			req.login(user, (err) => {
		        if(err) return next(err);
		        res.redirect('/home');
	    	});
  		})
  		.catch(function(error) {
	    	res.redirect('/login')
  		})
    },

}

module.exports = homeController;