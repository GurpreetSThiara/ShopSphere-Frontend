import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { API_BASE_URL } from '../config/apiConfig';


// Thunks
export const findProducts = createAsyncThunk(
  'customerProducts/findProducts',
  async (reqData) => {
    const res  = await api.get(
      `/api/products?color=${reqData.colors}&size=${reqData.sizes}&minPrice=${reqData.minPrice}&maxPrice=${reqData.maxPrice}&minDiscount=${reqData.minDiscount}&category=${reqData.category}&stock=${reqData.stock}&sort=${reqData.sort}&pageNumber=${reqData.pageNumber}&pageSize=${reqData.pageSize}`
    );
    console.log("dddddddddddddddddddd");
    console.log(res.data.content)
    return res.data.content;
  }
);

export const findProductById = createAsyncThunk(
  'customerProducts/findProductById',
  async (productId) => {
    const { data } = await api.get(`/api/products/id/${productId}`);
    return data;
  }
);

export const createProduct = createAsyncThunk(
  'customerProducts/createProduct',
  async (product) => {
    const { data } = await api.post(`${API_BASE_URL}/api/admin/products/`, product.data);
    return data;
  }
);

export const updateProduct = createAsyncThunk(
  'customerProducts/updateProduct',
  async (product) => {
    const { data } = await api.put(`${API_BASE_URL}/api/admin/products/${product.productId}`, product);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  'customerProducts/deleteProduct',
  async (productId) => {
    const { data } = await api.delete(`/api/admin/products/${productId}/delete`);
    return data;
  }
);

// Slice
const customerProductSlice = createSlice({
  name: 'customerProducts',
  initialState: {
    products: [],

    categories: {
      mensKurta:'mens_kurta',
      mensPant:'Pant',
      WomenDress:'women_dress',
      lenghaCholi:'lengha_choli',
      womenTop:'Top'
  },

    product: null,
    loading: false,
    error: null,
    deleteProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Find Products
    builder.addCase(findProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.products = [];
    });
    builder.addCase(findProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(findProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || 'An error occurred';
    });

    // Find Product by Id
    builder.addCase(findProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(findProductById.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(findProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred';
    });

    // Create Product
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred';
    });

    // Update Product
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.loading = false;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred';
    });

    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.deleteProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred';
    });
  },
});

// export {
//     findProducts,
//     findProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
//   };
  

export default customerProductSlice;
