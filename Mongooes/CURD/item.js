const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const ItemsSchema = new mongoose.Schema({
    name : String,
    price: Number,
    brand: String,
    catagorey: String

});

module.exports = mongoose.model('items',ItemsSchema);
