const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, trim: true},
    price: {type: Number, required: true, min: 0},
    category: {type: String, required: true},
    available: {type: Boolean, default: true},
    image: {type: String,}
},
 {timestamps: true}
)

module.exports = mongoose.model('MenuItems', menuItemSchema)