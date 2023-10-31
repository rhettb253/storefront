import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  selected: null,
}

export const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
    selectedItem: (state, action) => {
      state.selected = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleShow, selectedItem } = selectedItemSlice.actions

export default selectedItemSlice.reducer