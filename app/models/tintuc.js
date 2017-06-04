const Sequelize = require('sequelize');
var db = require('./../../config/db');
var LoaiTin = require('./loaitin');

const TinTuc = db.define('TinTuc', {
	name: Sequelize.STRING,
	summmary: Sequelize.STRING,
	image: Sequelize.STRING,
	substance: Sequelize.STRING,
	description: Sequelize.STRING,
});

TinTuc.belongsTo(LoaiTin);

// TinTuc.sync();

module.exports = TinTuc;