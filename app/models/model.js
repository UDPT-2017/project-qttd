
const Sequelize = require('sequelize');
const sequelize = require('./../../config/db');

const db = {};

//Models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user');
db.TheLoai = require('./theloai')(sequelize, Sequelize);
db.LoaiTin = require('./loaitin')(sequelize, Sequelize);
db.TinTuc = require('./tintuc')(sequelize, Sequelize);

//Relation
db.TinTuc.belongsTo(db.LoaiTin,{as: 'LoaiTin'});
db.LoaiTin.belongsTo(db.TheLoai,{as: 'TheLoai'});
db.TheLoai.hasMany(db.LoaiTin,{as: 'LoaiTin'});
db.LoaiTin.hasMany(db.TinTuc,{as: 'TinTuc'});

// db.TinTuc.sync();
// db.LoaiTin.sync();
// db.TheLoai.sync();

module.exports = db;