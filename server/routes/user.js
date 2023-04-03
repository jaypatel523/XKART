const express = require('express');
const router = express.Router();
const { login, logout, getUserDetails, register } = require('../controllers/user');


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/getuserdetails/:userId').get(getUserDetails);

module.exports = router;