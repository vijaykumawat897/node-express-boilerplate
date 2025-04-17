const express = require("express");
const app = express();
const routes = require("./routes");
const { ErrorHandler } = require("@middlewares/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(ErrorHandler);

module.exports = app;
