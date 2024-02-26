import { Add, Delete, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../../store/seller/seller-product-management";

const CreateNewProduct = ({ open, handleClose , id }) => {
  const {isCreateProductLoading,error ,product} = useSelector((s)=>s.sellerProducts);
  const jwt = localStorage.getItem('sellerJwt')
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPersent: "",
    quantity: "",
    brand: "",
    color: "",
    size: [{ name: "S", quantity: 0 }],
    images: [""], // Initial array with one empty string for the first image field
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    sellerShopId:id,
  });

  const [openLoadingDialog ,setOpenLoadingDialog] = useState(false);
  const handleLoadingDialogOpen = ()=> setOpenLoadingDialog(true);
  const handleLoadingDialogClose = () => setOpenLoadingDialog(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (index, e) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  const handleAddImageField = () => {
    const newImages = [...formData.images, ""];
    setFormData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoadingDialogOpen();
    // Submit formData to backend API
    console.log(formData);
    dispatch(createProduct({ token:jwt , data:formData}));

    handleClose();
  };

  const handleAddSizeFeild = () => {
    const sizes = [...formData.size, { name: "", quantity: 0 }];
    setFormData((prevData) => ({
      ...prevData,
      size: sizes,
    }));
  };

  const handleSizeChange = (name, quantity, index) => {
    const updatedSizes = [...formData.size];
    updatedSizes[index] = { name, quantity };
    setFormData((prevData) => ({
      ...prevData,
      size: updatedSizes,
    }));
  };

  const handleDeleteSizeField = (index) => {
    // Check if there is only one item in formData.sizes
    if (formData.size.length === 1) {
      // Alert or any other action you want to perform when there is only one item
      alert("Cannot delete the last size.");
      return;
    }
  
    const updatedSizes = [...formData.size];
    updatedSizes.splice(index, 1); // Remove the size at the specified index
    setFormData((prevData) => ({
      ...prevData,
      size: updatedSizes,
    }));
  };

  
  const handleDeleteImageField = (index) => {
    // Check if there is only one item in formData.sizes
    if (formData.images.length === 1) {
      // Alert or any other action you want to perform when there is only one item
      alert("there should be atleast 1 image");
      return;
    }
  
    const images = [...formData.images];
    images.splice(index, 1); // Remove the size at the specified index
    setFormData((prevData) => ({
      ...prevData,
      images: images,
    }));
  };
  
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {" "}
        <Typography variant="h4" gutterBottom>
          Create New Product
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ m: "2px", overflow: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Container sx={{ m: "5px", overflow: "auto" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                  <TextField
                    required
                    fullWidth
                    name="title"
                    label="Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    fullWidth
                    name="discountedPrice"
                    label="Discounted Price"
                    type="number"
                    value={formData.discountedPrice}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    fullWidth
                    name="discountPersent"
                    label="Discount Percentage"
                    type="number"
                    value={formData.discountPersent}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    required
                    name="quantity"
                    label="Quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    fullWidth
                    name="brand"
                    label="Brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    fullWidth
                    name="color"
                    label="Color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </Grid>
                {formData.size.map((size, index) => {
                  return (
                    <>
                      <Grid item xs={5}>
                        <TextField
                          required
                          label="Size Name"
                          fullWidth
                          variant="outlined"
                          name="sizeName"
                          value={size.name}
                          // onChange={(e) => handleSizeChange(e.target.value, size.quantity,index)}
                          onInput={(e) =>
                            handleSizeChange(
                              e.target.value,
                              size.quantity,
                              index
                            )
                          }
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          required
                          label="Size Quantity"
                          fullWidth
                          variant="outlined"
                          name="sizeQuantity"
                          type="number"
                          value={size.quantity}
                          // onChange={(e) => handleSizeChange(size.name, e.target.value,index)}
                          onInput={(e) =>
                            handleSizeChange(size.name, e.target.value, index)
                          }
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton
                          onClick={handleAddSizeFeild}
                          size="large"
                          color="primary"
                        >
                         <MdAdd/>
                        </IconButton>
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton
                          onClick={() => handleDeleteSizeField(index)}
                          size="large"
                        
                        >
                          <MdDelete/>
                        </IconButton>
                      </Grid>
                    </>
                  );
                })}

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="imageUrl"
                    label="Image URL"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="topLavelCategory"
                    label="Top Level Category"
                    value={formData.topLavelCategory}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="secondLavelCategory"
                    label="Second Level Category"
                    value={formData.secondLavelCategory}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="thirdLavelCategory"
                    label="Third Level Category"
                    value={formData.thirdLavelCategory}
                    onChange={handleChange}
                  />
                </Grid>
              <Grid item xs={12}>
              <Grid container xs={12}>
                  {formData.images.map((image, index) => (
                    <>
                       <Grid item xs={11}>
                    <TextField
                      sx={{marginBottom:'1rem'}}
                      required
                      key={index}
                      fullWidth
                      name={`image-${index + 1}`}
                      label={`Image ${index + 1}`}
                      value={image}
                      onChange={(e) => handleImageChange(index, e)}
                    />
                    </Grid>
                        <Grid item xs={1}>
                        <IconButton
                          onClick={() => handleDeleteImageField(index)}
                          size="large"
                        
                        >
                          <MdDelete/>
                        </IconButton>
                      </Grid>
                    </>
                  ))}
                 <Grid container alignContent={'center'} justifyContent={'space-between'} display={'flex'}>
                  <Grid item></Grid>
                  <Grid item>
                  <Box  onClick={handleAddImageField}>
                    <Button><Add /> Image</Button>
                  </Box>
                  </Grid>
                 </Grid>
                </Grid>
              </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ backgroundColor: "#002244", color: "white" }}
              >
                Create Product
              </Button>
            </Container>
          </Grid>
        </form>
        <Dialog open={openLoadingDialog} onClose={handleLoadingDialogClose} maxWidth="xs">
        <DialogContent sx={{ textAlign: 'center', padding: '2rem' }}>
          {isCreateProductLoading && !error && !product &&    <>
            <CircularProgress color="primary" size={60} thickness={4} />
          <Typography variant="h6" mt={2}>Creating Product...</Typography></>
          }
          {
            !isCreateProductLoading && !error && product && <>
            <Typography>Product Created Successfully</Typography>
            </>
          }
          {!isCreateProductLoading && !product && error && <>
          <Typography>
            Some Error Occured Try again later
          </Typography>
          </>}
          
        </DialogContent>
        <DialogActions>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ backgroundColor: "#002244", color: "white" }}
          onClick={handleLoadingDialogClose}
        >
          Done
        </Button>
        </DialogActions>
      </Dialog>

      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ backgroundColor: "#002244", color: "white" }}
        >
          Create Product
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default CreateNewProduct;
