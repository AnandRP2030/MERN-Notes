import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalWishlist: 0,
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addWishlist: (state) => {
      state.totalWishlist + 1;
    },
    removeWishlist: (state) => {
      state.totalWishlist - 1;
    },
  },
});
export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
