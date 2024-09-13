import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from './products/productsSlice';
import categoriesSlice from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsReducer,
  },
  devTools: true,
});
