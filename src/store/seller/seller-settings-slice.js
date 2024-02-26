import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

export const updateShop = createAsyncThunk(
  "seller/createProduct",
  async ({ token, data }, { rejectWithValue }) => {
   
    try {
      const response = await axios.put(
        `${API_BASE_URL}/seller/shop/update/${data.sellerShopId}`,
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

const sellerSettingsSlice = createSlice({
    name: "sellerSettings",
    initialState: {
     
  
    },
    reducers: {},
    extraReducers: (builder) => {
 
    },
  });
  
  export default sellerSettingsSlice;
  