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
  

 // /api/interactions

 export const getShopInteractions = createAsyncThunk(
  "seller/interactions",
  async ({ token, id , pageNumber, pageSize }, { rejectWithValue }) => {
   
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/interactions/`,
      
        {
          headers: {
            Authorization: `Bearer ${token}`,

          },
          params:{
              pageNumber: pageNumber,
              pageSize: pageSize,
              shopId:id
          }
        }
      );

      const product = response.data;
      console.log('interactionssss')
      console.log(response)
      console.log( response.data)

       return product;
    } catch (error) {
      // return rejectWithValue(error.message);
    }
  }
);


const sellerOrderSlice = createSlice({
    name: "sellerOrders",
    initialState: {
      orders: null,
      shopProducts: null,
      isOrdersLoading: false,
      totalPages:null,
      interactions:null,
      isInteractionsLoading:false
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
         state.orders = data;
          state.totalPages= data.totalPages;
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.isOrdersLoading = false;
          state.error = action.payload;
        })
        .addCase(getShopInteractions.pending, (state) => {
          state.isInteractionsLoading = true;
          state.error = null;
        })
        .addCase(getShopInteractions.fulfilled, (state, action) => {
          state.isInteractionsLoading = false;
       
         state.interactions = action.payload;
         
        })
        .addCase(getShopInteractions.rejected, (state, action) => {
          state.isInteractionsLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default sellerOrderSlice;