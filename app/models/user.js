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





module.exports = User;