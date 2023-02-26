import React from 'react'

import Navbar from '../Components/Navbar';
import { ProductsList } from '../Components/ProductsList';
import { SideBar } from "../Components/SideBar";
import styles from "../Styles/Products.module.css";

const Products = () => {
  return (
    <>
    <Navbar/>
    <div>
      <div className={styles["products-filter-container"]}>
        <div className={styles["filter-componet"]}>
          <SideBar />
        </div>
        <div className={styles["products-list"]}>
          <ProductsList />
        </div>
      </div>
    </div>
   
    </>
  );
}

export default Products