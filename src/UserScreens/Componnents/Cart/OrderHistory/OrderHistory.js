
import React, { useState } from 'react';

import './OrderHistory.css';
import Button from '@mui/material/Button';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Typography } from "@mui/material";
import OrderHistoryCard from './OrderHistoryCard/OrderHistoryCard';


const OrderHistory = () => {

    const OrderFilter = ({ handleFilterChange }) => {
        const [filters, setFilters] = useState({
          pending: false,
          processing: false,
          delivered: false,
          canceled: false,
        });
      
        const handleCheckboxChange = (filter) => {
          const updatedFilters = { ...filters, [filter]: !filters[filter] };
          setFilters(updatedFilters);
          handleFilterChange(updatedFilters);
        };
      
        const handleDateRangeChange = (startDate, endDate) => {
          // Implement your logic to filter orders based on the selected date range
          // and update the 'filteredOrders' state accordingly.
          console.log('Date Range:', startDate, endDate);
        };
      
        return (
         <div className='order-filter'>
            
           
           <FormGroup>
             <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item lg={4}></Grid>
               <Grid item xs={6} lg={1} >
                 <FormControlLabel
                   control={<Checkbox checked={filters.pending} onChange={() => handleCheckboxChange('pending')} />}
                   label="Pending"
                 />
               </Grid>
               <Grid item  xs={6} lg={1}>
                 <FormControlLabel
                   control={<Checkbox checked={filters.processing} onChange={() => handleCheckboxChange('processing')} />}
                   label="Processing"
                 />
               </Grid>
               <Grid item  xs={6} lg={1}>
                 <FormControlLabel
                   control={<Checkbox checked={filters.delivered} onChange={() => handleCheckboxChange('delivered')} />}
                   label="Delivered"
                 />
               </Grid>
               <Grid item  xs={6} lg={1}>
                 <FormControlLabel
                   control={<Checkbox checked={filters.canceled} onChange={() => handleCheckboxChange('canceled')} />}
                   label="Canceled"
                 />
                     <Grid item lg={4}></Grid>
               </Grid>
             </Grid>
           </FormGroup>
     
           {/* <DateRangePicker onDateRangeChange={handleDateRangeChange} /> */}
        
         </div>
        );
      };
      
      
  return (

    <div className=''>
        <div className='order-screen-title'>
        <Typography variant='h5' className='title-heading'>Order History</Typography>
      <Typography  className='title-sub-heading' >Check the status of recent orders</Typography>
      <br/>
        </div>
        <OrderFilter/>
    

      <OrderHistoryCard/>
      <OrderHistoryCard/>
      <OrderHistoryCard/>
      <OrderHistoryCard/>

      
    </div>
  );
}

export default OrderHistory
