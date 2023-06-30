import React from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    // case "ALL_ITEMS":
    //   return { ...state, Items: action.payload };
    case "SEARCHING":
      return { ...state, Search: action.payload };
    case "UPDATE_SORT":
      const { Search, filtedItems } = state;
        const Filtered = filtedItems.filter((item) => {
          const itemName = item.item.toLowerCase();
          return itemName.includes(Search);
        });
      return {
        ...state,
        filtedItems: Filtered,
      };
    default:
      return state
      // throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filterReducer;


// if (Search) {
//   tempProducts =
//   tempProducts.filter((product) => {
//     return product.item.toLowerCase().startsWith(Search);
//   });

//   console.log(tempProducts);
//   return { ...state, filtedItems: tempProducts };
// }

// return { ...state, filtedItems: tempProducts };
