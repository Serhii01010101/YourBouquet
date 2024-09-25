import styles from './WaitMessage.module.css';

// // import succesDone from '../../../public/icons.svg#icon-easy-order';
import successDone from '../../../public/icons.svg#icon-easy-order';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ContinueBtn } from '../ContinueBtn/ContinueBtn';

export const WaitMessage = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Payment</h2>
          <div className={styles.contentWrapper}>
            <svg className={styles.offerItemIcon} width="80" height="80">
              <use href={successDone}></use>
            </svg>
            <p className={styles.text}>Wait... </p>
            <ContinueBtn />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
