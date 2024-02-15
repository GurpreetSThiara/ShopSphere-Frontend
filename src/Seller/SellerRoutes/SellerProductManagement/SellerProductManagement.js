import { Button } from '@mui/material'
import React, { useState } from 'react'
import CreateNewProduct from './CreateNewproduct/CreateNewProduct';

const SellerProductManagement = ({id}) => {
    const [open , setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
     
  return (
    <div>
        <Button onClick={handleOpen}>Add Product</Button>
        <CreateNewProduct id={id} open={open} handleClose={handleClose}/>

      
    </div>
  )
}

export default SellerProductManagement
