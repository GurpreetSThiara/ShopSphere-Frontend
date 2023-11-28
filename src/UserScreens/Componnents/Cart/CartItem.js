import React from "react";
import "./CartItem.css";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import {
  Add,
  ArrowDownward,
  ArrowForwardOutlined,
  ArrowUpward,
  ArrowUpwardRounded,
  Delete,
  DeleteTwoTone,
  ExposureTwoTone,
  PlusOne,
  Remove,
} from "@mui/icons-material";

const CartItem = () => {
  return (
    <div className="Cart-itemBox">
      <div className="inline-container">
        <img
          className="cart-image"
          alt=""
          src="https://th.bing.com/th/id/OIP.EnZjyMlFQYjzXXxUwQJ6YwHaHa?rs=1&pid=ImgDetMain"
        ></img>

        <div className="middle-cart">
          <h4 className="product-title">
            X Curvature Legging X Curvature Legging
          </h4>
          <Typography className="product-type">Cloth</Typography>
          <div class="product-price-container">
          <span class="discount">$450</span>
            <h5 class="product-price">$500</h5>
            <h5 className="discount-percent">45% off</h5>
           
          </div>
          <div className="arrow-button-box">
            <Grid container alignItems="center" spacing={2} paddingTop={4}>
              <Grid item>
                <Box className="box-remove">
                  <Remove
                    className="remove-button"
                    sx={{ fontSize: "small" }}
                  />
                </Box>
                {/* <IconButton className='icon-container'>
          <Remove className='remove-button' />
        </IconButton> */}
              </Grid>
              <Grid item>
                <Typography variant="body1">1</Typography>
              </Grid>
              <Grid item>
                <Box className="box-add">
                  <Add className="add-button" sx={{ fontSize: "small" }} />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>

        <Delete className="delete-button" />
      </div>
    </div>
  );
};

export default CartItem;
