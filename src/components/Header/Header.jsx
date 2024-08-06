import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../utils/routes';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <Link to={ROUTES.HOME} className={styles.headerLogo}>
          YourBouquet
        </Link>
        <ul className={styles.headerMenu}>
          <li className={styles.headerMenuItem}>
            <Link to={ROUTES.CATALOG} className={styles.headerMenuLink}>
              Catalog
            </Link>
          </li>
          <li className={styles.headerMenuItem}>
            <Link to="/" className={styles.headerMenuLink}>
              About us
            </Link>
          </li>
          <li className={styles.headerMenuItem}>
            <Link to="/" className={styles.headerMenuLink}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.headerBox}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchFormInput}
            type="search"
            name="search"
            placeholder="Search"
            autoComplete="off"
            onChange={() => {}}
            value=""
          />
          <button className={styles.searchFormBtn}>
            <svg className={styles.icon}>
              <use href="./../../public/icons.svg#icon-search"></use>
            </svg>
          </button>
        </form>

        <div className={styles.iconBox}>
          <Link to="/" className={styles.iconBtn}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-heart"></use>
            </svg>
          </Link>
          <Link to="/" className={styles.iconBtn}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-basket"></use>
            </svg>
          </Link>
        </div>

        <button type="button" className={styles.btnLogin}>
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
