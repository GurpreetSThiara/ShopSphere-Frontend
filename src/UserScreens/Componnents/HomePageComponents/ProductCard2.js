import React from "react";
import "./ProductCard2.css";
import { useDispatch } from "react-redux";
import { productDetailsActions } from "../../../store/productDetails-slice";

const ProductCard2 = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.setItem("product", JSON.stringify(product));

    dispatch(productDetailsActions.updateProduct(product));
  };
  return (
    <a href="/ProductDetailsPage">
      <div className="product-card" onClick={handleClick}>
        <div className="product-image-container">
          <img
            className="product-image"
            alt="Product"
            src={product.imageUrl || "https://via.placeholder.com/400x400"}
          />
        </div>
        <div className="product-details">
          <h3 className="product-title">{product.title || "Product Title"}</h3>
          <p className="product-description">
            {product.description || "Product Description"}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard2;
