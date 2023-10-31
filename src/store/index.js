import { configureStore } from "@reduxjs/toolkit";
import productFilterSlice from "./productFilter.js";
import selectedItem from "./selectedItem.js";

export default configureStore({
    reducer: {
        filter: productFilterSlice,
        showSelected: selectedItem, 
    }
})