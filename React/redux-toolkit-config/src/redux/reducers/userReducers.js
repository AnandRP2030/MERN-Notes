// store.js
import {  createSlice } from "@reduxjs/toolkit";

// Define a slice for user data
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    
  },
  reducers: {
    addUser: (state, action) => {
        console.log("action", action)
      state.name = action.payload;
    },
    removeUser: (state, action) => {
      state.name = "";
    },
  },
});

// Extract the action creators and reducer
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
// export default userReducer;


