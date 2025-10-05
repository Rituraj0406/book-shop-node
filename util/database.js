const Sequelize = require('sequelize');

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'rootuser'
// });

// module.exports = pool.promise();

const sequelize = new Sequelize('node-complete', 'root', 'rootuser', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;