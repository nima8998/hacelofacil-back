var connection = require("../db/mysql.config");

function getProductDetailById(req, res) {
	const { id } = req.params;
	try {
		connection.getConnection((err) => {
			if (err) throw err;
			connection.query(
				`
                    SELECT      PRODUCT.ID_PRODUCT id_product,
								PRODUCT.PRODUCT_NAME product_name,
								PRODUCT.PRODUCT_DESCRIPTION product_description,
								PRODUCT.ID_MEASSURE_1 id_meassure_1,
								PRODUCT.ID_MEASSURE_2 id_meassure_2,
								PRODUCT.ID_MEASSURE_3 id_meassure_3,
								CATEGORY.NAME name,
								CATEGORY.PATH_IMG path_img,
								PRODUCT.HAS_STANDARD_MEASSURES has_standard_meassures,
								(SELECT DESCRIPTION FROM HF_MEASSURES WHERE ID_MEASSURE = PRODUCT.ID_MEASSURE_1) AS 'meassure_1',
								(SELECT DESCRIPTION FROM HF_MEASSURES WHERE ID_MEASSURE = PRODUCT.ID_MEASSURE_2) AS 'meassure_2',
								(SELECT DESCRIPTION FROM HF_MEASSURES WHERE ID_MEASSURE = PRODUCT.ID_MEASSURE_3) AS 'meassure_3',
								(SELECT GROUP_CONCAT(COLORS.COLOR_NAME)) color_name
					FROM        HF_PRODUCTS PRODUCT
					LEFT JOIN	HF_CATEGORIES CATEGORY
					ON 			PRODUCT.ID_CATEGORY_PRODUCT = CATEGORY.ID_CATEGORY
					JOIN		(	
									SELECT	PRODUCT.ID_PRODUCT,
											COLORS.COLOR_NAME,
											COLORS.ID_COLOR
									FROM 	HF_COLORS COLORS
									JOIN 	HF_COLORS_OF_PRODUCTS COLOR_OF_PRODUCTS
									ON		COLOR_OF_PRODUCTS.ID_COLOR = COLORS.ID_COLOR
									JOIN	HF_PRODUCTS PRODUCT
									ON		PRODUCT.ID_PRODUCT = COLOR_OF_PRODUCTS.ID_PRODUCT
								) COLORS
					ON			COLORS.ID_PRODUCT = PRODUCT.ID_PRODUCT
                    WHERE   	PRODUCT.ID_PRODUCT = ${id}

                `,
				(err, data) => {
					if (err) throw err;
					res.send(data);
				}
			);
		});
	} catch (error) {}
}

module.exports = getProductDetailById;
