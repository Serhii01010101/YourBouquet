import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage';
import ProductDetailsPage from '../../pages/ProductDetailsPage';

import { ROUTES } from '../../utils/routes';
import Category from '../Category/Category';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<HomePage />} />
    <Route path={ROUTES.SpecialOffer} element={<Category />} />
    <Route path="/products" element={<CatalogPage />} />
    <Route path="/products/:productId/" element={<ProductDetailsPage />} />
  </Routes>
);

export default AppRoutes;
