const express = require('express');
const router = express.Router();


const { startChat, getConversation } = require('../controllers/conversation');
const authentication = require('../middleware/authentication');

router.route('/startchat').post(authentication, startChat);
router.route('/conversation/:userId').get(authentication, getConversation);

module.exports = router;