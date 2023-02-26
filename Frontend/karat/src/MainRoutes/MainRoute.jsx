import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../Pages/Home'
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import Payment from "../Pages/Payment"
import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Admin from '../Admin/Admin'
import AdminEdit from '../Admin/AdminEdit'
import AddProduct from '../Admin/AddProduct'
import Order from '../Admin/Order'
import User from '../Admin/User'
import AdminLogin from '../Admin/AdminLogin'
import PrivateRoute from './PrivateRoute'


const MainRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/adminedit/:id" element={<AdminEdit/>}/>
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/orders" element={<Order />}/>
          <Route path="/admin/users" element={<User/>}/>
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/payment" element={ <PrivateRoute><Payment/></PrivateRoute>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />

        </Routes>
    </div>
  )
}

export default MainRoute