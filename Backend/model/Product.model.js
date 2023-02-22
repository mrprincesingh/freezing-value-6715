const mongoose = require("mongoose")

const  productSchema = mongoose.Schema({
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
    Brand:String
})

const productModel = mongoose.model("product" ,productSchema )

module.exports = {
    productModel
}