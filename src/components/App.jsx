import Header from './Header/Header';
import Hero from './Hero/Hero';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import ChooseUs from './ChooseUs/ChooseUs';
import Catalog from './Catalog/Catalog';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

import styles from '../components/App.module.css';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Hero />
      <SpecialOffer />
      <ChooseUs />
      <Catalog />
      <FAQ />
      <Footer />
    </div>
  );
};
