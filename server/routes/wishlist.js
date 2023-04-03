const express = require('express');
const router = express.Router();
const { addToWishList, deleteFromWishlist, getAllWishlist } = require('../controllers/wishlist');

router.route('/addtowishlist').post(addToWishList);
router.route('/getallwishlist/:userId/:productId').get(getAllWishlist)
router.route('/deletefromwishlist/:userId/:productId').delete(deleteFromWishlist);


module.exports = router; 