'use strict'

module.exports = (db, Sequelize) => {
	const LoaiTin = db.define('LoaiTin', {
		name :{
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		description: Sequelize.STRING,
	});

	return LoaiTin;
}