import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../HomePageComponents/ProductCard";
import "./HomePageProductSlider.css";
import { dressPage1 } from "../../../products/dress/page1";
import { useDispatch, useSelector } from "react-redux";
import {

  setData,
} from "../../../store/customerProductFilter-slice";
import { findProducts } from "../../../store/product-slice";
import { store } from "../../../store";


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
      category:"womendress" ,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 999999,
      minDiscount: 0,
      sort: "",
      pageNumber: 0,
      pageSize: 100,
      stock: "",
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
