import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  cart: {},
  totalCost: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
    addToCart: (state, action) => {
        const { name, price } = action.payload;
        if (state.cart[name]) {
            state.cart[name] = {
                amount: state.cart[name].amount + 1,
                cost: state.cart[name].cost + price,
            };
        } else {
            state.cart[name] = {
                amount: 1,
                cost: price,
            };
        }
        state.totalCost += price;
        },
    },
  },
);

// Action creators are generated for each case reducer function
export const { open, close, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
