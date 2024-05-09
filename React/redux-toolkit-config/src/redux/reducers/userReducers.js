// store.js
import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  address: "",
  phoneNumber: ""

}
// Define a slice for user data
const userSlice = createSlice({
  name: "user",
  initialState,
    
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


