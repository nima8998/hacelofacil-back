var express = require("express");
var router = express.Router();
var GetCategories = require("../controllers/getCategories");

router.get("/categories", GetCategories);

module.exports = router;
