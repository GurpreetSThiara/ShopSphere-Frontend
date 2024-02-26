import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

export const getOrders = createAsyncThunk(
  "seller/orders",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrdersForAllTime = createAsyncThunk(
  "seller/orders/allTime",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrdersForLastMonth = createAsyncThunk(
  "seller/orders/lastMonth",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders/last-month`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrdersForLastWeek = createAsyncThunk(
  "seller/orders/lastWeek",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders/last-week`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrdersForLast24Hours = createAsyncThunk(
  "seller/orders/last24Hours",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders/last-24-hours`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchShopOrdersByMonth = createAsyncThunk(
  'orders/fetchShopOrdersByMonth',
  async ({ shopId, lastYear, pageable }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/seller/shop/orders/graph`, {
        params: {
          shopId,
          lastYear,
        }
      });
      console.log('recievedddddddddddddddddddddddddddddddddddddddddddddd')
      console.log(response)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const getOrdersForLastYear = createAsyncThunk(
  "seller/orders/lastYear",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/seller/shop/${id}/orders/last-year`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
          },
        }
      );
      const orders = response.data;
      return orders;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShopInteractions = createAsyncThunk(
  "seller/interactions",
  async ({ token, id, pageNumber, pageSize }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/interactions/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            shopId: id,
          },
        }
      );
      const interactions = response.data;
      return interactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const sellerOrderSlice = createSlice({
  name: "sellerOrders",
  initialState: {
    orders: null,
    shopProducts: null,
    isOrdersLoading: false,
    totalPages: null,
    interactions: null,
    isInteractionsLoading: false,
    error: null,
    ordersByMonth:null,
    isOrdersByMonthLoading:false

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrdersForAllTime.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrdersForAllTime.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrdersForAllTime.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrdersForLastMonth.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrdersForLastMonth.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrdersForLastMonth.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrdersForLastWeek.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrdersForLastWeek.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrdersForLastWeek.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrdersForLast24Hours.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrdersForLast24Hours.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrdersForLast24Hours.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrdersForLastYear.pending, (state) => {
        state.isOrdersLoading = true;
        state.error = null;
      })
      .addCase(getOrdersForLastYear.fulfilled, (state, action) => {
        state.isOrdersLoading = false;
        state.orders = action.payload;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getOrdersForLastYear.rejected, (state, action) => {
        state.isOrdersLoading = false;
        state.error = action.payload;
      })
      .addCase(getShopInteractions.pending, (state) => {
        state.isInteractionsLoading = true;
        state.error = null;
      })
      .addCase(getShopInteractions.fulfilled, (state, action) => {
        state.isInteractionsLoading = false;
        state.interactions = action.payload;
      })
      .addCase(getShopInteractions.rejected, (state, action) => {
        state.isInteractionsLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchShopOrdersByMonth.pending, (state) => {
        state.isOrdersByMonthLoading = true;
        state.error = null;
      })
      .addCase(fetchShopOrdersByMonth.fulfilled, (state, action) => {
        state.isOrdersByMonthLoading = false;
        state.ordersByMonth = action.payload;
      })
      .addCase(fetchShopOrdersByMonth.rejected, (state, action) => {
        state.isOrdersByMonthLoading = false;
        state.error = action.error.message;
      });
  },
});

export default sellerOrderSlice;
