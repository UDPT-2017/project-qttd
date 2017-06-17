var Model = require('./../models/model');

var LoaiTinController = {
	getDSLoaiTin: (req, res) => {
		Model.LoaiTin.findAll({
  			include: [{
  				model: Model.TheLoai,
  				as: 'TheLoai'
  			}]
		})
		.then(arrLoaiTin => res.render("admin/loaitin/danhsach",{LoaiTins: arrLoaiTin}))
	},
	getThemLoaiTin: (req, res) => {
		let err = req.flash("err");
		let success = req.flash("success");
		Model.TheLoai.findAll()
		.then(arrTheLoai => res.render("admin/loaitin/them",{err: err, success: success, TheLoais: arrTheLoai}))
	},
	postThemLoaiTin: (req, res) => {
		let name = req.body.name;
		let description = req.body.description;
		let idTheLoai = req.body.theloai;
		const loaitin = Model.LoaiTin.build({
			name: name,
			description: description,
			TheLoaiId: idTheLoai
		});
		loaitin.save()
		.then(() => {
			req.flash("success","Thêm Thành Công");
			res.redirect("/admin/loaitin/them");
		})
		.catch(err=> {
			req.flash("err", err);
			res.redirect("/admin/loaitin/them");
		})
	},
	getSuaLoaiTin: (req, res) => {
		let id = req.params.id;
		let err = req.flash("err");
		let success = req.flash("success");
		Model.LoaiTin.findById(id, {
  			include: [{
  				model: Model.TheLoai,
  				as: 'TheLoai'
  			}]
		})
		.then(LoaiTin => {
			Model.TheLoai.findAll()
			.then((TheLoais) => res.render("admin/loaitin/sua",{err: err , success: success, LoaiTin: LoaiTin, TheLoais: TheLoais}))
		})
	},
	postSuaLoaiTin: (req, res) => {
		let id = req.params.id;
		let name = req.body.name;
		let description = req.body.description;
		let idTheLoai = req.body.theloai;

		Model.LoaiTin.update({
			name: name,
			description: description,
			TheLoaiId: idTheLoai
		},{
			where: {
				id: id
			}		
		})
		.then(() => {
			req.flash("success","Sửa Thành Công");
			res.redirect("/admin/loaitin/" + id);
		})
		.catch(err => {
			req.flash("err", err);
			res.redirect("/admin/loaitin/" + id);			
		})
	},
	getXoaLoaiTin: (req, res) => {
		let id = req.params.id;
		Model.LoaiTin.destroy({
			where: {id: id}
		})
		.then(() => {
			req.flash("success","Xóa Thành Công");
			res.redirect("/admin/loaitin/danhsach");			
		})
		.catch((err) => {
			req.flash("err", err);
			res.redirect("/admin/loaitin/danhsach");	
		})
	},
}

module.exports = LoaiTinController;