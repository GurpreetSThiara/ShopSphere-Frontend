import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./UserScreens/Views/HomePage/HomePage";
import ProductDetailsPage from "./UserScreens/Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage";
import ResponsiveAppBar from "./UserScreens/Componnents/NavigationBar/ResponsiveAppBar";
import Cart from "./UserScreens/Componnents/Cart/Cart";
import {useSelector} from 'react-redux'
import NavigationBar from "./UserScreens/Componnents/NavigationBar/NavigationBar";
import SignIn from "./UserScreens/Authentication/SignIn/SignIn";
import SignUp from "./UserScreens/Authentication/SignUp/SignUp";
function App() {
  // const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  return (
    <div>
      <NavigationBar/>
      
      
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
