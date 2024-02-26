import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NearByShop from './NearByShop/NearByShop';

const NearByShops = ({ shops }) => {
  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1200: { items: 5 },
  };
 
 const items =shops.map((shop, index) =>  (
    <NearByShop key={index} shop={shop} />
  ))
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      infinite
      autoPlay
      autoPlayInterval={3000}
      disableButtonsControls
      disableDotsControls
      items={items}
    />
   

  );
};

export default NearByShops;
