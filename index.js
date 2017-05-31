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





var homeController = require('./app/controllers/homeController');



app.get("/login", homeController.getLogin);

app.post('/login', homeController.postLogin);
	
app.get("/home", homeController.getHome);

app.post("/register", homeController.postRegister);
// app.post('/login', passport.authenticate('local', function(err, user, info) {  
// 	console.log(err); 
// 	console.log(user); 
// 	console.log(info); 
// }), 
// function (req, res) { 
// 	console.log('Authentication Successful'); 
// 	res.redirect('/'); 
// });