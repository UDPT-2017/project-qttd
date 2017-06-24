
var isAdminMiddleware = (req, res, next) => {
	let role = req.user
	if (!req.isAuthenticated()) return res.redirect("/login");
	return next();
}

module.exports = isAdminMiddleware;