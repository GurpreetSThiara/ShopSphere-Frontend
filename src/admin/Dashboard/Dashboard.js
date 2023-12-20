import { useTheme } from '@emotion/react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Bar, Line } from 'react-chartjs-2';

const Dashboard = () => {

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
  )
}

export default Dashboard
