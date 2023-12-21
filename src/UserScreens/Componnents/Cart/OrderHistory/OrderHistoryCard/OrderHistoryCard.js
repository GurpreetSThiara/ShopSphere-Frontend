import React from "react";
import "./OrderHistoryCard.css";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { CheckCircle, LocalShipping } from "@mui/icons-material";
const OrderHistoryCard = ({orderItem}) => {
  console.log(orderItem);
  return (
    <div className="order-card">
      <div className="order-container">
        <img
          className="cart-image"
          alt=""
          src={orderItem.product.imageUrl}
        ></img>

        <div className="middle-cart">
          <h4 className="order-title">
            {orderItem.product.title}
          </h4>
          <Typography className="order-description" paragraph>
            {orderItem.product.description}
          </Typography>
          <div class="">
            <Button
              className="order-butons"
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#002244",
                color: "white",
                marginRight: 4,
                marginBottom: 4,
              }}
            >
              View product
            </Button>
            <Button
              className="order-butons"
              variant="contained"
              sx={{
                backgroundColor: "#002244",
                color: "white",
                marginBottom: 4,
              }}
            >
              Buy Again
            </Button>
          </div>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6} md={3} lg={10}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Typography variant="h6" className="status-of-order">
                  Status:
                </Typography>
                <CheckCircle style={{ marginRight: "8px", color: "green" }} />
                <Typography
                  variant="h6"
                  className="status-of-order-value"
                  fontSize="medium"
                >
                  Out For Delivery
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <h5 class="product-price">$500</h5>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
