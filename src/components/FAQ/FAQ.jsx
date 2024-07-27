import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <section className={styles.FAQ}>
      <h2 className={styles.FAQTitle}>FAQ</h2>
      <ul className={styles.FAQList}>
        <li className={styles.FAQItem}>
          <h3 className={styles.FAQItemTitle}>
            What types of flowers can I order on your website?
          </h3>
          <p className={styles.FAQItemText}>
            On our website, you can order a variety of flowers, including roses,
            tulips, orchids, lilies, chrysanthemums, and more. We offer both
            classic bouquets and exclusive arrangements to suit any taste.
          </p>
          <svg className={styles.FAQIcon}>
            <use href="../../../public/icons.svg#icon-accordeon-statusMinus"></use>
          </svg>
        </li>
        <li className={styles.FAQItem}>
          <h3 className={styles.FAQItemTitle}>
            What types of flowers can I order on your website?
          </h3>
          <p className={styles.FAQItemText}>
            On our website, you can order a variety of flowers, including roses,
            tulips, orchids, lilies, chrysanthemums, and more. We offer both
            classic bouquets and exclusive arrangements to suit any taste.
          </p>
          <svg className={styles.FAQIcon}>
            <use href="../../../public/icons.svg#icon-accordeon-statusMinus"></use>
          </svg>
        </li>
        <li className={styles.FAQItem}>
          <h3 className={styles.FAQItemTitle}>
            What types of flowers can I order on your website?
          </h3>
          <p className={styles.FAQItemText}>
            On our website, you can order a variety of flowers, including roses,
            tulips, orchids, lilies, chrysanthemums, and more. We offer both
            classic bouquets and exclusive arrangements to suit any taste.
          </p>
          <svg className={styles.FAQIcon}>
            <use href="../../../public/icons.svg#icon-accordeon-statusMinus"></use>
          </svg>
        </li>
      </ul>
    </section>
  );
};

export default FAQ;
