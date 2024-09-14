import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../Category/Category.module.css';

const Category = () => {
  const { list } = useSelector(({ categories }) => categories || {});
  console.log('list', list);

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>There are our {name}</h2>
      <ul className={styles.categoryList}>
        {list.map(({ id, name }) => (
          <li key={id} className={styles.categoryItem}>
            <NavLink to={`/category=${id}`} className={styles.categoryItemLink}>
              <h3 className={styles.categoryItemTitle}>{name}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
