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
import userProfileSlice from "./user-profile-slice";
import OrderHistorySlice from "./orderHistory-slice";
import ShopUserViewSlice, { ShopUserViewSliceReducer } from "./shop-user-view-slice";
import { persistStore } from "redux-persist";
import sellerAuthSlice from "./seller/seller-auth-slice";
import sellerProductsSlice from "./seller/seller-product-management";
import sellerOrderSlice from "./seller/seller-order-slice";
import nearByShopsSlice from "./nearBy-shops-slice";



export const store = configureStore({
  reducer: {
  
    auth: authSlice.reducer,
    userProfile: userProfileSlice.reducer,
    cart: cartSlice.reducer,
    customerProducts: customerProductSlice.reducer,
    product: productDetailsSlice.reducer,
    productFilter: customerProductFilter.reducer,
    reviews: reviewReducer,
    orders:OrderHistorySlice.reducer,
 
    checkout:checkoutSlice.reducer,
    adminProductsSlice:adminProductSlice.reducer,
    adminOrders:adminOrdersSlice.reducer,
    shops:ShopUserViewSliceReducer,

    nearByShops:nearByShopsSlice.reducer,



    //seller
    sellerAuth:sellerAuthSlice.reducer,
    sellerProducts:sellerProductsSlice.reducer,
    sellerOrders:sellerOrderSlice.reducer


 
  },
});

const persistedStore = persistStore(store);

export default persistedStore;
