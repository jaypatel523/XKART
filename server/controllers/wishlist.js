const WishListProduct = require("../models/wishlist");

const addToWishList = async (req, res) => {
  try {


    const userId = req.body.userId;
    const productObj = req.body.productId;
    let wishlistedProd = await WishListProduct.findOne({ userId: userId });

    if (!wishlistedProd) {
      let addToWishList = new WishListProduct({
        userId: userId,
      });
      addToWishList.wishlist.push({ product: productObj });
      await addToWishList.save();
      return res.send({ message: "Product added to wishlist" });
    }

    wishlistedProd.wishlist.push({ product: productObj });
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
    const { userId } = req.params;

    const allProducts = await WishListProduct.findOne({
      userId: userId,
    }).populate(
      "wishlist.product",
      "title category brand description price image1 image2 image3 state city"
    );

    if (allProducts) {
      return res.send({
        products: allProducts,
        message: "success",
      });
    }

    res.send({ message: "no product" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addToWishList, deleteFromWishlist, getAllWishlist };
