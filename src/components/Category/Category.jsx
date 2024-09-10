import { NavLink } from 'react-router-dom';
import styles from './Catalog.module.css';

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <h2 className={styles.catalogTitle}>Catalog</h2>
        <ul className={styles.catalogList}>
          <li className={styles.catalogItem}>
            <NavLink to={`/products?category=${1}`} className={styles.catalogItemLink}>
              <img
                src="./../../public/catalogMono.jpg"
                alt="Mono bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Mono Bouquets</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
