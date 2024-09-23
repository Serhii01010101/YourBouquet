import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../Category/Category.module.css';

const Category = ({ title }) => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <ul className={styles.categoryList}>
        {list.map(({ id, name }) => (
          <li key={id} className={styles.categoryItem}>
            <NavLink
              to={`/catalog/category=${name}`}
              className={({ isActive }) =>
                `${styles.categoryItemLink} ${
                  isActive ? styles.categoryItemLinkActive : ''
                }`
              }
            >
              <h3 className={styles.categoryItemTitle}>{name}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
