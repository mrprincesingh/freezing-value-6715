import React, { useState, useEffect } from "react";
import styles from "../Styles/Cart.module.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  const total = cartItems.reduce((acc, item) => acc + item.DiscountPrice, 0)
  const totalmain = cartItems.reduce((acc, item) => acc + item.Price, 0)

  const Tsave= totalmain-total

  

  return (
    
    <div style={{backgroundColor:'#F9F9FA',textAlign:'left'}}>
      <p style={{marginLeft:'35px'}}>Total({cartItems.length} Items):₹ {total}</p>
      {cartItems.length > 0 ? (
        <div style={{
          display:'flex',border:'1px solid black',justifyContent:'space-between',padding:'30px'
        }} >
          <div >
          {cartItems.map((item, index) => (
            
            <div key={index} style={{
              display:'flex', marginBottom:"20px",backgroundColor:'white', width:"120%",justifyContent:'space-between'
            }}>
              <div style={{ textAlignLast:'left', padding:'10px'}}>
              <img style={{border:'1px solid gray'}} width="180px" src={item.Img} alt={item.Title} />
              </div>
              <div style={{paddingTop:"10px", textAlign:'left', padding:"10px", width:"50%"}}>
              <h3>{item.Title}</h3>
              <p>Weight: {item.Weight}</p>
              <br />
            <p style={{color:'#E257E5'}}>Check Delivery Date</p>
              <p style={{fontWeight:'bold'}}>₹ {item.DiscountPrice}</p>
              <p style={{textDecoration:'line-through'}}>₹ {item.Price}</p>
              <p style={{color :'red',fontWeight:'bold'}}>Save ₹{item.Price - item.DiscountPrice}</p>
              </div>
              <div style={{width:'25%'}}>
                <div style={{marginTop:'100px'}}>
                <button style={{border:"1px solid black", width:"200px",borderRadius:'10px', padding:'5px'}} onClick={() => handleRemoveItem(index)}>Remove</button>
                 <br />
                 <button 
                 style={{marginTop:'13px',border:"1px solid purple",
                  width:"200px",
                  borderRadius:'10px', 
                  padding:'5px'}}>Move To Wishlist</button>
                </div>
             
              </div>

            </div>
          ))}
         
          </div>
          <div style={{textAlign:"left"}}>
            <p>Order Summary</p>
          <div className={styles["cart-summary"]}>
  <p>Subtotal: ₹{total}</p>
  <p>You Saved: ₹{Tsave}</p>
  <p>Coupon Discount</p>
  <p>Apply Coupon</p>
  <p>Delivery Charge (Standard): FREE</p>
  <p className={styles["total-cost"]}>TOTAL COST: ₹{total}</p>
</div>
<button style={{marginTop:'13px',color:'white',border:"1px solid purple",backgroundColor:"#C05CED", width:"300px",borderRadius:'5px', padding:'5px'}}>Checkout Securely</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;


