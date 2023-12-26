import React, { useEffect, useState } from "react";
import { ImageList, Button, Stack, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ProductCard from "../../../HomePageComponents/ProductCard";
import { findProductsSec } from "../../../../../store/product-slice";




const ProductGrid = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.customerProducts.products)|| [];
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const numPages = 8;


  const category = useSelector((state)=>state.productFilter.category);
  const color = useSelector((state)=>state.productFilter.color);
  const sizes = useSelector((state)=>state.productFilter.sizes);
  const minPrice = useSelector((state)=>state.productFilter.minPrice);
  const maxPrice = useSelector((state)=>state.productFilter.maxPrice);
  const minDiscount = useSelector((state)=>state.productFilter.minDiscount);
  const sort = useSelector((state)=>state.productFilter.sort);
  const pageNumber = useSelector((state)=>state.productFilter.pageNumber);
  const pageSize = useSelector((state)=>state.productFilter.pageSize);
  const stock = useSelector((state)=>state.productFilter.stock);
  useEffect(() => {
    console.log("use effecrttttttttttttt");
    const filterData = {
      category: localStorage.getItem("category"),
      colors: color,
      sizes: sizes,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minDiscount: minDiscount,
      sort: sort,
      pageNumber: pageNumber,
      pageSize: pageSize,
      stock: stock,
    };

    dispatch(findProductsSec(filterData));
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateUrlParams(newPage);
  };

  const updateUrlParams = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
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
            color={currentPage === index + 1 ? "primary" : "default"}
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
