const SellProduct = require('../models/product');

const sellProduct = async (req, res) => {
    try {
        res.send({ msg: "add product" });
    } catch (error) {
        res.send(error);
    }
}

const getAllProducts = async (req, res) => {
    try {
        res.send('get all products');
    } catch (error) {
        res.send(error);
    }
}

const getProductCategorywise = async (req, res) => {
    try {
        res.send('get product category-wise');
    } catch (error) {
        res.send(error);
    }
}

module.exports = { sellProduct, getAllProducts, getProductCategorywise }