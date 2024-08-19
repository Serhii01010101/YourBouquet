import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRoutes from './Routes/Routes';

import styles from '../components/App.module.css';

export const App = () => {
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
