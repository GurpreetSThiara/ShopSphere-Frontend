import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/apiConfig";
import { json } from "react-router";




export const createOrder = createAsyncThunk(
    "checkout/createOrder",
    async (address) => {
        const jwt = localStorage.getItem('jwt');
        const config = {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          };
      const  res  = await api.post(`/api/orders/`,address,config);
      console.log(JSON.stringify(res));
      console.log("res:")
      console.log(res.data)
      return res.data;
    }
  );
  




const checkoutSlice = createSlice(
    {
        name:"checkout",
        initialState:{
            result:null,
            error:null
        },
        reducers:{

        },
        extraReducers:(builder)=>{
              // Add item to cart
    builder.addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(createOrder.fulfilled, (state, action) => {
        state.result=action.payload;
  
        state.loading = false;
      });
  
      builder.addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add item to cart";
      });
        }
    }
);

export default checkoutSlice;