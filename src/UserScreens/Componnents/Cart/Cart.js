import React from 'react'
import CartItem from './CartItem'
import { Box, Button, ButtonBase, Grid } from '@mui/material'
import './Cart.css'

const Cart = () => {
    const items = ['Product 1', 'Product 2', 'Product 3'];
    const subtotal = 500; // Assuming the subtotal is $500
    const discount = 50; // Assuming a $50 discount
    const total = subtotal - discount;
  return (
    <div>
    <Grid container>
        <Grid item lg={8}>
        <CartItem />
      <CartItem/>
      <CartItem/>
      <CartItem/>
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
          <span>${subtotal}</span>
        </div>
        <div className="price-row">
          <span>Discount:</span>
          <span className="discount">${discount}</span>
        </div>
        <div className='price-row tota'>
        <span>Delivery:</span>
          <span className='delivery'> FREE</span>

        </div>
        <hr className="divider" />
        <div className="price-row total">
          <span>Total:</span>
          <span>${total}</span>
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
