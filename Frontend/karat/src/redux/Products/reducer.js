import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
  } from "./actionType";
  
  const initialState = {
    products: [],
    cart: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCTS_REQUEST:
        return { ...state, isLoading: true };
      case GET_PRODUCTS_SUCCESS:
        return { ...state, isLoading: false, products: payload };
      case GET_PRODUCTS_FAILURE:
        return { ...state, isLoading: false, isError: true };


        case ADD_TO_CART:
          return { ...state, cart: [...state.cart, payload] };
        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter((item) => item.productId !== payload),
          };
        case CLEAR_CART:
          return { ...state, cart: [] };
      default:
        return state;
    }
  };
  