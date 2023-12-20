import React from 'react';


import { CheckCircle, Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardContent, Typography } from '@mui/material';

const AddressCard = ({ }) => {
  const dummyAddress = {
    fullName: 'John Doe',
    streetAddress: '123 Main St',
    city: 'Cityville',
    state: 'Stateville',
    zipCode: '12345',
    country: 'Countryland',
    phoneNumber: '555-1234',
  };

  return (
    <Card className='m-1'>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Full Name:</strong> {dummyAddress.fullName}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Address:</strong> {dummyAddress.streetAddress}, {dummyAddress.city}, {dummyAddress.state}, {dummyAddress.zipCode}, {dummyAddress.country}
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Contact Number:</strong> {dummyAddress.phoneNumber}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button startIcon={<CheckCircle />}   variant="outlined">
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
