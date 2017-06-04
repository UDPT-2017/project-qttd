const Sequelize = require('sequelize');

const db = new Sequelize({
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


module.exports = db;