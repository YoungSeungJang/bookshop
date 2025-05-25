// Get the client
const mysql = require('mysql2');

// Create the connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Bookshop',
  password: 'root',
  dateStrings: true,
});


module.exports = connection;
