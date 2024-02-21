// import React, { useState } from 'react';
// import './SellerSettings.css';

// const SellerSettings = () => {
//   // State variables for form fields
//   const [profileInfo, setProfileInfo] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//   });

//   const [paymentSettings, setPaymentSettings] = useState({
//     paypalEmail: '',
//     bankAccountNumber: '',
//     taxID: '',
//   });

//   const [shippingSettings, setShippingSettings] = useState({
//     shippingMethod: '',
//     shippingCost: '',
//     estimatedDeliveryTime: '',
//   });

//   const [notificationPreferences, setNotificationPreferences] = useState({
//     emailNotifications: true,
//     smsNotifications: false,
//   });

//   // Function to handle form submissions
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Submit form data to backend or perform necessary actions
//     console.log('Form submitted successfully!');
//   };

//   return (
//     <div className="seller-settings-container">
//       <h1>Seller Settings</h1>

//       {/* Profile Information Section */}
//       <div className="settings-section">
//         <h2>Profile Information</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={profileInfo.fullName}
//             onChange={(e) => setProfileInfo({ ...profileInfo, fullName: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={profileInfo.email}
//             onChange={(e) => setProfileInfo({ ...profileInfo, email: e.target.value })}
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={profileInfo.phoneNumber}
//             onChange={(e) => setProfileInfo({ ...profileInfo, phoneNumber: e.target.value })}
//           />
//           <textarea
//             placeholder="Address"
//             value={profileInfo.address}
//             onChange={(e) => setProfileInfo({ ...profileInfo, address: e.target.value })}
//           />
//           <button type="submit">Save Changes</button>
//         </form>
//       </div>

//       {/* Payment Settings Section */}
//       <div className="settings-section">
//         <h2>Payment Settings</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="PayPal Email"
//             value={paymentSettings.paypalEmail}
//             onChange={(e) => setPaymentSettings({ ...paymentSettings, paypalEmail: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Bank Account Number"
//             value={paymentSettings.bankAccountNumber}
//             onChange={(e) => setPaymentSettings({ ...paymentSettings, bankAccountNumber: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Tax ID"
//             value={paymentSettings.taxID}
//             onChange={(e) => setPaymentSettings({ ...paymentSettings, taxID: e.target.value })}
//           />
//           <button type="submit">Save Changes</button>
//         </form>
//       </div>

//       {/* Shipping Settings Section */}
//       <div className="settings-section">
//         <h2>Shipping Settings</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Shipping Method"
//             value={shippingSettings.shippingMethod}
//             onChange={(e) => setShippingSettings({ ...shippingSettings, shippingMethod: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Shipping Cost"
//             value={shippingSettings.shippingCost}
//             onChange={(e) => setShippingSettings({ ...shippingSettings, shippingCost: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Estimated Delivery Time"
//             value={shippingSettings.estimatedDeliveryTime}
//             onChange={(e) => setShippingSettings({ ...shippingSettings, estimatedDeliveryTime: e.target.value })}
//           />
//           <button type="submit">Save Changes</button>
//         </form>
//       </div>

//       {/* Notification Preferences Section */}
//       <div className="settings-section">
//         <h2>Notification Preferences</h2>
//         <div className="notification-preferences">
//           <label>
//             <input
//               type="checkbox"
//               checked={notificationPreferences.emailNotifications}
//               onChange={(e) => setNotificationPreferences({ ...notificationPreferences, emailNotifications: e.target.checked })}
//             />
//             Email Notifications
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               checked={notificationPreferences.smsNotifications}
//               onChange={(e) => setNotificationPreferences({ ...notificationPreferences, smsNotifications: e.target.checked })}
//             />
//             SMS Notifications
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SellerSettings;


import { Box, Switch, Typography } from '@mui/material'
import React from 'react'
import './SellerSettings.css'
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from 'react-router';

const SellerSettings = ({shop}) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate('/seller/settings/EditShopInfo')
  } 
  return (
    <div className='seller-settings'>
      <div className='settings-editshop settings-tile'>
        <div className='settings-tile-header'>
        <Typography variant='h4' fontSize={24}>Edit Shop Details</Typography>
        <div onClick={handleEditClick}>
        <MdModeEditOutline size={24} cursor={'pointer'}/>
        </div>
        
        </div>
      <div className='settings-subtitle'>
      <Typography variant='h5' fontSize={20}>{shop.shopName}</Typography>
      <Typography paragraph>
        {shop.description}
      </Typography>
      </div>


      </div>
      <div className='settings-tile'>
      <div className='settings-tile-header'>
      <Typography variant='h4' fontSize={24}>
          ShutDown Shop
        </Typography>
        <Switch color='success'/>
      </div>
        <Typography paragraph> you have the flexibility to temporarily close your shop and reopen it whenever you desire. This feature ensures that your shop remains hidden from users on ShopShphere during the time it's shut down</Typography>

      </div>
    </div>
  )
}

export default SellerSettings
