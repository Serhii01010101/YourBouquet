import styles from './ChooseUs.module.css';

const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <h2 className={styles.chooseUsTitle}>Why choose us?</h2>
      <ul className={styles.chooseUsList}>
        <li className={styles.chooseUsItem}>
          <svg className={styles.chooseUsItemIcon}>
            <use href="../../../public/icons.svg#icon-easy-order"></use>
          </svg>
          <h3 className={styles.chooseUsItemTitle}>Easy order</h3>
        </li>
        <li className={styles.chooseUsItem}>
          <svg className={styles.chooseUsItemIcon}>
            <use href="../../../public/icons.svg#icon-fast-delivery"></use>
          </svg>
          <h3 className={styles.chooseUsItemTitle}>Fast delivery</h3>
        </li>
        <li className={styles.chooseUsItem}>
          <svg className={styles.chooseUsItemIcon}>
            <use href="../../../public/icons.svg#icon-premium-quality"></use>
          </svg>
          <h3 className={styles.chooseUsItemTitle}>Premium Quality</h3>
        </li>
        <li className={styles.chooseUsItem}>
          <svg className={styles.chooseUsItemIcon}>
            <use href="../../../public/icons.svg#icon-your-own-design"></use>
          </svg>
          <h3 className={styles.chooseUsItemTitle}>Your own design</h3>
        </li>
      </ul>
    </section>
  );
};

export default ChooseUs;
