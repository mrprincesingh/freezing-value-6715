import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";
//for register
export const userRegisterRequest = () => {
  return { type: REGISTER_REQUEST };
};
export const userRegisterSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const userRegisterFailure = () => {
  return { type: REGISTER_FAILURE };
};
//for login
export const userLoginRequest = () => {
  return { type: LOGIN_REQUEST };
};
export const userLoginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const userLoginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const handleUserRegister = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(userRegisterRequest());
  try {
    axios
      .post("https://real-puce-slug-boot.cyclic.app/users/register", userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch(userRegisterSuccess());
  } catch (error) {
    console.log(error);
    dispatch(userRegisterFailure());
  }
};

export const handleUserLogin = (userData) => async (dispatch) => {
  console.log(userData);
  dispatch(userLoginRequest());
  try {
    axios
      .post("https://real-puce-slug-boot.cyclic.app/users/login", userData)
      .then((res) => {
      if(res.data.token){
        localStorage.setItem("token",res.data.token)
      }
      console.log(res.data.token)})
      .catch((err) => console.log(err));
    dispatch(userLoginSuccess());
  } catch (error) {
    console.log(error);
    dispatch(userLoginFailure());
  }
};
