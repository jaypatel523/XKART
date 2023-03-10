const epxress = require('express');
const router = epxress.Router();
const { sellProduct, } = require('../controllers/sellProduct');
const { getAllProducts, getProductCategorywise, getProductStatewise, getProductCitywise } = require('../controllers/product');
const authentication = require('../middleware/authentication');


router.route('/sellProduct').post(sellProduct);
router.route('/getAllProducts').get(authentication, getAllProducts);
router.route('/getProductCategorywise/:category').get(getProductCategorywise);
router.route('/getProductStatewise/:state').get(getProductStatewise);
router.route('/getProductCitywise/:city').get(getProductCitywise);

module.exports = router;