// ProductForm.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createSingleProduct } from '../../store/admin/admin-product-slice';

const AddNewProduct = () => {
    const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    imageUrl: '',
    brand: '',
    title: '',
    color: '',
    discountedPrice: 0,
    price: 0,
    discountPersent: 0,
    size: [
      { name: 'S', quantity: 10 },
      { name: 'M', quantity: 40 },
      { name: 'L', quantity: 50 },
    ],
    quantity: 0,
    topLavelCategory: '',
    secondLavelCategory: '',
    thirdLavelCategory: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    const parsedValue =
    name === 'discountPersent' || name === 'price' || name === 'discountedPrice'
      ? parseFloat(value)
      : name === 'quantity'
      ? parseInt(value, 10)
      : value;
    setProductData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      size: prevData.size.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Product data submitted:', productData);
    dispatch(createSingleProduct({data:productData}));
  };

  return (
 <div className='text-center'>
     <Typography variant="h5" marginTop="5px" >
        Add New Product
      </Typography>
     <Grid container justifyContent="center" >
     <Grid item lg={8}>
     <Paper elevation={1}  style={{ padding: '20px', marginTop: '10px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              fullWidth
              variant="outlined"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Brand"
              fullWidth
              variant="outlined"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              variant="outlined"
              name="title"
              value={productData.title}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Color"
              fullWidth
              variant="outlined"
              name="color"
              value={productData.color}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Discounted Price"
              fullWidth
              variant="outlined"
              name="discountedPrice"
              type="number"
              value={productData.discountedPrice}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Original Price"
              fullWidth
              variant="outlined"
              name="price"
              type="number"
              value={productData.price}
              onInput={handleChange} 
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Discount Percentage"
              fullWidth
              variant="outlined"
              name="discountPersent"
              type="number"
              value={productData.discountPersent}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Quantity"
              fullWidth
              variant="outlined"
              name="quantity"
              type="number"
              value={productData.quantity}
              onChange={handleChange}
              onInput={handleChange} 
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={4}>
  <TextField
    label="Size S"
    fullWidth
    variant="outlined"
    name="sizeS"
    type="number"
    value={productData.size[0].quantity}
    onChange={(e) => handleSizeChange(0, e)}
    onInput={(e) => handleSizeChange(0, e)}
    InputLabelProps={{ shrink: true }}
  />
</Grid>
<Grid item xs={4}>
  <TextField
    label="Size M"
    fullWidth
    variant="outlined"
    name="sizeM"
    type="number"
    value={productData.size[1].quantity}
    onChange={(e) => handleSizeChange(1, e)}
    onInput={(e) => handleSizeChange(0, e)}
    InputLabelProps={{ shrink: true }}
  />
</Grid>
<Grid item xs={4}>
  <TextField
    label="Size L"
    fullWidth
    variant="outlined"
    name="sizeL"
    type="number"
    value={productData.size[2].quantity}
    onChange={(e) => handleSizeChange(2, e)}
    onInput={(e) => handleSizeChange(0, e)}
    InputLabelProps={{ shrink: true }}
  />
</Grid>

<Grid item xs={12}>
  <TextField
    label="Total Quantity"
    fullWidth
    variant="outlined"
    name="quantity"
    type="number"
    value={productData.quantity}
    onChange={handleChange}
    onInput={handleChange} 
    InputLabelProps={{ shrink: true }}
  />
</Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" >
              <InputLabel>Top Level Category</InputLabel>
              <Select
                label="Top Level Category"
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                required
              >
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Men">Men</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Second Level Category</InputLabel>
              <Select
                label="Second Level Category"
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                required
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Shoes">Shoes</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" >
              <InputLabel>Third Level Category</InputLabel>
              <Select
                label="Third Level Category"
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                required
              >
                <MenuItem value="Dress">Dress</MenuItem>
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="women_shoes">Shoes</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name="description"
              value={productData.description}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
        </Grid><br/>
  
        <Button
          variant="contained"
          color="primary"
          type="submit"

          sx={{backgroundColor: "#002244" , color: "white"}}
        
        >
          Create Product
        </Button>
      </form>
    </Paper>
     </Grid>
  </Grid>
 </div>
  );
  
};

export default AddNewProduct;
