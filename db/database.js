const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'user',
    password: 'vaibhav'
});

module.exports = pool.promise();