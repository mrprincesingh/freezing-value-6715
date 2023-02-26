import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const authState = useSelector((store) => store);
  console.log("auth", authState.authReducer);
  authState.authReducer.token = localStorage.getItem("token");
//console.log('privateRoute',authState.authReducer.token)
  if (!authState.authReducer.token) {
    return (
      <>
        <Alert status="success" variant="subtle">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
        <Navigate to={"/login"} />
      </>
    );
  }

  return <div>{children}</div>;
}

export default PrivateRoute;
