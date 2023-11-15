import React, { useEffect, useState } from 'react'
import HomeCarousel from '../../Componnents/CarouselSliders/HomePageSSingleCarousel'
import HomePageProductSlider from '../../Componnents/CarouselSliders/HomePageProductSlider'
import HomePageProductSlider2 from '../../Componnents/CarouselSliders/HomePageProductSliderSecond'
import HomePageProductSlider3 from '../../Componnents/CarouselSliders/HomePageProductSlider3'

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
    <div className="">
    
    <HomeCarousel/>
    
    </div>
    <div className=''>
    <div className='text-center'>
    <h2 className='text-4xl font-extrabold text-gray-900 mb-8'>New Arrivals</h2>
    </div>
    <HomePageProductSlider2/>
    <HomePageProductSlider/>

    <HomePageProductSlider3/>
    </div>
    </div>
  )
}

export default HomePage
