import React, { useState } from "react";
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
import DeleteItemAlert from "./DeleteConfirmationModal/DeleteItemAlert";
import { cartActions, removeCartItem, updateCartItem } from "../../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({item,product,quantity}) => {
  const [isDeleteAlertVisible, setDeleteAlertVisible] = useState(false);
  const totalPrice=useSelector((state)=>state.cart.totalPrice);
  const discountedPrice=useSelector((state)=>state.cart.totalDiscountedPrice);
  const dispatch = useDispatch();
  const handleDelete = () => {
    // Handle delete logic here
    // ...
    setDeleteAlertVisible(false);
    dispatch(removeCartItem({cartItemId:product.id}));
  };

  const handleDeleteClick = () => {
    setDeleteAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setDeleteAlertVisible(false);
  };

  const handleAddButton=()=>{
    console.log("producttt");
    console.log(product);
    dispatch(updateCartItem({data:{quantity:item.quantity+1}, cartItemId:item.id}));
  }

  const handleRemoveButton=()=>{
    if(item.quantity>1){
      console.log("producttt");
      console.log(product);
      dispatch(updateCartItem({data:{quantity:item.quantity-1}, cartItemId:item.id}));
    }
    
  }
  const handleDeleteFromCart=()=>{
    dispatch(cartActions.deleteFromCart({product:product,quantity:quantity}));
  }

  return (
    <div className="Cart-itemBox">
      <Grid container>
        <Grid item xs={11}>
        <div className="inline-container">
        <img
          className="cart-image"
          alt=""
          src={product.imageUrl}
        ></img>

        <div className="middle-cart">
          <h4 className="product-title">
           {product.title}
          </h4>
          <Typography className="product-type">{product.brand}</Typography>
          <div className="product-price-container">
          <h5 className="product-price">{product.price}</h5>
          <span className="discount-price">{product.discountedPrice}</span>
           
            <h5 className="discount-percent">{product.discountPersent} %off</h5>
           
          </div>
          <div className="total-price-container">
            <Typography sx={{color:'gray'}}>Total Price:</Typography>
            <span className="discount-price">{product.discountedPrice*quantity}</span>
            
          </div>

          <div className="arrow-button-box">
            <Grid container alignItems="center" spacing={2} paddingTop={4}>
              <Grid item>
                <Box className="box-remove" onClick={handleRemoveButton}>
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
                <Typography variant="body1">{quantity}</Typography>
              </Grid>
              <Grid item>
                <Box className="box-add" onClick={handleAddButton}>
                  <Add className="add-button" sx={{ fontSize: "small" }} />
                </Box>

              </Grid>
              <Grid item ></Grid>
            
            </Grid>
          </div>
        </div>

        
      </div>
          </Grid> 
      <Grid item xs={1}>
             <div onClick={handleDeleteClick}>
             <Delete  className="delete-button" />
             </div>
              </Grid>
          
      </Grid>
      {isDeleteAlertVisible && (
        <DeleteItemAlert onDelete={handleDelete} onClose={handleCloseAlert} />
      )}

    </div>
  );
};

export default CartItem;
