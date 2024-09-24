import styles from './ChooseUs.module.css';
import items from '../../whyChooseUsData.json';
import ChooseUsSection from '../../components/ChooseUsSection/ChooseUsSection';

// import pathSpriteEasyOrder from '../../../public/icons.svg#icon-easy-order';
// import pathSpriteFastDelivery from '../../../public/icons.svg#icon-fast-delivery';
// import pathSpritePremiumQuality from '../../../public/icons.svg#icon-premium-quality';
// import pathSpriteOwnDesign from '../../../public/icons.svg#icon-your-own-design';

const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div className={styles.chooseUSTitleContainer}>
        <div className={styles.chooseUSTitleWrapper}>
          <h2 className={styles.chooseUsTitle}>Why choose us?</h2>
        </div>
      </div>
      <div className={styles.chooseUsContainer}>
        <ul className={styles.chooseUsList}>
          {items.map(({ id, icon, text }) => (
            <li key={id} className={styles.chooseUsItem}>
              <ChooseUsSection id={id} icon={icon} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChooseUs;

{
  /* <div className={styles.chooseUSTitleContainer}>
        <h2 className={styles.chooseUsTitle}>Why choose us?</h2>
      </div>
      <div className={styles.chooseUsContainer}>
        <ul className={styles.chooseUsList}>
          <li className={styles.chooseUsItem}>
            <svg className={styles.chooseUsItemIcon}>
              <use href={pathSpriteEasyOrder}></use>
            </svg>
            <h3 className={styles.chooseUsItemTitle}>Easy order</h3>
          </li>
          <li className={styles.chooseUsItem}>
            <svg className={styles.chooseUsItemIcon}>
              <use href={pathSpriteFastDelivery}></use>
            </svg>
            <h3 className={styles.chooseUsItemTitle}>Fast delivery</h3>
          </li>
          <li className={styles.chooseUsItem}>
            <svg className={styles.chooseUsItemIcon}>
              <use href={pathSpritePremiumQuality}></use>
            </svg>
            <h3 className={styles.chooseUsItemTitle}>Premium Quality</h3>
          </li>
          <li className={styles.chooseUsItem}>
            <svg className={styles.chooseUsItemIcon}>
              <use href={pathSpriteOwnDesign}></use>
            </svg>
            <h3 className={styles.chooseUsItemTitle}>Your own design</h3>
          </li>
        </ul>
      </div> */
}
