var express = require("express");
var router = express.Router();
var getProductsByCategory = require("../controllers/getProductsByCategory");
var getProductDetailById = require("../controllers/getProductDetailById");
var getProductPricesById = require("../controllers/getProductPricesById");

router.get("/products/:id", getProductsByCategory);
router.get("/productDetail/:id", getProductDetailById);
router.get("/productPrices/:id", getProductPricesById);

module.exports = router;
