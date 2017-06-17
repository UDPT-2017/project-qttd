var Model = require('./../models/model');

var TinTucController = {
	getDSTinTuc: (req, res) => {
		Model.TinTuc.findAll({
  			include: [{
  				model: Model.LoaiTin,
  				as: 'LoaiTin'
  			}]			
		})
		.then(arrTinTuc => res.render("admin/tintuc/danhsach",{TinTucs: arrTinTuc}))
	},
	getThemTinTuc: (req, res) => {
		let err = req.flash("err");
		let success = req.flash("success");
		Model.LoaiTin.findAll()
		.then(arrLoaiTin => res.render("admin/tintuc/them",{err: err, success: success, LoaiTins: arrLoaiTin}))
	},
	postThemTinTuc: (req, res) => {
		let name = req.body.name;
		let summmary = req.body.summmary;
		let substance = req.body.substance;
		let idLoaiTin = req.body.loaitin
		const tintuc = Model.TinTuc.build({
			name: name,
			summmary: summmary,
			substance: substance,
			LoaiTinId: idLoaiTin
		});
		tintuc.save()
		.then(() => {
			req.flash("success","Thêm Thành Công");
			res.redirect("/admin/tintuc/them");
		})
		.catch(err=> {
			req.flash("err", err + "");
			res.redirect("/admin/tintuc/them");
		})
	},
	getSuaTinTuc: (req, res) => {
		let id = req.params.id;
		let err = req.flash("err");
		let success = req.flash("success");
		Model.TinTuc.findById(id,{
  			include: [{
  				model: Model.LoaiTin,
  				as: 'LoaiTin'
  			}]
		})
		.then(TinTuc => {
			Model.LoaiTin.findAll()
			.then(LoaiTins => res.render("admin/tintuc/sua",{err: err , success: success, TinTuc: TinTuc, LoaiTins: LoaiTins}))
		})
	},
	postSuaTinTuc: (req, res) => {
		let id = req.params.id;
		let name = req.body.name;
		let summmary = req.body.summmary;
		let substance = req.body.substance;
		let idLoaiTin = req.body.loaitin;

		Model.TinTuc.update({
			name: name,
			summmary: summmary,
			substance: substance,
			LoaiTinId: idLoaiTin
		},{
			where: {
				id: id
			}		
		})
		.then(() => {
			req.flash("success","Sửa Thành Công");
			res.redirect("/admin/tintuc/" + id);
		})
		.catch(err => {
			req.flash("err", err);
			res.redirect("/admin/tintuc/" + id);			
		})
	},
	getXoaTinTuc: (req, res) => {
		let id = req.params.id;
		Model.TinTuc.destroy({
			where: {id: id}
		})
		.then(() => {
			req.flash("success","Xóa Thành Công");
			res.redirect("/admin/tintuc/danhsach");			
		})
		.catch((err) => {
			req.flash("err", err);
			res.redirect("/admin/tintuc/danhsach");	
		})
	},
}

module.exports = TinTucController;