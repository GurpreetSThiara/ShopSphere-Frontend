import React from 'react';

const ProductCard2 = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center rounded-lg overflow-hidden sm:w-[20rem] md:w-[25rem] mx-4 transition transform hover:scale-105'>
      <br />
      <div className='overflow-hidden rounded-t-lg'>
        <img
          className='product-image'
          alt='Product'
          src='https://media.istockphoto.com/id/1064924442/photo/young-confident-brunette-woman-in-white-elegant-shirt-smiling-portrait-against-white.jpg?s=1024x1024&w=is&k=20&c=oIzYtObbbYJLRhxvtmWd2YAdXl3BtPMN3-gHDUv33Ww='
        />
      </div>
      <div className='product-details'>
        <h3 className='product-title'>NoFilter Blouse</h3>
        <p className='product-description'>
          Elevate your style with this perfect for any occasion.
        </p>
        <br />
      </div>
    </div>
  );
};

export default ProductCard2;
