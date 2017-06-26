var express = require("express");
var cookieParser = require('cookie-parser')
var app = express();
var session = require('express-session');
var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded({ extended: true }) );
var passport = require('passport');
var users = require('./app/models/user');
var flash    = require('connect-flash');
var isAdminMiddleware = require('./app/middlewares/isAdminMiddleware');
var csrf = require('csurf')
require('./config/passport')(passport);
var csrfProtection = csrf({ cookie: true })

app.use(cookieParser())

app.use(flash());
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(session({
  	secret: 'cookie_secret',
    name: 'cookie_name',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/admin', isAdminMiddleware);
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
})
// catch 404 and forward to error handler
require('./config/routes.js')(app, csrfProtection);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



<<<<<<< HEAD
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});

require('./config/routes.js')(app);
=======
>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7

app.listen(process.env.PORT || 3000, () => console.log("ket noi thanh cong toi server"));










