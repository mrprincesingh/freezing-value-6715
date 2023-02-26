import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  PAYMENT_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

let showT;
//FOR REGISTER
export const userRegisterRequest = () => {
  return { type: REGISTER_REQUEST };
};
export const userRegisterSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const userRegisterFailure = () => {
  return { type: REGISTER_FAILURE };
};
//FOR LOGIN
export const userLoginRequest = () => {
  return { type: LOGIN_REQUEST };
};
export const userLoginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const userLoginFailure = () => {
  return { type: LOGIN_FAILURE };
};
//FOR DILIVERY ADDRESS
export const userPaymentRequest = () => {
  return { type: PAYMENT_REQUEST };
};
export const userPaymentSuccess = (payload) => {
  return { type: PAYMENT_SUCCESS, payload };
};
export const userPaymentFailure = () => {
  return { type: PAYMENT_FAILURE };
};
//HANDLING USER REGISTRATION
export const handleUserRegister = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(userRegisterRequest());
  try {
    axios
      .post("https://real-puce-slug-boot.cyclic.app/users/register", userData)
      .then((res) => {
        if (res.status == 200) {
          window.location.href = "/login";
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
    dispatch(userRegisterSuccess());
  } catch (error) {
    console.log(error);
    dispatch(userRegisterFailure());
  }
};
//HANDLING USER LOGIN
export const handleUserLogin = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(userLoginRequest());
  try {
    axios
      .post("https://real-puce-slug-boot.cyclic.app/users/login", userData)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.email);
          console.log("string", res.data);
           window.location.href = "/";
          return dispatch(userLoginSuccess(res.data.token));
        } else {
          alert("wrong credential");
        }
        
      })
      .catch((err) => {
        alert("wrong credential");
        console.log(err);
      });
    dispatch(userLoginSuccess());
  } catch (error) {
    console.log(error);

    dispatch(userLoginFailure());
  }
};
//HANDLING USER DILIVERY ADDRESS
export const handleUserPayment = (userDiliveryAddress) => async (dispatch) => {
  console.log(userDiliveryAddress);
  dispatch(userPaymentRequest());
  try {
    axios
      .post(
        "https://real-puce-slug-boot.cyclic.app/order/add",
        userDiliveryAddress
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch(userPaymentSuccess());
  } catch (error) {
    console.log(error);
    dispatch(userPaymentFailure());
  }
};

export default showT;
