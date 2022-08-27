var express = require("express");
var router = express.Router();
var methodTransf = require("../controllers/PostTransfMethod");

router.post("/transf", methodTransf);

module.exports = router;
