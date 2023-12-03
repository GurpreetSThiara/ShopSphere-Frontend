import { Box, Button, Grid, Paper, TextField, Typography, colors } from '@mui/material'
import React from 'react'
import './SignUp.css'
import onlineFashionImage from './../../../images/online-fashion-shopping-collage-removebg-preview2.png';





const SignUp = () => {
  return (
    <div>
      <Grid container className='SignUp-container'>
      
    
      <Grid item lg={7} xs={12} className='SignUp-component'> 
        <div className="SignUp-feilds-container" elevation={3} >
          <Typography variant="h5" gutterBottom align='center' color='#002244' fontWeight='bold' my={4}>
            SignUp
          </Typography>
          <Box component="form"  noValidate sx={{ mx: 1.5 }}>
            <Grid container>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              required
              size='medium'
              id="Phone"
              label="First Name"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              fullWidth
             
            />
                </Grid>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              size='medium'
              required
              fullWidth
              id="Phone"
              label="Last Name"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              sx={{px:1}}
            />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              required
              size='medium'
              id="Phone"
              label="Phone"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              fullWidth
              
             
            />
                </Grid>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              size='medium'
              required
              fullWidth
              id="DOB"
              label="date of birth"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              
              sx={{px:1}}
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
            />
               
        
               <Grid container>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              required
              size='medium'
              id="Phone"
              label="Password"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              fullWidth
             
            />
                </Grid>
                <Grid item xs={6}>
                <TextField
              margin="normal"
              size='medium'
              required
              fullWidth
              id="Phone"
              label=" ReEnter Password"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              sx={{px:1}}
            />
                </Grid>
            </Grid>
             <Button
            variant="contained"
            sx={{backgroundColor:"#002244",mt:2}}
            fullWidth
            className="submitButton"
          >
            SignUp
          </Button>
            </Box>
         
        </div>
    
    </Grid>
    <Grid className='SignUp-side-box' item lg={5} xs={12}>
            <div className='SignUp-side-box-items-container'>
        
            <Typography variant='paragraph' color="white">Please log in to your account or create a new one to explore a world of curated collections, exclusive deals, and seamless shopping. Your journey into the perfect shopping experience begins here.</Typography>
            <br/><img height={200} src={onlineFashionImage} alt="Online Fashion Shopping Collage"/>
            {/* <Typography variant='h3' fontWeight={800} color="white">ShopSphere</Typography> */}

            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
