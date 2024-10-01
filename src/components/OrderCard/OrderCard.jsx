import { Counter } from '../Counter/Counter';
import styles from '../OrderCard/OrderCard.module.css';

const OrderCard = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src="https://i.pinimg.com/564x/01/2d/0b/012d0b29a64255a2464b00dfc8f6a421.jpg"
              alt=""
            />
          </div>
          <div className={styles.orderDetails}>
            <ul className={styles.headings}>
              <li className={styles.headingsItem}>Name</li>
              <li className={styles.headingsItem}>Amount</li>
              <li className={styles.headingsItem}>Price</li>
            </ul>
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <ul className={styles.infoList}>
                  <li className={styles.infoItem}>
                    <div className={styles.infoItemWrapper}>
                      <h2 className={styles.infoTitle}>Blossom Delight</h2>
                      <div className={styles.infoPriceWrapper}>
                        <p className={styles.infoPriceNew}>1850 ₴</p>
                        <p className={styles.infoPriceOld}>2500 ₴</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.infoItem}>
                    <Counter />
                  </li>
                  <li className={styles.infoItem}>
                    <p className={styles.infoItemPrice}>1850 ₴</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
