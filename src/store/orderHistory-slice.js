import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/apiConfig";

export const getAllOrders = createAsyncThunk(
    "orders/getAllOrders",
    async (reqData) => {
      const jwt = localStorage.getItem("jwt");
  
      const  response  = await api.get(`/api/orders/user`);
      console.log(response);
      console.log(response.data);
  
      return response.data;
    }
  );



const OrderHistorySlice = createSlice({
        name:'orders',
        initialState:{
            allOrders:null,
            loading: false,
            error: null,
            order:null,
        },
       
        reducers:{
            setOrder(state,action){
                console.log("seccccccccccccccccccccccccccccccccccc");
                console.log(action.payload);
                state.order=action.payload;
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(getAllOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
                // state.allOrders = [];
              });
              builder.addCase(getAllOrders.fulfilled, (state, action) => {
                state.allOrders = action.payload;
                state.loading = false;
              });
              builder.addCase(getAllOrders.rejected, (state, action) => {
                state.loading = false;
              
                state.error = action.error.message || "An error occurred";
              });
        }
});

// Add this line at the end of your slice file
export const { setOrder } = OrderHistorySlice.actions;


export default OrderHistorySlice;