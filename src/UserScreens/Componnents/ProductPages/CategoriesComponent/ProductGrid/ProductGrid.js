import React, { useEffect, useState } from 'react';
import { ImageList, Button, Stack, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from '../../../HomePageComponents/ProductCard';
import { findProducts } from '../../../../../store/product-slice';
import { filterProductData, setData } from '../../../../../store/customerProductFilter-slice';
import store from '../../../../../store';

const ProductGrid = () => {
  const cat = useSelector((state) => state.customerProducts.categories.mensKurta);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.customerProducts.products);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const numPages = 8;

  useEffect(() => {
    const filterData = {
        category:filterProductData.category(store.getState()), 
      colors: filterProductData.colors(store.getState()),
      sizes: filterProductData.sizes(store.getState()),
      minPrice: filterProductData.minPrice(store.getState()),
      maxPrice: filterProductData.maxPrice(store.getState()),
      minDiscount: filterProductData.minDiscount(store.getState()),
      sort: filterProductData.sort(store.getState()),
      pageNumber: filterProductData.pageNumber(store.getState()),
      pageSize: filterProductData.pageSize(store.getState()),
      stock: filterProductData.stock(store.getState()),
    };

    // dispatch(findProducts(filterData));
  }, [cat, dispatch]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateUrlParams(newPage);
  };

  const updateUrlParams = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    navigate(`?${searchParams.toString()}`);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * numPages;
  const endIndex = startIndex + numPages;

  // Slice the products array to get only the products for the current page
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <ImageList sx={{}} cols={4}>
        {currentProducts.map((item) => (
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
        {[...Array(Math.ceil(products.length / numPages))].map((_, index) => (
          <IconButton
            key={index + 1}
            color={currentPage === index + 1 ? 'primary' : 'default'}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(products.length / numPages)}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default ProductGrid;
