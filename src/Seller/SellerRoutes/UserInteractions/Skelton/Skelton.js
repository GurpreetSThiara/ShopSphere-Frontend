import React from 'react';
import { Typography, Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const SkeletonBody = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        <Skeleton animation="wave" height={30} width="50%" />
      </Typography>
      <Paper elevation={3} style={{ padding: '1rem' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Skeleton animation="wave" height={20} width="80%" />
                </TableCell>
                <TableCell>
                  <Skeleton animation="wave" height={20} width="60%" />
                </TableCell>
                <TableCell>
                  <Skeleton animation="wave" height={20} width="40%" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(10)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton animation="wave" height={20} width="80%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" height={20} width="60%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton animation="wave" height={20} width="40%" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={100} // This is just a placeholder count
          rowsPerPage={10} // Placeholder value
          page={0} // Placeholder value
        />
      </Paper>
    </div>
  );
};

export default SkeletonBody;
