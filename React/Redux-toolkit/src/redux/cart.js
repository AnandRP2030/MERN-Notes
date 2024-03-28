import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state) => {
      state.cartCount = 1;
    },
    increment: (state) => {
      state.cartCount++;
    },
    decrement: (state) => {
      state.cartCount--;
    },
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
