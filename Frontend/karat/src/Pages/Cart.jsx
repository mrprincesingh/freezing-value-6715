import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const id = searchParams.get("id");
    const Img = searchParams.get("Img");
    const Price = searchParams.get("Price");
    const Title = searchParams.get("Title");
    const Weight = searchParams.get("Weight");
    const DiscountPrice = searchParams.get("DiscountPrice");


    const product = { id, Img: [Img], Price,DiscountPrice,Title,Weight };
    setSelectedProduct(product);
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      {selectedProduct.Img && (
        <>
          <img src={selectedProduct.Img[0]} alt="" />
          <p>ID: {selectedProduct.id}</p>
          <p>Price: {selectedProduct.DiscountPrice}</p>
          <button style={{width:'235px',fontSize:'18px',color:'white',backgroundColor:'#8E62F9', padding:'17px', borderRadius:'20px'}}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
