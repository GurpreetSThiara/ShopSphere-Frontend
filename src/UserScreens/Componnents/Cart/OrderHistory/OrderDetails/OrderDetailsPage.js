import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddressCard from '../../Checkout/DeliveryAddressForm/AddressCard/AddressCard';
import OrderTracker from './OrderTracker/OrderTracker';

// Dummy data for the order details
const dummyOrder = {
  orderId: '123456',
  status: 'Out For Delivery',
  deliveryAddress: '123 Main Street, Cityville',
  estimatedDeliveryTime: '2:00 PM - 4:00 PM',
  items: [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2,
      image: 'https://placekitten.com/200/300', // Replace with your actual image URLs
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      image: 'https://placekitten.com/201/301',
    },
    // Add more dummy items as needed
  ],
};

const OrderDetailsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <AddressCard/>
      <div className='py-20'>
        <OrderTracker/>
      </div>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Order Status
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">{dummyOrder.status}</Typography>
        </div>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Delivery Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">{dummyOrder.deliveryAddress}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">
              Estimated Delivery Time: {dummyOrder.estimatedDeliveryTime}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Order Items
        </Typography>
        <Grid container spacing={2}>
          {dummyOrder.items.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card style={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.image}
                />
                <CardContent>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2">
                    Price: ${item.price.toFixed(2)} | Quantity: {item.quantity}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderDetailsPage;
