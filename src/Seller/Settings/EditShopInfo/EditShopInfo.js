// 
import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import './EditShopInfo.css'; // Import external CSS file

const EditShopInfo = ({ shop }) => {
  const [editedShop, setEditedShop] = useState(shop);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedShop((prevShop) => ({
      ...prevShop,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send editedShop to your API or perform necessary actions
    console.log('Edited Shop:', editedShop);
    // You can add further logic here, like redirecting or displaying a success message
  };

  return (
    <div className="editshop">
      <div maxWidth="md" >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                value={editedShop.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={editedShop.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={editedShop.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="mobile"
                label="Mobile"
                value={editedShop.mobile || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="shopName"
                label="Shop Name"
                value={editedShop.shopName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="description"
                label="Description"
                value={editedShop.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="websiteUrl"
                label="Website URL"
                value={editedShop.websiteUrl || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="logoImageUrl"
                label="Logo Image URL"
                value={editedShop.logoImageUrl || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="streetAddress"
                label="Street Address"
                value={editedShop.streetAddress || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="city"
                label="City"
                value={editedShop.city || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="state"
                label="State"
                value={editedShop.state || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="zipCode"
                label="Zip Code"
                value={editedShop.zipCode || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="country"
                label="Country"
                value={editedShop.country || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                value={editedShop.phoneNumber || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="alternatePhoneNumber"
                label="Alternate Phone Number"
                value={editedShop.alternatePhoneNumber || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="faxNumber"
                label="Fax Number"
                value={editedShop.faxNumber || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="businessRegistrationNumber"
                label="Business Registration Number"
                value={editedShop.businessRegistrationNumber || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="taxId"
                label="Tax ID"
                value={editedShop.taxId || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="facebookProfile"
                label="Facebook Profile"
                value={editedShop.facebookProfile || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="twitterProfile"
                label="Twitter Profile"
                value={editedShop.twitterProfile || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="instagramProfile"
                label="Instagram Profile"
                value={editedShop.instagramProfile || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="bankAccountDetails"
                label="Bank Account Details"
                value={editedShop.bankAccountDetails || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="paypalEmail"
                label="Paypal Email"
                value={editedShop.paypalEmail || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="openingTime"
                label="Opening Time"
                value={editedShop.openingTime || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="closingTime"
                label="Closing Time"
                value={editedShop.closingTime || ''}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="daysOfOperation"
                label="Days of Operation"
                value={editedShop.daysOfOperation || ''}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" className="save-button">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditShopInfo;
