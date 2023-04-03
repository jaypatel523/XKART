const express = require("express");
const router = express.Router();
const { login, logout, register , adminLogin} = require("../controllers/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/adminLogin").post(adminLogin);
router.route("/logout").get(logout);
module.exports = router;
