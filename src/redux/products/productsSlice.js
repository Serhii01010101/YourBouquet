import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requestProduct,
  requestProductsDetailsById,
} from './../../services/api';
import { STATUSES } from './../../utils/constants';

export const apiGetProducts = createAsyncThunk(
  'products/apiGetProducts',
  async (_, thunkApi) => {
    try {
      const products = await requestProduct();
      return products; // Action Payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetProductsDetails = createAsyncThunk(
  'products/apiGetProductsDetails',
  async (productId, thunkApi) => {
    try {
      const product = await requestProductsDetailsById(productId);

      return product; // Action Payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  productDetails: null,
  status: STATUSES.idle, // "idle" | "pending" | "success" | "error"
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetProducts.pending, (state) => {
        state.status = STATUSES.pending;
        state.error = null;
      })
      .addCase(apiGetProducts.fulfilled, (state, { payload }) => {
        state.status = STATUSES.success;
        state.products = payload;
      })
      .addCase(apiGetProducts.rejected, (state, { payload }) => {
        state.status = STATUSES.error;
        state.error = payload;
      })

      // ------ GET PRODUCTS DETAILS

      .addCase(apiGetProductsDetails.pending, (state) => {
        state.status = STATUSES.pending;
        state.error = null;
      })
      .addCase(apiGetProductsDetails.fulfilled, (state, { payload }) => {
        state.status = STATUSES.success;
        state.productDetails = payload;
      })
      .addCase(apiGetProductsDetails.rejected, (state, { payload }) => {
        state.status = STATUSES.error;
        state.error = payload;
      }),
});

// export const { incrementPage } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
