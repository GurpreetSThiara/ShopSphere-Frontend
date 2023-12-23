import React from 'react'
import { Route, Routes } from 'react-router'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import Sidebarr from '../../admin/sidebar/SideBar'

const SellerRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
        <Sidebarr/>
  {/* sidebar */}
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<SellerDashboard />} />
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
