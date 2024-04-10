import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalCartItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let productDetails = action.payload;
      const existProduct = state.cartList.find(
        (list) => list?.id === productDetails?.id
      );
      if (existProduct) {
        existProduct.count = existProduct.count + 1;
      } else {
        state.cartList.push({
          ...productDetails,
          count: 1,
        });
      }

      state.totalCartItems++;
    },
    increment: (state, action) => {
      let product = action.payload;
      console.log("pro", product);
      let currentProduct = state.cartList.find((list) => {
        return list?.id === product?.id;
      });
      if (!currentProduct) {
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      } else {
        currentProduct.count = currentProduct.count + 1;

        // remvoe the already exist product and add the updated product
        state.cartList = state.cartList.filter(
          (list) => list.id !== product.id
        );
        state.cartList.push(currentProduct);
      }
      state.totalCartItems++;
    },
    decrement: (state, action) => {
      const product = action.payload;
      let currentProduct = state.cartList.find(
        (list) => list?.id === product.id
      );
      if (!currentProduct || currentProduct.count === 0) {
        return;
      }
      currentProduct.count = currentProduct.count - 1;

      state.totalCartItems--;
    },
  },
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
