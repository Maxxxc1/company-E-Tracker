const mysql = require('mysql2');
require('dotenv').config();


const password = process.env.PASSWORD

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
//   database: 'crusader_db'
});

module.exports = connection;