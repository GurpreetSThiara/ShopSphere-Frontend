import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Box, Button, ButtonBase, Grid } from "@mui/material";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [totalPrice, setTotalPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();

  console.log(cartItems);
  const items = ["Product 1", "Product 2", "Product 3"];
  const subtotal = 500; 
  const discount = 50; 
  const total = subtotal - discount;
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
  
    dispatch(getCart(jwt));
    calculatePrice();
  }, [dispatch]);

  useEffect(() => {
    calculatePrice();
    localStorage.setItem("cartLength", cartItems.length.toString());
  }, [cartItems]);

  const calculatePrice = () => {
    const totalPrice = cartItems.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    const discountedPrice = cartItems.reduce(
      (accumulator, item) => accumulator + item.discountedPrice,
      0
    );
    console.log(cartItems);

    setTotalPrice(totalPrice);
    setDiscountedPrice(discountedPrice);
  };
  return (
    <div>
      <Grid container>
        <Grid item lg={8}>
          {CartItem != null ? (
            cartItems.map((item) => {
              return (
                <CartItem
                  product={item.product}
                  item={item}
                  quantity={item.quantity}
                />
              );
            })
          ) : (
            <>nothing</>
          )}
        </Grid>
        <Grid item lg={3.5} xs={12}>
          <div className="order-summary">
            <h2>Order Summary</h2>

            {/* Pricing details */}
            <div className="price-details">
              <div className="price-row">
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="price-row">
                <span>Discount:</span>
                <span className="discount">
                  ${totalPrice - discountedPrice}
                </span>
              </div>
              <div className="price-row">
                <span>Discounted Price:</span>
                <span className="discount">${discountedPrice}</span>
              </div>
              <div className="price-row total">
                <span>Delivery:</span>
                <span className="delivery"> FREE</span>
              </div>
              <hr className="divider" />
              <div className="price-row total">
                <span>Total:</span>
                <span>${discountedPrice}</span>
              </div>
              <div className="button-container">
                <Button className="order-button">
                  <h4 className="button-text"> Order Noww</h4>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
