const express = require('express');
const router = express.Router();
const { addToWishList, deleteFromWishlist } = require('../controllers/wislist');

router.route('/addtowishlist').post(addToWishList);
router.route('/deletefromwishlist/:userId/:productId').delete(deleteFromWishlist);


module.exports = router;