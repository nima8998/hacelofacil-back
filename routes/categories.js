var express = require("express");
var router = express.Router();
var getCategories = require("../controllers/GetCategories");

router.get("/categories", getCategories);

module.exports = router;
