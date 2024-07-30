import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <a href="/" className={styles.headerLogo}>
          YourBouquet
        </a>
        <ul className={styles.headerMenu}>
          <li className={styles.headerMenuItem}>
            <a href="/" className={styles.headerMenuLink}>
              Catalog
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="/" className={styles.headerMenuLink}>
              About us
            </a>
          </li>
          <li className={styles.headerMenuItem}>
            <a href="/" className={styles.headerMenuLink}>
              Contacts
            </a>
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
          <a href="/" className={styles.iconBtn}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-heart"></use>
            </svg>
          </a>
          <a href="/" className={styles.iconBtn}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-busket"></use>
            </svg>
          </a>
        </div>

        <button type="button" className={styles.btnLogin}>
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
