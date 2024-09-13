import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCategories } from '../../services/api';

export const apiGetCategories = createAsyncThunk(
  'categories/apiGetCategories',
  async (_, thunkApi) => {
    try {
      const categories = await requestCategories();
      return categories;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  list: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(apiGetCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(apiGetCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(apiGetCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
