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

export const handleRegisterSubmit = (payload) => (dispatch) =>{
dispatch(console.log(payload))
}
