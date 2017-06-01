var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded({ extended: true }) );
var passport = require('passport');
var users = require('./app/models/user');
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(session({
  secret : "secret",
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000);





var Controller = require('./app/controllers/Controller');



app.get("/login", Controller.Home.getLogin);

app.post('/login', Controller.Home.postLogin);
	
app.get("/home", Controller.Home.getHome);

app.post("/register", Controller.Home.postRegister);

app.get("/login/facebook", Controller.FB.getLoginFB);

app.get("/login/facebook/cb", Controller.FB.callbackLoginFB);
// app.post('/login', passport.authenticate('local', function(err, user, info) {  
// 	console.log(err); 
// 	console.log(user); 
// 	console.log(info); 
// }), 
// function (req, res) { 
// 	console.log('Authentication Successful'); 
// 	res.redirect('/'); 
// });