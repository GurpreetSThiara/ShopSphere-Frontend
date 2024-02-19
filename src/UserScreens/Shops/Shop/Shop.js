import { Card, CircularProgress, Grid, ImageList, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductCard from '../../Componnents/HomePageComponents/ProductCard';
import { findAllShopProducts, saveInteractions } from '../../../store/shop-user-view-slice';

const Shop = React.memo(() => {
  const jwt = localStorage.getItem('jwt')

    const shop = useSelector((state)=>state.shops.selectedShop);
    const shopProducts = useSelector((state)=>state.shops.selectedShopProducts);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const [called , setcalled] = useState(false)

    useEffect(()=>{
        dispatch(findAllShopProducts({id:shop.id,pageNumber:pageNumber-1,pageSize:12}));

    },[dispatch,pageNumber])


    // useEffect(()=>{
    //   if(!called){
    //   dispatch(saveInteractions({shopId:shop.id
    //   }));
    //   setcalled(true);}
    // },[shop,dispatch])

    const handlePageChange = (event, value) => {
        setPageNumber(value);
        dispatch(findAllShopProducts({ id: shop.id, pageNumber: value-1, pageSize: 12 }));
    };
      
    if(shop!==null && shopProducts!==null) return (
        <div>
            <Card className='my-8 mx-2'>
                <div className='my-2 mx-4'>
                    <Typography variant='h4'>
                        {shop.shopName}{console.log('Insideeeeeee Shoooooooooppppppppppp')}
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
                    <div className="flex justify-center my-4">
                        <Pagination
                            count={10}
                            page={pageNumber}
                            onChange={handlePageChange}
                            color='primary'
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
    else
        return(
            <>
            <CircularProgress/>
            </>
        );
});

export default Shop;
