import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage';
import { ROUTES } from '../../utils/routes';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<HomePage />} />
    <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
  </Routes>
);

export default AppRoutes;
