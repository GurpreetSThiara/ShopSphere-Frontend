import React from 'react';

const ProductCard3 = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center  rounded-lg  overflow-hidden w-[15rem] mx-3 transition transform hover:scale-105'>
      <div className='h-[23rem] w-[10rem] overflow-hidden rounded-t-lg'>
        <img
          className='object-cover object-center w-full h-full'
          alt=''
          src='https://media.istockphoto.com/id/172874489/photo/yellow-blank-t-shirt-front-isolated-on-white.jpg?s=612x612&w=0&k=20&c=15dhxxeEvDVfPccJ9CL_CIPzuW1SAuE1AsDeNRCVD8g='
        />
      </div>
      <div className='p-4 flex flex-col items-center'>
        <h3 className='text-lg font-semibold text-gray-900'>NoFilter</h3>
        <p className='mt-3 text-sm text-gray-600 text-center'>
          Elevate your style with this perfect for any occasion.
        </p>
      </div>
    </div>
  );
};

export default ProductCard3;
