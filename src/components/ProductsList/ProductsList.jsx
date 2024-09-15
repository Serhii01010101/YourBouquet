import { Link, useLocation } from 'react-router-dom';

import styles from '../ProductsList/ProductsList.module.css';
import pathSprite from '../../../public/icons.svg#icon-heart';

export const ProductsList = ({ title, products = [] }) => {
  return (
    <section>
      {Array.isArray(products) && products.length === 0 && (
        <p>You still dont have any products!</p>
      )}
      <ul className={styles.offerList}>
        {Array.isArray(products) &&
          products.map(
            ({
              id,
              name,
              price,
              discountPercent,
              stock,
              photos,
              categories,
            }) => {
              return (
                <li key={id} className={styles.offerItem}>
                  <Link to={`/products/${id}`}>
                    <img
                      src={photos[0]}
                      alt={name}
                      className={styles.offerItemImg}
                    />
                    <svg className={styles.offerItemIcon}>
                      <use href={pathSprite}></use>
                    </svg>
                    <h3 className={styles.offerItemTitle}>{name}</h3>
                    <p className={styles.offerItemPrice}>
                      {price}
                      {discountPercent !== 0 && (
                        <span className={styles.offerItemPreviousPrice}>
                          {(price - (price * discountPercent) / 100).toFixed(0)}
                        </span>
                      )}
                    </p>
                    <button type="button" className={styles.offerItemBtn}>
                      Buy
                    </button>
                  </Link>
                </li>
              );
            }
          )}
      </ul>
    </section>
  );
};

export default ProductsList;
