var express = require("express");
var router = express.Router();
var getCategories = require("../controllers/getCategories");

router.get("/categories", getCategories);

module.exports = router;
