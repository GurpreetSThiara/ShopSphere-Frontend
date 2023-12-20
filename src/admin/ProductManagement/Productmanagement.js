// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Avatar,
  Pagination,
  Box,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,

} from "@mui/material";

import { API_BASE_URL } from "../../config/apiConfig";
import { Delete, Dialpad } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleProduct, findAllProducts } from "../../store/admin/admin-product-slice";
import { Link } from "react-router-dom";

import { MenuItem } from "react-pro-sidebar";







const ProductManagement = () => {
  const products = useSelector((state)=>state.adminProductsSlice.allProducts); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const [productsPerPage , setProductsPerPage] = useState(13);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex);
  

  useEffect(() => {
    setProductsPerPage(13);
    dispatch(findAllProducts());
    
    console.log("proooooooooooooo"+products);
  }, [ dispatch]);

  useEffect(() => {

    setTotalPages(Math.ceil(products.length / productsPerPage));
    setFilteredProducts(products);

  }, [products]);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedParentCategory, setSelectedParentCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleFilterChange = (filters) => {
    const updatedProducts = products.filter((product) => {
      const isPriceInRange =
        (!filters.minPrice || product.price >= filters.minPrice) &&
        (!filters.maxPrice || product.price <= filters.maxPrice);

      const isBrandMatch = !filters.selectedBrand || product.brand === filters.selectedBrand;

    const isDateTimeMatch = checkDateTimeFilter(product.createdAt, filters.selectedDateTime);;

      const isCategoryMatch =
        !filters.selectedCategory || product.category.name === filters.selectedCategory;

      const isParentCategoryMatch =
        !filters.selectedParentCategory ||
        product.category.parentCategory.name === filters.selectedParentCategory;

      return isPriceInRange && isBrandMatch && isDateTimeMatch && isCategoryMatch && isParentCategoryMatch;
    });

    setFilteredProducts(updatedProducts);
  };
  const checkDateTimeFilter = (productDateTime, selectedDateTime) => {
    if (!selectedDateTime) {
      return true; // No datetime filter selected
    }

    const productDate = new Date(productDateTime);
    const selectedDate = new Date(selectedDateTime);

    // Compare the product date with the selected date based on your filtering logic
    // For example, you can check if the product date is within the last day, week, or month

    // Check if the product date is today
    const isToday = productDate.toDateString() === new Date().toDateString();

    // Check if the product date is within the last day
    const isLastDay =
      productDate > new Date(new Date().setDate(new Date().getDate() - 1)) &&
      productDate <= new Date();

    // Check if the product date is within the last week
    const isLastWeek =
      productDate > new Date(new Date().setDate(new Date().getDate() - 7)) &&
      productDate <= new Date();

    // Check if the product date is within the last month
    const isLastMonth =
      productDate > new Date(new Date().setMonth(new Date().getMonth() - 1)) &&
      productDate <= new Date();

    // Return true if any of the conditions are met
    return isToday || isLastDay || isLastWeek || isLastMonth;
  };
  const handleFilterApply = () => {
    handleFilterChange({
      minPrice,
      maxPrice,
      selectedBrand,
      selectedDateTime,
      selectedCategory,
      selectedParentCategory,
    });
  };


  return (
    <Container>
     
      <Grid container alignContent="center" m="2px">
        <Grid item  m="2px" xs={12} lg={9.5}>
        <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
        </Grid>
        <Grid item  m="2px">
      
        <Button variant="outlined" href='/admin/ProductManagement/AddNewProduct'>Add New Product</Button>
    
        </Grid>
      </Grid>
   
     
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S. No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>ID</TableCell>

            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>discountedPrice</TableCell>
            <TableCell>quantity</TableCell>
            {/* Add more product-related fields as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedProducts.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>
                <Avatar alt={product.title} src={product.imageUrl} />
              </TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>${product.discountedPrice}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    dispatch(deleteSingleProduct({id:product.id}));

                  }}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Container>
  );
};

export default ProductManagement;
