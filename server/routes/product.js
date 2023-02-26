const epxress = require('express');
const router = epxress.Router();
const { sellProduct, } = require('../controllers/sellProduct');
const { getAllProducts, getProductCategorywise, getProductStatewise, getProductCitywise } = require('../controllers/product');
const authentication = require('../middleware/authentication');


router.route('/sellProduct').post(authentication, sellProduct);
router.route('/getAllProducts').get(authentication, getAllProducts);
router.route('/getProductCategorywise/:category').get(authentication, getProductCategorywise);
router.route('/getProductStatewise/:state').get(authentication, getProductStatewise);
router.route('/getProductCitywise/:city').get(authentication, getProductCitywise);

module.exports = router;