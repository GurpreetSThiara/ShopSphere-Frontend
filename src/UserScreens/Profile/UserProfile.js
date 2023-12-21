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
  if (user !== null) {
    return (
        <Container>
      <header className="headerr">
        <Typography variant="h4" gutterBottom>
          {user.firstName} {user.lastName}'s Profile
        </Typography>
      </header>
      <div className="profile-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className="profile-paper">
              <Avatar className="profile-picture">{user.firstName[0]}</Avatar>
              <Typography variant="h6" gutterBottom>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            {user.addresses.map((address, index) => (
              <Paper key={index} className="profile-paper">
                <Typography variant="h6" className="address-heading">
                  Address {index + 1}
                </Typography>
                <Typography variant="body1" className="address">
                  {address.streetAddress}, {address.city}, {address.state}{' '}
                  {address.zipCode}
                </Typography>
                <Typography variant="body2" className="mobile">
                  Mobile: {address.mobile}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
      );
  } else {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
};

export default UserProfile;
