<<<<<<< HEAD
const Sequelize = require('sequelize');
var db = require('./../../config/db');
var TheLoai = require('./theloai');

const LoaiTin = db.define('LoaiTin', {
	name: Sequelize.STRING,
	description: Sequelize.STRING,
});

LoaiTin.belongsTo(TheLoai);

LoaiTin.sync();

module.exports = LoaiTin;
=======
'use strict'

module.exports = (db, Sequelize) => {
	const LoaiTin = db.define('LoaiTin', {
		name : {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		description: Sequelize.STRING,
	});

	return LoaiTin;
}	
>>>>>>> 20762b70ecbfaf182b822cb73931e0d00f2e8f48
