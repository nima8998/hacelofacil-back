var mysql = require("mysql2");
var connection = mysql.createPool({
	connectionLimit: 9999999,
	host: "localhost",
	user: "root",
	password: "root",
	database: "hacelofacil_db",
});

module.exports = connection;
