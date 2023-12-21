import React, { useEffect, useState } from "react";

import "./OrderHistory.css";
import Button from "@mui/material/Button";
import {
  Avatar,
  AvatarGroup,
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import OrderHistoryCard from "./OrderHistoryCard/OrderHistoryCard";
import { useDispatch, useSelector } from "react-redux";
import OrderHistorySlice, { getAllOrders, setOrder } from "../../../../store/orderHistory-slice";
import { MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router";


const OrderHistory = () => {
  const dispatch = useDispatch();
  const order = useSelector((state)=>state.orders.allOrders);
  const [anchorElArray, setAnchorElArray] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getAllOrders());
  },[dispatch]);
  const OrderFilter = ({ handleFilterChange }) => {
    const [filters, setFilters] = useState({
      pending: false,
      processing: false,
      delivered: false,
      canceled: false,
    });

    const handleCheckboxChange = (filter) => {
      const updatedFilters = { ...filters, [filter]: !filters[filter] };
      setFilters(updatedFilters);
      handleFilterChange(updatedFilters);
    };

    const handleDateRangeChange = (startDate, endDate) => {
      // Implement your logic to filter orders based on the selected date range
      // and update the 'filteredOrders' state accordingly.
      console.log("Date Range:", startDate, endDate);
    };

    return (
      <div className="order-filter">
        <FormGroup>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item lg={4}></Grid>
            <Grid item xs={6} lg={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.pending}
                    onChange={() => handleCheckboxChange("pending")}
                  />
                }
                label="Pending"
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.processing}
                    onChange={() => handleCheckboxChange("processing")}
                  />
                }
                label="Processing"
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.delivered}
                    onChange={() => handleCheckboxChange("delivered")}
                  />
                }
                label="Delivered"
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.canceled}
                    onChange={() => handleCheckboxChange("canceled")}
                  />
                }
                label="Canceled"
              />
              <Grid item lg={4}></Grid>
            </Grid>
          </Grid>
        </FormGroup>

        {/* <DateRangePicker onDateRangeChange={handleDateRangeChange} /> */}
      </div>
    );
  };

  if(order!==null)return (
    <div className="">
      <div className="order-screen-title">
        <Typography variant="h5" className="title-heading">
          Order History
        </Typography>
        <Typography className="title-sub-heading">
          Check the status of recent orders
        </Typography>
        <br />
      </div>
      <TableContainer className="mx-16">
      <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
        <TableHead>
          <TableRow>
            <TableCell>Images</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.map((order) => (
            <React.Fragment key={order.id}>
              <TableRow hover>
                <TableCell> <AvatarGroup max={4}>
                    {order.orderItems.map((orderItem) => (
                      <Avatar key={orderItem.product.id} alt={order.id} src={orderItem.product.imageUrl} />
                    ))}
                  </AvatarGroup></TableCell>
                {/* Products */}
                <TableCell>
                 
                  <Box display="flex" flexDirection="column">
                    <Typography fontWeight={500} fontSize="0.875rem">
                      {order?.orderItems.map((orderItem) => (
                        <span key={orderItem.product.id}>{orderItem.product.title},</span>
                      ))}
                    </Typography>
                  </Box>
                </TableCell>

                {/* Total Price */}
                <TableCell>{order.totalPrice}</TableCell>

                {/* Order ID */}
                <TableCell>{order.id}</TableCell>

                {/* Status */}
                <TableCell>
                  <Chip
                    sx={{
                      fontWeight: 'bold',
                    }}
                    label={order.orderStatus}
                    size="small"
                    color={
                      order.orderStatus === 'PENDING'
                        ? 'info'
                        : order.orderStatus === 'DELIVERED'
                        ? 'success'
                        : 'secondary'
                    }
                  />
                </TableCell>

                {/* Action */}
                <TableCell>
                  <Button variant="outlined" size="small" color="primary" onClick={()=>{
                    dispatch(setOrder(order));
                    navigate('/Cart/OrderHistory/OrderTracker')}}>
                    Track Order
                  </Button>
                </TableCell>
              </TableRow>

            
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      {/* {order.map((item)=>item.orderItems.map((i)=><OrderHistoryCard orderItem={i}/>))} */}

    </div>
  );
  else{
    return(
      <></>
    );
  }
};

export default OrderHistory;
