// reviewSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../config/apiConfig';


export const createReview = createAsyncThunk('reviews/createReview', async (resData, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/reviews/create', resData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getAllReviews = createAsyncThunk('reviews/getAllReviews', async (productId, { rejectWithValue }) => {
  try {
    const response = await api.get(`/api/reviews/product/${productId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export  const reviewReducer= reviewSlice.reducer;
export default reviewSlice;
