const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
