import React, { useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth"; // chooses the the mode at which google authetification happens
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {useAuthContext} from "../Context/authContext";


const Login = ({  }) => {
  const {state,setIsAuth,userInfo} = useAuthContext()
  let navigate = useNavigate();
  // const [isAuth , setIsAuth] = useState(false)
  // handles the google authetification process
  // if signInWithPopup returns positive after passing the auth and the provider as arguments ; sets setIsAuth to true and create a storage space in the localstorage
  function googleSignin() {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth();

     userInfo(result);
      navigate("/");
    });
  }

console.log(state);
  return (
    <div className="loginPage">
      <p>Sign In Using Google to continue</p>
      <button className="login-with-google-btn" onClick={googleSignin}>
        Sign in using Google
      </button>
    </div>
  );
};

export default Login;
