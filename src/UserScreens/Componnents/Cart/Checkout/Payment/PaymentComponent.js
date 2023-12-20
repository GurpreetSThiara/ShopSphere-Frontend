// PaymentComponent.jsx

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const PaymentComponent = ({ orderId }) => {
  const [paymentLink, setPaymentLink] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handlePayment = async () => {
    const jwt = localStorage.getItem('jwt');
    try {
      const response = await fetch(`/api/payments/${orderId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPaymentLink(data.paymentLinkUrl);
        setSnackbarOpen(true);
      } else {
        console.error('Failed to create payment link');
      }
    } catch (error) {
      console.error('Error creating payment link:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay Now
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Payment link generated. Click <a href={paymentLink}>here</a> to proceed with the payment.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PaymentComponent;
