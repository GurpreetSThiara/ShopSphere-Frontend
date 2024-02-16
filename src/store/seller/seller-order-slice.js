import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";


export const getOrders = createAsyncThunk(
    "seller/orders",
    async ({ token, id , pageNumber, pageSize }, { rejectWithValue }) => {
     
      try {
        const response = await axios.get(
          `${API_BASE_URL}/seller/shop/${id}/orders`,
        
          {
            headers: {
              Authorization: `Bearer ${token}`,
  
            },
            params:{
                pageNumber: pageNumber,
                pageSize: pageSize
            }
          }
        );
  
        const product = response.data;
        console.log('orderssss')
        console.log(response.data)
        console.log( response.data)
  
        return product;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

const sellerOrderSlice = createSlice({
    name: "sellerOrders",
    initialState: {
      orders: null,
      shopProducts: null,
      isOrdersLoading: false,
      totalPages:null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
  
    
        .addCase(getOrders.pending, (state) => {
          state.isOrdersLoading = true;
          state.error = null;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
          state.isOrdersLoading = false;
         let data = action.payload;
         console.log('dddddddddddddddddddddd')
         console.log(data)
         state.orders = data.content;
          state.totalPages= data.totalPages;
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.isOrdersLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default sellerOrderSlice;