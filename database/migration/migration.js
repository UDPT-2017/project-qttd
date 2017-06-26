const db = require("./../../app/models/model");

db.User.local.sync({force: true})
.then(() => db.LoaiTin.sync({force: true}))
.then(() => db.TinTuc.sync({force: true}))
.then(() => db.HoaDon.sync({force: true}))
.then(() => db.ChiTietDatHang.sync({force: true}))