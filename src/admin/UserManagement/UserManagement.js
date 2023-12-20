// UserManagement.js
import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const UserManagement = () => {
  const users = [
    { id: 1, username: 'user1', role: 'Admin' },
    { id: 2, username: 'user2', role: 'User' },
    // Add more user data as needed
  ];

  return (
    <Container>
      <Typography variant="h4" fontSize="large">
        User Management
      </Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            {user.username} - {user.role}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserManagement;
