import { createSlice } from '@reduxjs/toolkit';
import produceData from '../data.json';

const initialState = {
  produce: produceData,
  type: 'ALL',
}

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
})

// Action creators are generated for each case reducer function
export const { all, fruits, vegetables } = productFilterSlice.actions

export default productFilterSlice.reducer