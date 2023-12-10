import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { findProducts } from "./product-slice";

// Custom serialization/deserialization functions for the 'sort' value
const serializeSort = (sort) => {
  // Convert the non-serializable sort to a serializable format
  // For example, assuming sort is a function, you might convert it to a string
  return sort ? sort.toString() : '';
};

const deserializeSort = (serializedSort) => {
  // Convert back to the original non-serializable sort
  // For example, assuming sort is a function, you might convert it from a string
  return serializedSort ;
};
export const setDataWithFunction = createAsyncThunk('productFilter/setDataWithFunction', async (data, thunkAPI) => {
    // Dispatch the regular setData action
    thunkAPI.dispatch(setData(data));


    const filterData = {
        category:filterProductData.category(thunkAPI.getState()), 
        colors: filterProductData.colors(thunkAPI.getState()),
        sizes: filterProductData.sizes(thunkAPI.getState()),
        minPrice: filterProductData.minPrice(thunkAPI.getState()),
        maxPrice: filterProductData.maxPrice(thunkAPI.getState()),
        minDiscount: filterProductData.minDiscount(thunkAPI.getState()),
        sort: filterProductData.sort(thunkAPI.getState()),
        pageNumber: filterProductData.pageNumber(thunkAPI.getState()),
        pageSize: filterProductData.pageSize(thunkAPI.getState()),
        stock: filterProductData.stock(thunkAPI.getState()),
      };
      thunkAPI.dispatch( findProducts(filterData));
     
  
  
    // Your function to be executed after setData
    console.log("Function after setData");
  
    // You can return a value if needed
    return 'Success';
  });

const customerProductFilter = createSlice({
  name: 'productFilter',
  initialState: {
    category: "womenDress",
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 10000,
    minDiscount: 0,
    sort: '', // Use a serializable string for sorting
    pageNumber: 0,
    pageSize: 100,
    stock: '',
  },
  reducers: {
    setData: (state, action) => {
        
      console.log("datasetttttttttttttttttttttttt");
      const data = action.payload;
      console.log(data);

      // Use immer library to produce a new state
      state.category = data.category || state.category;
      state.colors = data.colors || state.colors;
      state.sizes = data.sizes || state.sizes;
      state.minPrice = data.minPrice || state.minPrice;
      state.maxPrice = data.maxPrice || state.maxPrice;
      state.minDiscount = data.minDiscount || state.minDiscount;
      state.sort = serializeSort(data.sort) || state.sort;
      state.pageNumber = data.pageNumber || state.pageNumber;
      state.pageSize = data.pageSize || state.pageSize;
      state.stock = data.stock || state.stock;
     
    },
  },
});

export const filterProductData = {
  category: (state) => state.productFilter.category,
  colors: (state) => state.productFilter.colors,
  sizes: (state) => state.productFilter.sizes,
  minPrice: (state) => state.productFilter.minPrice,
  maxPrice: (state) => state.productFilter.maxPrice,
  minDiscount: (state) => state.productFilter.minDiscount,
  sort: (state) => deserializeSort(state.productFilter.sort), // Deserialize the sort when accessing it
  pageNumber: (state) => state.productFilter.pageNumber,
  pageSize: (state) => state.productFilter.pageSize,
  stock: (state) => state.productFilter.stock,
};

export const { setData } = customerProductFilter.actions;
export default customerProductFilter;
