import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';

const Catalog = ({ categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <h2 className={styles.catalogTitle}>Catalog</h2>
        <ul className={styles.catalogList}>
          {list.map(({ id, name, photo }) => (
            <li className={styles.catalogItem} key={id}>
              <Link
                to={`/catalog/category=${name}`}
                className={styles.catalogItemLink}
              >
                <img src={photo} alt={name} className={styles.catalogItemImg} />
                <h3 className={styles.catalogItemTitle}>{name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
