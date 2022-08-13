var connection = require("../db/mysql.config");

function GetProductsByCategory(req, res) {
	const { id } = req.params;

	try {
		connection.getConnection((err) => {
			if (err) throw err;
			connection.query(
				`
                    SELECT  	*,
								C.PATH_IMG
                    FROM    	HF_PRODUCTS P
					LEFT JOIN	HF_CATEGORIES C 
					ON 			P.ID_CATEGORY_PRODUCT = C.ID_CATEGORY
                    WHERE   	ID_CATEGORY_PRODUCT = ${id}
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

module.exports = GetProductsByCategory;
