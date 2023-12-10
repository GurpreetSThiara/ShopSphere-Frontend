import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const OrderTracker = ({ activeStep }) => {
  const steps = [
    "placed",
    "Confirmed",
    "shipped",
    "Out For Delivery",
    "Delivered",
  ];
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
