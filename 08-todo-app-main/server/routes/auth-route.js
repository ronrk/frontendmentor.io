const {
  login,
  register,
  updateTheme,
} = require("../controllers/auth-controller");

const express = require("express");
const router = express.Router();

router.patch("/", updateTheme);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
