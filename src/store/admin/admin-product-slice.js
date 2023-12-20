import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../config/apiConfig";


export const findAllProducts = createAsyncThunk(
    "admin/findAllProducts",

   
    async (reqData) => {
        const jwt = localStorage.getItem("jwt");
        const config = {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          };
      const res = await api.get(
        `/api/admin/products/all`,config
      );

      console.log(res.data);
      return res.data;
    }
  );

  export const createSingleProduct = createAsyncThunk(
    "admin/createSingleProduct",

   
    async (product) => {
        const jwt = localStorage.getItem("jwt");
        const config = {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          };
      const res = await api.post(
        `/api/admin/products/`,product.data,config
      );

      console.log(res.data);
      return res.data;
    }
  );

  export const deleteSingleProduct = createAsyncThunk(
    "admin/deleteSingleProduct",

   
    async (data) => {
        const jwt = localStorage.getItem("jwt");
        const config = {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          };
      const res = await api.delete(
        `/api/admin/products/${data.id}/delete`,config
      );

      console.log(res.data);

      return { id:data.id,res:res.data};
    }
  );



  const adminProductSlice = createSlice(
    {
        name:'adminProductsSlice',
        initialState:{
            allProducts:[],
            error:null,
            loading:null,
            createdProduct :{},

        },
        reducers:{
   
        },
        extraReducers:(builder)=>{
            builder.addCase(findAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
              });
              builder.addCase(findAllProducts.fulfilled, (state, action) => {
                state.allProducts=action.payload;
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh")
                console.log(action.payload)
          
                state.loading = false;
              });
          
              builder.addCase(findAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add item to cart";
              });

              builder.addCase(createSingleProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
              });
              builder.addCase(createSingleProduct.fulfilled, (state, action) => {
                state.createdProduct=action.payload;
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh")
                console.log(action.payload)
          
                state.loading = false;
              });
          
              builder.addCase(createSingleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add item to cart";
              });
              builder.addCase(deleteSingleProduct.fulfilled, (state, action) => {
            

              state.allProducts = state.allProducts.filter(product => product.id !== action.payload.id);
                state.loading = false;
              });

        }
    }
    
  );

  export default adminProductSlice;