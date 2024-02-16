import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

import ProductCard2 from "../HomePageComponents/ProductCard2";
import "./HomePageProductSlider.css";
import {

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
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 999999,
      minDiscount: 10,
      sort: '',
      pageNumber: 0,
      pageSize: 10,
      stock: '',
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
