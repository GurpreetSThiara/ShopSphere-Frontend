import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/apiConfig';



// Create async thunk for getting orders
export const getOrders = createAsyncThunk('orders/getOrders', async () => {
  try {
    const response = await api.get('/api/admin/orders/');
    console.log("data aa gya:")
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create async thunk for confirming an order
export const confirmOrder = createAsyncThunk('orders/confirmOrder', async (orderId) => {
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create async thunk for shipping an order
export const shipOrder = createAsyncThunk('orders/shipOrder', async (orderId) => {
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/ship`);
    console.log("shipped");
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create async thunk for delivering an order
export const deliveredOrder = createAsyncThunk('orders/deliveredOrder', async (orderId) => {
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create async thunk for canceling an order
export const cancelOrder = createAsyncThunk('orders/cancelOrder', async (orderId) => {
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Create async thunk for deleting an order
export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (orderId) => {
  try {
    await api.delete(`/api/admin/orders/${orderId}/delete`);
    return orderId;
  } catch (error) {
    throw error;
  }
});

// Create a slice
const adminOrdersSlice = createSlice({
  name: 'orders',
  initialState:{
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(confirmOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Handle confirmed order success
      })
      .addCase(confirmOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(shipOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(shipOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Handle shipped order success
      })
      .addCase(shipOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deliveredOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deliveredOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Handle delivered order success
      })
      .addCase(deliveredOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Handle canceled order success
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        // Handle deleted order success
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export async thunks for use in components


// Export reducer
export default adminOrdersSlice;

