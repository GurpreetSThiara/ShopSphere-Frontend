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
import UserProfile from './Profile/UserProfile'
import OrderHistory from './Componnents/Cart/OrderHistory/OrderHistory';
import OrderTracker from './Componnents/Cart/OrderHistory/OrderDetails/OrderTracker/OrderTracker'
import AllShops from './Shops/AllShops/AllShops'
import Shop from './Shops/Shop/Shop'
import SellerSignUpForm from '../Seller/Authentication/SignUp/SellerSignUpForm'


const UserRoutes = () => {
  return (
    <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Profile" element={<UserProfile />} />

        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/allShops" element={<AllShops />} />
        
        <Route path="/allShops/Shop" element={<Shop />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart/Checkout" element={<CheckoutForm />} />
        <Route path="/Cart/Checkout/OrderSummary" element={<OrderSummary />} />
        
        <Route path="/Cart/OrderHistory" element={<OrderHistory />} />
        <Route path="/Cart/OrderHistory/OrderTracker" element={<OrderTracker/>} />
        <Route path="/SellerSignUp" element={<SellerSignUpForm />} />
       
    </Routes>
  )
}

export default UserRoutes
