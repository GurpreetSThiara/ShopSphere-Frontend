import React, { useEffect, useState } from 'react';
import { ImageList, Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from '../../../HomePageComponents/ProductCard';
import { findProducts } from '../../../../../store/product-slice';

const ProductGrid = () => {
  const cat = useSelector((state) => state.customerProducts.categories.mensKurta);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.customerProducts.products);
  const navigate = useNavigate(); // Update hook
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateUrlParams(newPage);
  };

  const updateUrlParams = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const colorValue = searchParams.get('color');
    const sizeValue = searchParams.get('size');
    const price = searchParams.get('price');
    const disccount = searchParams.get('disccout');
    const sortValue = searchParams.get('sort');
    const stock = searchParams.get('stock');

    const [minPrice, maxPrice] = price === null ? [0, 0] : price.split('-').map(Number);
    const data = {
      category: cat,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: currentPage - 1,
      pageSize: 8,
      stock: '',
    };
    dispatch(findProducts(data));
  }, [cat, location.search, currentPage, dispatch]);

  return (
    <div>
      <ImageList sx={{}} cols={4}>
        {products.map((item) => (
          <div style={{ marginBottom: 20 }} key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </ImageList>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        {[...Array(Math.ceil(products.length / 8))].map((_, index) => (
          <Button
            key={index + 1}
            variant="contained"
            color="primary"
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(products.length / 8)}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default ProductGrid;
