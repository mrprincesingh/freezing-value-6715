import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
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

const deleteProductSuccess = () => {
  return { type: DELETE_PRODUCT_SUCCESS };
};

export const getProducts =
  (param = {}) =>
  (dispatch) => {
    dispatch(getProductsRequestAction());

    axios
      .get("http://localhost:8080/Products", param)
      .then((res) => {
        dispatch(getProductsSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(getProductsFailureAction());
      });
  };

export const deleteBook = (id, ProductData) => (dispatch) => {
  return axios.delete(`http://localhost:8080/Products/${id}`, ProductData).then(() => {
    dispatch(deleteProductSuccess());
  });
};

// ?category=Novel&category=Motivational
