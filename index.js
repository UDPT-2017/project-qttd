var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded({ extended: true }) );
var passport = require('passport');
var users = require('./app/models/user');
var flash    = require('connect-flash');

app.use(flash());
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(session({
  secret : "secret",
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});

require('./config/routes.js')(app);

app.listen(3000);










