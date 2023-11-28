import React, { useEffect, useState } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import ProductCard from '../HomePageComponents/ProductCard';
import './HomePageProductSlider.css'


const HomePageProductSlider = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items:5 },
    };
   const [data,setData]=useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setData(data.products);
         
          console.log(data);
        } catch (error) {
          console.log('Error fetching categories:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render
  
            
const items=data==null?[1,1,1,1,1,1,1,1,1,].map((i)=><img src='https://via.placeholder.com/400x400' alt=''/>):data.map((i)=><ProductCard product={i}/>);
  return (
    <div className='c-container'>
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

export default HomePageProductSlider
