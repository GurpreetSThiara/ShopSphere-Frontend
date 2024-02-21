import React from "react";
import HomePageImage from "./../../../../images/HomePage.jpg";
import { Button, Typography } from "@mui/material";
import "./LandingPageHero.css";

const LandingPageHero = () => {
  return (
    <div>
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${HomePageImage})`,
        }}
      >
        <div className="overlay-container">
          <div className="text-container">
            <div>
              <Typography variant="h2">
                Discover the ultimate
                <br />
                shopping experience
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                {" "}
                ShopSphere offers a wide range of products for all your needs.
                <br /> Shop now!
              </Typography>
            </div>
            <div>
              <Button
            size="large"
            sx={{
              color: "white",
              backgroundColor: "#002244",
              marginTop: "30px",
              "&:hover": {
                backgroundColor: "#004080", // Change this to the desired hover color
              },
            }}
          >
            <Typography fontSize="large">Explore the trending shops Now!!</Typography>
          </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
