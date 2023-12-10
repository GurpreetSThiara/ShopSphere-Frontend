import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";
import { useState } from "react";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};

// Async Thunks
export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async (reqData) => {
    const jwt = localStorage.getItem("jwt");

    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(
      `${API_BASE_URL}/api/cart/add`,
      reqData,
      config
    );
    console.log(response);
    console.log(response.data);

    return response.data;
  }
);

export const getCart = createAsyncThunk("cart/getCart", async (x) => {
  const jwt = localStorage.getItem("jwt");
  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get(`${API_BASE_URL}/api/cart/`, config);
  console.log("error" + response);
  console.log(response.data);

  return response.data;
});

export const removeCartItem = createAsyncThunk(
  "cart/removeItem",
  async (reqData) => {
    const jwt = localStorage.getItem("jwt");
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    };
    await axios.delete(
      `${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,
      config
    );
    return reqData.cartItemId;
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async (reqData) => {
    const jwt = localStorage.getItem("jwt");
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(
      `${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,
      reqData.data,
      config
    );

    return response.data;
  }
);

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    error: null,
    cartLength: parseInt(localStorage.getItem("cartLength"), 10) || 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add item to cart
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.cartItems.push(action.payload.cartItems);

      state.loading = false;
    });

    builder.addCase(addItemToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to add item to cart";
    });

    // Get cart
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to get cart";
    });

    // Remove item from cart
    builder.addCase(removeCartItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.loading = false;
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to remove item from cart";
    });

    // Update item in cart
    builder.addCase(updateCartItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCartItem.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.loading = false;
    });
    builder.addCase(updateCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to update item in cart";
    });
  },
});

// Export actions and reducer
export default cartSlice;
export const cartActions = {
  addItemToCart,
  getCart,
  removeCartItem,
  updateCartItem,
};
