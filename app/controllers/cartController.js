var Model = require('./../models/model');

var cartController = {
	add: (req, res) => {
		let id = req.params.id;
  		let cart = new Model.Cart(req.session.cart ? req.session.cart : {});
 		Model.TinTuc.findById(id)
 		.then(tintuc => {
 			cart.add(tintuc, tintuc.id);
		    req.session.cart = cart;
		    res.redirect('/home');
 		})

	},
	reduce: (req, res) => {

	},
	remove: (req,res) => {

	},
	getCart: (req, res) => {
		if (!req.session.cart) {
		    return res.render('user/shopping-cart', {
		      tintucs: null
		    });
		}
		var cart = new Cart(req.session.cart);
		res.render('user/shopping-cart', {
		    tintucs: cart.generateArray(),
		    totalPrice: cart.totalPrice
		});
	},
 }

module.exports = cartController;