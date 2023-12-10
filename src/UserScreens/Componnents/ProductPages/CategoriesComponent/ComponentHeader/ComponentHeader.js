import { ExpandMore } from "@mui/icons-material";
import {
  MenuItem,
  Select,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Checkbox,
  Chip,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FilterComponent from "../FilterComponent";
import { filterProductData, setData } from "../../../../../store/customerProductFilter-slice";
import { useDispatch } from "react-redux";
import store from "../../../../../store";
import { findProducts } from "../../../../../store/product-slice";

const headerStyles = {
  header: {
    padding: "1rem",
    borderBottom: "1px solid #ddd",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.5rem",
  },
};

const ComponentHeader = () => {

  const change=({data})=>{
    dispatch(
      setData(data)
    );
    const filterData = {
      category:filterProductData.category(store.getState()), 
      colors: filterProductData.colors(store.getState()),
      sizes: filterProductData.sizes(store.getState()),
      minPrice: filterProductData.minPrice(store.getState()),
      maxPrice: filterProductData.maxPrice(store.getState()),
      minDiscount: filterProductData.minDiscount(store.getState()),
      sort: filterProductData.sort(store.getState()),
      pageNumber: filterProductData.pageNumber(store.getState()),
      pageSize: filterProductData.pageSize(store.getState()),
      stock: filterProductData.stock(store.getState()),
    };

 //   dispatch(findProducts(filterData));

  }
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedColorOptions, SetSelectedColorOptions] = useState([]);
  const [selectedSizeOptions, SetSelectedSizeOptions] = useState([]);
  const [selectedPriceOptions, SetSelectedPriceOptions] = useState(0);
  const [selectedDiscountOption, setSelectedDiscountOption] = useState(10);
  const [range, setRange] = useState({ lowestValue: 159, highestValue: 4999 });
  const [selectedPriceOption, setSelectedPriceOption] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('Price: Low to High');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log('ccccccccccccccccccccccccccccccccccccc'+selectedOption);
    // You can add additional logic here based on the selected option
  };
 
  const ColorDropDownMenu = () => {
    useEffect(() => {
      // Check if selectedColorOptions have actually changed
      const hasColorOptionsChanged =
        JSON.stringify(selectedColorOptions) !==
        JSON.stringify(filterProductData.colors(store.getState()));
  
      if (hasColorOptionsChanged) {
        change({data:{colors:selectedColorOptions}});
      }
    }, [selectedColorOptions]);
  
    const handleSelectChange = (event) => {
      SetSelectedColorOptions(event.target.value);
      
      

      // Now 'selectedString' is a comma-separated string of the selected color values.
   

     
    };
  
    const colorOptions = [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
      { value: 'yellow', label: 'Yellow' },
    ];
  
    return (

      <div>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Select color(s)</InputLabel>
        <Select
          multiple
          value={selectedColorOptions}
          onChange={handleSelectChange}
          label="Select color(s)"
          IconComponent={ExpandMore}
          renderValue={(selected) => (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {selected.map((value) => (
                <Box
                  key={value}
                  component="div"
                  sx={{
                    backgroundColor: colorOptions.find(
                      (option) => option.value === value
                    )?.value || '',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    marginRight: '4px',
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
        >
          {colorOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={selectedColorOptions.includes(option.value)} />
              <Box
                component="div"
                sx={{
                  backgroundColor: option.value,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              />
              <Typography variant="body2">{option.label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    );
  };
  
 
  
  const PriceDropDownMenu = () => {
 
 
    useEffect(() => {
      // Check if selectedColorOptions have actually changed
   
      const hasPriceOptionsChanged =
  Number(range.highestValue) !== Number(filterProductData.maxPrice(store.getState())) && Number(range.lowestValue) !== Number(filterProductData.minPrice(store.getState()));


  

      if (hasPriceOptionsChanged) {
       
        change({data:{minPrice:range.lowestValue,maxPrice:range.highestValue} });
      }
    }, [range.lowestValue,range.highestValue]);
  
  
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      const [start, end] = selectedValue.split('-');
      console.log("ggggggggggggggggggggggggggggggggggggg");

      // Convert the range values to integers
      
    
      setRange({lowestValue:parseInt(start, 10),highestValue:parseInt(end, 10)});
      setSelectedPriceOption(selectedValue);
      

  
    
    };
  
    // Array of price ranges in dollars
    const priceOptions = [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "3999-4999", label: "₹3999 To ₹4999" },
    ]
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>price range</InputLabel>
          <Select
            value={selectedPriceOption}
            onChange={handleSelectChange}
            label="Select a price range"
            IconComponent={ExpandMore}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {priceOptions.map((priceRange) => (
              <MenuItem key={priceRange.label} value={priceRange.value}>
                {priceRange.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const DiscountDropDownMenu = () => {
    
    useEffect(() => {
     
      const hasselectedDiscountOption =
     selectedDiscountOption !==
      filterProductData.minDiscount(store.getState());
  
      if (hasselectedDiscountOption) {
        change({data:{minDiscount:selectedDiscountOption}});
      }
    }, [selectedDiscountOption]);
  
    const handleSelectDiscountChange = (event) => {
      setSelectedDiscountOption(event.target.value);
    };
  
   
    const discountOptions = [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
   
    ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Discount</InputLabel>
          <Select
            value={selectedDiscountOption}
            onChange={handleSelectDiscountChange}
            variant="outlined"
            IconComponent={ExpandMore}
            label="Select an option"
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {discountOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const SortOptionsDropDownMenu = () => {

  
    const handleSelectedSortChange = (event) => {
      setSelectedSortOption(event.target.value);
    };
    useEffect(() => {
      // Check if selectedColorOptions have actually changed
      const hasColorOptionsChanged =
        JSON.stringify(selectedSortOption) !==
        JSON.stringify(filterProductData.sort(store.getState()));
  
      if (hasColorOptionsChanged) {
        change({data:{sort:selectedSortOption}});
      }
    }, [selectedSortOption]);
  
    // Array of rating options
    const ratingOptions = [
      { name: "Price: Low to High", query: "price_low", current: false },
      { name: "Price: High to Low", query: "price_high", current: false },
    ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select a rating</InputLabel>
          <Select
            value={selectedSortOption}
            onChange={handleSelectedSortChange}
            label="Sort Order"
            IconComponent={ExpandMore}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {ratingOptions.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const RatingDropDownMenu2 = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // Array of rating options
    const ratingOptions = ['4 Stars & Up', '3 Stars & Up', '2 Stars & Up', '1 Star & Up'];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select a rating</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select a rating"
            IconComponent={ExpandMore}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {ratingOptions.map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  
  


  return (
    <header style={headerStyles.header}>
      <Typography variant="h3" sx={headerStyles.title}>
     

        <Grid container alignItems="center" justifyContent="space-between" >
          <Grid item xs={12}>
            <Grid container >
            {/* <Grid item xs={12} lg={2}>
          Filters
          </Grid> */}
          <Grid item xs={12} sm={1.5} textAlign="center" margin={{ xs: 10, sm: 1, }} sx={{mx:3}}>
            <ColorDropDownMenu />
          </Grid>
          {/* <Grid item xs={12} sm={1.5} textAlign="center" margin={{ xs: 10, sm: 1 }}>
            <SizeDropDownMenu />
          </Grid> */}
          <Grid item xs={12} sm={1.5} textAlign="center" margin={{ xs: 1, sm: 1 }}>
            <PriceDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" margin={{ xs: 1, sm: 1 }}>
            <DiscountDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" margin={{ xs: 1, sm: 1 }}>
            <SortOptionsDropDownMenu />
          </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
       
          </Grid>
        
   
        </Grid>
      </Typography>
    </header>
  );
};

export default ComponentHeader;
