import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
});

export default store;
