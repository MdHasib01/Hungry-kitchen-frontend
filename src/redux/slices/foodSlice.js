import { createSlice } from "@reduxjs/toolkit";
export const foodSlice = createSlice({
  name: "food",
  initialState: {
    addToCart: [],
  },
  reducers: {
    addToCart(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += payload.cartQuantity;
      } else {
        const cartItem = { ...payload, cartQuantity: payload.cartQuantity };
        state.addToCart.push(cartItem);
      }
    },
    cartQuantity(state, { payload }) {
      const itemIndex = state.addToCart.findIndex(
        (item) => item._id === payload._id
      );
      state.addToCart[itemIndex].cartQuantity = payload.cartQuantity;
    },
    removeFromCart(state, { payload }) {
      state.addToCart = state.addToCart.filter(
        (food) => food._id !== payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart, cartQuantity } = foodSlice.actions;

export default foodSlice.reducer;
