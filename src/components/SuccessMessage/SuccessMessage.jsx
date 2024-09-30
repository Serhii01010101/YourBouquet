import styles from './SuccessMessage.module.css';

import Button from '../Button/Button';

import pathSprite from '../../../public/icons.svg#icon-search';

export const SuccessMessage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Payment</h2>
          <div className={styles.contentWrapper}>
            <svg className={styles.offerItemIcon}>
              <use href={pathSprite} />
            </svg>
            <p className={styles.text}>Success! </p>
            <Button text="Success" styleType="success" />
          </div>
        </div>
      </div>
    </>
  );
};
