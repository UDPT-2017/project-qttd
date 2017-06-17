var isAdminMiddleware = (req, res, next) => {
	if (!req.isAuthenticated()) return res.redirect("/login");
	let role = req.user
	console.log(role);
	// if (typeof req.user.isAdmin == 'undefined' || req.user.isAdmin == 0) {
	// 	return res.redirect("/home");
	// }
	return next();
}

module.exports = isAdminMiddleware;