import React from 'react'
import './OrderHistoryCard.css'
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
const OrderHistoryCard = () => {
  return (
    <div className='order-card'>
     
   
    <div className="order-container" >
      <img
        className="cart-image"
        alt=""
        src="https://buckmans.com/files/store/items/edytp03032_nomadpnt-w_gqm0_frt1.jpg"
      ></img>

      <div className="middle-cart">
        <h4 className="order-title">
          X Curvature Legging X Curvature Legging
        </h4>
        <Typography className="order-description" paragraph>Are you tired of ordinary pens that merely put ink on paper? Enter the QuantumQuill 9000, the writing instrument of the future! This sleek, stylish pen is not just a pen; it's a quantum leap in the world of writing tools.</Typography>
        <div class="">
         <Button className="order-butons" variant="contained" type="submit" sx={{backgroundColor:"#002244",color:"white",marginRight:4,marginBottom:4}}>View product</Button>
         <Button className='order-butons' variant="contained" sx={{backgroundColor:"#002244",color:"white",marginBottom:4}}>Buy Again</Button>
        </div>
        <Grid container spacing={2} justify="center">
            <Grid item xs={6} md={3} lg={1}>
              <Typography variant='h6' className='status-of-order'>Status:</Typography>
            </Grid>
            <Grid item xs={6} md={3} lg={10}>
              <Typography variant='h6' className='status-of-order-value'>Out For Delivery</Typography>
            </Grid>
          </Grid>
      </div>

      <h5 class="product-price">$500</h5>
   
  </div>

    </div>
  )
}

export default OrderHistoryCard
