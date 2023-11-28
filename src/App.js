import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./UserScreens/Views/HomePage/HomePage";
import ProductDetailsPage from "./UserScreens/Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage";
import ResponsiveAppBar from "./UserScreens/Componnents/NavigationBar/ResponsiveAppBar";
import Cart from "./UserScreens/Componnents/Cart/Cart";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
