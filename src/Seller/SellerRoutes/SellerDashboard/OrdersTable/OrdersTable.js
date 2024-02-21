import { Avatar, AvatarGroup, Box, Button, Chip, Menu, MenuItem, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../../store/seller/seller-order-slice';

const OrdersTable = ({orders}) => {

  if (!orders) {
    // Skeleton for table rows
    const skeletonRows = Array.from({ length: 5 }).map((_, index) => (
      <TableRow key={index}>
        <TableCell>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell>
          <Skeleton width={200} />
        </TableCell>
        <TableCell>
          <Skeleton width={100} />
        </TableCell>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={32} />
        </TableCell>
      </TableRow>
    ));

    return (
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skeletonRows}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
    <Table  aria-label="table in dashboard">
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Title</TableCell>

          <TableCell >Status</TableCell>
      
        </TableRow>
      </TableHead>
      <TableBody>
        {orders?.map((order, index) => (
          <TableRow
            hover
            key={order.id}
            sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
          >
            <TableCell sx={{}}>
            <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
            <Avatar  alt={''} src={order.product.imageUrl} /> 
</AvatarGroup>
              {" "}
            </TableCell>

            <TableCell
              sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "0.875rem !important",
                  }}
                >
                                            <span className=""> {order.product.title},</span>

                </Typography>
                <Typography variant="caption">
                <span className="opacity-60">
                      {" "}
                      {order.product.brand},
                    </span>
                </Typography>
              </Box>
            </TableCell>

            <TableCell className="text-white">
              <Chip
                sx={{
                  color: "white !important",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                label={order.orderStatus}
                size="small"
                color={
                  order.orderStatus === "PENDING" ? "info" :order.orderStatus==="DELIVERED"? "success":"secondary"
                }
                className="text-white"
              />
            </TableCell>
      
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default OrdersTable
