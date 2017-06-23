var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
  		return cb(null, './public/upload')
  	}
    cb("File phải có đuôi là .png, jpeg hoặc jpg");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
})

var upload = multer({ storage: storage });

module.exports = upload;