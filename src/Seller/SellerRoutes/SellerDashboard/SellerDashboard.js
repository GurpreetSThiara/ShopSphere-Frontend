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
import { fetchShopOrdersByMonth, getOrders, getOrdersForAllTime, getOrdersForLast24Hours, getOrdersForLastMonth, getOrdersForLastWeek, getOrdersForLastYear, getShopInteractions } from "../../../store/seller/seller-order-slice";
import { useNavigate } from "react-router";
import OrdersTable from "./OrdersTable/OrdersTable";
import { Calculate } from "@mui/icons-material";
import worker from './salesCalculator.worker';
import WebWorker from "../../../WebWorker";

const SellerDashboard = ({ shop, sellerJwt, isSmallScreen }) => {
  const [totalSales , setTotalSales] = useState(null);
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
  const { ordersByMonth, isOrdersByMonthLoading } = useSelector(state => state.sellerOrders);
  const [labels , setLabels]= useState([]);
  const [barChartData , setBarChartData]= useState([]);


  const salesCalculatorWorker = new WebWorker(worker);

// Define a function to handle messages received from the worker
// salesCalculatorWorker.onmessage = function(event) {
//   const totalSales = event.data;
//   setTotalSales(totalSales)
//   console.log('Total sales:', totalSales);
// };

useEffect(()=>{
  console.log("datattttttttttttttttttttttttttttttttttttttttttt")

if(ordersByMonth){
  console.log("datattttttttttttttttttttttttttttttttttttttttttt")
  console.log( Object.keys(ordersByMonth));
  setLabels( Object.keys(ordersByMonth));
  console.log( Object.values(ordersByMonth))
  setBarChartData( Object.values(ordersByMonth).map(orders => orders.length));
}
},[ordersByMonth])

  useEffect(()=>{
    if(orders){
      console.log('karrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    salesCalculatorWorker.postMessage(orders);
    salesCalculatorWorker.addEventListener('message',(event)=>{
      const c = event.data;
      setTotalSales(c);


    })
    }


  },[orders])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        switch (selectedTimeFilter) {
          case "All time":
            dispatch(
              getOrdersForAllTime({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
            break;
          case "Last year":
            dispatch(
              getOrdersForLastYear({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
            break;
          case "Last month":
            dispatch(
              getOrdersForLastMonth({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
            break;
          case "Last week":
            dispatch(
              getOrdersForLastWeek({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
            break;
          case "Last 24 hours":
            dispatch(
              getOrdersForLast24Hours({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
            break;
          default:
            dispatch(
              getOrders({
                token: sellerJwt,
                id: shop.sellerShopId,
                pageNumber: 0,
                pageSize: 5,
              })
            );
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [dispatch, selectedTimeFilter, sellerJwt, shop.sellerShopId]);
  //gjghjhhjvhfghddfhjjjk
  useEffect(() => {
    dispatch(fetchShopOrdersByMonth({ shopId: shop.sellerShopId, lastYear: '2019-01-01 00:00:00', pageable: { pageNumber: 0, pageSize: 10 } }));

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
    const dunnyData = {
      labels:labels,
      datasets: [
        {
          label: "Sales",
          data: barChartData,
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

    return <Bar data={barChartData?dunnyData:data} options={options} />;
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
    <div style={{ width: "100%" }}>
      <div className="dashboard-hero" style={{ padding: 0 }}>
        <div
          style={{
            padding: 8,
            color: "black",
            zIndex: 1,
            position: "absolute",
            width:"100%"
          }}
        >
          <div className="hero-heading">
            <Typography fontSize={35} fontWeight={'bold'} variant={isSmallScreen ? "h4" : "h2"} gutterBottom>
              {shop.shopName}
            </Typography>
            {/* {!isSmallScreen && (
              <Button sx={primaryButton}>Edit Shop Details</Button>
            )}{" "} */}
          </div>
          {!isSmallScreen && (
            <div className="shop-description">
              <Typography variant="body1" gutterBottom>
                {shop.description}
              </Typography>
            </div>
          )}
     
          <div className="filters" style={{width:"100%"}}>
            <Grid container spacing={3} >
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 10,
                    backgroundColor: "#002244",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography variant="h6">Total Sales</Typography>
                  {/* You can fetch and display data here */}
                  <Typography variant={isSmallScreen ? "h6" : "h4"}>
                   {totalSales?totalSales:"0"}
                  </Typography>
                </Paper>
              </Grid>

              {/* Total Orders */}
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  elevation={3}
                  style={{
                    padding: 10,
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
                    padding: 10,
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
                  sx={{ color: "white", height:'3rem' }}
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
                {orders && (
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
