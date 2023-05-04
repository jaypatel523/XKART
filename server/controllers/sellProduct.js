const SellProduct = require("../models/sellProduct");
const AllProduct = require("../models/allProducts");

const sellProduct = async (req, res) => {
  try {

    // console.log(req.body);

    let oldSeller = await SellProduct.findOne({ userId: req.body.userId });

    if (!oldSeller) {
      let newProduct = new SellProduct();
      newProduct.userId = req.body.userId;
      newProduct.products = req.body.state;

      let product = new AllProduct(req.body.state);
      console.log("newProduct", newProduct);
      console.log("product", product);

      await newProduct.save();
      await product.save();
    }

    oldSeller.products.push(req.body.state);
    let product = new AllProduct(req.body.state);

    await oldSeller.save();
    await product.save();

    res.send({ message: "new product added" });
  } catch (error) {
    res.send(error);
  }
};

const updateApprove = async (req, res) => {
  try {
    // console.log(req.body);


    let product = await AllProduct.findOneAndUpdate(
      { _id: req.body._id },
      { adminApproved: true }
    );

    await product.save()

    res.send({ message: "updated" });
  } catch (error) {
    res.send(error);
  }
};

const updateReject = async (req, res) => {
  try {
    // console.log(req.body);

    let product = await AllProduct.updateOne(
      { _id: req.body._id },
      { adminRejected: true }
    );

    await product.save()

    res.send({ message: "updated" });
  } catch (error) {
    res.send(error);
  }
};


const getProducts = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(req.params);

    const products = await SellProduct.find({ userId: userId })
      .populate({
        path: 'products',
        model: 'allProduct',
        select: 'category brand'
      })
      .exec();


    console.log("products", products[0].products);
    res.send(products);


  } catch (error) {
    res.send(error);
  }
}


module.exports = { sellProduct, updateApprove, updateReject, getProducts };
