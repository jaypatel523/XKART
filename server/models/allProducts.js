const mongoose = require("mongoose");

const AllProduct = new mongoose.Schema({}, { strict: false }, { timestamps: true });


module.exports = mongoose.model('allProduct', AllProduct);