import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice=createSlice({
    name:'product',
    initialState:{ productDetails:{} },
    reducers:{
        updateProduct(state,action){
            state.productDetails=action.payload;
        },
     
    }
})

export const productDetailsActions =productDetailsSlice.actions;

export default productDetailsSlice;