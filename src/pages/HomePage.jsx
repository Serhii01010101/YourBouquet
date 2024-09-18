import Hero from '../components/Hero/Hero';
import SpecialOffer from '../components/SpecialOffer/SpecialOffer';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Catalog from '../components/Catalog/Catalog';
import FAQ from '../components/FAQ/FAQ';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <>
      <Hero />
      <SpecialOffer />
      <ChooseUs />
      <Catalog categories={list} amount={6} />
      <FAQ />
    </>
  );
};

export default HomePage;
