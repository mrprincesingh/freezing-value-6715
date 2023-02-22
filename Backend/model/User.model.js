const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    mobile:Number,
    email:String,
    name:String,
    last:String,
    password:String , 
    role:String 
},{
    versionKey:false
})

const userModel = mongoose.model("user" , userSchema)

module.exports = {
    userModel
}