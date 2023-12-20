import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./DeliveryAddressForm.css";
import AddressCard from "./AddressCard/AddressCard";
import { Pagination } from "@mui/material";
import { createOrder } from "../../../../../store/checkout-slice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";

const DeliveryAddressForm = () => {
  const addresses = [ <AddressCard />,
  <AddressCard />,
  <AddressCard />,
  <AddressCard />];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let valid = true;
    const errors = { ...formErrors };

    // Validation for first name and last name (alphabets only)
    if (!/^[a-zA-Z]*$/.test(formData.firstName)) {
      errors.firstName = "Only alphabets are allowed";
      valid = false;
    }

    if (!/^[a-zA-Z]*$/.test(formData.lastName)) {
      errors.lastName = "Only alphabets are allowed";
      valid = false;
    }

    // Validation for phone number (10 digits)
    if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Invalid phone number (10 digits required)";
      valid = false;
    }

    // Validation for city and state (alphabets only)
    if (!/^[a-zA-Z]*$/.test(formData.city)) {
      errors.city = "Only alphabets are allowed";
      valid = false;
    }

    if (!/^[a-zA-Z]*$/.test(formData.state)) {
      errors.state = "Only alphabets are allowed";
      valid = false;
    }

    // Validation for zip code (5 digits)
    if (!/^\d{6}$/.test(formData.zipCode)) {
      errors.zipCode = "Invalid zip code (6 digits required)";
      valid = false;
    }

    // Validation for street address (non-empty)
    if (formData.streetAddress.trim() === "") {
      errors.streetAddress = "Street address is required";
      valid = false;
    }

    // Set error messages if validation fails
    if (!valid) {
      setFormErrors(errors);
      return;
    }

    // If validation passes, you can proceed with form submission
    const data = JSON.stringify(formData);
    console.log("Form Submitted:", data);
    dispatch(createOrder(formData));
    navigate('/Cart/Checkout/OrderSummary');
  };
  const [page , setpage]=useState(1);
 const handlePageChange=(_,page)=>{
      setCurrentPage(page);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 3;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedaddresses = addresses.slice(startIndex, endIndex);

  return (
    <Grid container lg={12} className="grid-container">
      <Grid item lg={4.5}>
      {displayedaddresses.map((item)=>item)}
        <Pagination
          count={Math.ceil(addresses.length/3,10)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Grid>
      <Grid item lg={7.5}>
        <form onSubmit={handleSubmit} className="form-container">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.firstName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="mobile Number"
                variant="outlined"
                fullWidth
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.phone}
              </Typography>
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
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.city}
              </Typography>
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
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.state}
              </Typography>
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
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.zipCode}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Street Address"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
              <Typography color="error" variant="body2" gutterBottom>
                {formErrors.streetAddress}
              </Typography>
            </Grid>
          </Grid>
          <Button
            className="submit-button"
            variant="contained"
            type="submit"
            size="large"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default DeliveryAddressForm;
