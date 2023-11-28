import React, { useEffect, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

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
    const [CarouselData,SetCarouselData]=useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          SetCarouselData(data);
         
          console.log(data);
        } catch (error) {
          console.log('Error fetching categories:', error);
        }
      };
  
      fetchData();
    }, []);
    const items=CarouselData.map((i)=><ProductCard2 product={i}/>);


  return (
    <div className=''>
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
          disableDotsControls
    />
    </div>
  )
}

export default HomePageProductSlider2
