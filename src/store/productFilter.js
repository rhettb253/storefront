import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produceData from '../data.json';

const url = import.meta.env.VITE_API_URL;


export const getProducts = createAsyncThunk('getProducts', async () => {
  const res = await fetch(`${url}/products`);
  const objProducts = await res.json();
  return objProducts.results; // this will be action.payload in extraReducer func
});

// update a single product
export const updateProduct = createAsyncThunk(
  "PUT/product/:id",
  // below I made an object because it can only take one arg
  async ( {product, amount} ) => {

    const updatedProduct = { ...product, inStock: product.inStock + amount };

    const response = await fetch(`${url}/products/${product._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: { "Content-Type": "application/json" },
    });

    const updatedProductObj = await response.json();
    return updatedProductObj; // this will be action.payload in extraReducer func
  }
);

const initialState = {
  products: [],
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
    // these are listening for the fulfilment of arg1
    builder
    .addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload; //payload comes from arg1 func
      const index = state.products.findIndex(
        (p) => p._id === updatedProduct._id
      );
      state.products[index] = updatedProduct;
    });
  }
})

// Action creators are generated for each case reducer function
export const { all, fruits, vegetables } = productFilterSlice.actions

export default productFilterSlice.reducer