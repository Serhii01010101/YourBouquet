import styles from './SpecialOffer.module.css';
import pathSprite from '../../../public/icons.svg#icon-heart';

const SpecialOffer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.offerContainer}>
        <h2 className={styles.offerTitle}>Special offer</h2>
        <ul className={styles.offerList}>
          <li className={styles.offerItem}>
            <img
              src="/../../public/flowerImage.jpg"
              alt="Flower image"
              className={styles.offerItemImg}
            />
            <svg className={styles.offerItemIcon}>
              <use href={pathSprite}></use>
            </svg>
            <h3 className={styles.offerItemTitle}>Blossom Delight</h3>
            <p className={styles.offerItemPrice}>
              1850 ₴
              <span className={styles.offerItemPreviousPrice}>2500 ₴</span>
            </p>
            <button type="button" className={styles.offerItemBtn}>
              Buy
            </button>
          </li>
          <li className={styles.offerItem}>
            <img
              src="/../public/flowerImage.jpg"
              alt="Flower image"
              className={styles.offerItemImg}
            />
            <svg className={styles.offerItemIcon}>
              <use href="/public/icons.svg#icon-heart"></use>
            </svg>
            <h3 className={styles.offerItemTitle}>Blossom Delight</h3>
            <p className={styles.offerItemPrice}>
              1850 ₴
              <span className={styles.offerItemPreviousPrice}>2500 ₴</span>
            </p>
            <button type="button" className={styles.offerItemBtn}>
              Buy
            </button>
          </li>
          <li className={styles.offerItem}>
            <img
              src="public/flowerImage.jpg"
              alt="Flower image"
              className={styles.offerItemImg}
            />
            <svg className={styles.offerItemIcon}>
              <use href="../../../public/icons.svg#icon-heart"></use>
            </svg>
            <h3 className={styles.offerItemTitle}>Blossom Delight</h3>
            <p className={styles.offerItemPrice}>
              1850 ₴
              <span className={styles.offerItemPreviousPrice}>2500 ₴</span>
            </p>
            <button type="button" className={styles.offerItemBtn}>
              Buy
            </button>
          </li>
          <li className={styles.offerItem}>
            <img
              src="../../../public/flowerImage.jpg"
              alt="Flower image"
              className={styles.offerItemImg}
            />
            <svg className={styles.offerItemIcon}>
              <use href="../../../public/icons.svg#icon-heart"></use>
            </svg>
            <h3 className={styles.offerItemTitle}>Blossom Delight</h3>
            <p className={styles.offerItemPrice}>
              1850 ₴
              <span className={styles.offerItemPreviousPrice}>2500 ₴</span>
            </p>
            <button type="button" className={styles.offerItemBtn}>
              Buy
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SpecialOffer;
