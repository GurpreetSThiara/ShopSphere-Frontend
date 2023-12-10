import React from "react";
import "./../DeliveryAddressForm.css";

import Button from "@mui/material/Button";

import { Box, Card, CardContent, Typography } from "@mui/material";
const AddressCard = () => {
  const address = {
    fullName: "Guri",
    streetAddress: "vpo ghjkk",
    city: "new york",
    state: "panjab",
    zipCode: "333333",
    phone: "999999999",
  };
  return (
    <Box className="box">
      <Card className="box-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {address.fullName}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Street Address:</strong> {address.streetAddress}
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>City:</strong> {address.city}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddressCard;
