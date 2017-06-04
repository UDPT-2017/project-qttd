const Sequelize = require('sequelize');
var db = require('./../../config/db');


const TheLoai = db.define('TheLoai', {
	name : Sequelize.STRING,
	description: Sequelize.STRING,

})
// TheLoai.sync();
// TheLoai.create({
// 	name: 'Trong Nuoc',
// 	description: 'Trong Nuoc'
// });
// TheLoai.create({
// 	name: 'Ngoai Nuoc',
// 	description: 'Ngoai Nuoc'
// });
// TheLoai.create({
// 	name: 'Nuoc Ngoai',
// 	description: 'Nuoc Ngoai'
// });
module.exports = TheLoai;