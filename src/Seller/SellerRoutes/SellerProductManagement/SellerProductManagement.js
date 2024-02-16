import { Avatar, AvatarGroup, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemText, Pagination, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateNewProduct from './CreateNewproduct/CreateNewProduct';
import { useDispatch, useSelector } from 'react-redux';
import { findAllProducts } from '../../../store/admin/admin-product-slice';
import { Delete } from '@mui/icons-material';
import { getShopProducts } from '../../../store/seller/seller-product-management';
import ViewProductModal from './ViewProductModal/ViewProductModal';




const SellerProductManagement = ({id , jwt}) => {
  const products = useSelector((state)=>state.sellerProducts.shopProducts); 
  console.log(products);
  console.log("productssss");
  const isProductsLoading = useSelector((state)=>state.sellerProducts.isProductsLoading); 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const [productsPerPage , setProductsPerPage] = useState(13);
  const startIndex = (currentPage - 1) * productsPerPage;
  const [openModal , setOpenModal] = useState(false);
  const onClose = () => setOpenModal(false);
  const onOpen = () => setOpenModal(true);

      const [open , setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);


  useEffect(() => {
    setProductsPerPage(13);
    dispatch(getShopProducts({token:jwt , id:id ,pageNumber:0,pageSize:10}));
    
    console.log("proooooooooooooo"+products);
  }, [ dispatch]);



  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedParentCategory, setSelectedParentCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleFilterChange = (filters) => {
    const updatedProducts = products.filter((product) => {
      const isPriceInRange =
        (!filters.minPrice || product.price >= filters.minPrice) &&
        (!filters.maxPrice || product.price <= filters.maxPrice);

      const isBrandMatch = !filters.selectedBrand || product.brand === filters.selectedBrand;

    const isDateTimeMatch = checkDateTimeFilter(product.createdAt, filters.selectedDateTime);;

      const isCategoryMatch =
        !filters.selectedCategory || product.category.name === filters.selectedCategory;

      const isParentCategoryMatch =
        !filters.selectedParentCategory ||
        product.category.parentCategory.name === filters.selectedParentCategory;

      return isPriceInRange && isBrandMatch && isDateTimeMatch && isCategoryMatch && isParentCategoryMatch;
    });

    setFilteredProducts(updatedProducts);
  };
  const checkDateTimeFilter = (productDateTime, selectedDateTime) => {
    if (!selectedDateTime) {
      return true; // No datetime filter selected
    }

    const productDate = new Date(productDateTime);
    const selectedDate = new Date(selectedDateTime);

    // Compare the product date with the selected date based on your filtering logic
    // For example, you can check if the product date is within the last day, week, or month

    // Check if the product date is today
    const isToday = productDate.toDateString() === new Date().toDateString();

    // Check if the product date is within the last day
    const isLastDay =
      productDate > new Date(new Date().setDate(new Date().getDate() - 1)) &&
      productDate <= new Date();

    // Check if the product date is within the last week
    const isLastWeek =
      productDate > new Date(new Date().setDate(new Date().getDate() - 7)) &&
      productDate <= new Date();

    // Check if the product date is within the last month
    const isLastMonth =
      productDate > new Date(new Date().setMonth(new Date().getMonth() - 1)) &&
      productDate <= new Date();

    // Return true if any of the conditions are met
    return isToday || isLastDay || isLastWeek || isLastMonth;
  };
  const handleFilterApply = () => {
    handleFilterChange({
      minPrice,
      maxPrice,
      selectedBrand,
      selectedDateTime,
      selectedCategory,
      selectedParentCategory,
    });
  };
if(!products && isProductsLoading){
  return  <div style={{ width: '100%', maxWidth: 360, backgroundColor: 'white' }}>
  <List component="nav" aria-label="item list">
    {[1,1,1,1,1,1].map((item, index) => (
      <React.Fragment key={index}>
        <ListItem button>
          <ListItemText primary={item} />
        </ListItem>
        {index !== 6 - 1 && <Divider />}
      </React.Fragment>
    ))}
  </List>
</div>
}
if(!products && !isProductsLoading){
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h6" color="textSecondary">
        No products available.
      </Typography>
    </Box>
  );
}

  return (
    <Container>
             <CreateNewProduct id={id} open={open} handleClose={handleClose}/>

     
      <Grid container alignContent="center" m="2px">
        <Grid item  m="2px" xs={12} lg={9.5}>
        <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
        </Grid>
        <Grid item  m="2px">
      
        <Button variant="outlined" onClick={handleOpen}>Add New Product</Button>
    
        </Grid>
      </Grid>
   
     
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S. No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>ID</TableCell>

            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>discountedPrice</TableCell>
            <TableCell>quantity</TableCell>
            {/* Add more product-related fields as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <>
            <TableRow key={product.id} onClick={onOpen}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>
               <AvatarGroup >
               {product.images.slice(0, 3).map((img, index) => (
    <Avatar key={index} alt={product.title} src={img} />
  ))}               </AvatarGroup>
              </TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>${product.discountedPrice}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    // dispatch(deleteSingleProduct({id:product.id}));

                  }}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
            <ViewProductModal product={product} open={openModal} onClose={onClose} />
            </>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" mt={2}>
        {/* <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        /> */}
      </Box>
     
    </Container>
  );
};

// const SellerProductManagement = ({id}) => {
//     const [open , setOpen] = useState(false);
//     const handleClose = () => setOpen(false);
//     const handleOpen = () => setOpen(true);
     
//   return (
//     <div>
//         <Button onClick={handleOpen}>Add Product</Button>
//         <CreateNewProduct id={id} open={open} handleClose={handleClose}/>

      
//     </div>
//   )
// }

export default SellerProductManagement
