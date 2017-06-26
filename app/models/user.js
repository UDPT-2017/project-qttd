const Sequelize = require('sequelize');
var db = require('./../../config/db');

const User = {
	local: db.define('user', {
		username: {
			type: Sequelize.STRING,
			unique: true
		},
		password: {
			type: Sequelize.STRING
		},
		isAdmin: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		}
	}),
	facebook: db.define('userFB', {
		name : Sequelize.STRING,
		email : Sequelize.STRING,
		idFB : {
			type: Sequelize.STRING,
			unique: true
		}
	}),
}



<<<<<<< HEAD
// User.facebook.sync();
// User.local.sync();
// // User.create({
// // 	username: 'nhqtrung',
// // 	password: 'tyevtcbye'
// // });
// 	findUser: (id, classUser, callback) => {
// 		classUser.findById(id)
// 		.then( user => callback(undefined, user))
// 		.catch( err => callback(err))
// 	}
=======

>>>>>>> 6f2d71a14efd47f7aae36be3f1a80b46117b30c7

module.exports = User;