const epxress = require('express');
const router = epxress.Router();
const { sellProduct, getAllProducts, getProductCategorywise } = require('../controllers/product');

router.route('/sellProduct').post(sellProduct);
router.route('/getAllProducts').get(getAllProducts);
router.route('/getProductCategorywise').get(getProductCategorywise);

module.exports = router;