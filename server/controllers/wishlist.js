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
    const productObj = req.body.productId;

    let wishlistedProd = await WishListProduct.findOne({ userId: userId });

    if (!wishlistedProd) {
      const addToWishList = new WishListProduct({
        userId: userId,
        wishlist: [productObj],
      });
      await addToWishList.save();
      return res.send({ msg: "Product added to wishlist" });
    }

    wishlistedProd.wishlist.push(productObj);
    await wishlistedProd.save();
    res.send({ msg: "Product added to wishlist" });
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
      { $pull: { wishlist: { prodId: productId } } },
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
    console.log(req.params);
    const { userId } = req.params;

    const allProduct = await WishListProduct.findOne({ userId: userId });
    if (allProduct) {
      return res.send({ all: allProduct, msg: "all product of wishlist" });
    }

    res.send({ msg: "no product" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addToWishList, deleteFromWishlist, getAllWishlist };
