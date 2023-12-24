import React, { useEffect, useState } from 'react';
import { Card, Grid, Typography, Link, CircularProgress, IconButton } from '@mui/material';
import ProductCard from '../../Componnents/HomePageComponents/ProductCard';
import useCustomDispatch from '../../../Constants/useCustomDispatch';
import { useDispatch, useSelector } from 'react-redux';
import { findAllShops } from '../../../store/shop-user-view-slice';
import { ArrowForwardIosOutlined } from '@mui/icons-material';







const AllShops = () => {
    const [numItemsToShow, setNumItemsToShow] = useState(5);
    const dispatch = useDispatch();
    const shops = useSelector((state)=>state.shops.allShops);
    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
      
          if (screenWidth >= 1500) {
            setNumItemsToShow(5);
          } else if (screenWidth >= 1200) {
            setNumItemsToShow(4);
          } else if (screenWidth >= 990) {
            setNumItemsToShow(3);
          }else if (screenWidth >= 600) {
            setNumItemsToShow(1);
          }  else {
            setNumItemsToShow(1);
          }
        };
      
        // Initial setup
        handleResize();
      
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
      
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
 

useEffect(()=>{
    dispatch(findAllShops());
},[dispatch]);

if(shops!=null)
  return (
  <div>
     {shops.map((shop)=>
        
        <Card className='my-8 mx-2'>
             <div className='my-2 mx-4'>
        <Typography variant='h4'>
          {shop.shopName}
        </Typography>
        <Typography paragraph sx={{color:"gray"}} >
          {shop.description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Typography>
              Email:{' '}
              <Link href={`mailto:${shop.email}`} >
                {shop.email}
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Mobile:{' '}
              <span> {shop.phone !== null ? shop.phone : 'Not available'}</span>
            </Typography>
          </Grid>
        </Grid>
        <div className='my-2 mr-2 flex items-center' style={{flexDirection:"Row", display:"inline-flex"}}>
        {shop.products.slice(0, numItemsToShow).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <IconButton sx={{height:50}} ><ArrowForwardIosOutlined/></IconButton>
        </div>
      </div>
            </Card>
     )}
 </div>
  );
  else
  return(<>
  <CircularProgress/>
  </>);
};

export default AllShops;

