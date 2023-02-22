const express = require("express");
const {userModel}  = require("../model/User.model")
const userRouter = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
userRouter.get("/" , async(req , res)=>{
    let users = await userModel.find();
  res.send(users); 
})

userRouter.post("/register" , async(req , res)=>{
    const { mobile, name, email, last, password, role } = req.body;
    try{
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                res.send({"msg":"Something went wrong" , "error":err.message})
            }else {
                let newUser = new userModel({
                    mobile, name, email, last, role, password:hash
                })
                await newUser.save()
                res.status(200).send(newUser)
            }
        });
   
    }catch(err){
        res.status(400).send(err.message);
    }
})
userRouter.post("/login" , async (req, res)=>{
    const  {email , password} = req.body
    try{
    let existingUser = await userModel.find({email})
    console.log(existingUser)
    if(existingUser.length>=0){
        bcrypt.compare(password, existingUser[0].password, function(err, result) {
            // result == true
            if(result){
                let token  = jwt.sign({userID:existingUser[0]._id},"karatlogin")
                res.send({"msg":"Logged in" , "token":token})
            }else {
                res.send({"msg":"Wrong credentials"})
            }
        });
    }else {
        res.send({"msg":"Wrong credentials no user found"})
    }
    }catch{
        res.send({"msg":"Something went wrong" , "error":err.message})
    }
})
module.exports = {
    userRouter
}