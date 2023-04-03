const WishListProduct = require("../models/wishlist");

const addToWishList = async (req, res) => {
  try {
    // console.log(req.body);
    // const userId = req.body.userId;
    // const productObj = req.body.product;
    // productObj.state = productObj.state.toUpperCase();
    // productObj.city = productObj.city.toUpperCase();
    // let wishlistedProd = await WishListProduct.findOne({ userId: userId });
    // if (!wishlistedProd) {
    //     const addToWislist = new WishListProduct({ userId: userId, wishlist: [productObj] })
    //     await addToWislist.save();
    //     return res.send({ msg: "product wishlisted" })
    // }
    // wishlistedProd.wishlist.push(productObj);
    // await wishlistedProd.save();
    // res.send({ msg: "product wishlisted" });

    const userId = req.body.userId;
    const productId = req.body.productId;
    let wishlistedProd = await WishListProduct.findOne({ userId: userId })


    if (!wishlistedProd) {
      let addToWishList = new WishListProduct({
        userId: userId,
      });
      addToWishList.wishlist.push({ product: productId })
      await addToWishList.save();
      return res.send({ message: "Product added to wishlist" });
    }


    wishlistedProd.wishlist.push({ product: productId });
    await wishlistedProd.save();
    res.send({ message: "Product added to wishlist" });



  } catch (error) {
    res.send(error);
  }
};

const deleteFromWishlist = async (req, res) => {
  try {
    // is must be needed of user and product
    console.log(req.params);
    const { userId, productId } = req.params;
    const deleted = await WishListProduct.findOneAndUpdate(
      { userId: userId },
      { $pull: { wishlist: { product: productId } } },
      { safe: true }
    ).clone();
    // const deleted = await WishListProduct.findByIdAndUpdate({ "userId": userId }, { "$pull": { "wishlist": { "prodId": productId } } });
    if (!deleted) {
      return res.send({ msg: "something went wrong" });
    }
    res.send({ msg: "deleted from wishlist" });
  } catch (error) {
    res.send(error);
  }
};

const getAllWishlist = async (req, res) => {
  try {
    // console.log(req.params);
    const product = await WishListProduct.find({ wishlist: { $elemMatch: { product: req.params.productId } } });
    // console.log("product", product);

    if (product) {
      return res.send("yes");
    }

    res.send("Not");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addToWishList, deleteFromWishlist, getAllWishlist };
