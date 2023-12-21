import React from 'react';


import { CheckCircle, Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../../../../store/checkout-slice';
import { navigation } from './../../../../../../products/navigation';
import { useNavigate } from 'react-router';

const AddressCard = ({ address}) => {
  console.log(address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectAddress = ()=>{
    console.log("Form Submitted:", address);
    dispatch(createOrder(address));
    navigate('/Cart/Checkout/OrderSummary');
  }

  return (
    <Card className='m-1'>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Full Name:</strong> {address.firstName+ ' '}{address.lastName}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Address:</strong> {address.streetAddress}, {address.city}, {address.state}, {address.zipCode}, {}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Contact Number:</strong> {address.mobile}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button startIcon={<CheckCircle />}   variant="outlined" onClick={handleSelectAddress}>
            Select
          </Button>
          <Button startIcon={<Edit />} variant="outlined">
            Edit
          </Button>
          <Button startIcon={<Delete />}  variant="outlined">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
