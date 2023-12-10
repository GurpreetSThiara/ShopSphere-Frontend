import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { productDetailsActions } from '../../../store/productDetails-slice';

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
    imgCard:{
      position: 'relative',
      border: '0.00001px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '250px',
      height: '330px', // Set a fixed height for the card
     
    
      display: 'inline-flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      objectFit: 'contain',
      justifyContent: 'center',
      alignItems:'center',
      margin: '0 auto',
      marginTop:'8px'

    },
    card: {
      position: 'relative',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '300px',
      height: '450px', // Set a fixed height for the card
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
      height: '100%',
      objectFit: 'contain',
      margin: '0 auto'

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
  const dispatch= useDispatch();

  const handleClick = () => {
    localStorage.setItem('product',JSON.stringify(product));
   
    dispatch(productDetailsActions.updateProduct(product))
    

    // navigate(`/ProductDetailsPage`, );
    // { state: { product } }
  };
  const handleAddToCart= ()=>{
    
  }

  return (
  
     <a href='/ProductDetailsPage'><Box sx={styles.card} onClick={handleClick}  >
     <Box sx={styles.imgCard}>
     <img src={product.imageUrl} alt={product.title} style={styles.image} />
     </Box>
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
              ${product.discountedPrice}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={styles.button} onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box></a>
  
  
  );
};

export default ProductCard;
