import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import Interaction from './Interaction/Interaction';
import { useSelector } from 'react-redux';
import SkeletonBody from './Skelton/Skelton';
import './UserInteractions.css';


const UserInteractions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const interactions = useSelector((s)=>s.sellerOrders.interactions)





  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if(!interactions){
    return <SkeletonBody/>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div className='interactions-hero'>
      <Typography variant="h4" gutterBottom>
        User Interactions
      </Typography>
      </div>
   
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
                {interactions.content.map(interaction => (
                 <Interaction interaction={interaction}/>
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
