const Sequelize = require('sequelize');
var db = require('./../../config/db');
var TheLoai = require('./theloai');

const LoaiTin = db.define('LoaiTin', {
	name: Sequelize.STRING,
	description: Sequelize.STRING,
});

LoaiTin.belongsTo(TheLoai);

// LoaiTin.sync();

module.exports = LoaiTin;