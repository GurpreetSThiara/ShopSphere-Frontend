// SellerForm.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Alert,
  Box,
  Modal,
} from '@mui/material';
import { primaryButton } from '../../../Constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { sellerSignUp } from '../../../store/seller/seller-auth-slice';
import MapComponent from '../../MapComponent/MapComponent';
import { useNavigate } from 'react-router-dom';

const formContainerStyle = {
  marginTop: '16px',
};

const formFieldStyle = {
  marginBottom: '8px',
};

const SellerSignUpForm = () => {
  const dispatch = useDispatch();

  const shop = useSelector((s)=>s.sellerAuth.shop);
  const newShopCreated = useSelector((s)=>s.sellerAuth.newShopCreated);
  const navigate = useNavigate();

  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    textAlign: 'center',
    
  };

  const [sellerData, setSellerData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    mobile: '',
    password:'',
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = {
      "firstName":sellerData.firstName,
      "lastName":sellerData.lastName,
      "email":sellerData.email,
      "password":sellerData.password,
      "description":sellerData.description,
      "shopName":sellerData.shopName
    }
   await dispatch(sellerSignUp(data));

    
    console.log('Seller Data:', sellerData);
   
  };
  const handleShopClick = async () => {
    navigate('/seller')
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Your Online Shop
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} style={formContainerStyle}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={formFieldStyle}
              label="First Name"
              fullWidth
              required
              name="firstName"
              value={sellerData.firstName}
              onChange={handleChange}
            />
              <TextField
              style={formFieldStyle}
              label="Last Name"
              fullWidth
              required
              name="lastName"
              value={sellerData.lastName}
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
              label="Set Password"
              fullWidth
              required
              name="password"
              value={sellerData.password}
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
            <Typography>Shop Location</Typography>
            <MapComponent/>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={primaryButton}>
          Submit
        </Button>
      {newShopCreated && <Modal
  open={newShopCreated}
  onClose={!newShopCreated}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Success!!
    </Typography>
    <Alert sx={{margin:2}}  severity="success">Sign up successful! Lets Vistit to your Shop.
    
        </Alert>
        <Button  color="inherit" onClick={handleShopClick}>
          {'Go to shop'}
        </Button>
  </Box>
</Modal> } 
      </form>
    </Container>
  );
};

export default SellerSignUpForm;
