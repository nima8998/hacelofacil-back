var express = require("express");
var router = express.Router();
var getProductsByCategory = require("../controllers/GetProductsByCategory");
var getProductDetailById = require("../controllers/GetProductDetailById");
var getProductPricesById = require("../controllers/GetProductPricesById");

router.get("/products/:id", getProductsByCategory);
router.get("/productDetail/:id", getProductDetailById);
router.get("/productPrices/:id", getProductPricesById);

module.exports = router;
