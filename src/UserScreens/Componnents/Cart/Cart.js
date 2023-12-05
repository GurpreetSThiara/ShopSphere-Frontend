import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { Box, Button, ButtonBase, Grid } from '@mui/material'
import './Cart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems=useSelector((state)=>state.cart.itemList);
    const totalPrice=useSelector((state)=>state.cart.totalPrice);
    const discountedPrice=useSelector((state)=>state.cart.totalDiscountedPrice);

    console.log(cartItems);
    const items = ['Product 1', 'Product 2', 'Product 3'];
    const subtotal = 500; // Assuming the subtotal is $500
    const discount = 50; // Assuming a $50 discount
    const total = subtotal - discount;
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);
  
    // useEffect(() => {
    //   const calculateTotalPrices = () => {
    //     let calculatedTotalPrice = 0;
    //     let calculatedDiscountedTotalPrice = 0;
  
    //     cartItems.forEach((item) => {
     
    //       calculatedTotalPrice += item.product.price * item.quantity;
    //       calculatedDiscountedTotalPrice += item.product.discountedPrice * item.quantity;
       
    //     });
    //     return { calculatedTotalPrice, calculatedDiscountedTotalPrice };
    //   };
  
    //   const { calculatedTotalPrice, calculatedDiscountedTotalPrice } = calculateTotalPrices();
    //   setTotalPrice(calculatedTotalPrice);
    //   setDiscountedTotalPrice(calculatedDiscountedTotalPrice);
    // }, [cartItems]);

    // const [totals, setTotals] = useState({
    //   totalPrice: 0,
    //   discountedTotalPrice: 0,
    // });

    // Function to calculate the total price of products in the cart
    // const calculateTotalPrices = () => {
    //   let totalPrice = 0;
    //   let discountedPrice=0;
    //   cartItems.forEach((item) => {
     
    //     totalPrice += item.product.price * item.quantity;
    //     discountedPrice += item.product.discountedPrice * item.quantity;
     
    //   });
      
 
  
    //   return {totalPrice,discountedPrice};
    // };
  
    // useEffect(() => {

    
    
    //   setTotals(calculateTotalPrices());
    //   console.log("Updated Totals:", totals);

    //   console.log("yyyyyyyyyyyyyyyyyyyyyyyyy");
    //   console.log(totals[1]);
    // }, []);

  return (

    <div>
    <Grid container>
        <Grid item lg={8}>
        { CartItem!=null ?cartItems.map((item)=>{
          return  <CartItem product={item.product} quantity={item.quantity} />
         }):<>nothing</>
        }
      
        </Grid>
        <Grid item lg={3.5} xs={12}>
        <div className="order-summary">
      <h2>Order Summary</h2>

      {/* List of ordered items
      <ul className="order-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}

      {/* Pricing details */}
      <div className="price-details">
        <div className="price-row">
          <span>Subtotal:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="price-row">
          <span>Discount:</span>
          <span className="discount">${totalPrice-discountedPrice}</span>
        </div>
        <div className="price-row">
          <span>Discounted Price:</span>
          <span className="discount">${discountedPrice}</span>
        </div>
        <div className='price-row total'>
        <span>Delivery:</span>
          <span className='delivery'> FREE</span>

        </div>
        <hr className="divider" />
        <div className="price-row total">
          <span>Total:</span>
          <span>${discountedPrice}</span>
        </div>
        <div className='button-container'>
        <Button className="order-button"  >
       <h4 className='button-text'>  Order Noww</h4>
      </Button>
        </div>
      </div>
    </div>
        </Grid>

    </Grid>
  
    </div>
  )
}

export default Cart
