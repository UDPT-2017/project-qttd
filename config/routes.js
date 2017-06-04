var Controller = require('./../app/controllers/Controller');

module.exports = (app) => {
	app.get("/login", Controller.Home.getLogin);

	app.post('/login', Controller.Home.postLogin);
		
	app.get("/home", Controller.Home.getHome);

	app.post("/register", Controller.Home.postRegister);

	app.get("/login/facebook", Controller.Home.getLoginFB);

	app.get("/login/facebook/cb", Controller.Home.callbackLoginFB);
}