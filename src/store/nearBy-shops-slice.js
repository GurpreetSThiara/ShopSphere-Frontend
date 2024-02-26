// /api/users

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../config/apiConfig";
import axios from "axios";


export const getNearByShops = createAsyncThunk(
    "user/nearbyShops",
    async ({ token, latitude , longitude,radius }, { rejectWithValue }) => {
      console.log("data");
    //  console.log(data);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/users/nearByShops`,
        
          {
            headers: {
              Authorization: `Bearer ${token}`,
  
            },
            params:{
                latitude:latitude,
                longitude:longitude,
                radius:radius
            }
          }
        );
  
        const shops = response.data;
        console.log(response);
  
        return shops;
      } catch (error) {
        console.log(error)
        return rejectWithValue(error.message);
      }
    }
  );
  

const nearByShopsSlice = createSlice({
    name: "nearByShops",
    initialState: {
      shops:null,
      error:null,
      isNearByShopsLoading:false
  
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getNearByShops.pending, (state) => {
          state.isNearByShopsLoading = true;
          state.error = null;
        })
        .addCase(getNearByShops.fulfilled, (state, action) => {
          state.isNearByShopsLoading = false;
          state.shops = action.payload;
          state.newShopCreated=true;
        })
        .addCase(getNearByShops.rejected, (state, action) => {
          state.isNearByShopsLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default nearByShopsSlice;
  