import React from 'react'
import { Route, Routes } from 'react-router'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import Sidebarr from '../../admin/sidebar/SideBar'
import SellerSideBar from './SellerSideBar'
import SellerSignUpForm from '../Authentication/SignUp/SellerSignUpForm'

const SellerRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
        <SellerSideBar/>
  {/* sidebar */}
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<SellerDashboard />} />
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
