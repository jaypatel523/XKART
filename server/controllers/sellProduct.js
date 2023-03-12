const SellProduct = require('../models/sellProduct');
const AllProduct = require('../models/allProducts');


const sellProduct = async (req, res) => {
    try {

        // create data object in frontend 
        // two key values are there 
        // first userId = userId
        // second product object = product details from the form

        // product id must be setted from frontend

        // const userId = req.body.userId;
        // const productObj = req.body.product; // object
        // productObj.state = productObj.state.toUpperCase();
        // productObj.city = productObj.city.toUpperCase();

        // // to store every product into all products
        // await AllProduct.create(productObj);

        // let productdb = await SellProduct.findOne({ userId: userId });
        // if (!productdb) {
        //     const newProduct = new SellProduct({ userId: userId, products: [productObj] })
        //     await newProduct.save();
        //     return res.send({ msg: "new product added" })
        // }

        // productdb.products.push(productObj);
        // await productdb.save();

        console.log(req.body);
        res.send({ msg: "new product added" });


    } catch (error) {
        res.send(error);
    }
}
module.exports = { sellProduct }