var Controller = require('./../app/controllers/Controller');
var upload = require('./upload');

module.exports = (app, csrfProtection) => {
	app.get("/login", Controller.Home.getLogin);

	app.post('/login', Controller.Home.postLogin);
		
	app.get("/home", Controller.Home.getHome)

	app.post("/register", Controller.Home.postRegister);

	app.get("/login/facebook", Controller.Home.getLoginFB);

	app.get("/login/facebook/cb", Controller.Home.callbackLoginFB);

	app.get("/findproducts", Controller.Home.getFindProducts);


	//Loại Tin Controller
	app.get("/admin/loaitin/danhsach", Controller.LoaiTin.getDSLoaiTin);

	app.get("/admin/loaitin/them", csrfProtection, Controller.LoaiTin.getThemLoaiTin);

	app.post("/admin/loaitin/them", csrfProtection, Controller.LoaiTin.postThemLoaiTin);

	app.get("/admin/loaitin/:id", csrfProtection, Controller.LoaiTin.getSuaLoaiTin);

	app.post("/admin/loaitin/:id", csrfProtection, Controller.LoaiTin.postSuaLoaiTin);

	app.get("/admin/loaitin/xoa/:id", Controller.LoaiTin.getXoaLoaiTin);	


	//Tin Tức Controller
	app.get("/admin/tintuc/danhsach", Controller.TinTuc.getDSTinTuc);

	app.get("/admin/tintuc/them", csrfProtection, Controller.TinTuc.getThemTinTuc);

	app.post("/admin/tintuc/them", csrfProtection, upload.single("image"), Controller.TinTuc.postThemTinTuc);

	app.get("/admin/tintuc/:id", csrfProtection, Controller.TinTuc.getSuaTinTuc);

	app.post("/admin/tintuc/:id", csrfProtection, Controller.TinTuc.postSuaTinTuc);

	app.get("/admin/tintuc/xoa/:id", Controller.TinTuc.getXoaTinTuc);

	//Giỏ Hàng
	app.get("/add/:id", Controller.Cart.add);

	app.get("/reduce/:id", Controller.Cart.reduce);

	app.get("/remove/:id", Controller.Cart.remove);

	app.get("/cart", Controller.Cart.getCart);

	app.get("/dathang", Controller.Cart.getDatHang);

	app.post("/dathang", Controller.Cart.postDatHang);

	// app.delete("/admin/tintuc/:id", Controller.TinTuc.getXoaTinTuc);
}