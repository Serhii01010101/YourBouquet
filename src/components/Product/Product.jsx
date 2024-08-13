import styles from './Product.module.css';

const Product = () => {
  return (
    <section className={styles.product}>
      <img
        src="../../../public/ProductPhoto.jpg"
        alt="Flower image"
        className={styles.productImg}
      />
      <div>
        <h2 className={styles.title}>Crimson Charm</h2>
        <p className={styles.text}>
          A passionate bouquet of crimson tulips, embodying love and desire.
          This bold and captivating arrangement is perfect for romantic gestures
          or adding a touch of drama to any occasion.
        </p>
        <p className={styles.textSpan}>*Price started from 200₴</p>
        <h3 className={styles.subTitleQuantity}>Quantity:</h3>

        <p className={styles.textSpan}>
          *Number of flowers in the bouquet, package is included
        </p>

        <h3 className={styles.subTitle}>Price: 200 ₴</h3>
        <button type="button" className={styles.button}>
          Add to Cart
        </button>
        <button type="button" className={styles.accentButton}>
          Buy now
        </button>

        <ul className={styles.info}>
          <li className={styles.infoItem}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-scooter"></use>
            </svg>
            <p className={styles.infoText}>Free delivery from 600₴</p>
          </li>
          <li className={styles.infoItem}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-calendar"></use>
            </svg>
            <p className={styles.infoText}>Every day from 8:00 to 22:00</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
