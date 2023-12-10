import React, { useEffect } from "react";

import { Grid } from "@mui/material";
import ComponentHeader from "./CategoriesComponent/ComponentHeader/ComponentHeader";
import { useDispatch } from "react-redux";

import ProductGrid from "./CategoriesComponent/ProductGrid/ProductGrid";
import { findProducts } from "../../../store/product-slice";

const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      category: localStorage.getItem("category"),
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 100,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [dispatch]);

  return (
    <>
      <div>
        <ComponentHeader />
      </div>
      <Grid container>
        <Grid item lg={12}>
          <div>
            <ProductGrid />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
