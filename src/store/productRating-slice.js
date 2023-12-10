import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/apiConfig";

export const createRating = createAsyncThunk(
  "ratings/createRating",
  async (resData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/ratings/create", resData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllRatings = createAsyncThunk(
  "ratings/getAllRatings",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/ratings/product/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ratingSlice = createSlice({
  name: "ratings",
  initialState: {
    ratings: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRating.fulfilled, (state, action) => {
        state.ratings.push(action.payload);
      })
      .addCase(createRating.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getAllRatings.fulfilled, (state, action) => {
        state.ratings = action.payload;
      })
      .addCase(getAllRatings.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const ratingReducer = ratingSlice.reducer;
export default ratingSlice;
