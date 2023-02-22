const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    
    Title: String,
    Description:String,
    Type:String,
    Weight:String,
    Price: Number,
    DiscountPrice: Number,
    Img:{
        type: Array,
        items: {
          type: String,
        }
    },
    Brand:String,
    quantity:{type:Number , default:1},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  

})

const cartModel = mongoose.model('cart', cartSchema);

module.exports = {cartModel};