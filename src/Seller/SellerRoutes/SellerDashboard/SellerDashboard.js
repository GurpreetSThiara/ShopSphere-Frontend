import React, { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getShopProducts } from "../../../store/seller/seller-product-management";
import ProductTable from "../SellerProductManagement/Table/ProductTable";
import "./SellerDashboard.css";
import { primaryButton } from "../../../Constants/Constants";
import { IoIosArrowForward } from "react-icons/io";
import { getOrders, getShopInteractions } from "../../../store/seller/seller-order-slice";
import { useNavigate } from "react-router";
import OrdersTable from "./OrdersTable/OrdersTable";

const SellerDashboard = ({ shop, sellerJwt, isSmallScreen }) => {
  const products = useSelector((state) => state.sellerProducts.shopProducts);
  const interactions = useSelector((state) => state.sellerOrders.interactions);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedTimeFilter(event.target.value);
  };

  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

  const isProductsLoading = useSelector(
    (state) => state.sellerProducts.isProductsLoading
  );
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.sellerOrders.orders);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
         dispatch(getOrders({token:sellerJwt ,id:shop.sellerShopId, pageNumber:0,pageSize:5 }));
      
      } catch (error) {
        console.error("Error fetching orders:", error);
        
      }
    };

    fetchOrders();
  }, [dispatch]);
  //gjghjhhjvhfghddfhjjjk
  useEffect(() => {
    dispatch(
      getShopProducts({
        token: sellerJwt,
        id: shop.sellerShopId,
        pageNumber: 0,
        pageSize: 10,
      })
    );

    dispatch(
      getShopInteractions({
        id: shop.sellerShopId,
        pageNumber: 0,
        pageSize: 10,
        token: sellerJwt,
      })
    );
  }, [dispatch]);
  const BarChart = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <Bar data={data} options={options} />;
  };
  const LineChart = () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Orders",
          data: [12, 19, 3, 5, 2, 3, 7],
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return <Line data={data} options={options} />;
  };
  useEffect(() => {}, []);
  return (
    <div style={{ width: "100vw" }}>
      <div className="dashboard-hero" style={{ padding: 0 }}>
        <div
          style={{
            padding: 8,
            color: "black",
            zIndex: 1,
            position: "absolute",
          }}
        >
          <div className="hero-heading">
            <Typography variant={isSmallScreen ? "h4" : "h2"} gutterBottom>
              {shop.shopName}
            </Typography>
            {!isSmallScreen && (
              <Button sx={primaryButton}>Edit Shop Details</Button>
            )}{" "}
          </div>
          {!isSmallScreen && (
            <div className="shop-description">
              <Typography variant="body1" gutterBottom>
                {shop.description}
              </Typography>
            </div>
          )}
          <br />
          <div className="filters">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    backgroundColor: "#002244",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography variant="h6">Total Sales</Typography>
                  {/* You can fetch and display data here */}
                  <Typography variant={isSmallScreen ? "h6" : "h4"}>
                    $1,000,000
                  </Typography>
                </Paper>
              </Grid>

              {/* Total Orders */}
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    backgroundColor: "#002244",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography variant="h6">Total Orders</Typography>
                  {/* You can fetch and display data here */}
                  <Typography variant={isSmallScreen ? "h6" : "h4"}>
                    {orders?orders.totalElements:""}
                  </Typography>
                </Paper>
              </Grid>

              {/* User Activity */}
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  elevation={3}
                  onClick={()=>{navigate('/seller/UserInteractions')}}
                  style={{
                    padding: 20,
                    backgroundColor: "#002244",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                    cursor: "pointer",
                    
                  }}
                >
                  <Typography variant="h6">User Activity</Typography>
                  {/* You can fetch and display data here */}
                  <Box display={"flex"} alignItems={"center"} >
                    <Typography variant={isSmallScreen ? "h6" : "h4"}>
                      {interactions ? interactions.numberOfElements : "NA"}
                    </Typography>
                    <Box>
                      <IoIosArrowForward size={24} />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <div className="filters-dropdowns">
              <FormControl className="filters-dropdown">
                <Select
                  value={selectedTimeFilter}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ color: "white" }}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    <Typography>Select Option</Typography>
                  </MenuItem>
                  <MenuItem value={"All time"}>All Time</MenuItem>
                  <MenuItem value={"Last year"}>Last Year</MenuItem>
                  <MenuItem value={"Last month"}>Last Month</MenuItem>
                  <MenuItem value={"Last week"}>Last Week</MenuItem>
                  <MenuItem value={"Last 24 hours"}>Last 24 hours</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* 
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
           {shop.firstName} {shop.lastName}
          </Typography>
          <Typography variant="body1">Email: {shop.email}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Shop Address:</Typography>
      
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Social Media:</Typography>
     
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Contact Information:</Typography>
      
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Opening Hours:</Typography>

        </Grid>
      </Grid> */}
        </div>
      </div>
      {/* <Box sx={{height:'2rem', width:'100vw' , backgroundColor:'white'} }>

  </Box> */}

      <div className="dashboard-content">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid item xs={12} md={5.5}>
            <div className="box">
              <div className="box-header">
                <div>{""}</div>
                <Typography>Recent Orders</Typography>
                <div>
                  <Button onClick={()=>navigate('/seller/SellerOrderManagement')}>View All</Button>
                </div>
              </div>
              <div className="box-body">
                {products && (
                  <div>
                  <OrdersTable orders={orders.content}/>
                  </div>
                )}
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={5.5}>
            <div className="box">
              <div className="box-header">
                <div>{""}</div>
                <Typography>Recent Added Products</Typography>
                <div>
                  <Button  onClick={()=>navigate('/seller/ProductManagement')}>View All</Button>
                </div>
              </div>
              <div className="box-body">
                {products && (
                  <div>
                    <ProductTable
                      products={products}
                      startIndex={0}
                      onClose={onClose}
                      onOpen={onOpen}
                      openModal={openModal}
                    />
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container></Grid>
        <div>
          {" "}
          <Grid container spacing={3}>
            {/* Total Sales */}

            {/* Sales Chart */}
            <Grid item xs={12} md={12} lg={8}>
              <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h6">Sales Chart</Typography>
                <BarChart />
              </Paper>
            </Grid>

            {/* Orders Chart */}
            <Grid item xs={12} md={12} lg={4}>
              <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h6">Orders Chart</Typography>
                <LineChart />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
