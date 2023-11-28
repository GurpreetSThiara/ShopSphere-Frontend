import { Button, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
  const columnItems = [
    ['About Us', 'Services', 'Contact Us'],
    ['Blog', 'Careers', 'Privacy Policy'],
    ['Terms of Service', 'FAQ', 'Sitemap'],
    ['Follow Us', 'Twitter', 'Facebook'],
  ];

  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{ py: 3 }}>
        {columnItems.map((items, index) => (
          <Grid key={index} item xs={3} lg={3} sx={{ textAlign: 'center' }}>
            {items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <Button className='pb-2' variant='h6' gutterBottom>
                  {item}
                </Button>
              </div>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Footer;
