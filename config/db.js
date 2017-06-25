const Sequelize = require('sequelize');



if (process.env.DATABASE_URL) {
	var db = new Sequelize('postgres://ibtosxmtszgjoa:92e288dff5458cf606c6195247300d5833f72bacbbad587c8593d8974c1d6dff@ec2-23-21-246-11.compute-1.amazonaws.com:5432/d93hov3r1e8ibj');
}
else{
	var db = new Sequelize({
	  database : 'Nodejs',
	  username : 'postgres',
	  password : 'tyevtcbye',
	  host     : 'localhost',
	  port     : 5432,
	  dialect  : 'postgres',
	  define   : {
	    freezeTableName : true
	  }
	})
}


module.exports = db;