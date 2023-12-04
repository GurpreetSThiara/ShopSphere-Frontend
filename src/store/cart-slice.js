import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemList:[],
        totalItems:0,
        showCart: false
    },

    reducers:{
        addToCart(state, action){
            const newItem=action.payload;
            //check if item is already available
            const existingItem = state.itemList.find((item)=>item[0]===newItem);
            if(existingItem){
                existingItem.quantity++;
                existingItem.price +=newItem.price;
            }else{
                state.itemList.push({
                   product:newItem.product,
                   quantity:1
                 })
            }
        },
        removeFromCart(){},
        setShowCart(state){
            state.showCart=true;
        }
    }

})

export const cartActions = cartSlice.actions;
export default cartSlice;
