import React ,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Error from './Pages/Error'
import PrivateRoute from './Pages/PrivateRoute'
function App() {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  // function LogOut() {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = "/login";
  //   });
  // }

  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  );
}
export default App
