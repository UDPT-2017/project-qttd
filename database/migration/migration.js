const db = require("./../../app/models/model");

db.User.local.sync()
.then(() => db.LoaiTin.sync())
.then(() => db.TinTuc.sync())
.then(() => db.HoaDon.sync())
.then(() => db.ChiTietDatHang.sync())