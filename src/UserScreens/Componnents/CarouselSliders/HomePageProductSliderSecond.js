import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

import ProductCard2 from "../HomePageComponents/ProductCard2";
import "./HomePageProductSlider.css";
import {
  filterProductData,
  setData,
} from "../../../store/customerProductFilter-slice";
import store from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { findProductsSec } from "../../../store/product-slice";

const HomePageProductSlider2 = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    768: { items: 1 },
    998: { items: 2.5 },
    1424: { items: 2.9 },
  };
  const [CarouselData, SetCarouselData] = useState([]);
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

    dispatch(findProductsSec(filterData));
  }, [dispatch]);

  const items = products.map((i) => <ProductCard2 product={i} />);

  return (
    <div className="">
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
        disableDotsControls
      />
    </div>
  );
};

export default HomePageProductSlider2;
