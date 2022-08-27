var connection = require("../db/mysql.config");

function getCategories(req, res) {
	try {
		connection.getConnection((err) => {
			if (err) throw err;
			connection.query(`SELECT * FROM HF_CATEGORIES`, (err, data) => {
				if (err) throw err;
				res.send(data);
			});
		});
	} catch (error) {
		throw error;
	}
}

module.exports = getCategories;
