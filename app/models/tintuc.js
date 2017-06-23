'use strict'

module.exports = (db, Sequelize) => {
	const TinTuc = db.define('TinTuc', {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		summmary: Sequelize.STRING,
		price: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		image: Sequelize.STRING,
		substance: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
	return TinTuc;
}