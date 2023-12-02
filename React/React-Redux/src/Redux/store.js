import { createStore } from "redux";
import { cartReducer } from "./reducers/cartReducers";

const store = createStore(cartReducer);

export default store;

// This file sets up your Redux store using the createStore function from Redux.
// It takes a reducer (cartReducer in this case) as an argument.
// The store is the central place where your application state is stored.
