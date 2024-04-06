// ---Importing Package---
const mongoose = require('mongoose');

// ---Creating Schema---
const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
},{
    timestamps: true
})

// ---Exporting model---
const Products = mongoose.model('Products', productSchema);
module.exports = Products;