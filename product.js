const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    productQuantity: Number,
});

module.exports = mongoose.model('products', ProductSchema);
