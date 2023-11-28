import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './DeliveryAddressForm.css'
import { Box, Card, CardContent, Typography } from '@mui/material';

const DeliveryAddressForm = () => {
    const address={
        fullName: 'Guri',
        streetAddress: 'vpo ghjkk',
        city: 'new york',
        state: 'panjab',
        zipCode: '333333',
        phone:'999999999'
    }
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phone:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//    const data=new FormData(e.currentTarget);
//    console.log('ddddddddddddddddddaaaaaaaaattttttttttttttaa');
//    console.log(data);
//    console.log('ddddddddddddddddddaaaaaaaaattttttttttttttaa');
   const data = JSON.stringify(formData);
    
   // Add your logic for handling the form submission here
   console.log('Form Submitted:', data);
  };

  return (
<Grid container lg={12} className='grid-container'>
    <Grid item lg={4.5}>
        <Box className='box'>
        <Card className='box-card'>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {address.fullName}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Street Address:</strong> {address.streetAddress}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>City:</strong> {address.city}
        </Typography>
    
        <Button className="submit-button" variant="contained" size='medium'>
        Deliver Here
      </Button>
      </CardContent>
    </Card>
        </Box>
        
    </Grid>
    <Grid item lg={7.5}>
            
    <form onSubmit={handleSubmit} className='form-container'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            id="phone"
            name="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Zip Code"
            variant="outlined"
            fullWidth
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
           label="Street Address"
           variant="outlined"
           fullWidth
           multiline
           rows={3} // You can adjust the number of rows as needed
           id="streetAddress"
           name="streetAddress"
           value={formData.streetAddress}
           onChange={handleChange}
           required
           
          />
        </Grid>
      </Grid>
      <Button className="submit-button" variant="contained" type="submit" size='large'>
        Submit
      </Button>
    </form>
    </Grid>

</Grid>
  );
};

export default DeliveryAddressForm;
