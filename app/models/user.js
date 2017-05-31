const Sequelize = require('sequelize');
var db = require('./../../config/db');

const User = db.define('user', {
	username : Sequelize.STRING,
	password : Sequelize.STRING
});

// User.sync();
// User.create({
// 	username: 'nhqtrung',
// 	password: 'tyevtcbye'
// });

module.exports = User;