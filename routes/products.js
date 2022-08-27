var express = require("express");
var router = express.Router();
var GetProductsByCategory = require("../controllers/GetProductsByCategory");
var GetProductDetailById = require("../controllers/GetProductDetailById");
var GetProductPricesById = require("../controllers/GetProductPricesById");

router.get("/products/:id", GetProductsByCategory);
router.get("/productDetail/:id", GetProductDetailById);
router.get("/productPrices/:id", GetProductPricesById);

module.exports = router;
