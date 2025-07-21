const express = require("express");
const router = express.Router();
const { authMiddlewares } = require("@middlewares/index");
const { authController } = require("@controllers/index");

router.post("/login", authMiddlewares.validateLoginInput, authController.login);

module.exports = router;
