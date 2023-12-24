import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/apiConfig";

export const findAllShops = createAsyncThunk(
    "shops/allShops",
    async () => {
      const res = await api.get(
      `/api/shops`
      );
  
      console.log(res.data);
      return res.data;
    }
  );

const ShopUserViewSlice = createSlice({
        name:'shops',
        initialState:{
            allShops:null,
            error:null
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(findAllShops.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.allShops = [];
              });
              builder.addCase(findAllShops.fulfilled, (state, action) => {
                state.allShops = action.payload;
                state.loading = false;
              });
              builder.addCase(findAllShops.rejected, (state, action) => {
                state.loading = false;
              
                state.error = action.error.message || "An error occurred";
              });
        }
});

export default ShopUserViewSlice;