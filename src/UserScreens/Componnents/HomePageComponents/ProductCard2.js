import React from 'react';
import './ProductCard2.css';

const ProductCard2 = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='product-image-container'>
        <img
          className='product-image'
          alt='Product'
          src={product.image || 'https://via.placeholder.com/400x400'}
        />
      </div>
      <div className='product-details'>
        <h3 className='product-title'>{product.title || 'Product Title'}</h3>
        <p className='product-description'>
          {product.description || 'Product Description'}
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
