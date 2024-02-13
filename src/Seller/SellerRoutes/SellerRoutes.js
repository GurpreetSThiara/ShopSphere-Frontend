import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import Sidebarr from '../../admin/sidebar/SideBar'
import SellerSideBar from './SellerSideBar'
import SellerSignUpForm from '../Authentication/SignUp/SellerSignUpForm'
import { useDispatch, useSelector } from 'react-redux'
import { getShop } from '../../store/seller/seller-auth-slice'
import { Box } from '@mui/material'
import SellerLogin from '../Authentication/SellerLogin'

const SellerRoutes = () => {

  const sellerJwt = localStorage.getItem("sellerJwt");
  const shop = useSelector((s)=>s.sellerAuth.shop);
  console.log("shoppppppppppp")
  console.log(shop)
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(sellerJwt)
    dispatch(getShop(sellerJwt));
    console.log("useedffetcttttttt")
  },[])

  if(!shop){
    return <Box>
        <SellerLogin open={true} handleClose={false} />
    </Box>
  }
  return (
    <div style={{ display: 'flex' }}>
        <SellerSideBar/>
  {/* sidebar */}
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<SellerDashboard shop={shop} />} />
        <Route path="/SellerSignUp" element={<SellerSignUpForm />} />
        
        {/* <Route path="/ProductManagement" element={< ProductManagement/>} /> */}
        {/* <Route path="/ProductManagement/AddNewProduct" element={< AddNewProduct/>} />

        <Route path="/OrderManagement" element={<OrderManagement/>} /> */}
        
        
        

        {/* Add other routes as needed */}
      </Routes>
    </div>
  </div>
  )
}

export default SellerRoutes
