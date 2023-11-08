import { configureStore } from "@reduxjs/toolkit";
import productFilterSlice from "./productFilter.js";
import selectedItem from "./selectedItem.js";
import cart from "./cart.js";

export default configureStore({
    reducer: {
        filter: productFilterSlice,
        showSelected: selectedItem, 
        cart: cart,
    }
});