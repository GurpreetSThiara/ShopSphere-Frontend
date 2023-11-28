import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const descriptionRef = useRef(null);
  const [maxLines, setMaxLines] = useState(2);

  useEffect(() => {
    const containerHeight = descriptionRef.current.clientHeight;
    const lineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight);

    const newMaxLines = Math.floor(containerHeight / lineHeight);
    setMaxLines(newMaxLines);
  }, [product.description]);

  const styles = {
    card: {
      position: 'relative',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      height: '400px', // Set a fixed height for the card
      margin: '0 10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    details: {
      position: 'relative',
      padding: '16px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.1rem',
      margin: '10px 0 8px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 1, // Restrict title to one line
      WebkitBoxOrient: 'vertical',
    },
    description: {
      color: '#666',
      marginBottom: '8px',
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: maxLines, // Limit the description to dynamic number of lines
      WebkitBoxOrient: 'vertical',
    },
    price: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      
      marginBottom: '8px',
    },
    buttonContainer: {
      marginTop: 'auto',
      textAlign: 'center',
    },
    button: {
      background: '#002244',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ProductDetailsPage`, { state: { product } });
  };

  return (
  
     <Box sx={styles.card} onClick={handleClick} >
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <Box sx={styles.details}>
        <Typography variant='h6' sx={styles.title}>
          {product.title}
        </Typography>
        <Typography variant='body2' sx={styles.description} ref={descriptionRef}>
          {product.description}
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant='h6' sx={styles.price}>
              ${product.price}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={styles.button}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  
  
  );
};

export default ProductCard;
