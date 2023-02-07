const epxress = require('express');
const router = epxress.Router();
const { sellProduct, } = require('../controllers/sellProduct');
const { getAllProducts, getProductCategorywise, getProductStatewise, getProductCitywise } = require('../controllers/product');


router.route('/sellProduct').post(sellProduct);
router.route('/getAllProducts').get(getAllProducts);
router.route('/getProductCategorywise/:category').get(getProductCategorywise);
router.route('/getProductStatewise/:state').get(getProductStatewise);
router.route('/getProductCitywise/:city').get(getProductCitywise);

module.exports = router;