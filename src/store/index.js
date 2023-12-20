import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import productDetailsSlice from "./productDetails-slice";
import customerProductSlice from "./product-slice";
import customerProductFilter from "./customerProductFilter-slice";

import { reviewReducer } from "./productReview-slice";
import adminProductSlice from "./admin/admin-product-slice";
import checkoutSlice from "./checkout-slice";
import adminOrdersSlice from "./admin/admin-order-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    customerProducts: customerProductSlice.reducer,
    product: productDetailsSlice.reducer,
    productFilter: customerProductFilter.reducer,
    reviews: reviewReducer,
 
    checkout:checkoutSlice.reducer,
    adminProductsSlice:adminProductSlice.reducer,
    adminOrders:adminOrdersSlice.reducer
  },
});

export default store;
