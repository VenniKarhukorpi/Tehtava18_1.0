const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jeppex12345',
  database: 'db_ihan_kiva'
});
module.exports = connection;