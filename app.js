var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var productsRouter = require("./routes/products");
var categoriesRouter = require("./routes/categories");
var payMethods = require("./routes/payMethods");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	cors({
		origin: "*",
	})
);

app.use("/api", productsRouter);
app.use("/api", categoriesRouter);
app.use("/api", payMethods);

module.exports = app;
