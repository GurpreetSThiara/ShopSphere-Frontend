import { Typography } from '@mui/material';
import './CC.css'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const CategoryCarousel = () => {
  const categories = [
    { id: 1, name: 'Electronics', imageUrl: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?w=1060&t=st=1701587975~exp=1701588575~hmac=dccf2f9ca38b14805cda5f5c9e6ba81ca98985f29af1cdaa38e4ca1b83bcfd40' },
    { id: 2, name: 'Clothing', imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Home Decor', imageUrl: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Books', imageUrl: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Sports', imageUrl: 'https://via.placeholder.com/300' },
    // Add more sample categories as needed
  ];

  const containerStyle = {
    width: '300px', // Set the desired width for the container
    height: '200px', // Set the desired height for the container
    margin: '0 auto', // Center the container
  };

  const imageStyle = {

    width: '200px', // Make the image fill the container width
    height: '200px', // Make the image fill the container height
    borderRadius: '8px', // Add border-radius for a rounded look
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    fit:'cover'
  };

  const responsive = {
    0: { items: 2 },
    600: { items:4  },
    1024: { items: 6 },
  };

  return (
    <div className='Category-carousal-container'>
      <Typography variant='h4'  style={{ textAlign: 'center', marginBottom: '20px',fontFamily:"monoscript" }}>Explore Categories</Typography>
      <AliceCarousel
        responsive={responsive}
        dotsDisabled={false}
        buttonsDisabled={true}
        autoPlay={true}
        autoPlayInterval={3000}
        mouseTracking
      >
        {categories.map((category) => (
          <div key={category.id} style={containerStyle}>
            <img
            
              src={category.imageUrl}
              alt={category.name}
              style={imageStyle}
            />
            <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
              {category.name}
            </p>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default CategoryCarousel;
