var Model = require('./../models/model');

var UserController = {
	getDanhSachTinTuc: (req, res) => {
		let id = req.params.id
		Model.TinTuc.findAll({
			where: {UserId: id}
		})
		.then(arrTinTuc => res.render("user/danhsachtin",{TinTucs: arrTinTuc}))
	},
	getThemTinTuc: (req, res) => {
		let success = req.flash("success")
		Model.LoaiTin.findAll()
		.then(arrLoaiTin => res.render("user/themtin",{LoaiTins: arrLoaiTin, success: success}))
	},
	postThemTinTuc: (req, res) => {
		let name= req.body.name;
		let summmary= req.body.summmary;
		let substance= req.body.substance;
		let LoaiTinId = req.body.loaitin;
		Model.TinTuc.build({name: name, summmary: summmary, substance: substance, LoaiTinId: LoaiTinId})
		.save()
		.then(() => {
			req.flash("success", "Bạn đã đăng tin thành công")
			res.redirect("/user")
		})
	},
	getSuaTinTuc: (req, res) => {
		let success = req.flash("success")
		let id = req.params.id
		Model.TinTuc.findById(id)
		.then((tintuc) => {
			Model.LoaiTin.findAll()
			.then((arrLoaiTin) =>{res.render("user/suatin", {tintuc: tintuc, LoaiTins: arrLoaiTin, success: success})})
			
		})
	},
	postSuaTinTuc: (req,res) => {
		let id = req.params.id;
		let name = req.body.name;
		let summmary = req.body.summmary;
		let substance = req.body.substance;
		let LoaiTinId = req.body.loaitin;
		Model.TinTuc.update({
			name: name, summmary: summmary, substance: substance, LoaiTinId: LoaiTinId
		},{
			where:{
				id: id
			} 		
		})
		.then(() => {
			req.flash("success", "Bạn đã sửa tin thành công")
			res.redirect("/user/" + id)})
	},
	getXoaTinTuc: (req, res) => {
		let id = req.params.id;
		let name = req.body.name;
		let summmary = req.body.summmary;
		let substance = req.body.substance;
		let LoaiTinId = req.body.loaitin;
		Model.TinTuc.destroy({
			where:{ 
				id: id
			}
		})
		.then(() => {
			req.flash("success","Xóa Tin Thành Công");
			res.redirect("/user");
		})
	}
	// getTimTinTuc: (req, res) => {
		
	// }


}

module.exports = UserController;
