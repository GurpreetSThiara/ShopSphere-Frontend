import React, { useEffect, useState } from "react";
import HomeCarousel from "../../Componnents/CarouselSliders/HomePageSSingleCarousel";
import HomePageProductSlider from "../../Componnents/CarouselSliders/HomePageProductSlider";
import HomePageProductSlider2 from "../../Componnents/CarouselSliders/HomePageProductSliderSecond";
import HomePageProductSlider3 from "../../Componnents/CarouselSliders/HomePageProductSlider3";
import ResponsiveAppBar from "../../Componnents/NavigationBar/ResponsiveAppBar";
import Footer from "../../Componnents/Footer/Footer";
import CheckoutForm from "../../Componnents/Cart/Checkout/CheckoutForm.js";
import OrderHistory from "../../Componnents/Cart/OrderHistory/OrderHistory.js";
import OrderDetailsPage from "../../Componnents/Cart/OrderHistory/OrderDetails/OrderDetailsPage.js";
import SignIn from "../../Authentication/SignIn/SignIn.js";
import ColorTextFields from "../../Authentication/SignUp/SignUp.js";
import SignUp from "../../Authentication/SignUp/SignUp.js";
import HomePageImage from "./../../../images/HomePage.jpg";
import { Button, Typography } from "@mui/material";
import LandingPageHero from "../../Componnents/HomePageComponents/LandingPageHero/LandingPageHero.js";
import CategoryCarousel from "../../Componnents/CarouselSliders/CategoryCarousal/CategoryCarousal.js";
import FilterComponent from "../../Componnents/ProductPages/CategoriesComponent/FilterComponent.js";
import ComponentHeader from "../../Componnents/ProductPages/CategoriesComponent/ComponentHeader/ComponentHeader.js";
import ProductViews from "../../Componnents/NavigationBar/NavigationItemsPages/ProductViews.js";
import NavigationBar from "../../Componnents/NavigationBar/NavigationBar.js";
import ProductPage from "../../Componnents/ProductPages/ProductPage.js";

const HomePage = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://dummyjson.com/products');
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div>
      <ProductPage/>
     

      {/* <ProductViews/> */}
      {/* <HomePageProductSlider/>
      <ComponentHeader/>
     <FilterComponent/> */}
      {/* <LandingPageHero/>
      <HomePageProductSlider/>
      <HomeCarousel />
     <HomePageProductSlider/>
      <CategoryCarousel/>
      <HomePageProductSlider2/>
      <HomePageProductSlider/> */}
{/* 
    
      {/* <SignUp/> */}

      {/* <div className="">
    
 <HomeCarousel/>
    
    </div>
    <div className=''>
    <div className='text-center'>
    <h2 className='text-4xl font-extrabold text-gray-900 mb-8'>New Arrivals</h2>
    </div> 
    //  <HomePageProductSlider2/>
    <HomePageProductSlider/>
    <HomePageProductSlider/>
    
     <CheckoutForm/> 
     <OrderHistory/>
     <OrderDetailsPage/>

 
    </div>
   <Footer/> */}
 
    </div>
  );
};

export default HomePage;
