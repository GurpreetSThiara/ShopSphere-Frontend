import React from 'react'
import { Route ,Routes  } from 'react-router-dom'
import HomePage from './Views/HomePage/HomePage'
import ProductDetailsPage from './Componnents/ProductPages/ProductDetailsPage/ProductDetailsPage'
import Cart from './Componnents/Cart/Cart'
import SignIn from './Authentication/SignIn/SignIn'
import SignUp from './Authentication/SignUp/SignUp'
import ProductPage from './Componnents/ProductPages/ProductPage'
import CheckoutForm from './Componnents/Cart/Checkout/CheckoutForm'
import OrderSummary from './Componnents/Cart/Checkout/OrderSummary/OrderSummary'

const UserRoutes = () => {
  return (
    <Routes>
              <Route path="/" element={<HomePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart/Checkout" element={<CheckoutForm />} />
        <Route path="/Cart/Checkout/OrderSummary" element={<OrderSummary />} />
        
    </Routes>
  )
}

export default UserRoutes
