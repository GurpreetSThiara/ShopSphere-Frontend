import React, { useEffect, useState } from "react";
import HomeCarousel from "../../Componnents/CarouselSliders/HomePageSSingleCarousel";
import HomePageProductSlider from "../../Componnents/CarouselSliders/HomePageProductSlider";
import HomePageProductSlider2 from "../../Componnents/CarouselSliders/HomePageProductSliderSecond";

import Footer from "../../Componnents/Footer/Footer";

import LandingPageHero from "../../Componnents/HomePageComponents/LandingPageHero/LandingPageHero.js";
import AdminHome from "../../../admin/AdminHome/AdminHome.js";
import CheckoutForm from "../../Componnents/Cart/Checkout/CheckoutForm.js";
import Sidebarr from "../../../admin/sidebar/SideBar.js";
import SellerSignUpForm from "../../../Seller/Authentication/SignUp/SellerSignUpForm.js";




const HomePage = () => {
  return (
    <div>

      {/* <SellerSignUpForm/> */}

     
      <LandingPageHero />
      <HomePageProductSlider />
      <HomeCarousel />
      <HomePageProductSlider />

      <HomePageProductSlider2 />
      <HomePageProductSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
