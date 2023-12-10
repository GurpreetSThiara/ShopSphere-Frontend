import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePageSSingleCarousel.css";
import istImage from "./../../../images/HomePageCarousal/1.jpg";
import secondImage from "./../../../images/HomePageCarousal/2.jpg";
import thirdImage from "./../../../images/HomePageCarousal/3.jpg";
import fourthImage from "./../../../images/HomePageCarousal/4.jpg";

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
      image: istImage,
      title: "Stylish Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: secondImage,
      title: "Elegant Item",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      image: thirdImage,
      title: "Modern Design",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      image: fourthImage,
      title: "Modern Design",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings} adaptiveHeight>
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
