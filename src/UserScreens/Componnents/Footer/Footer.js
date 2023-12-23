import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const columnData = [
    {
      title: "Company",
      items: [
        { label: "About Us", url: "/about-us" },
        { label: "Services", url: "/services" },
        { label: "Contact Us", url: "/contact-us" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", url: "/blog" },
        { label: "Careers", url: "/careers" },
        { label: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Terms of Service", url: "/terms-of-service" },
        { label: "FAQ", url: "/faq" },
        { label: "Sitemap", url: "/sitemap" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "Follow Us", url: "/follow-us" },
        { label: "Twitter", url: "https://twitter.com" },
        { label: "Facebook", url: "https://facebook.com" },
        { label: "Become a Seller", url: "/SellerSignUp" },
      ],
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
                href={item.url}  // Add this line to make the button a link
              >
                {item.label}
              </Button>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Footer;
