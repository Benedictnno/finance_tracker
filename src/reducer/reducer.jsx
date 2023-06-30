// MyReducer.js
export const initialState = {
  // Initial state values
};

export function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      // Update the state for action type 1
      return { ...state , isAuth : true };

    case "LOGOUT":
      // Update the state for action type 2
      return { ...state, isAuth: false };
    case "INFO":
      // Update the state for action type 2
      return { ...state, userInfo: action.payload };

    default:
      return state;
  }
}
