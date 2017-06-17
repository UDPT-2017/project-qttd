const Sequelize = require('sequelize');

const db = new Sequelize({
  database : 'nodejs',
  username : 'postgres',
  password : '12345',
  host     : 'localhost',
  port     : 5432,
  dialect  : 'postgres',
  define   : {
    freezeTableName : true
  }
})


module.exports = db;