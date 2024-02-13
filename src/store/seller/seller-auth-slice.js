import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import { Alert } from "@mui/material";

export const sellerSignUp = createAsyncThunk(
  "seller_auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/seller/auth/signup`, userData);
      const seller = response.data;
      localStorage.setItem("sellerJwt", seller.jwt);


      return seller;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const sellerSignIn = createAsyncThunk(
  "seller_auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/seller/auth/signin`, userData);
      const seller = response.data;
      localStorage.setItem("sellerJwt", seller.jwt);

      return seller;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShop = createAsyncThunk(
  "seller_auth/getShop",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/seller/shop/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = response.data;
      console.log( user);
      return user;
    } catch (error) {
      console.log( error);
      return rejectWithValue(error.message);
    }
  }
);

const sellerAuthSlice = createSlice({
  name: "sellerAuth",
  initialState: {
    seller: null,
    shop:null,
    newShopCreated:null

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sellerSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sellerSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seller = action.payload;
        state.newShopCreated=true;
      })
      .addCase(sellerSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(sellerSignIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sellerSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seller = action.payload;
      })
      .addCase(sellerSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getShop.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shop = action.payload;
      })
      .addCase(getShop.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default sellerAuthSlice;
