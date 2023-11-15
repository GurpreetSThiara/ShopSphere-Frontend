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
} from "@mui/material";
import React, { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // You can add additional logic here based on the selected option
  };
 

  
const ColorDropDownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const colorOptions = [
        { value: 'red', label: 'Red', color: '#FF0000' },
        { value: 'blue', label: 'Blue', color: '#0000FF' },
        { value: 'green', label: 'Green', color: '#00FF00' },
        { value: 'orange', label: 'Orange', color: '#FFA500' },
        { value: 'purple', label: 'Purple', color: '#800080' },
        { value: 'yellow', label: 'Yellow', color: '#FFFF00' },
        { value: 'pink', label: 'Pink', color: '#FFC0CB' },
        { value: 'brown', label: 'Brown', color: '#A52A2A' },
        { value: 'cyan', label: 'Cyan', color: '#00FFFF' },
        { value: 'teal', label: 'Teal', color: '#008080' },
        // Add more color options as needed
        { value: 'darkred', label: 'Dark Red', color: '#8B0000' },
        { value: 'navy', label: 'Navy', color: '#000080' },
        { value: 'lime', label: 'Lime', color: '#00FF00' },
        { value: 'magenta', label: 'Magenta', color: '#FF00FF' },
        { value: 'indigo', label: 'Indigo', color: '#4B0082' },
        { value: 'gold', label: 'Gold', color: '#FFD700' },
        { value: 'silver', label: 'Silver', color: '#C0C0C0' },
        { value: 'darkgreen', label: 'Dark Green', color: '#006400' },
        { value: 'violet', label: 'Violet', color: '#EE82EE' },
        { value: 'olive', label: 'Olive', color: '#808000' },
        { value: 'darkorange', label: 'Dark Orange', color: '#FF8C00' },
        { value: 'slateblue', label: 'Slate Blue', color: '#6A5ACD' },
        { value: 'turquoise', label: 'Turquoise', color: '#40E0D0' },
        { value: 'firebrick', label: 'Fire Brick', color: '#B22222' },
        { value: 'sienna', label: 'Sienna', color: '#A0522D' },
        { value: 'peru', label: 'Peru', color: '#CD853F' },
        { value: 'darkcyan', label: 'Dark Cyan', color: '#008B8B' },
        { value: 'chocolate', label: 'Chocolate', color: '#D2691E' },
        { value: 'orchid', label: 'Orchid', color: '#DA70D6' },
        { value: 'darkslategray', label: 'Dark Slate Gray', color: '#2F4F4F' },
        { value: 'mediumvioletred', label: 'Medium Violet Red', color: '#C71585' },
        { value: 'darkolivegreen', label: 'Dark Olive Green', color: '#556B2F' },
        { value: 'steelblue', label: 'Steel Blue', color: '#4682B4' },
        { value: 'tomato', label: 'Tomato', color: '#FF6347' },
        { value: 'darkturquoise', label: 'Dark Turquoise', color: '#00CED1' },
        { value: 'mediumspringgreen', label: 'Medium Spring Green', color: '#00FA9A' },
        { value: 'darkgoldenrod', label: 'Dark Goldenrod', color: '#B8860B' },
        { value: 'darkviolet', label: 'Dark Violet', color: '#9400D3' },
        { value: 'darkkhaki', label: 'Dark Khaki', color: '#BDB76B' },
        { value: 'mediumaquamarine', label: 'Medium Aquamarine', color: '#66CDAA' },
        { value: 'darkmagenta', label: 'Dark Magenta', color: '#8B008B' },
        { value: 'royalblue', label: 'Royal Blue', color: '#4169E1' },
        { value: 'darkgray', label: 'Dark Gray', color: '#A9A9A9' },
        { value: 'dimgray', label: 'Dim Gray', color: '#696969' },
        { value: 'darkslateblue', label: 'Dark Slate Blue', color: '#483D8B' },
        { value: 'mediumblue', label: 'Medium Blue', color: '#0000CD' },
        { value: 'midnightblue', label: 'Midnight Blue', color: '#191970' },
      ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select a color</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select a color"
            IconComponent={ExpandMore}
            renderValue={(selected) => (
              <Box
                component="div"
                sx={{
                  backgroundColor: selected,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                }}
              />
            )}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 1,
              }}
            >
              {colorOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Box
                    component="div"
                    sx={{
                      backgroundColor: option.color,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      marginRight: { xs: '4px', sm: '0' },
                    }}
                  />
                  <Typography variant="body2">{option.label}</Typography>
                </MenuItem>
              ))}
            </Box>
          </Select>
        </FormControl>
      </div>
    );
  };
  
  const SizeDropDownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // Array of clothing sizes
    const sizeOptions = [
      'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL',
    ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Select a size</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select a size"
            IconComponent={ExpandMore}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {sizeOptions.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const PriceDropDownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // Array of price ranges in dollars
    const priceOptions = [
      'Under $10', '$10 - $20', '$20 - $30', '$30 - $50', '$50 - $75', '$75 - $100',
      '$100 - $150', '$150 - $200', '$200 - $250', '$250 - $300', '$300 - $500', 'Over $500',
    ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>price range</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            label="Select a price range"
            IconComponent={ExpandMore}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            {priceOptions.map((priceRange) => (
              <MenuItem key={priceRange} value={priceRange}>
                {priceRange}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const DiscountDropDownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // Array of discount options
    const discountOptions = [
     
      { value: '0-10%', label: '0% - 10%' },
      { value: '10-20%', label: '10% - 20%' },
      { value: '20-30%', label: '20% - 30%' },
      { value: '30-40%', label: '30% - 40%' },
      { value: '40-50%', label: '40% - 50%' },
      { value: '50-60%', label: '50% - 60%' },
      // Add more discount options as needed
    ];
  
    return (
      <div>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Discount</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
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
  const RatingDropDownMenu = () => {
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
     

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={3}>
          SphereElegance
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" marginTop={{ xs: 1, sm: 0, }} sx={{}}>
            <ColorDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" marginTop={{ xs: 1, sm: 0 }}>
            <SizeDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" marginTop={{ xs: 1, sm: 0 }}>
            <PriceDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" marginTop={{ xs: 1, sm: 0 }}>
            <DiscountDropDownMenu />
          </Grid>
          <Grid item xs={12} sm={1.5} textAlign="center" marginTop={{ xs: 1, sm: 0 }}>
            <RatingDropDownMenu />
          </Grid>
   
        </Grid>
      </Typography>
    </header>
  );
};

export default ComponentHeader;
