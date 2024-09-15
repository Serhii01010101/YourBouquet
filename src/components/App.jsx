import { useDispatch } from 'react-redux';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRoutes from './Routes/Routes';

import styles from '../components/App.module.css';
import { useEffect } from 'react';
import { apiGetCategories } from '../redux/categories/categoriesSlice';

export const App = () => {
  const dispatch = useDispatch(apiGetCategories);

  

  useEffect(() => {
    dispatch(apiGetCategories());
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};
