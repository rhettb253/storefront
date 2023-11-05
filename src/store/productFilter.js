import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produceData from '../data.json';

const url = import.meta.env.VITE_API_URL;


export const getProducts = createAsyncThunk('getProducts', async () => {
  const res = await fetch(`${url}/products`);
  const objProducts = await res.json();
  return objProducts.results;
});

const initialState = {
  produce: produceData,
  type: 'ALL',
};

export const productFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    all: (state) => {
      state.type = 'ALL'
    },
    fruits: (state) => {
      state.type = 'FRUITS'
    },
    vegetables: (state) => {
      state.type = 'VEGETABLES'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
})

// Action creators are generated for each case reducer function
export const { all, fruits, vegetables } = productFilterSlice.actions

export default productFilterSlice.reducer