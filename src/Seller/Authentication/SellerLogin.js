import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Fade, Link, Grid, Divider, IconButton, CircularProgress } from '@mui/material';
import { Facebook, Twitter, Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { sellerSignIn } from '../../store/seller/seller-auth-slice';

const SellerLogin = ({ open, handleClose }) => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.id]: ''
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      dispatch(sellerSignIn({userData:formData}))
      // Call external function for login
    //   handleLogin(formData)
    //     .then(() => {
    //       setLoading(false);
    //       handleClose();
    //     })
    //     .catch(error => {
    //       setLoading(false);
    //       // Handle login error, if any
    //     });
    } else {
      setErrors(newErrors);
    }
  };

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <Box sx={style} gap={2}>
          <Typography id="modal-modal-title" variant="h5" component="h2" mb={2} color={'#002244'}>
            Sign In To Your Shop
          </Typography>
          <TextField 
             sx={{ mb: 2 }}
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            mb={2}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            mb={2}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2 }}

          />
          <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit} disabled={loading} mb={2}  sx={{ mb: 2 ,backgroundColor:"#002244"}} >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href="#" variant="body2" color="#002244">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="#002244">
                Sign Up
              </Link>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }}>Or</Divider>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton aria-label="Facebook">
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Twitter">
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Google">
                <Google />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default SellerLogin;
