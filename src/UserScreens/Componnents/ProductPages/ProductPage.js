import React, { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import FilterComponent from "./CategoriesComponent/FilterComponent";
import { Grid, Typography } from "@mui/material";
import ComponentHeader from "./CategoriesComponent/ComponentHeader/ComponentHeader";

const ProductPage = () => {

  return (
    <>
    <div>
    <ComponentHeader/>
    </div>
      <Grid container>
        <Grid item>
          <FilterComponent />
        </Grid>
        <Grid item sx={{mx:2}}>
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
        </Grid>
       
      </Grid>
    </>
  );
};

export default ProductPage;
