import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";
import { selectUser } from "./auth-slice";

export const addToCart = createAsyncThunk('', async (userData, { rejectWithValue }) => {

    try {
     const userData =  localStorage.getItem(selectUser.jwt);
      const response = await axios.post(`${API_BASE_URL}/api/cart/add`, userData);
      const user = response.data;
      console.log(user);
      console.log(user);
    
      return user;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

  export const getCartItems = createAsyncThunk('', async (userData, { rejectWithValue }) => {

    try {
     const userData =  localStorage.getItem(selectUser.jwt);
      const response = await axios.post(`${API_BASE_URL}/api/cart/add`, userData);
      const user = response.data;
    
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        totalItems:0,
        totalPrice:0,
        totalDiscountedPrice:0,
        showCart: true
    },

    reducers:{
        addToCart(state, action){
            const newItem=action.payload;
            //check if item is already available
            const existingItem = state.itemList.find((item)=>item.product.imageUrl===newItem.product.imageUrl);
            if(existingItem){
                existingItem.quantity++;
                // existingItem.product.price +=newItem.product.price;
                state.totalPrice+=newItem.product.price;
                state.totalDiscountedPrice+=newItem.product.discountedPrice;
            }else{
                state.itemList.push({
                    product:newItem.product,
                    quantity:1
                 })
                 state.totalPrice+=newItem.product.price;
                 state.totalDiscountedPrice+=newItem.product.discountedPrice;

            }
        },
        removeFromCart(state, action){
            const newItem=action.payload;
            
            //check if item is already available
            const existingItem = state.itemList.find((item)=>item.product.imageUrl===newItem.product.imageUrl);
            if(existingItem){
                if(existingItem.quantity>1){
                    existingItem.quantity--;
                // existingItem.product.price -=newItem.product.price;
                state.totalPrice-=newItem.product.price;
                state.totalDiscountedPrice-=newItem.product.discountedPrice;
                }else{
                    state.itemList= state.itemList.filter(item => item.product.imageUrl!==existingItem.product.imageUrl);
                    //  state.totalPrice+=newItem.product.price;
                    //  state.totalDiscountedPrice+=newItem.product.discountedPrice;
                }
            }

        },
        deleteFromCart(state,action){
            const itemtoDelete=action.payload;
            state.itemList= state.itemList.filter(item => item.product.imageUrl!==itemtoDelete.product.imageUrl);
                    state.totalPrice-=itemtoDelete.product.price*itemtoDelete.quantity;
                     state.totalDiscountedPrice-=itemtoDelete.product.discountedPrice*itemtoDelete.quantity;

        },

        setShowCart(state){
            state.showCart=true;
        }
    }

})

export const cartActions = cartSlice.actions;
export default cartSlice;
