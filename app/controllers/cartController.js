var Model = require('./../models/model');

var cartController = {
	add: (req, res) => {
		let id = req.params.id;
  		let cart = new Model.Cart(req.session.cart ? req.session.cart : {});
 		Model.TinTuc.findById(id)
 		.then(tintuc => {
 			cart.add(tintuc, tintuc.id);
		    req.session.cart = cart;
		    console.log(cart.generateArray());
		    res.send(cart);
 		})

	},
	reduce: (req, res) => {
		var id = req.params.id;
		var cart = new Model.Cart(req.session.cart ? req.session.cart : {})	
		cart.reduceByOne(id);
		req.session.cart = cart;
		res.send(cart);
	},
	remove: (req,res) => {
		var id = req.params.id;
		var cart = new Model.Cart(req.session.cart ? req.session.cart : {});
		cart.removeItem(id);
		req.session.cart = cart;
		res.send(cart);
	},
	getCart: (req, res) => {
		if (!req.session.cart) {
		    return res.render('user/cart', {
		      tintucs: null
		    });
		}
		var cart = new Model.Cart(req.session.cart);
		res.render('user/cart', {
		    TinTucs: cart.generateArray(),
		    totalPrice: cart.totalPrice
		});
	},
 }

module.exports = cartController;