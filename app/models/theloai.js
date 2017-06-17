<<<<<<< HEAD
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
=======
'use strict'

module.exports = (db, Sequelize) => {
	const TheLoai = db.define('TheLoai', {
		name : {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		description: Sequelize.STRING,
	})
	return TheLoai;
}
>>>>>>> 20762b70ecbfaf182b822cb73931e0d00f2e8f48
