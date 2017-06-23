
const Sequelize = require('sequelize');
const sequelize = require('./../../config/db');

const db = {};

//Models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user');
db.LoaiTin = require('./loaitin')(sequelize, Sequelize);
db.TinTuc = require('./tintuc')(sequelize, Sequelize);
db.ChiTietDatHang = require('./chitietdathang')(sequelize, Sequelize);
db.HoaDon = require('./hoadon')(sequelize, Sequelize);
db.Cart = require('./cart');

//Relation
	// references LoaiTin & TinTuc
db.TinTuc.belongsTo(db.LoaiTin,{as: 'LoaiTin'});
db.LoaiTin.hasMany(db.TinTuc,{as: 'TinTuc'});
	// references TheLoai & LoaiTin
	// references TinTuc & User
db.TinTuc.belongsTo(db.User.local,{as: 'User'});
db.User.local.hasMany(db.TinTuc,{as: 'TinTuc'});

db.HoaDon.belongsTo(db.User.local,{as: 'User'});
db.User.local.hasMany(db.HoaDon,{as: 'HoaDon'});

db.ChiTietDatHang.belongsTo(db.HoaDon,{as: 'HoaDon'});
db.ChiTietDatHang.belongsTo(db.TinTuc,{as: 'TinTuc'});

db.HoaDon.hasMany(db.ChiTietDatHang,{as: 'ChiTietDatHang'});
db.TinTuc.hasMany(db.ChiTietDatHang,{as: 'ChiTietDatHang'});






// db.TheLoai.sync();

module.exports = db;