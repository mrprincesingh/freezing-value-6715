import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = window.localStorage.get('token')
  const authState = useSelector((store) => store);
  console.log("auth", authState.authReducer);
  if (!token) {
    alert("Please signup first");
    return <Navigate to={"/signup"} />;
  }
  return <div>{children}</div>;
}

export default PrivateRoute;
