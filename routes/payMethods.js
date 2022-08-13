var express = require("express");
var router = express.Router();
var MethodTransf = require("../controllers/postTransfMethod");

router.post("/transf", MethodTransf);

module.exports = router;
