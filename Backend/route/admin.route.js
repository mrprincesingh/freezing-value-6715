const express = require("express");
const {adminModel} = require("../model/admin.model")
const adminRoute = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

adminRoute.get("/" , async(req , res)=>{
    let users = await adminModel.find();
  res.send(users); 
})

adminRoute.post("/register" , async(req , res)=>{
    const {email, password} = req.body;
    try{
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                res.send({"msg":"Something went wrong" , "error":err.message})
            }else {
                let newUser = new adminModel({
                    email , password:hash
                })
                await newUser.save()
                res.status(200).send(newUser)
            }
        });
   
    }catch(err){
        res.status(400).send(err.message);
    }
})

adminRoute.post("/login" , async (req, res)=>{
    const  {email , password} = req.body
    try{
    let existingUser = await adminModel.find({email})
    console.log(existingUser)
    if(existingUser.length>=0){
        bcrypt.compare(password, existingUser[0].password, function(err, result) {
            // result == true
            if(result){
                let token  = jwt.sign({userID:existingUser[0]._id},"karatadminlogin")
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
    adminRoute
}