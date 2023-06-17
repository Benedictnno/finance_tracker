import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth, db } from "../Firebase";


const PrivateRoute = ({ children, ...rest }) => {
//   const { isAuthenticated, user } = useAuth0();
//   const isUser = isAuthenticated && user;
console.log(auth);

  if (!auth) {

    return <Navigate to={"/login"} />;
  }
  return children;
};
export default PrivateRoute;
