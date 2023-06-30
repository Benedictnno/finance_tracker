import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./Context/authContext.jsx";
import FilterContext from "./Context/FilterContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterContext>
      <AuthContext>
        <App />
      </AuthContext>
    </FilterContext>
  </React.StrictMode>
);
