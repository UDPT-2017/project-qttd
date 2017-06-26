
var isAdminMiddleware = (req, res, next) => {
	let role = req.user
	console.log(req.user.isAdmin);
	if (!req.isAuthenticated() || req.user.isAdmin == 0) return res.redirect("/login");
	next();
}

module.exports = isAdminMiddleware;