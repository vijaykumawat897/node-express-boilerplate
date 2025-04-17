const express = require("express");
const router = express.Router();
const { AuthMiddlewares } = require("@middlewares/index");
const { AuthController } = require("@controllers/index");

router.post("/login", AuthMiddlewares.validateLoginInput, AuthController.login);

module.exports = router;
