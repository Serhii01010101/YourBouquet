import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <nav className={styles.footerNavigation}>
        <div className={styles.footerContainerInfo}>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                About us
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to={ROUTES.CATALOG} className={styles.footerMenuLink}>
                Catalog
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                FAQ
              </Link>
            </li>
          </ul>
          <ul className={styles.rightsList}>
            <li className={styles.rightsItem}>
              <a
                href="/"
                className={styles.rightsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
            </li>
            <li className={styles.rightsItem}>
              <a
                href="/"
                className={styles.rightsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                YourBouquet, 2024
              </a>
            </li>
          </ul>
        </div>

        <address className={styles.footerAddress} id="contacts">
          <p className={styles.footerAddressHead}>Contact us</p>

          <ul className={styles.footerAddressList}>
            <li className={styles.footerAddressItem}>
              <a className={styles.footerAddressLink} href="tel:+380731234567">
                +380731234567
              </a>
            </li>
            <li className={styles.footerAddressItem}>
              <a className={styles.footerAddressLink} href="tel:+380731234567">
                +380731234567
              </a>
            </li>
          </ul>
          <p className={styles.footerAddressHead}>Address</p>
          <a
            className={styles.footerAddressLink}
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D0%BA%D1%81%D0%B0%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+13,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4357586,30.5180023,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cefda4d1b89b:0x138e432b27b66c39!8m2!3d50.4357586!4d30.5180023!16s%2Fg%2F11f3dg79vq?entry=ttu"
            rel="noopener noreferrer"
            target="_blank"
          >
            Saksaganskoho str. 13, Kyiv
          </a>
        </address>
      </nav>

      <div className={styles.logoSocialContainer}>
        <Link to={ROUTES.HOME} className={styles.footerLogo}>
          YourBouquet
        </Link>

        <ul className={styles.footerSocialsList}>
          <li className={styles.footerSocialsItem}>
            <a
              className={styles.footerSocialsLink}
              href="https://www.instagram.com"
              aria-label="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.footerSocialsIcon}>
                <use href="../../../public/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={styles.footerSocialsItem}>
            <a
              className={styles.footerSocialsLink}
              href="https://web.telegram.org/k"
              aria-label="telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.footerSocialsIcon}>
                <use href="../../../public/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>
        <div className={styles.nameBrand}>
          <p className={styles.nameBrandText}>YourBouquet, 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
