import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import "./SignIn.css";
import onlineFashionImage from "./../../../images/online-fashion-shopping-collage-removebg-preview2.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/auth-slice";
import { useNavigate } from "react-router";

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [openDialog , setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    handleOpen();

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
  
    navigate('/');
  }

  return (
    <div>
      <Grid container className="login-container">
        <Grid item lg={7} xs={12} className="login-component">
          <div className="login-feilds-container" elevation={3}>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              color="#002244"
              fontWeight="bold"
              my={4}
            >
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mx: 1.5 }}
            >
              <TextField
                margin="n"
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#002244", mt: 2 }}
                fullWidth
                className="submitButton"
                type="submit"
              >
                Login
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid className="side-box" item lg={5} xs={12}>
          <div className="side-box-items-container">
            <Typography variant="paragraph" color="white">
              Please log in to your account or create a new one to explore a
              world of curated collections, exclusive deals, and seamless
              shopping. Your journey into the perfect shopping experience begins
              here.
            </Typography>
            <br />
            <img
              height={200}
              src={onlineFashionImage}
              alt="Online Fashion Shopping Collage"
            />
            {/* <Typography variant='h3' fontWeight={800} color="white">ShopSphere</Typography> */}
          </div>
        </Grid>
      </Grid>
      <Dialog onClose={handleClose} open={openDialog} fullWidth maxWidth="sm">
  <DialogTitle>Login</DialogTitle>
  
<DialogContent>
{!user && !error && <CircularProgress />}
  
  {user && !error && (
    <Typography>
      Welcome, {user.email}!
    </Typography>
  )}

  {!user && error && (
    <Typography>
      {JSON.stringify(error)}
    </Typography>
  )}
</DialogContent>
  
  <DialogActions>
   {user && !error &&  <Button onClick={()=>{
   window.location.reload();
  }
    } autoFocus>
    Go To HomePage
    </Button>}

  </DialogActions>
</Dialog>


    </div>
  );
};

export default SignIn;
