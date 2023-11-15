import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ProductCard from '../HomePageComponents/ProductCard';
import './HomePageSSingleCarousel.css'

const HomePageProductSlider = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items:6 },
    };
const items=[1,1,1,1,1,1,1,1,1,].map((i)=><ProductCard/>)
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
        disableButtonsControls
        touchTracking
        touchMoveDefaultEvents
    />
    </div>
  )
}

export default HomePageProductSlider
