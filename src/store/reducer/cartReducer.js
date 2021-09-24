import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartHidden: true,
    loading: false,
    data: [],
  },
  reducers: {
    toggleCartHidden: (state) => ({ ...state, cartHidden: !state.cartHidden }),
    addItemToCart: (state, action) => ({
      ...state,
      data: [...action.payload],
    }),
  },
});

export const { toggleCartHidden, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
