import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Products/action";
import { ProductCard } from './ProductCard';
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../Styles/ProductList.module.css";

export const ProductsList = () => {

const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && "Price",
        _order: order, //acs or desc
      },
    };
    dispatch(getProducts(paramObj));
  }, [location.search]);
  return (
    <div className={styles["productdiv"]}>
      {products.length > 0 &&
        products.reverse().map((el) => {
          return <ProductCard key={el._id} product={el} />;
        })}
    </div>
  );
}

