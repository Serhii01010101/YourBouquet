import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../utils/routes';

import pathSprite from '../../../public/icons.svg#icon-search';

import pathSpriteHeart from '../../../public/icons.svg#icon-heart';
import pathSpriteBasket from '../../../public/icons.svg#icon-basket';
import { useToggle } from '../../hooks/useToggle';
import ModalLogin from '../ModalLogin/ModalLogin';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const { isOpen, openModal, closeModal } = useToggle();
  console.log('Is modal open:', isOpen);
  return (
    <header className={styles.header}>
      <div className={styles.mainContainer}>
        <nav className={styles.headerNavigation}>
          <NavLink to={ROUTES.HOME} className={styles.headerLogo}>
            YourBouquet
          </NavLink>
          <ul className={styles.headerMenu}>
            <li className={styles.headerMenuItem}>
              <NavLink
                to={ROUTES.SpecialOffer}
                className={({ isActive }) =>
                  `${styles.headerMenuLink} ${
                    isActive ? styles.headerMenuActive : ''
                  }`
                }
              >
                Special offer
              </NavLink>
            </li>
            <li className={styles.headerMenuItem}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${styles.headerMenuLink} ${
                    isActive ? styles.headerMenuActive : ''
                  }`
                }
              >
                Catalog
              </NavLink>
            </li>
            <li className={styles.headerMenuItem}>
              <Link to="/" className={styles.headerMenuLink}>
                About us
              </Link>
            </li>
            <li className={styles.headerMenuItem}>
              <Link to="#contacts" className={styles.headerMenuLink}>
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
                <use href={pathSprite}></use>
              </svg>
            </button>
          </form>

          <div className={styles.iconBox}>
            <Link to="/" className={styles.iconBtn}>
              <svg className={styles.icon}>
                <use href={pathSpriteHeart}></use>
              </svg>
            </Link>
            <Link to="/" className={styles.iconBtn}>
              <svg className={styles.icon}>
                <use href={pathSpriteBasket}></use>
              </svg>
            </Link>
          </div>

          <button onClick={openModal} type="button" className={styles.btnLogin}>
            Log in
          </button>
          {isOpen && <ModalLogin closeModal={closeModal} isOpen={openModal} />}
        </div>

        <div className={styles.headerMobileBox}>
          <button onClick={toggleMobileMenu}>
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-burger-menu"></use>
            </svg>
          </button>
          <Link to="/">
            <svg className={styles.icon}>
              <use href="../../../public/icons.svg#icon-login"></use>
            </svg>
          </Link>
        </div>
      </div>

      <div
        className={`${styles.mobileNavigator} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
      >
        <div className={styles.mobileMenu}>
          <ul className={styles.headerMobileMenu}>
            <li className={styles.headerMobileMenuItem}>
              <NavLink
                to={ROUTES.SpecialOffer}
                className={({ isActive }) =>
                  `${styles.headerMenuLink} ${
                    isActive ? styles.headerMenuActive : ''
                  }`
                }
              >
                Special offer
              </NavLink>
            </li>
            <li className={styles.headerMobileMenuItem}>
              <NavLink
                to={ROUTES.CATALOG}
                className={({ isActive }) =>
                  `${styles.headerMenuLink} ${
                    isActive ? styles.headerMenuActive : ''
                  }`
                }
              >
                Catalog
              </NavLink>
            </li>
            <li className={styles.headerMobileMenuItem}>
              <Link to="/" className={styles.headerMenuLink}>
                About us
              </Link>
            </li>
            <li className={styles.headerMobileMenuItem}>
              <Link to="#contacts" className={styles.headerMenuLink}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.mobileSearch}>
          <form className={styles.searchMobileForm}>
            <input
              className={styles.searchFormInput}
              type="search"
              name="search"
              // placeholder="Search"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
