import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productDetailsSlice from "./productDetails-slice";
import customerProductSlice from "./product-slice";
import customerProductFilter from "./customerProductFilter-slice";
import rootReducer from "./rootReducer";





const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        customerProducts:customerProductSlice.reducer,
         product:productDetailsSlice.reducer,
         productFilter:customerProductFilter.reducer,
         reducer: rootReducer,
     
        
    }
});

export default store;








