import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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
    removeItemFromCart: (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.id !== action.payload.id),
    }),
  },
});

export const selectTotalItemsCount = createSelector(
  [(cart) => cart.data],
  (data) => {
    return data.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }
);

export const selectTotalItemsPrice = createSelector(
  [(cart) => cart.data],
  (data) => {
    return data.reduce(
      (accumulator, item) => accumulator + item.quantity * Number(item.price),
      0
    );
  }
);

export const { toggleCartHidden, addItemToCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
