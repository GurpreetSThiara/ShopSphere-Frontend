import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";

export const createProduct = createAsyncThunk(
  "seller/createProduct",
  async ({ token, data }, { rejectWithValue }) => {
    console.log("data");
    console.log(data);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/shop/products/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,

          },
        }
      );

      const product = response.data;

      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShopProducts = createAsyncThunk(
  "seller/shopProducts",
  async ({ token, id ,pageNumber,pageSize }, { rejectWithValue }) => {
    console.log('idddddddddddddddddddddddd')
    console.log(id)
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/shop/products/${id}`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }
        }
      );

      const product = response.data;

      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const sellerProductsSlice = createSlice({
  name: "sellerProducts",
  initialState: {
    product: null,
    shopProducts: null,
    isProductsLoading: false,
    isCreateProductLoading:false,
    error:null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createProduct.pending, (state) => {
        state.isCreateProductLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isCreateProductLoading = false;
        state.product = action.payload;
        state.shopProducts?state.shopProducts.push(action.payload):state.shopProducts = [action.payload];
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isCreateProductLoading = false;
        state.error = action.payload;
      })
      .addCase(getShopProducts.pending, (state) => {
        state.isProductsLoading = true;
        state.error = null;
      })
      .addCase(getShopProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shopProducts = action.payload;
      })
      .addCase(getShopProducts.rejected, (state, action) => {
        state.isProductsLoading = false;
        state.error = action.payload;
      });
  },
});

export default sellerProductsSlice;
