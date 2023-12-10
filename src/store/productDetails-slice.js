import { createSlice } from "@reduxjs/toolkit";

const storedProduct = (() => {
  try {
    return JSON.parse(localStorage.getItem("product")) || null;
  } catch (error) {
    console.error("Error parsing stored product:", error);
    return null;
  }
})();
const productDetailsSlice = createSlice({
  name: "productD",
  initialState: {
    productDetails: storedProduct || null, // Use null or a default value if the localStorage item is not present
  },
  reducers: {
    updateProduct(state, action) {
      // Use the immer library to ensure immutability
      return {
        ...state,
        productDetails: action.payload,
      };
    },
  },
});

export const productDetailsActions = productDetailsSlice.actions;

export default productDetailsSlice;
