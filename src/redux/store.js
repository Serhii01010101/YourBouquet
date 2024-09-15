import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categoriesSlice';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsReducer,
  },
  devTools: true,
});
