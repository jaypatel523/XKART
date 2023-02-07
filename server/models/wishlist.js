const mongoose = require("mongoose");

const WishListProduct = new mongoose.Schema({

    userId: {
        type: String,
        ref: 'User'
    },
    wishlist: []

});


module.exports = mongoose.model('wishlist', WishListProduct);