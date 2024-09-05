import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://your-bouquet.azurewebsites.net/api',
});

export const requestProduct = async () => {
  const { data } = await apiUrl.get('/products');
  return data;
};

export const requestProductsDetailsById = async (productsId) => {
  const { data } = await apiUrl.get(`/products/${productsId}`);
  return data;
};

export const requestCategories = async () => {
  const { data } = await apiUrl.get(`/categories`);
  return data;
};

export const requestProductsDetailsByCategory = async (
  categoryId,
  productLimit
) => {
  const { data } = await apiUrl.get(
    `/products?categories=${categoryId}&limit=${productLimit}`
  );
  return data;
};