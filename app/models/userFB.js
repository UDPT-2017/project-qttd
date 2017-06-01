const Sequelize = require('sequelize');
var db = require('./../../config/db');

const User = db.define('userFB', {
	name : Sequelize.STRING,
	email : Sequelize.STRING,
	idFB : Sequelize.STRING,
});

// User.sync();
// User.create({
// 	username: 'nhqtrung',
// 	password: 'tyevtcbye'
// });

module.exports = User;