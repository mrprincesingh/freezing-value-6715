const express =require("express")
const cors=require("cors")
const {connection} = require("./config/db")
const { userRouter } = require("./route/user.route")
const {productRouter}  = require("./route/product.route")
const {adminRoute} = require("./route/admin.route")
  const {cartRouter} = require("./route/cart.route")
const {check} = require("./middleware/check")
const { OrderRouter } = require("./route/order.route")


require("dotenv").config()
const app=express()
app.use(express.json())

app.use(cors())
 app.get("/" , (req , res)=>{
    res.send("HomePage")
 })
 app.use("/admin" , adminRoute )
 app.use("/users" , userRouter)
 app.use("/products" , productRouter)
  app.use(check)
app.use("/cart" ,cartRouter )
app.use("/order" , OrderRouter)


app.listen(process.env.PORT , async (req , res)=>{
    try{
  await connection
   console.log("connected to db")
    }catch(err){
        console.log(err)
        console.log("something went wrong")
    }
    console.log(`Running the port from ${process.env.PORT}`)
})