import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

import './HomePageSSingleCarousel.css'
import ProductCard2 from '../HomePageComponents/ProductCard2';
import './HomePageProductSlider.css'

const HomePageProductSlider2 = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1.7 },
        768: { items: 2 },
        998: { items: 2.5 },
        1424: { items: 2.9 },
    };
const items=[1,1,1,1,1,1,1,1,1,].map((i)=><ProductCard2/>)
  return (
    <div className='blueCard'>
       <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        infinite
        keyboardNavigation
        disableButtonsControls
        touchTracking
        touchMoveDefaultEvents
    />
    </div>
  )
}

export default HomePageProductSlider2
