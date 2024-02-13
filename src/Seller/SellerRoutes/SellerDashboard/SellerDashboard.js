import React from 'react'

import { Container, Typography, Grid, Paper } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';

const SellerDashboard = ({ shop }) => {
  const BarChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
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
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Orders',
          data: [12, 19, 3, 5, 2, 3, 7],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
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
  return (
    <Container>
      <Typography variant="h4" gutterBottom>{shop.shopName}</Typography>
      <Typography variant="body1" gutterBottom>{shop.description}</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Shop Information:</Typography>
          <Typography variant="body1">Owner: {shop.firstName} {shop.lastName}</Typography>
          <Typography variant="body1">Email: {shop.email}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Shop Address:</Typography>
          {/* Add address information here */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Social Media:</Typography>
          {/* Add social media links here */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Contact Information:</Typography>
          {/* Add contact information here */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Opening Hours:</Typography>
          {/* Add opening hours here */}
        </Grid>
      </Grid>

      <div>
       <div> <Grid container  spacing={3}>
      {/* Total Sales */}
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 ,backgroundColor:"#002244", color:"white"}}>
          <Typography variant="h6">Total Sales</Typography>
          {/* You can fetch and display data here */}
          <Typography variant="h4">$1,000,000</Typography>
        </Paper>
      </Grid>

      {/* Total Orders */}
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 ,backgroundColor:"#002244", color:"white" }}>
          <Typography variant="h6">Total Orders</Typography>
          {/* You can fetch and display data here */}
          <Typography variant="h4">1,000</Typography>
        </Paper>
      </Grid>

      {/* User Activity */}
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 ,backgroundColor:"#002244", color:"white"}}>
          <Typography variant="h6">User Activity</Typography>
          {/* You can fetch and display data here */}
          <Typography variant="h4">500</Typography>
        </Paper>
      </Grid>

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
    </Grid></div>
    </div>
    </Container>
  );
};

export default SellerDashboard;
