import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DeleteItemAlert = ({ onDelete, onClose }) => {
  const dialogStyle = {
    fontFamily: 'monospace',
  };

  const cancelButtonStyle = {
    backgroundColor: '#CCCCCC', // Gray color
    color: 'black',
    fontFamily: 'monospace',
  };

  return (
    <Dialog open={true} onClose={onClose} style={dialogStyle}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete this item from your cart?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={cancelButtonStyle}>
          Cancel
        </Button>
        <Button onClick={onDelete} style={{ backgroundColor: '#002244', color: '#fff', fontFamily: 'monospace' }}>
          Delete Item
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteItemAlert.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteItemAlert;
