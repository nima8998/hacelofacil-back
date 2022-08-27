var express = require("express");
var router = express.Router();
var GetCategories = require("../controllers/GetCategories");

router.get("/categories", GetCategories);

module.exports = router;
