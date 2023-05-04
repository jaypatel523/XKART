const AllProduct = require("../models/allProducts");

const getAllProducts = async (req, res) => {
  try {
    const products = await AllProduct.find({});
    res.send({ products });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getProductCategorywise = async (req, res) => {
  try {
    const products = await AllProduct.find({ category: req.params.category });

    if (!products) {
      throw new Error("invalid category");
    }
    res.send({ products });
  } catch (error) {
    res.send(error);
  }
};

const getProductStatewise = async (req, res) => {
  try {
    let params = req.params;
    params.state = params.state.toUpperCase();
    const products = await AllProduct.find({ state: params.state });
    res.send({ products });
  } catch (error) {
    res.send(error);
  }
};

const getProductCitywise = async (req, res) => {
  try {
    let params = req.params;
    params.city = params.city.toUpperCase();
    const products = await AllProduct.find({ city: params.city });
    res.send({ products });
  } catch (error) {
    res.send(error);
  }
};


const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;
    const matchingProducts = await AllProduct.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { brand: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
        { city: { $regex: query, $options: 'i' } },
        { state: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(matchingProducts);
  }
  catch (error) {
    res.send(error);
  }
}


module.exports = {
  getAllProducts,
  getProductCategorywise,
  getProductStatewise,
  getProductCitywise,
  searchProducts
};
