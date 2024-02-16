import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import Sidebarr from '../../admin/sidebar/SideBar'
import SellerSideBar from './SellerSideBar'
import SellerSignUpForm from '../Authentication/SignUp/SellerSignUpForm'
import { useDispatch, useSelector } from 'react-redux'
import { getShop } from '../../store/seller/seller-auth-slice'
import { Box, Grid, Skeleton, Typography } from '@mui/material'
import SellerLogin from '../Authentication/SellerLogin'
import SellerProductManagement from './SellerProductManagement/SellerProductManagement'
import SellerOrderManagement from './SellerOrderManagement/SellerOrderManagement'

const SellerRoutes = () => {

  const sellerJwt = localStorage.getItem("sellerJwt");
  const shop = useSelector((s)=>s.sellerAuth.shop);
  const isLoadingShop = useSelector((s)=>s.sellerAuth.isLoadingShop);
  console.log("shoppppppppppp")
  console.log(shop)
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(sellerJwt)
    dispatch(getShop(sellerJwt));
    console.log("useedffetcttttttt")
  },[])

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
    <div style={{ display: 'flex' }}>
        <SellerSideBar shop={shop}/>
  {/* sidebar */}
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<SellerDashboard shop={shop} />} />
        <Route path="/SellerSignUp" element={<SellerSignUpForm  />} />
        
        <Route path="/ProductManagement" element={< SellerProductManagement id={shop.sellerShopId} jwt={sellerJwt}/>} />
        <Route path="/SellerOrderManagement" element={<SellerOrderManagement jwt={sellerJwt} id={shop.sellerShopId} />} />

        {/* <Route path="/ProductManagement/AddNewProduct" element={< AddNewProduct/>} />

         */}
        
        
        

        {/* Add other routes as needed */}
      </Routes>
    </div>
  </div>
  )
}

export default SellerRoutes
