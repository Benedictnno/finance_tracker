import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import { useAuthContext } from "../Context/authContext";


const PrivateRoute = ({ children}) => {
  //   const { isAuthenticated, user } = useAuth0();
  const { state } = useAuthContext();
  //   const isUser = isAuthenticated && user;


  if (!state.isAuth) {
    return <Navigate to={"/Login"} />;
  }
  return children;
};
export default PrivateRoute;
