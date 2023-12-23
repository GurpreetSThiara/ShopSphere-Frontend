import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserProfile } from "./../../store/user-profile-slice";
import {
  Avatar,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile.user);

  useEffect(() => {
    dispatch(findUserProfile());
  }, [dispatch]);

  const renderUserProfile = () => (
    <Container>
    
      <div className="profile-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="profile-paper">
              <Avatar className="profile-picture">{user.firstName[0]}</Avatar>
              <Typography variant="h6" gutterBottom>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            {user.addresses.map(renderAddress)}
          </Grid>
        </Grid>
      </div>
    </Container>
  );

  const renderAddress = (address, index) => (
    <Paper elevation={3} key={index} className="profile-paper">
      <Typography variant="h6" className="address-heading">
        {`Address ${index + 1}`}
      </Typography>
      <Typography variant="body1" className="address">
        {`${address.streetAddress}, ${address.city}, ${address.state} ${address.zipCode}`}
      </Typography>
      <Typography variant="body2" className="mobile">
        {`Mobile: ${address.mobile}`}
      </Typography>
    </Paper>
  );

  return user ? (
    renderUserProfile()
  ) : (
    <div className="loading-container">
      <CircularProgress />
    </div>
  );
};

export default UserProfile;
