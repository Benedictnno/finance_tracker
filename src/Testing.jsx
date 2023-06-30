import React, { useReducer } from "react";

// Sample object containing items
const items = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "orange", category: "fruit" },
  { name: "tomato", category: "vegetable" },
];

// Reducer function
function searchReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "FILTER_ITEMS":
      const { filteredItems } = state;
      const filteredItem = action.payload.filter((item) => {
        const itemName = item.item.toLowerCase();
        return itemName.includes(state.searchTerm);
      });
      return {
        ...state,
        filteredItems: filteredItem,
      };
    default:
      return state;
  }
}

// Component
function SearchBar({ trackList }) {
  const initialState = {
    searchTerm: "",
    filteredItems: trackList,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
    dispatch({ type: "FILTER_ITEMS" ,payload: trackList });
  };

  console.log(state);
  console.log(state.filteredItems);
  console.log(trackList);
  console.log(initialState);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {state.filteredItems.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
