const AllProduct = require('../models/allProducts');

const getAllProducts = async (req, res) => {
    try {
        const products = await AllProduct.find({});
        res.send({ products });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}




const getProductCategorywise = async (req, res) => {
    try {
        const products = await AllProduct.find({ category: req.body.category });
        if (!products) {
            throw new Error('invalid category');
        }
        res.send({ products });
    } catch (error) {
        res.send(error);
    }
}

const getProductStatewise = async (req, res) => {
    try {
        let params = req.params;
        params.state = params.state.toUpperCase();
        const products = await AllProduct.find({ state: params.state })
        res.send({ products });
    } catch (error) {
        res.send(error);
    }
}




const getProductCitywise = async (req, res) => {
    try {
        let params = req.params;
        params.city = params.city.toUpperCase();
        const products = await AllProduct.find({ city: params.city })
        res.send({ products });
    }
    catch (error) {
        res.send(error);
    }
}





module.exports = { getAllProducts, getProductCategorywise, getProductStatewise, getProductCitywise };
