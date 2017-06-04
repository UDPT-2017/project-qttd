const Sequelize = require('sequelize');
var db = require('./../../config/db');


const TheLoai = db.define('TheLoai', {
	name : Sequelize.STRING,
	description: Sequelize.STRING,

})
// TheLoai.sync();

module.exports = TheLoai;