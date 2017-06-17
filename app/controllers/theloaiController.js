var Model = require('./../models/model');
var passport = require('passport');
require('./../../config/passport')(passport);

var TheLoaiController = {
	getDSTheLoai: (req, res) => {
		Model.TheLoai.findAll()
		.then(arrTheLoai => res.render("admin/theloai/danhsach",{TheLoais: arrTheLoai}))
	},
	getThemTheLoai: (req, res) => {
		let err = req.flash("err");
		let success = req.flash("success");
		res.render("admin/theloai/them",{err: err , success: success})
	},
	postThemTheLoai: (req, res) => {
		let name = req.body.name;
		let description = req.body.description;
		// console.log(name + "  " + description);
		const theloai = Model.TheLoai.build({
			name: name, 
			description: description
		});
		theloai.save()
		.then(() => {
			req.flash("success","Thêm Thành Công");
			res.redirect("/admin/theloai/them");
		})
		.catch(err => {
			req.flash("err", err);
			res.redirect("/admin/theloai/them");
		})
	},
	getSuaTheLoai: (req, res) => {
		let id = req.params.id;
		let err = req.flash("err");
		let success = req.flash("success");
		Model.TheLoai.findById(id)
		.then(TheLoai => res.render("admin/theloai/sua",{err: err , success: success, TheLoai: TheLoai}))
	},
	postSuaTheLoai: (req, res) => {
		let id = req.params.id;
		let name = req.body.name;
		let description = req.body.description;


		Model.TheLoai.update({
			name: name,
			description: description
		},{
			where: {
				id: id
			}		
		})
		.then(() => {
			req.flash("success","Sửa Thành Công");
			res.redirect("/admin/theloai/" + id);
		})
		.catch(err => {
			req.flash("err", err);
			res.redirect("/admin/theloai/" + id);			
		})

	},
	getXoaTheLoai: (req, res) => {
		let id = req.params.id;
		Model.TheLoai.destroy({
			where: {id: id}
		})
		.then(() => {
			req.flash("success","Xóa Thành Công");
			res.redirect("/admin/theloai/danhsach");			
		})
		.catch((err) => {
			req.flash("err", err);
			res.redirect("/admin/theloai/danhsach");	
		})
	},
}

module.exports = TheLoaiController;