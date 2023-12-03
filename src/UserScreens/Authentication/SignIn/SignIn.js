import { Box, Button, Grid, Paper, TextField, Typography, colors } from '@mui/material'
import React from 'react'
import './SignIn.css'
import onlineFashionImage from './../../../images/online-fashion-shopping-collage-removebg-preview2.png';




const SignIn = () => {
  return (
    <div>
      <Grid container className='login-container'>
      
    
      <Grid item lg={7} xs={12} className='login-component'> 
        <div className="login-feilds-container" elevation={3} >
          <Typography variant="h5" gutterBottom align='center' color='#002244' fontWeight='bold' my={4}>
            Login
          </Typography>
          <Box component="form"  noValidate sx={{ mx: 1.5 }}>
   
      <TextField
              margin="n"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
             <Button
            variant="contained"
            sx={{backgroundColor:"#002244",mt:2}}
            fullWidth
            className="submitButton"
          >
            Login
          </Button>
            </Box>
         
        </div>
    
    </Grid>
    <Grid className='side-box' item lg={5} xs={12}>
            <div className='side-box-items-container'>
        
            <Typography variant='paragraph' color="white">Please log in to your account or create a new one to explore a world of curated collections, exclusive deals, and seamless shopping. Your journey into the perfect shopping experience begins here.</Typography>
            <br/><img height={200} src={onlineFashionImage} alt="Online Fashion Shopping Collage"/>
            {/* <Typography variant='h3' fontWeight={800} color="white">ShopSphere</Typography> */}

            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn
