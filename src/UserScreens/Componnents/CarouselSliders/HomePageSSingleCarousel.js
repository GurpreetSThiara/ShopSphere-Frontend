import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePageSSingleCarousel.css';

const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/1500x600',
      title: 'Stylish Product',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1500x600',
      title: 'Elegant Item',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1500x600',
      title: 'Modern Design',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    // Add more items as needed
  ];

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={item.title} />
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
