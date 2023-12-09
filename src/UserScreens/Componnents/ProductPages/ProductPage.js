import React, { useEffect, useState } from "react";

import FilterComponent from "./CategoriesComponent/FilterComponent";
import { Grid, ImageList, Typography } from "@mui/material";
import ComponentHeader from "./CategoriesComponent/ComponentHeader/ComponentHeader";
import { useDispatch, useSelector } from "react-redux";

import customerProductSlice, { findProducts } from './../../../store/product-slice';
import { useParams } from "react-router";
import ProductCard from "../HomePageComponents/ProductCard";
import ProductGrid from "./CategoriesComponent/ProductGrid/ProductGrid";




const ProductPage = () => {
  const cat=useSelector((state)=>state.customerProducts.categories.womenTop)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.customerProducts.products);
  const param = useParams();
   // Replace "yourReducer" with the name of your reducer
  //  const decodedQueryString = decodeURIComponent(location.search);
   const searchParams = new URLSearchParams();
   const colorValue = searchParams.get("color");
   const sizeValue = searchParams.get("size");
   const price = searchParams.get("price");
   const disccount = searchParams.get("disccout");
   const sortValue = searchParams.get("sort");
   const pageNumber = searchParams.get("page") || 1;
   const stock = searchParams.get("stock");
   const jwt = localStorage.getItem("jwt");

   useEffect(() => {
    const [minPrice, maxPrice] =
      price === null ? [0, 0] : price.split("-").map(Number);
    const data = {
      category: cat,
      colors:  [],
      sizes:  [],
      minPrice:  0,
      maxPrice:  10000,
      minDiscount:  0,
      sort:  "price_low",
      pageNumber: 0,
      pageSize: 100,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [
    cat,
    colorValue,
    sizeValue,
    price,
    disccount,
    sortValue,
    pageNumber,
    stock,
  ]);

  return (
    <>
   
    <div>
    <ComponentHeader/>
    </div>
      <Grid container>
        
       <Grid item lg={12}>
       <div>
   <ProductGrid/>
    </div>
       </Grid>
        {/* <Grid item sx={{mx:2}}>
            <ProductCard />
        </Grid>
        <Grid item sx={{mx:2}}>
            <ProductCard/>
        </Grid>
        <Grid item sx={{mx:2}}>
            <ProductCard/>
        </Grid>
        <Grid item sx={{mx:2}}>
            <ProductCard/>
        </Grid> */}
       
      </Grid>
    </>
  );
};

export default ProductPage;
