// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Bar, Line } from 'react-chartjs-2';
import UserManagement from '../UserManagement/UserManagement';
import InventoryManagement from '../InventoryManagement/InventoryManagement';
import { Settings } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { findAllProducts } from '../../store/admin/admin-product-slice';
import { useDispatch, useSelector } from 'react-redux';
import Sidebarr from '../sidebar/SideBar';
import { useTheme } from '@emotion/react';
import { tokens } from '../themes';




const AdminHome = () => {
    const products = useSelector((state)=>state.adminProductsSlice.allProducts); 
  // Sample data
  const sampleSalesData = [
    { productName: 'Product A', amount: 2000 },
    { productName: 'Product B', amount: 1500 },
    { productName: 'Product C', amount: 3000 },
  ];

  const [salesData, setSalesData] = useState(sampleSalesData);
  const [productCount, setProductCount] = useState(10);
  const [orderCount, setOrderCount] = useState(25);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findAllProducts());
    // You can keep this block if you plan to make API calls in the future
    // axios.get('/api/sales')
    //   .then(response => setSalesData(response.data))
    //   .catch(error => console.error('Error fetching sales data:', error));

    // Sample product and order counts
    setProductCount(10);
    setOrderCount(25);
  }, [dispatch]);

  // Chart data
  const chartData = {
    labels: salesData.map(sale => sale.productName),
    datasets: [
      {
        label: 'Sales Amount ($)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: salesData.map(sale => sale.amount),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleViewProductsClick =()=>{
   
  
    navigate('/Admin/ProductManagement');
  }


  const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
      <Box mb="30px">
        <Typography
          variant="h4"
          color="#002244"
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color="#002244" fontSize="medium">
          {subtitle}
        </Typography>
      </Box>
    );
  };

  
  
  

  return (
 <Grid container>
  <Grid item >
  <Sidebarr isSidebar={true}/>
  </Grid>
  <Grid item xs={10}>
  <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />


  




    
  <Container>
   
   

      <Grid container spacing={3}>
        {/* Sales Summary Dashboard */}
        <Grid item xs={12} md={8}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sales Summary
              </Typography>
              <Bar data={chartData} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid>

        {/* Product and Order Management Dashboards */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            {/* Product Management Dashboard */}
            <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Product Management
              </Typography>
              <Typography variant="h4" color="primary">
                {products.length}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleViewProductsClick}  size="small" color="primary">
                View Products
              </Button>
              {/* Other actions as needed */}
            </CardActions>
          </Card>
        </Grid>

            {/* Order Management Dashboard */}
            <Grid item xs={12}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Order Management
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {orderCount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <ShoppingCartIcon />
                    View Orders
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
    
      <Grid item xs={12} md={6}>
          <UserManagement />
        </Grid>
        <Grid item xs={12} md={6}>
          <InventoryManagement />
        </Grid>
        <Grid item xs={12} md={6}>
          <Settings />
        </Grid>
      </Grid>
    </Container>
  </Grid>

 </Grid>

  );
};

export default AdminHome;
