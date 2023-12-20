// InventoryManagement.js
import React from 'react';
import { Container, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const InventoryManagement = () => {
  const inventory = [
    { id: 1, product: 'Product A', stock: 50 },
    { id: 2, product: 'Product B', stock: 30 },
    // Add more inventory data as needed
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventory.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default InventoryManagement;
