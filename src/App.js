import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./UserScreens/Views/HomePage/HomePage";
import ProductDetailsPage from "./UserScreens/Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage";

import Cart from "./UserScreens/Componnents/Cart/Cart";

import NavigationBar from "./UserScreens/Componnents/NavigationBar/NavigationBar";
import SignIn from "./UserScreens/Authentication/SignIn/SignIn";
import SignUp from "./UserScreens/Authentication/SignUp/SignUp";
import ProductPage from "./UserScreens/Componnents/ProductPages/ProductPage";
function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
