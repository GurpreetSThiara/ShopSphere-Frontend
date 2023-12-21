import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { useSelector } from 'react-redux';

const OrderTracker = () => {
  const order = useSelector((state) => state.orders.order);

  if (!order) {
    return null;
  }

  const steps = ['PLACED', 'CONFIRMED', 'SHIPPED', 'DELIVERED'];

  return (
    <Paper sx={{ p: 3, mb: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Order Tracker
      </Typography>

      <Stepper activeStep={steps.indexOf(order.orderStatus)} alternativeLabel sx={{ mb: 3 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <List>
        <ListItem>
          <ListItemText primary={`Order ID: ${order.id}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Order Date: ${order.orderDate}`} />
        </ListItem>
        {/* Add more order details here as needed */}
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Shipping Address
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}
            secondary={`${order.shippingAddress.streetAddress}, ${order.shippingAddress.city}, ${order.shippingAddress.state}, ${order.shippingAddress.zipCode}`}
          />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Order Items
      </Typography>

      <List>
        {order.orderItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.product.title}
              secondary={`Size: ${item.size}, Quantity: ${item.quantity}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Payment Details
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary={`Total Price: ${order.totalPrice}`} />
        </ListItem>
        {/* Add more payment details here as needed */}
      </List>
    </Paper>
  );
};

export default OrderTracker;
