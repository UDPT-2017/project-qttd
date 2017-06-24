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

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = db;