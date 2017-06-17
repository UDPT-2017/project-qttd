var Controller = require('./../app/controllers/Controller');

module.exports = (app) => {
	app.get("/login", Controller.Home.getLogin);

	app.post('/login', Controller.Home.postLogin);
		
	app.get("/home", Controller.Home.getHome);

	app.post("/register", Controller.Home.postRegister);

	app.get("/login/facebook", Controller.Home.getLoginFB);

	app.get("/login/facebook/cb", Controller.Home.callbackLoginFB);

	app.get("/login/google", Controller.Home.getloginGG);

	app.get("/login/google/cb", Controller.Home.callbackloginGG);

// d m thang sida
// nãy mày viết hoa chữ L
	//Thể Loại Controller
	app.get("/admin/theloai/danhsach", Controller.TheLoai.getDSTheLoai);

	app.get("/admin/theloai/them", Controller.TheLoai.getThemTheLoai);

	app.post("/admin/theloai/them", Controller.TheLoai.postThemTheLoai);

	app.get("/admin/theloai/:id", Controller.TheLoai.getSuaTheLoai);

	app.post("/admin/theloai/:id", Controller.TheLoai.postSuaTheLoai);

	app.get("/admin/theloai/xoa/:id", Controller.TheLoai.getXoaTheLoai);


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

	app.post("/admin/tintuc/them", Controller.TinTuc.postThemTinTuc);

	app.get("/admin/tintuc/:id", Controller.TinTuc.getSuaTinTuc);

	app.post("/admin/tintuc/:id", Controller.TinTuc.postSuaTinTuc);

	app.get("/admin/tintuc/xoa/:id", Controller.TinTuc.getXoaTinTuc);
}