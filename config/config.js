const mysql = require('mysql2');
const express = require('express');


const dbConfig = {
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root',// Replace with your MySQL password
    database: 'store_db', // Replace with your database name
};

const pool = mysql.createConnection(dbConfig); //THERE HAD A SPACE  mysql. createConnection
module.exports = pool;