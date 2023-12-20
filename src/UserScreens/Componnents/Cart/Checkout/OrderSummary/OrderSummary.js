import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Paper, CircularProgress, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Button, Snackbar, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../../../../config/apiConfig';

const OrderSummary = () => {
    const order = useSelector((state)=>state.checkout.result);
    const [paymentLink, setPaymentLink] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handleCloseSnackbar = () => {
       
      };
    

    const handlePayment = async () => {
     
        const jwt = localStorage.getItem('jwt');
        try {
          const response = await fetch(`${API_BASE_URL}/api/payments/${order.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            console.log(response);
            const data = await response.json();
            console.log(data);
            setPaymentLink(data.payment_link_url);
            const paymentResponse = await fetch(data.paymentLinkUrl);
            const paymentData = await paymentResponse.json();
            setPaymentStatus(paymentData.status);
            setShowAlert(true);
            console.log("sssss");
            console.log(paymentData);
          } else {
            console.error('Failed to create payment link');
          }
        } catch (error) {
          console.error('Error creating payment link:', error);
        }
      };
    

    if(order!=null)
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Order Details
        </Typography>

        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>{order.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Order Date</TableCell>
                <TableCell>{new Date(order.orderDate).toLocaleString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Items</TableCell>
                <TableCell>{order.totalItem}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Price</TableCell>
                <TableCell>${order.totalPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Discount</TableCell>
                <TableCell>${order.discounte}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Order Status</TableCell>
                <TableCell>{order.orderStatus}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Shipping Address
        </Typography>

        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>{order.shippingAddress.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>{order.shippingAddress.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Street Address</TableCell>
                <TableCell>{order.shippingAddress.streetAddress}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>City</TableCell>
                <TableCell>{order.shippingAddress.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell>{order.shippingAddress.state}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Zip Code</TableCell>
                <TableCell>{order.shippingAddress.zipCode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mobile</TableCell>
                <TableCell>{order.shippingAddress.mobile}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Order Items
        </Typography>

        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Discounted Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product.title}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>${item.discountedPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#002244', color: '#ffffff' }}
          onClick={handlePayment}
        >
          Continue for Payment
        </Button>
        {paymentLink && (
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Payment link generated. Click <a href={paymentLink}>here</a> to proceed with the payment.
        </Alert>
      )}
      </Paper>
    </Container>
  );
  else
  return(
        <>
        <CircularProgress/>
        </>
    );
};

export default OrderSummary;
