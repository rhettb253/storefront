import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,    
  cart: {},
  totalCost: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
        state.open = false;
      },
    addToCart: (state, payload) => {
      if (state.cart[payload.title].amount) {
        state.cart[payload.title] = {
            amount: state.cart[payload.title].amout + 1,
            cost: state.cart[payload.title].cost + payload.price,
        };
        state.cart.totalCost += payload.price; 
      } else {
        state.cart[payload.title] = {
          amount: 0,
          cost: 0
        };
          state.cart[payload.title] = {
            amount: state.cart[payload.title].amount + 1,
            cost: state.cart[payload.title].cost + payload.price,
          };
          state.cart.totalCost += payload.price;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { open, close, addToCart } = cartSlice.actions

export default cartSlice.reducer