// HomeCarousel.jsx

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './HomePageSSingleCarousel.css';

const items = [
  <div className='carousel-item'>
    <img src='https://github.com/leandrowd/react-responsive-carousel/blob/master/src/assets/1.jpeg?raw=true' alt='' />
  </div>,
  <div className='carousel-item'>
    <img src='https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg' alt='' />
  </div>,
];

const HomeCarousel = () => (
  <div className='carousel-container'>
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      animationDuration={2000}
      infinite
    />
      <>hhhhhhhhh</>
  
  </div>

);

export default HomeCarousel;
