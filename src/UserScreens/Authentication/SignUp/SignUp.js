import { Box, Button, Grid, Paper, TextField, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import './SignUp.css'
import onlineFashionImage from './../../../images/online-fashion-shopping-collage-removebg-preview2.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading,selectError,selectUser,register } from '../../../store/auth-slice';






const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  // export const selectUser = (state) => state.auth.user;
  // export const selectLoading = (state) => state.auth.isLoading;
  // export const selectError = (state) => state.auth.error;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the login action with the form data
     dispatch(register(formData));

    if (error) {
      // Show an error alert using window.alert
      window.alert(`Error: ${error}`);
    } else if (user) {
      // Show a success alert using window.alert
      window.alert(`Welcome, ${user.username}!`);
    }
  };

  return (
    <div>
      <Grid container className='SignUp-container'>
        <Grid item lg={7} xs={12} className='SignUp-component'>
          <div className="SignUp-feilds-container" elevation={3}>
            <Typography variant="h5" gutterBottom align='center' color='#002244' fontWeight='bold' my={4}>
              SignUp
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mx: 1.5 }}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    size='medium'
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    size='medium'
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    autoFocus
                    sx={{ px: 1 }}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    size='medium'
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    size='medium'
                    required
                    fullWidth
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    autoComplete="dob"
                    autoFocus
                    sx={{ px: 1 }}
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />

              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    size='medium'
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    autoFocus
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    size='medium'
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Re-enter Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    autoFocus
                    sx={{ px: 1 }}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#002244", mt: 2 }}
                fullWidth
                className="submitButton"
                disabled={isLoading}
              >
                SignUp
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className='SignUp-side-box' item lg={5} xs={12}>
          <div className='SignUp-side-box-items-container'>
            <Typography variant='paragraph' color="white">
              Please log in to your account or create a new one to explore a world of curated collections, exclusive deals, and seamless shopping. Your journey into the perfect shopping experience begins here.
            </Typography>
            <br /><img height={200} src={onlineFashionImage} alt="Online Fashion Shopping Collage" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;

