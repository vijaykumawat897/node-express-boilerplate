const express = require("express");
const app = express();
const routes = require("./routes");
const { errorHandler } = require("@middlewares/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(errorHandler);

module.exports = app;
