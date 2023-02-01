const express = require('express');
const router = express.Router();
const { signin,
    signout,
    signup, } = require('../controllers/user');


router.route('/signup').post(signup);
router.route('/signin').post(signin);

module.exports = router;