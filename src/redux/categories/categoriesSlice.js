import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCategories } from '../../services/api';

export const apiGetCtegories = createAsyncThunk(
  'categories/apiGetCtegories',
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
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(apiGetCtegories.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});
