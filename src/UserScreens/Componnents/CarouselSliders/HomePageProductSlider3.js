import React, { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../HomePageComponents/ProductCard";
import "./HomePageProductSlider.css";

import ProductCard3 from "../HomePageComponents/ProductCard3";
import {
  filterProductData,
  setData,
} from "../../../store/customerProductFilter-slice";
import store from "../../../store";
import { findProducts, findProductsSec } from "../../../store/product-slice";
import { useDispatch, useSelector } from "react-redux";

const HomePageProductSlider3 = () => {
  const products = useSelector(
    (state) => state.customerProducts.productsSecondCat
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effecrttttttttttttt");
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

    dispatch(setData({ category: "women_clothing" }));
    dispatch(findProductsSec(filterData));
  }, [dispatch]);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => <ProductCard3 />);
  return (
    <div className="carousel-container">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={2000}
        infinite
        keyboardNavigation
        touchTracking
        touchMoveDefaultEvents
        disableDotsControls
      />
    </div>
  );
};

export default HomePageProductSlider3;
