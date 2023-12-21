import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Select,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../store/admin/admin-order-slice";

const OrderManagement = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const [anchorElArray, setAnchorElArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const adminOrders = useSelector((state) => state.adminOrders.orders);
  const [orderStatus, setOrderStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        await dispatch(getOrders({ jwt, page: currentPage }));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [dispatch, jwt, currentPage]);

  const handleUpdateStatusMenuClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleUpdateStatusMenuClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleStatusChange = (status) => {
    setOrderStatus(status);
  };

  const handleConfirmedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(confirmOrder(orderId));
    handleStatusChange("CONFIRMED");
  };

  const handleShippedOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(shipOrder(orderId));
    handleStatusChange("SHIPPED");
  };

  const handleDeliveredOrder = (orderId, index) => {
    handleUpdateStatusMenuClose(index);
    dispatch(deliveredOrder(orderId));
    handleStatusChange("DELIVERED");
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      handleUpdateStatusMenuClose();
      dispatch(deleteOrder(orderId));
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }
    return (
      <Box>
        <Card className="p-3">
          <CardHeader
            title="Sort"
            sx={{
              pt: 0,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={"PLACED"}>PLACED</MenuItem>
                  <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                  <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
                  <MenuItem value={"CANCELD"}>CANCLED</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.sort}
                  label="Sort By"
                  onChange={handleChange}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Older"}>Older</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
        <Card className="mt-2">
          <CardHeader
            title="All Orders"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
           
           
          />
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
  
                  <TableCell>Price</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminOrders?.map((item, index) => (
                  <TableRow
                    hover
                    key={item.id}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell sx={{}}>
                    <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
        {item.orderItems.map((orderItem)=><Avatar  alt={item.id} src={orderItem.product.imageUrl} /> )}
      </AvatarGroup>
                      {" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {item?.orderItems.map((order) => (
                            <span className=""> {order.product.title},</span>
                          ))}
                        </Typography>
                        <Typography variant="caption">
                          {item?.orderItems.map((order) => (
                            <span className="opacity-60">
                              {" "}
                              {order.product.brand},
                            </span>
                          ))}
                        </Typography>
                      </Box>
                    </TableCell>
  
                    <TableCell>{item.totalPrice}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell className="text-white">
                      <Chip
                        sx={{
                          color: "white !important",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        label={item.orderStatus}
                        size="small"
                        color={
                          item.orderStatus === "PENDING" ? "info" :item.orderStatus==="DELIVERED"? "success":"secondary"
                        }
                        className="text-white"
                      />
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      {/* <Button>{item.orderStatus==="PENDING"?"PENDING": item.orderStatus==="PLACED"?"CONFIRMED":item.orderStatus==="CONFIRMED"?"SHIPPED":"DELEVERED"}</Button> */}
                      <div>
                        <Button
                          id={`basic-button-${item.id}`}
                          aria-controls={`basic-menu-${item.id}`}
                          aria-haspopup="true"
                          aria-expanded={Boolean(anchorElArray[index])}
                          onClick={(event) =>
                            handleUpdateStatusMenuClick(event, index)
                          }
                        >
                          Status
                        </Button>
                        <Menu
                          id={`basic-menu-${item.id}`}
                          anchorEl={anchorElArray[index]}
                          open={Boolean(anchorElArray[index])}
                          onClose={() => handleUpdateStatusMenuClose(index)}
                          MenuListProps={{
                            "aria-labelledby": `basic-button-${item.id}`,
                          }}
                        >
                          <MenuItem
                            onClick={() => handleConfirmedOrder(item.id, index)}
                            disabled={item.orderStatus==="DELEVERED" || item.orderStatus==="SHIPPED" || item.orderStatus==="CONFIRMED"}
                          >
                            CONFIRMED ORDER
                            
                          </MenuItem>
                          <MenuItem
                          disabled={item.orderStatus==="DELIVERED" || item.orderStatus==="SHIPPED"}
                            onClick={() => handleShippedOrder(item.id, index)}
                          >
                            SHIPPED ORDER
                          </MenuItem>
                          <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                            DELIVERED ORDER
                          </MenuItem>
                        </Menu>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      <Button
                        onClick={() => handleDeleteOrder(item.id)}
                        variant="text"
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Card className="mt-2 felx justify-center items-center">
          <Pagination
            className="py-5 w-auto"
            size="large"
            count={10}
            color="primary"
            currentPage={currentPage}
            onChange={handlePaginationChange}
          />
        </Card>
      </Box>
    );
  };
  
  export default OrderManagement;
  