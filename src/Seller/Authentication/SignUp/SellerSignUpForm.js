// SellerForm.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { primaryButton } from '../../../Constants/Constants';

const formContainerStyle = {
  marginTop: '16px',
};

const formFieldStyle = {
  marginBottom: '8px',
};

const SellerSignUpForm = () => {
  const [sellerData, setSellerData] = useState({
    name: '',
    email: '',
    mobile: '',
    shopName: '',
    latitude: '',
    longitude: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    faxNumber: '',
    businessRegistrationNumber: '',
    taxId: '',
    facebookProfile: '',
    twitterProfile: '',
    instagramProfile: '',
    bankAccountDetails: '',
    paypalEmail: '',
    openingTime: '',
    closingTime: '',
    daysOfOperation: '',
    description: '',
    websiteUrl: '',
    logoImageUrl: '',
  });

  const handleChange = (e) => {
    setSellerData({ ...sellerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Seller Data:', sellerData);
   
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Seller
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} style={formContainerStyle}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={formFieldStyle}
              label="Name"
              fullWidth
              required
              name="name"
              value={sellerData.name}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Email"
              fullWidth
              required
              name="email"
              value={sellerData.email}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Mobile"
              fullWidth
              required
              name="mobile"
              value={sellerData.mobile}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Shop Name"
              fullWidth
              required
              name="shopName"
              value={sellerData.shopName}
              onChange={handleChange}
            />
        
            <TextField
              style={formFieldStyle}
              label="Street Address"
              fullWidth
              name="streetAddress"
              value={sellerData.streetAddress}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="City"
              fullWidth
              name="city"
              value={sellerData.city}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="State"
              fullWidth
              name="state"
              value={sellerData.state}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="ZIP Code"
              fullWidth
              name="zipCode"
              value={sellerData.zipCode}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Country"
              fullWidth
              name="country"
              value={sellerData.country}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Phone Number"
              fullWidth
              name="phoneNumber"
              value={sellerData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Alternate Phone Number"
              fullWidth
              name="alternatePhoneNumber"
              value={sellerData.alternatePhoneNumber}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Fax Number"
              fullWidth
              name="faxNumber"
              value={sellerData.faxNumber}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Business Registration Number"
              fullWidth
              name="businessRegistrationNumber"
              value={sellerData.businessRegistrationNumber}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Tax ID"
              fullWidth
              name="taxId"
              value={sellerData.taxId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={formFieldStyle}
              label="Facebook Profile"
              fullWidth
              name="facebookProfile"
              value={sellerData.facebookProfile}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Twitter Profile"
              fullWidth
              name="twitterProfile"
              value={sellerData.twitterProfile}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Instagram Profile"
              fullWidth
              name="instagramProfile"
              value={sellerData.instagramProfile}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Bank Account Details"
              fullWidth
              name="bankAccountDetails"
              value={sellerData.bankAccountDetails}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="PayPal Email"
              fullWidth
              name="paypalEmail"
              value={sellerData.paypalEmail}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Opening Time"
              fullWidth
              name="openingTime"
              value={sellerData.openingTime}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Closing Time"
              fullWidth
              name="closingTime"
              value={sellerData.closingTime}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Days of Operation"
              fullWidth
              name="daysOfOperation"
              value={sellerData.daysOfOperation}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Description"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={sellerData.description}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Website URL"
              fullWidth
              name="websiteUrl"
              value={sellerData.websiteUrl}
              onChange={handleChange}
            />
            <TextField
              style={formFieldStyle}
              label="Logo Image URL"
              fullWidth
              name="logoImageUrl"
              value={sellerData.logoImageUrl}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={primaryButton}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SellerSignUpForm;
