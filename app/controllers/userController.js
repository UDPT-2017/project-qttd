var Model = require('./../models/model');

var UserController = {
	getThemTinTuc: (req, res) => {
		let success = req.flash("success")
		Model.LoaiTin.findAll()
		.then(arrLoaiTin => res.render("page/user/themtin",{LoaiTins: arrLoaiTin, success: success}))
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
			.then((arrLoaiTin) =>{res.render("page/user/suatin", {tintuc: tintuc, LoaiTins: arrLoaiTin, success: success})})
			
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
	}


}

module.exports = UserController;
