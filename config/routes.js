var Controller = require('./../app/controllers/Controller');
var upload = require('./upload');

module.exports = (app) => {
	app.get("/login", Controller.Home.getLogin);

	app.post('/login', Controller.Home.postLogin);
		
	app.get("/home", Controller.Home.getHome)

	app.post("/register", Controller.Home.postRegister);

	app.get("/login/facebook", Controller.Home.getLoginFB);

	app.get("/login/facebook/cb", Controller.Home.callbackLoginFB);

	// Xử lý của user 
	// Danh sách tin tức
	app.get("/user/danhsach/:id", Controller.User.getDanhSachTinTuc);


	//Thêm tin tức
	app.get("/user", Controller.User.getThemTinTuc);

	app.post("/user", Controller.User.postThemTinTuc);
	//Sửa tin tức
	app.get("/user/:id", Controller.User.getSuaTinTuc);

	app.post("/user/:id", Controller.User.postSuaTinTuc);
	//Xóa Tin tức
	app.get("/user/xoa/:id", Controller.User.getXoaTinTuc);
	//Tìm kiếm Tin Tức
	// app.get("/user/timid", Controller.User.getTimTinTuc);

	
	//Loại Tin Controller
	app.get("/admin/loaitin/danhsach", Controller.LoaiTin.getDSLoaiTin);

	app.get("/admin/loaitin/them", Controller.LoaiTin.getThemLoaiTin);

	app.post("/admin/loaitin/them", Controller.LoaiTin.postThemLoaiTin);

	app.get("/admin/loaitin/:id", Controller.LoaiTin.getSuaLoaiTin);

	app.post("/admin/loaitin/:id", Controller.LoaiTin.postSuaLoaiTin);

	app.get("/admin/loaitin/xoa/:id", Controller.LoaiTin.getXoaLoaiTin);	


	//Tin Tức Controller
	app.get("/admin/tintuc/danhsach", Controller.TinTuc.getDSTinTuc);

	app.get("/admin/tintuc/them", Controller.TinTuc.getThemTinTuc);

	app.post("/admin/tintuc/them", upload.single("image"), Controller.TinTuc.postThemTinTuc);

	app.get("/admin/tintuc/:id", Controller.TinTuc.getSuaTinTuc);

	app.post("/admin/tintuc/:id", Controller.TinTuc.postSuaTinTuc);

	app.get("/admin/tintuc/xoa/:id", Controller.TinTuc.getXoaTinTuc);

	//Giỏ Hàng
	app.get("/add/:id", Controller.Cart.add);
	app.get("/cart", Controller.Cart.getCart);
}