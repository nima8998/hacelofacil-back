var connection = require("../db/mysql.config");

function GetProductPricesById(req, res) {
	const { id } = req.params;

	try {
		connection.getConnection((err) => {
			if (err) throw err;
			connection.query(
				`
                    SELECT      *
                    FROM        HF_PRICES
                    WHERE       ID_PRODUCT = ${id}
                `,
				(err, data) => {
					if (err) throw err;
					res.send(data);
				}
			);
		});
	} catch (error) {
		throw error;
	}
}

module.exports = GetProductPricesById;
