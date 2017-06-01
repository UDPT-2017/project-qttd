const Sequelize = require('sequelize');
var db = require('./../../config/db');

const User = {
	local: db.define('user', {
		username : Sequelize.STRING,
		password : Sequelize.STRING
	}),
	facebook: db.define('userFB', {
		name : Sequelize.STRING,
		email : Sequelize.STRING,
		idFB : Sequelize.STRING,
	}),
}

// User.facebook.sync();
// User.sync();
// User.create({
// 	username: 'nhqtrung',
// 	password: 'tyevtcbye'
// });
	findUser: (id, classUser, callback) => {
		classUser.findById(id)
		.then( user => callback(undefined, user))
		.catch( err => callback(err))
	}

module.exports = User;