import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import { Alert } from "@mui/material";


export const createProduct = createAsyncThunk(
  "seller/createProduct",
  async ({token,data}, { rejectWithValue }) => {
    console.log('data')
    console.log(data)
    try {
      const response = await axios.post(`${API_BASE_URL}/api/shop/products/create`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data;
      console.log(response);
      console.log("resssssssssssssssssssssssssssssssssssssss");
      return user;
    } catch (error) {
        console.log("eroooooooooooooooooooooooo")
      console.log( error);
      console.log( error.message);
      return rejectWithValue(error.message);
    }
  }
);

const sellerAuthSlice = createSlice({
  name: "sellerProductManagement",
  initialState: {
    product: null,
 

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;

      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      
      });
  },
});

export default sellerAuthSlice;
