import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../HomePageComponents/ProductCard";
import "./HomePageProductSlider.css";
import { dressPage1 } from "../../../products/dress/page1";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductData,
  setData,
} from "../../../store/customerProductFilter-slice";
import { findProducts } from "../../../store/product-slice";
import store from "../../../store";

const HomePageProductSlider = () => {
  const products = useSelector((state) => state.customerProducts.products);
  const dispatch = useDispatch();

  const responsive = {
    0: { items: 1.3 },
    568: { items: 2 },
    980: { items: 3 },
    1200: { items: 4 },
    1350: { items: 5 },
  };

  useEffect(() => {
    const filterData = {
      category: filterProductData.category(store.getState()),
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

    const fetchData = async () => {};
    dispatch(setData({ category: "womendress" }));
    dispatch(findProducts(filterData));

    fetchData();
  }, [dispatch]);

  const items =
    products == null
      ? [1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
          <img src="https://via.placeholder.com/400x400" alt="" />
        ))
      : products.map((i) => <ProductCard product={i} />);
  return (
    <div className="c-container">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        infinite
        keyboardNavigation
        disableButtonsControls
        touchTracking
        touchMoveDefaultEvents
        disableDotsControls
      />
    </div>
  );
};

export default HomePageProductSlider;
