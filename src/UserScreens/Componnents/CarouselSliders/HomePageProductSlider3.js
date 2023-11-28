import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ProductCard from '../HomePageComponents/ProductCard';
import './HomePageProductSlider.css'

import ProductCard3 from '../HomePageComponents/ProductCard3';

const HomePageProductSlider3 = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items:6 },
    };
const items=[1,1,1,1,1,1,1,1,1,].map((i)=><ProductCard3/>)
  return (
    <div className='carousel-container'>
       <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"

        autoPlay
        autoPlayInterval={2000}
        infinite
        keyboardNavigation
      
        touchTracking
        touchMoveDefaultEvents
        disableDotsControls
    />
    </div>
  )
}

export default HomePageProductSlider3
