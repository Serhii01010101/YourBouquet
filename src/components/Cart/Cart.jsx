import styles from './Cart.module.css';

import Button from '../Button/Button';
import OrderCard from '../OrderCard/OrderCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Cart = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Cart</h2>
          <div className={styles.orderCardContainer}>
            <OrderCard />
            <div className={styles.orderWrapper}>
              <div className={styles.totalPriceWrapper}>
                <p>Total price</p>
                <p>2750 ₴</p>
              </div>
              <div className={styles.totalPriceWrapperBtn}>
                <Button text="Continue shopping" styleType="success" />
                <Button text="Check out" styleType="pinkBtn" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
