import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./UserScreens/Views/HomePage/HomePage";
import ProductDetailsPage from "./UserScreens/Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage";

import Cart from "./UserScreens/Componnents/Cart/Cart";

import NavigationBar from "./UserScreens/Componnents/NavigationBar/NavigationBar";
import SignIn from "./UserScreens/Authentication/SignIn/SignIn";
import SignUp from "./UserScreens/Authentication/SignUp/SignUp";
import ProductPage from "./UserScreens/Componnents/ProductPages/ProductPage";
import ProductManagement from "./admin/ProductManagement/Productmanagement";
import AdminHome from "./admin/AdminHome/AdminHome";
import CheckoutForm from "./UserScreens/Componnents/Cart/Checkout/CheckoutForm";
import OrderSummary from "./UserScreens/Componnents/Cart/Checkout/OrderSummary/OrderSummary";
import UserRoutes from "./UserScreens/UserRoutes";
import AdminRoutes from "./admin/AdminRoutes";
import SellerRoutes from "./Seller/SellerRoutes/SellerRoutes";
function App() {
  return (
    <div>
      <NavigationBar />
    

      <Routes>
      <Route path="/*" element={   <UserRoutes/>} />
        <Route path="/Admin/*" element={<AdminRoutes />} />
        <Route path="/Seller/*" element={<SellerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
