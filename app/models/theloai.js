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
