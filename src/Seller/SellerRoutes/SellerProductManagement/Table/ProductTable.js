import { Delete } from '@mui/icons-material'
import { Avatar, AvatarGroup, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import ViewProductModal from '../ViewProductModal/ViewProductModal'

const ProductTable = ({products ,onOpen ,startIndex ,openModal ,onClose}) => {
  return (
    <Table>
    <TableHead>
      <TableRow>
        <TableCell>S. No.</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>ID</TableCell>

        <TableCell>Product Name</TableCell>
        {/* <TableCell>Price</TableCell>
        <TableCell>discountedPrice</TableCell>
        <TableCell>quantity</TableCell> */}
        {/* Add more product-related fields as needed */}
      </TableRow>
    </TableHead>
    <TableBody>
      {products.map((product, index) => (
        <>
        <TableRow key={product.id} onClick={onOpen}>
          <TableCell>{startIndex + index + 1}</TableCell>
          <TableCell>
           <AvatarGroup >
           {product.images.slice(0, 3).map((img, index) => (
<Avatar key={index} alt={product.title} src={img} />
))}               </AvatarGroup>
          </TableCell>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.title}</TableCell>
          {/* <TableCell>${product.price}</TableCell>
          <TableCell>${product.discountedPrice}</TableCell>
          <TableCell>{product.quantity}</TableCell> */}
          {/* <TableCell>
            <IconButton
              color="error"
              aria-label="delete"
              onClick={() => {
                // dispatch(deleteSingleProduct({id:product.id}));

              }}
            >
              <Delete />
            </IconButton>
          </TableCell> */}
        </TableRow>
        <ViewProductModal product={product} open={openModal} onClose={onClose} />
        </>
      ))}
    </TableBody>
  </Table>
  )
}

export default ProductTable
