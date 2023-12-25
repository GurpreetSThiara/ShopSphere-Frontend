import { Card, CircularProgress, Grid, ImageList, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductCard from '../../Componnents/HomePageComponents/ProductCard';
import { findAllShopProducts } from '../../../store/shop-user-view-slice';

const Shop = () => {
    const shop = useSelector((state)=>state.shops.selectedShop);
    const shopProducts = useSelector((state)=>state.shops.selectedShopProducts);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(findAllShopProducts({id:shop.id,pageNumber:pageNumber-1,pageSize:12}));
    },[dispatch,shop])

    const handlePageChange = (event, value) => {
        setPageNumber(value);
        dispatch(findAllShopProducts({ id: shop.id, pageNumber: value-1, pageSize: 12 }));
      };
      

 if(shop!==null && shopProducts!==null) return (

    <div>
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
        <ImageList sx={{}} cols={4}>
        {shopProducts.map((item) => (
          <div style={{ marginBottom: 20 }} key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </ImageList>
       
      </div>
      <Pagination
       count={10}
       page={pageNumber}
       onChange={handlePageChange}
       color='primary'
      
      />
            </Card>
    </div>
  )
  else
    return(
        <>
        <CircularProgress/>
        </>
        );
}

export default Shop
