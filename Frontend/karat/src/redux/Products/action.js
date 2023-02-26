import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from "./actionType";

const getProductsRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductsSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductsFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const addToCart = (item) => {
  return {type: ADD_TO_CART, item}

};

const removeFromCart = (productId) => {
  return {type: REMOVE_FROM_CART, productId}
}

export const clearCart = () => {
  return {type: CLEAR_CART}

}


export const getProducts =
  (param = {}) =>
  (dispatch) => {
    dispatch(getProductsRequestAction());

    axios
      .get("https://real-puce-slug-boot.cyclic.app/products", param)
      .then((res) => {
        dispatch(getProductsSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(getProductsFailureAction());
      });
  };


  export const fetchCartData = (userID) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`https://real-puce-slug-boot.cyclic.app/products/cart?userID=${userID}`);
        dispatch(addToCart(data));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const deleteCartItem = (productId) => {
    return async (dispatch) => {
      try {
        await axios.delete(`https://real-puce-slug-boot.cyclic.app/products/cart/delete/${productId}`);
        dispatch(removeFromCart(productId));
      } catch (error) {
        console.log(error);
      }
    };
  };
  

