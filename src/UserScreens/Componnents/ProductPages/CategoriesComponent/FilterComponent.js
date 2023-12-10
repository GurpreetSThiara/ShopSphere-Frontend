import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  Paper,
  Box,
  colors,
} from "@mui/material";

const FilterComponent = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [availability, setAvailability] = useState("all");
  const [ratings, setRatings] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleRatingsChange = (event) => {
    setRatings(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleClearFilters = () => {
    setCategory("");
    setBrand("");
    setPriceRange("");
    setAvailability("all");
    setRatings("");
    setSortBy("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Brand</InputLabel>
          <Select value={brand} onChange={handleBrandChange} label="Brand">
            <MenuItem value="">All Brands</MenuItem>
            <MenuItem value="nike">Nike</MenuItem>
            <MenuItem value="apple">Apple</MenuItem>
            {/* Add more brand options */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={7}>
        <Box border={0.01} padding={0.5} borderRadius={2} borderColor="#d3d3d3">
          <FormControl component="fieldset" margin="normal">
            <RadioGroup
              value={availability}
              onChange={handleAvailabilityChange}
              row
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="inStock"
                control={<Radio />}
                label="In Stock"
              />
              <FormControlLabel
                value="outOfStock"
                control={<Radio />}
                label="Out of Stock"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* <Button variant="outlined" onClick={handleClearFilters}>
            Clear Filters
          </Button> */}
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
