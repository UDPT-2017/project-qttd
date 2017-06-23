'use strict'

module.exports = (db, Sequelize) => {
	const LoaiTin = db.define('ChiTietDatHang', {
		SoLuong : {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		DonGia: {
			type: Sequelize.STRING,
			allowNull: false,
		}
	});

	return LoaiTin;
}