const express = require('express');
const router = express.Router();
const { addToWishList, deleteFromWishlist } = require('../routes/wishlist');

router.route('/wishlist').post(addToWishList);
router.route('/deleteWishlist').delete(deleteFromWishlist);


module.exports = router;