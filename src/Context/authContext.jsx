import React, { useReducer, createContext, useContext } from "react";
import { reducer } from '../reducer/reducer';

const MyContext = createContext();
const AuthContext = ({children}) => {
const initialState = {
  isAuth: false,
  userInfo:{}
};

    const [state, dispatch] = useReducer(reducer, initialState)

    function setIsAuth() {
        dispatch({type:'LOGIN'})
    }
    function setIsAuthLogout() {
        dispatch({type:'LOGOUT'})
    }
    function userInfo(info) {
        dispatch({type:'INFO',payload: info})
    }

  return (
    <MyContext.Provider
      value={{ state, dispatch, setIsAuth, setIsAuthLogout, userInfo }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useAuthContext() {
   return useContext(MyContext)
}
export default AuthContext
