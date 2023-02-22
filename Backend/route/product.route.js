const express = require("express");
const {productModel} = require("../model/Product.model")

const productRouter = express.Router()


productRouter.get("/" , async(req , res)=>{
    let product = await productModel.find();
  res.send(product); 
})

productRouter.post("/addproduct" , async(req , res)=>{
   const {Title , Description , Type, Weight , Price , DiscountPrice ,Img , Brand} = req.body
     try{
       let newProduct = new productModel({
        Title , Description , Type, Weight , Price , DiscountPrice ,Img , Brand
       })
       await newProduct.save()
       res.status(200).send(newProduct);
       
     }catch(err){
        res.status(400).send(err.message);
     }
})
productRouter.get("/:id", async (req, res) => {
    let id=req.params.id;
    id.toString()
  
    let products = await productModel.find({_id:id});
    res.send(products);
    // console.log(products);
  });

  productRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body;
    let id = req.params.id;
    try {
   let updatedProducts = await productModel.findByIdAndUpdate({ _id: id }, payload);
      res.send(updatedProducts);
    } catch (e) {
      res.send(e.message);
    }
  });
  productRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let deleteProducts =    await productModel.findByIdAndDelete({ _id: id });
      res.send("deleted");
    } catch (e) {
      res.send(e.message);
    }
  });
module.exports = {
    productRouter
}



