const mongoose = require("mongoose");

const SellProduct = new mongoose.Schema({

  userId: {
    type: String,
    ref: 'User'
  },
  products: []

});


module.exports = mongoose.model('product', SellProduct);