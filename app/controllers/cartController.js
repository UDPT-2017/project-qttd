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
	getDatHang: (req,res) => {
		var cart = new Model.Cart(req.session.cart);
		var user = req.user;
		console.log(user);
		res.render('user/thanhtoan',{
			user: user,
			TinTucs: cart.generateArray(),
			totalPrice: cart.totalPrice,
		});
	},
	postDatHang: (req, res) => {
		let DiaChiGiaoHang = req.body.address;
		let GiaTriHoaDon = req.body.totalPrice;
		let UserId = req.body.userid;
		let TinhTrangDonHang = 0;
		Model.HoaDon.build({
			DiaChiGiaohang: DiaChiGiaoHang,
			GiaTriHD: GiaTriHoaDon,
			UserId: UserId,
			TinhTrangDonHang: TinhTrangDonHang,
		})
		.save()
		.then((hoadon) => {
			var cart = new Model.Cart(req.session.cart);
			cart = cart.generateArray();
			cart.forEach(item => {
				let SoLuong = item.qty;
				let DonGia = item.price;
				let HoaDonId = hoadon.id;
				let TinTucId = item.item.id;
				Model.ChiTietDatHang.build({
					SoLuong: SoLuong,
					DonGia: DonGia,
					HoaDonId: HoaDonId,
					TinTucId: TinTucId
				})	
				.save()
				.then(() => console.log("saved"))
			})
			req.session.cart = {};
			res.redirect("/home");
		})
	}
 }

module.exports = cartController;