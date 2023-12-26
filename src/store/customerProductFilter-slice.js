import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { findProducts } from "./product-slice";

// Custom serialization/deserialization functions for the 'sort' value
const serializeSort = (sort) => {
  // Convert the non-serializable sort to a serializable format
  // For example, assuming sort is a function, you might convert it to a string
  return sort ? sort.toString() : "";
};

const deserializeSort = (serializedSort) => {
  // Convert back to the original non-serializable sort
  // For example, assuming sort is a function, you might convert it from a string
  return serializedSort;
};

const customerProductFilter = createSlice({
  name: "productFilter",
  initialState: {
    category: "womenDress",
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 10000,
    minDiscount: 0,
    sort: "", // Use a serializable string for sorting
    pageNumber: 0,
    pageSize: 100,
    stock: "",
    secondCategory: "womens_clothing",
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



export const { setData } = customerProductFilter.actions;
export default customerProductFilter;
