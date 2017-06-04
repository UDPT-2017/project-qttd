const Sequelize = require('sequelize');
var db = require('./../../config/db');

const User = {
	local: db.define('user', {
		username : {
			type: Sequelize.STRING,
			unique: true
		},
		password : Sequelize.STRING
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



// // User.facebook.sync();
// // User.local.sync();
// // User.create({
// // 	username: 'nhqtrung',
// // 	password: 'tyevtcbye'
// // });
// 	findUser: (id, classUser, callback) => {
// 		classUser.findById(id)
// 		.then( user => callback(undefined, user))
// 		.catch( err => callback(err))
// 	}

module.exports = User;