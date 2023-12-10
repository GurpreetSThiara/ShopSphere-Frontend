import React, { useEffect, useState } from "react";
import HomeCarousel from "../../Componnents/CarouselSliders/HomePageSSingleCarousel";
import HomePageProductSlider from "../../Componnents/CarouselSliders/HomePageProductSlider";
import HomePageProductSlider2 from "../../Componnents/CarouselSliders/HomePageProductSliderSecond";

import Footer from "../../Componnents/Footer/Footer";

import LandingPageHero from "../../Componnents/HomePageComponents/LandingPageHero/LandingPageHero.js";

const HomePage = () => {
  return (
    <div>
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
