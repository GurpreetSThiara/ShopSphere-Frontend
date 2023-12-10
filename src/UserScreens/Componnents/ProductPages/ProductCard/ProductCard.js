import React from "react";
import "./ProductCard.css";


const ProductCard = () => {
  const P = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://th.bing.com/th/id/OIP.T5hDlxGpJQlm_tQuQ54MFQHaHa?pid=ImgDet&rs=1",
    images: ["...", "...", "..."],
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <br />
        <img
          src={P.thumbnail}
          alt={`${P.brand} ${P.title}`}
          className="product-thumbnail"
        />
      </div>
      <div className="product-details">
        <div className="product-title">{P.title}</div>
        <div className="product-description">{P.description}</div>
        <div className="price-container">
          <div className="product-price">${P.price}</div>

          {P.discountPercentage > 0 && (
            <div className="product-discount">
              Discount: {P.discountPercentage}% OFF
            </div>
          )}
          <div className="product-rating">Rating: {P.rating}</div>
        </div>

        {/* <div className="product-stock">In Stock: {P.stock} units</div> */}
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};


export default ProductCard;
