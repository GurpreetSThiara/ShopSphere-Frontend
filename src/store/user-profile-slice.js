import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/apiConfig";








export const findUserProfile = createAsyncThunk(
    "user/findUserProfile",
    async (address) => {
        const jwt = localStorage.getItem('jwt');
        // const config = {
        //     headers: {
        //       Authorization: `Bearer ${jwt}`,
        //       "Content-Type": "application/json",
        //     },
        //   };
      const  res  = await api.get(`/api/users/profile`);
  
      console.log("refffffffffffffs:")
      console.log(res.data)
      return res.data;
    }
  );
  




const userProfileSlice = createSlice({
    
        name:'userProfile',
        initialState:{
            user:null,
            loading:false,
            error:null
        },
        reducers:{},
  

    extraReducers:(builder)=>{
        // Add item to cart
builder.addCase(findUserProfile.pending, (state) => {
  state.loading = true;
  state.error = null;
});
builder.addCase(findUserProfile.fulfilled, (state, action) => {
  state.user=action.payload;

  state.loading = false;
});

builder.addCase(findUserProfile.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message || "failed to load profile";
});
  }
}
);


export default userProfileSlice;