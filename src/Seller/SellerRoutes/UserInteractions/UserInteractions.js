import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const UserInteractions = () => {
  const [interactions, setInteractions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);





  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        User Interactions
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {interactions.map(interaction => (
                  <TableRow key={interaction.interactionId}>
                    <TableCell>{interaction.action}</TableCell>
                    <TableCell>{interaction.productId}</TableCell>
                    <TableCell>{new Date(interaction.timestamp).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={interactions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default UserInteractions;
