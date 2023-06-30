import React, { createContext, useContext, useReducer } from "react";
import filterReducer from "../reducer/filterReducer";
import GetPost from "../utilis/GetPost";
const filterContext = createContext();


const FilterContext = ({ children }) => {


  // const initialState = 
  const [state, dispatch] = useReducer(filterReducer, {
    Search: "",
    Items: GetPost(),
    filtedItems: GetPost(),
  });


  


  function searchedItem(value) {
    // let value = e.target.value.toLowerCase();

    dispatch({ type: "SEARCHING", payload: value });
  }
  function updateItems() {
    // const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: GetPost() });
  }

  // function Product(allItems) {
  //   dispatch({ type: "ALL_ITEMS", payload: allItems });
   
  // }
console.log(state);
 
  return (
    <filterContext.Provider
      value={{ updateItems, searchedItem, ...state }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterContext;
export function useFilterContext() {
  return useContext(filterContext);
}
