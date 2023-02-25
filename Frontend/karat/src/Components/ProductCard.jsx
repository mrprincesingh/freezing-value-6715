import React from 'react'
import { Link } from 'react-router-dom';
import { FaVideo  } from 'react-icons/fa';

export const ProductCard = ({product}) => {
  return (
    
    <div style={{textAlign:'left'}}>
      <Link to={`/product/${product._id}`}>
        <img style={{border:"1px solid gray", 
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;", borderRadius:'10px'}} 
        width="90%" src={product.Img[0]} alt="im" />
    </Link>
        <div style={{ display:'flex', gap:"30px"}}>
        <h2 style={{ color:"#4F3267",fontSize:'24px', fontWeight:'bolder'}}>₹{product.DiscountPrice}</h2>
        <p style={{ textDecoration: "line-through",  marginTop:'10px'}}>₹{product.Price}</p>
        </div>
        <a href='google.com'><h1 style={{ color:"#4F3267", fontSize:'18px', fontWeight:'bolder'}}>Check Delivery Date </h1></a>
        <h3 style={{color:'gray'}}>{product.Title}</h3>
        <div style={{ justifyContent:"space-between"}}>
        <button style={{border:'1px solid black', borderRadius:'10px', padding:'10px'}}>Book Try at Home</button>
        <button style={{border:'1px solid green', borderRadius:'10px', padding:'13px 40px', margin:'20px'}}><FaVideo style={{color:'green'}} /></button>
        </div>
    </div>
  )
}
