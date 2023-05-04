const SellProduct = require("../models/sellProduct");
const AllProduct = require("../models/allProducts");
const { findOneAndUpdate } = require("../models/user");

// const sellProduct = async (req, res) => {
//   try {
//     let oldSeller = await SellProduct.findOne({ userId: req.body.userId });

//     if (!oldSeller) {
//       let newProduct = new SellProduct();
//       newProduct.userId = req.body.userId;
//       newProduct.products = req.body.state;

//       let product = new AllProduct(req.body.state);
//       console.log("newProduct", newProduct);
//       console.log("product", product);

//       await newProduct.save();
//       await product.save();
//     }

//     oldSeller.products.push(req.body.state);
//     let product = new AllProduct(req.body.state);

//     await oldSeller.save();
//     await product.save();

//     res.send({ message: "new product added" });
//   } catch (error) {
//     res.send(error);
//   }
// };

const sellProduct = async (req, res) => {
  try {
    let product = new AllProduct(req.body.state);
    await product.save();

    // console.log(product._id);

    let oldSeller = await SellProduct.findOne({ userId: req.body.userId });

    if (!oldSeller) {
      let newProduct = new SellProduct();
      newProduct.userId = req.body.userId;
      newProduct.products = product._id;

      await newProduct.save();
    }

    oldSeller.products.push(product._id);
    oldSeller.save();

    res.send({ message: "new product added" });
  } catch (error) {
    res.send(error);
  }
};

const updateApprove = async (req, res) => {
  try {
    let product = await AllProduct.findOneAndUpdate(
      { _id: req.body._id },
      { adminApproved: true, isPending: false },
    );

    await product.save();

    res.send({ message: "updated" });
  } catch (error) {
    res.send(error);
  }
};

const updateReject = async (req, res) => {
  try {
    let product = await AllProduct.findOneAndUpdate(
      { _id: req.body._id },
      { adminRejected: true, isPending: false }
    );

    await product.save();

    res.send({ message: "updated" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { sellProduct, updateApprove, updateReject };
