
import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Sidebarr from './sidebar/SideBar'
import Dashboard from './Dashboard/Dashboard'
import ProductManagement from './ProductManagement/Productmanagement'
import AddNewProduct from './ProductManagement/AddNewProduct'
import UserManagement from './UserManagement/UserManagement'
import OrderManagement from './OrderManagement/OrderManagement'

const AdminRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebarr />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ProductManagement" element={< ProductManagement/>} />
          <Route path="/ProductManagement/AddNewProduct" element={< AddNewProduct/>} />
          <Route path="/UserManagement" element={<UserManagement/>} />
          <Route path="/OrderManagement" element={<OrderManagement/>} />
          
          
          

          {/* Add other routes as needed */}
        </Routes>
      </div>
    </div>
  )
}

export default AdminRoutes
