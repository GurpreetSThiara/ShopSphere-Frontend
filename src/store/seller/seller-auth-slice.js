import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../config/apiConfig";

export const sellerSignUp = createAsyncThunk(
    "seller_auth/register",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await api.post(`/seller/auth/signup`,userData);
        const seller = response.data;
        localStorage.setItem("sellerJwt",seller.jwt);

       
        return seller;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
const sellerAuthSlice = createSlice({

    name:'sellarAuth',
    initialState:{
        seller:null,
    },
        reducers:{

        }, 
        extraReducers:(builder)=>{
            builder
      .addCase(sellerSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sellerSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.seller = action.payload;
      })
      .addCase(sellerSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
        }

        

});
