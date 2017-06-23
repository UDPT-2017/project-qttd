'use strict'

module.exports = (db, Sequelize) => {
	const LoaiTin = db.define('HoaDon', {
		TinhTrangDonHang: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		DiaChiGiaohang: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		GiaTriHD: {
			type: Sequelize.INTEGER,
			allowNull:false,
		}
	});

	return LoaiTin;
}