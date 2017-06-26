var Controller = require('./../app/controllers/Controller');
var upload = require('./upload');

module.exports = (app, csrfProtection) => {
	app.get("/login", Controller.Home.getLogin);

	app.post('/login', Controller.Home.postLogin);
		
	app.get("/home", Controller.Home.getHome)

	app.post("/register", Controller.Home.postRegister);

	app.get("/login/facebook", Controller.Home.getLoginFB);

	app.get("/login/facebook/cb", Controller.Home.callbackLoginFB);

<<<<<<< HEAD
	// Xử lý của user 
	// Danh sách tin tức
	app.get("/user/danhsach/:id", Controller.User.getDanhSachTinTuc);


	//Thêm tin tức
	app.get("/user", Controller.User.getThemTinTuc);
=======
	app.get("/findproducts", Controller.Home.getFindProducts);
>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7


<<<<<<< HEAD
	app.post("/user/:id", Controller.User.postSuaTinTuc);
	//Xóa Tin tức
	app.get("/user/xoa/:id", Controller.User.getXoaTinTuc);
	//Tìm kiếm Tin Tức
	// app.get("/user/timid", Controller.User.getTimTinTuc);

	
	//Loại Tin Controller
	app.get("/admin/loaitin/danhsach", Controller.LoaiTin.getDSLoaiTin);
=======
	//Loại Tin Controller
	app.get("/admin/loaitin/danhsach", Controller.LoaiTin.getDSLoaiTin);

	app.get("/admin/loaitin/them", csrfProtection, Controller.LoaiTin.getThemLoaiTin);

	app.post("/admin/loaitin/them", csrfProtection, Controller.LoaiTin.postThemLoaiTin);

	app.get("/admin/loaitin/:id", csrfProtection, Controller.LoaiTin.getSuaLoaiTin);

	app.post("/admin/loaitin/:id", csrfProtection, Controller.LoaiTin.postSuaLoaiTin);

	app.get("/admin/loaitin/xoa/:id", Controller.LoaiTin.getXoaLoaiTin);	


	//Tin Tức Controller
	app.get("/admin/tintuc/danhsach", Controller.TinTuc.getDSTinTuc);
>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7

	app.get("/admin/tintuc/them", [csrfProtection], Controller.TinTuc.getThemTinTuc);

	app.post("/admin/tintuc/them", [upload.single("image")], Controller.TinTuc.postThemTinTuc);

	app.get("/admin/tintuc/:id", csrfProtection, Controller.TinTuc.getSuaTinTuc);

	app.post("/admin/tintuc/:id", csrfProtection, Controller.TinTuc.postSuaTinTuc);

	app.get("/admin/tintuc/xoa/:id", Controller.TinTuc.getXoaTinTuc);

	//Giỏ Hàng
	app.get("/add/:id", Controller.Cart.add);

	app.get("/reduce/:id", Controller.Cart.reduce);

	app.get("/remove/:id", Controller.Cart.remove);

<<<<<<< HEAD
	app.post("/admin/tintuc/them", upload.single("image"), Controller.TinTuc.postThemTinTuc);
=======
	app.get("/cart", Controller.Cart.getCart);
>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7

	app.get("/dathang", Controller.Cart.getDatHang);

	app.post("/dathang", Controller.Cart.postDatHang);

<<<<<<< HEAD
	app.get("/admin/tintuc/xoa/:id", Controller.TinTuc.getXoaTinTuc);

	//Giỏ Hàng
	app.get("/add/:id", Controller.Cart.add);
	app.get("/cart", Controller.Cart.getCart);
=======
	// app.delete("/admin/tintuc/:id", Controller.TinTuc.getXoaTinTuc);
>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7
}