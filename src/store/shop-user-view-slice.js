import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { API_BASE_URL } from "../config/apiConfig";
import { createPersistReducer } from "./persist/persistConfig";
import axios from "axios";

export const findAllShops = createAsyncThunk(
    "shops/allShops",
    async (page) => {
      console.log(page)
      const res = await api.get(
      `/api/shops?pageNumber=${page.pageNumber}&pageSize=${page.pageSize}`
      );
  
      console.log(res.data);
      return res.data;

    }
  );
  export const findAllShopProducts = createAsyncThunk(
    "shop/products",
    async (data) => {
      console.log(data)
      const res = await api.get(
      `/api/shop/products/${data.id}?pageNumber=${data.pageNumber}&pageSize=${data.pageSize}`
      );
  


      console.log(res.data);
      return res.data;
      
    }
  );

  export const saveInteractions = createAsyncThunk(
    "shop/interactions",
    async ({shopId, userId}) => {
      const jwt = localStorage.getItem('jwt')

      console.log("interactionnnnnnnnnnnnnnnnnnnnnnnnnn")
   
      const res = await axios.post(`${API_BASE_URL}/api/interactions/visit`,{
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        params:{
          shopId:shopId,
         
        }
        
      })


      console.log(res.data);
      return res.data;
      
    }
  );

const ShopUserViewSlice = createSlice({
        name:'shops',
        initialState:{
            allShops:null,
            selectedShopProducts:null,
            selectedShop:null,
            error:null
        },
        reducers:{
          setSelectedShop(state,action){
            console.log(action.payload)
            state.selectedShop=action.payload;

          }
        },
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
              builder.addCase(findAllShopProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.selectedShopProducts = [];
              });
              builder.addCase(findAllShopProducts.fulfilled, (state, action) => {
                state.selectedShopProducts = action.payload;
                state.loading = false;
              });
              builder.addCase(findAllShopProducts.rejected, (state, action) => {
                state.loading = false;
              
                state.error = action.error.message || "An error occurred";
              });
        }
});

export const setSelectedShop = ShopUserViewSlice.actions.setSelectedShop;
export const ShopUserViewSliceReducer = createPersistReducer(ShopUserViewSlice.reducer);
export default ShopUserViewSlice;