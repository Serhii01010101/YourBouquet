import { Link, useLocation } from 'react-router-dom';
import styles from '../ProductsList/ProductsList.module.css';

export const ProductsList = ({ products }) => {
  const location = useLocation();

  return (
    <div>
      {Array.isArray(products) && products.length === 0 && (
        <p>You still dont have any products!</p>
      )}
      <ul className={styles.offerList}>
        {Array.isArray(products) &&
          products.map((product) => {
            return (
              <li key={product.id} className={styles.offerItem}>
                <Link state={{ from: location }} to={`/products/${product.id}`}>
                  <img
                    src={product.photos}
                    alt="Flower image"
                    className={styles.offerItemImg}
                  />
                  <svg className={styles.offerItemIcon}>
                    <use href="../../../public/icons.svg#icon-heart"></use>
                  </svg>
                  <h3 className={styles.offerItemTitle}>{product.name}</h3>
                  <p className={styles.offerItemPrice}>
                    {product.price}
                    {product.discountPercent !== 0 && (
                      <span className={styles.offerItemPreviousPrice}>
                        {(
                          product.price -
                          (product.price * product.discountPercent) / 100
                        ).toFixed(0)}
                      </span>
                    )}
                  </p>
                  <button type="button" className={styles.offerItemBtn}>
                    Buy
                  </button>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsList;
