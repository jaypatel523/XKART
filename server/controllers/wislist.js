
const addToWishList = async (req, res) => {
    try {
        res.send('add to wish list');
    } catch (error) {
        res.send(error);
    }
}

const deleteFromWishlist = async (req, res) => {
    try {
        res.send('deleted from wishlist');
    } catch (error) {
        res.send(error);
    }
}

module.exports = { addToWishList, deleteFromWishlist };