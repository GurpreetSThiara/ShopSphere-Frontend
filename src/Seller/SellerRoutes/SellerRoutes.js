import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import Sidebarr from '../../admin/sidebar/SideBar'
import SellerSideBar from './SellerSideBar'
import SellerSignUpForm from '../Authentication/SignUp/SellerSignUpForm'
import { useDispatch, useSelector } from 'react-redux'
import { getShop } from '../../store/seller/seller-auth-slice'
import { Box, Drawer, Grid, IconButton, Menu, Skeleton, Typography, useMediaQuery } from '@mui/material'
import SellerLogin from '../Authentication/SellerLogin'
import SellerProductManagement from './SellerProductManagement/SellerProductManagement'
import SellerOrderManagement from './SellerOrderManagement/SellerOrderManagement'
import ResponsiveAppBar from './ResponsiveNavigationBar/ResponsiveAppBar'

const SellerRoutes = () => {

  const sellerJwt = localStorage.getItem("sellerJwt");
  const shop = useSelector((s)=>s.sellerAuth.shop);
  const isLoadingShop = useSelector((s)=>s.sellerAuth.isLoadingShop);
  console.log("shoppppppppppp")
  console.log(shop)
  const dispatch = useDispatch();
  const [openDrawer , setOpenDrawer] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 735px)').matches); 
   const navigate = useNavigate();

   const handleOpendrawer = () => setOpenDrawer(true);
   const handleClosedrawer = () => setOpenDrawer(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 735px)');
    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches);
    };
    mediaQuery.addListener(handleScreenChange);
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);

  useEffect(()=>{
    console.log(sellerJwt)
    dispatch(getShop(sellerJwt));
    console.log("useedffetcttttttt")
  },[])
  const handleMenuButtonClick = () => {
    navigate('/');
  };

  if(!shop && isLoadingShop === false){
    return <Box>
              <SellerLogin open={true} handleClose={false} />

    </Box>
  }

  if(!shop && isLoadingShop === null){
    return <Box>
         <Grid container spacing={3}>
      <Grid item xs={12} sm={4} md={3}>
        <Box
          bgcolor="background.paper"
          padding={2}
          minHeight="100vh" // Ensure sidebar stretches to full height
        >
          <Typography variant="h5" gutterBottom>
            ShopSphere
          </Typography>
          <Skeleton animation="wave" height={40} />
          <Skeleton animation="wave" height={40} />
          <Skeleton animation="wave" height={40} />
          <Skeleton animation="wave" height={40} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Box
          padding={2}
          minHeight="100vh" // Ensure main content stretches to full height
        >
          <Typography variant="h4" gutterBottom>
            Loading Content
          </Typography>
          <Skeleton animation="wave" height={200} />
          <Skeleton animation="wave" height={100} />
          <Skeleton animation="wave" height={150} />
        </Box>
      </Grid>
    </Grid>
    </Box>
  }
  return (
    <>

    <ResponsiveAppBar isSmallScreen={isSmallScreen} shop={shop}/>
    <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => navigate('/')}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SellerSideBar shop={shop} />
      </Drawer>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleMenuButtonClick}
        sx={{ display: { sm: 'block', md: 'none' } }}
      >
        <Menu />
      </IconButton>
      <div style={{display:'flex'}}>

  
      {!isSmallScreen && <SellerSideBar shop={shop} />}
      
        <Routes >
        <Route path="/" element={<SellerDashboard shop={shop} sellerJwt={sellerJwt} isSmallScreen={isSmallScreen} />} />
        <Route path="/SellerSignUp" element={<SellerSignUpForm  />} />
        
        <Route path="/ProductManagement" element={< SellerProductManagement id={shop.sellerShopId} jwt={sellerJwt}/>} />
        <Route path="/SellerOrderManagement" element={<SellerOrderManagement jwt={sellerJwt} id={shop.sellerShopId} />} />

        {/* <Route path="/ProductManagement/AddNewProduct" element={< AddNewProduct/>} />

         */}
        
        
        

        {/* Add other routes as needed */}
      </Routes>
      

      </div>

      </>
      

  )
}

export default SellerRoutes
