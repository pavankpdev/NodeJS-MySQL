
// Libraries
import mysql from "mysql";
import dotenv from "dotenv";

// Config
dotenv.config();

// DB connection Instance
const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    timeout: 60000,
});

module.exports = { mysqlConnection };
