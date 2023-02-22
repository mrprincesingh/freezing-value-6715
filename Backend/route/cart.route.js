const express = require("express");
const { check } = require("../middleware/check");
const { cartModel } = require("../model/cart.model");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    const userID = req.body.userID;
    try {
      const data = await cartModel.find({ userID: userID });
      res.send(data);
    } catch (error) {
      res.send(error);
    }
});

cartRouter.post("/add", async (req, res) => {
    try {
        const data = new cartModel(req.body);
        await data.save();
        res.send("data is added");
      } catch (error) {
        res.send(error);
      }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const productId = req.params.id;
//   console.log("productid", productId);

  try {
    let cart = await cartModel.findOneAndDelete({ productId });
    // console.log("cartid", cart);
    return res.status(200).send("deleted");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = {
  cartRouter,
};
