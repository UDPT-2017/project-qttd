'use strict'

<<<<<<< HEAD
const TinTuc = db.define('TinTuc', {
	name: Sequelize.STRING,
	summmary: Sequelize.STRING,
	image: Sequelize.STRING,
	substance: Sequelize.STRING,
	description: Sequelize.STRING,
});

TinTuc.belongsTo(LoaiTin);

TinTuc.sync();

module.exports = TinTuc;
=======
module.exports = (db, Sequelize) => {
	const TinTuc = db.define('TinTuc', {
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		summmary: Sequelize.STRING,
		image: Sequelize.STRING,
		substance: {
			type: Sequelize.STRING,
			allowNull: false
		},
	});
	return TinTuc;
}
>>>>>>> 20762b70ecbfaf182b822cb73931e0d00f2e8f48
