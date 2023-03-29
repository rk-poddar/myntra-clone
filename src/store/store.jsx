import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import wishlistReducer from "./wishlistSlice"
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
    }
})

export default store;