import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

const MainRoute = () => {
  return (
    <div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/product/:_id" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

    </div>
  );
};

export default MainRoute;
