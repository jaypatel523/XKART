const mongoose = require("mongoose");

const AllProduct = new mongoose.Schema({}, { strict: false });


module.exports = mongoose.model('allProduct', AllProduct);