import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productDetailsSlice from "./productDetails-slice";




const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        product:productDetailsSlice.reducer,
    }
});

export default store;








