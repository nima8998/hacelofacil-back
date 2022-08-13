var connection = require("../db/mysql.config");

function MethodTransf(req, res) {
	const { body } = req;
	try {
		res.status(200).send(body);
		// connection.getConnection((err) => {
		// 	if (err) throw err;
		// 	connection.query(`SELECT * FROM HF_CATEGORIES`, (err, data) => {
		// 		if (err) throw err;
		// 		res.send(data);
		// 	});
		// });
	} catch (error) {
		throw error;
	}
}

module.exports = MethodTransf;
