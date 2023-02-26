import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const SingleProduct = () => {
  const { id } = useParams();
  
  const products = useSelector((store) => store.productReducer.products);
  const [product, setProduct] = useState([]);
 
  useEffect(()=>{
    getUser()
      },[])
  const getUser = async()=>{
    
    const res = await axios.get(`https://real-puce-slug-boot.cyclic.app/products/${id}`)
    console.log(res.data[0])
    setProduct(res.data[0])
  }
  const handleAddToCart = () => {

    let cartItems = [];
    if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
    }
    const selectedProduct = {Weight:product.Weight, _id: product._id, Img: product.Img, Price: product.Price, Title: product.Title, DiscountPrice: product.DiscountPrice };
    cartItems.push(selectedProduct);

    localStorage.setItem('cartItems', JSON.stringify(cartItems))   
  
  };


  return (
    <>
    <Navbar/>
    <div style={{paddingTop:'100px'}}>
      {product && product.Img && (
        <div style={{display:'flex'}}>
          <div style={{ width:'600px'}}>
          <img src={product.Img[0]} alt="" />
          </div>
        <div style={{width:'65%',textAlign:'left',padding:'50px',backgroundColor:'#F5F5F5'}}>
        <br />
        <h1 style={{fontSize:'28px',color:'#4F3267',fontWeight:"bolder"}}>{product.Title}</h1>
        <div style={{display:'flex',marginTop:'60px',justifyContent:'space-between'}}>
        <div>
        <label htmlFor="size">Select Size</label>
        <br />
        <select style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px'}} name="size" onChange={(e) => console.log(e.target.value)}>
  <option value="">6</option>
  <option value="S">7</option>
  <option value="M">8</option>
  <option value="L">9</option>
  <option value="XL">10</option>
</select>
</div>
<div>
<label htmlFor="size">Delivery & Store Details</label>
        <br />
<input style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px'}} placeholder="PINCODE" />
</div>
</div>
<br />
<div>
<label htmlFor="size">Customization</label>
        <br />
        <select style={{width:'240px',height:"50px",borderRadius:'10px',padding:'10px'}} name="size" onChange={(e) => console.log(e.target.value)}>
  <option value="">14 KT White Gold</option>
  <option value="S">14 KT Yellow Gold</option>
  <option value="M">18 KT Rose Gold</option>
  <option value="L">18 KT White Gold</option>
  <option value="XL">18 KT Yellow Gold</option>
</select>
</div>
<div style={{display:'flex',marginTop:'30px',gap:'20px'}}>
<h1 style={{fontSize:'26px', fontWeight:'bolder'}}>₹{product.DiscountPrice}</h1>
<h1 style={{fontSize:'25px',color:'gray',textDecoration:"line-through"}}>₹{product.Price}</h1>
</div>
<div style={{display:'flex',marginTop:'30px',justifyContent:'space-between'}}>
<Link to={"/cart"}>
<button onClick={handleAddToCart} style={{width:'235px',fontSize:'18px',color:'white',backgroundColor:'#8E62F9', padding:'17px', borderRadius:'20px'}}>ADD TO CART</button>
</Link>
<button style={{width:'235px',fontSize:'18px',backgroundColor:'#DCD2FE', padding:'17px', borderRadius:'20px'}}>FIND IN STORE</button>
</div>
<div style={{display:'flex',marginTop:'30px',justifyContent:'space-between'}}>
<div style={{width:'235px',fontSize:'18px',backgroundColor:'white', padding:'17px', borderRadius:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
  <h1>Want a closer look?</h1>
  <p style={{fontSize:'15px'}}>Get on a live video call with our design consultants.</p>
  <br />
  <button style={{width:'200px',fontSize:'16px',backgroundColor:'#DFF2D9', padding:'12px', borderRadius:'20px'}}>Schedule a Video Call</button>
</div>
<div style={{width:'235px',fontSize:'18px',backgroundColor:'white', padding:'17px', borderRadius:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
  <h1>Try it on at home</h1>
  <p style={{fontSize:'15px'}}>Book a free appointment to try this jewellery at your home.</p>
  <br />
  <button style={{width:'200px',fontSize:'16px',backgroundColor:'#FEE7DA', padding:'12px', borderRadius:'20px'}}>Book Home Appointment</button>  </div>
</div>
</div>
    </div>
    
      )}
      
    </div>
    <Footer/> 
    </>
  );
};

export default SingleProduct;


