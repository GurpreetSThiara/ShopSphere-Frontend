import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./UserScreens/Views/HomePage/HomePage";
import ProductDetailsPage from "./UserScreens/Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage";
import ResponsiveAppBar from "./UserScreens/Componnents/NavigationBar/ResponsiveAppBar";
import Cart from "./UserScreens/Componnents/Cart/Cart";
import {useSelector} from 'react-redux'
import NavigationBar from "./UserScreens/Componnents/NavigationBar/NavigationBar";
function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  return (
    <div>
      <NavigationBar/><br/>
      <>hello</>
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
