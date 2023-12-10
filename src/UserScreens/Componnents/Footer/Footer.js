import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const columnData = [
    {
      title: "Company",
      items: ["About Us", "Services", "Contact Us"],
    },
    {
      title: "Resources",
      items: ["Blog", "Careers", "Privacy Policy"],
    },
    {
      title: "Support",
      items: ["Terms of Service", "FAQ", "Sitemap"],
    },
    {
      title: "Connect",
      items: ["Follow Us", "Twitter", "Facebook"],
    },
  ];

  return (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "30px 0" }}>
      <Grid container spacing={4} justifyContent="center">
        {columnData.map((column, columnIndex) => (
          <Grid
            key={columnIndex}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 2, fontWeight: "bold" }}
            >
              {column.title}
            </Typography>
            {column.items.map((item, itemIndex) => (
              <Button
                key={itemIndex}
                className="pb-2"
                variant="text"
                sx={{ color: "lightgray", textTransform: "none" }}
              >
                {item}
              </Button>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Footer;
