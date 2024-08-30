import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>      
          <div className={styles.footerContainerInfo}>
           <nav className={styles.footerNavigation}>
            
            {/* First column */}
            <div className={styles.firstColumn}>
          <h2 className={styles.footerTitle}>Catalog</h2>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                Special offer
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                Bouquets of roses
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                Mono Bouquets
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                Box collection
              </Link>
            </li>
            <li className={styles.footerMenuItem}>
              <Link to="/" className={styles.footerMenuLink}>
                View all
              </Link>
            </li>
          </ul>
            </div>
            {/* Second column */}
            <div className={styles.secondColumn}>
          <address className={styles.footerAddress} id="contacts">
            <h2 className={styles.footerTitle}>Contacts</h2>

            <ul className={styles.footerAddressList}>
              <li className={styles.footerAddressItem}>
                <a
                  className={styles.footerAddressLink}
                  href="tel:+380731234567"
                >
                  +380731234567
                </a>
              </li>
              <li className={styles.footerAddressItem}>
                <a
                  className={styles.footerAddressLink}
                  href="tel:+380731234567"
                >
                  +380731234567
                </a>
              </li>
            </ul>
            <a
              className={styles.footerAddressLink}
              href="mailto:info@yourbouquet.com"
            >
              info@yourbouquet.com
            </a>
          </address>
            </div>
            {/* Third column */}
            <div className={styles.thirdColumn}>
          <h2 className={styles.footerTitle}>About us</h2>
          <ul className={styles.footerAboutUsList}>
            <li className={styles.footerAboutUsLItem}>
              <a href="">Why we</a>
            </li>
            <li className={styles.footerAboutUsLItem}>
              <a href="">Reviews</a>
            </li>
          </ul>
            </div>
            {/* Fourth column */}
            <div className={styles.fourthColumn}>

          <h2 className={styles.footerTitle}>Socials</h2>
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
          <div className={styles.logoSocialContainer}>
            <Link to={ROUTES.HOME} className={styles.footerLogo}>
              YourBouquet
            </Link>
            </div>
          </div>
   
          </nav>
          <div className="footerFlexContainer">
           {/* Bottom line */}
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
                Payment Details
              </a>
            </li>
            <li className={styles.rightsItem}>
              <a
                href="/"
                className={styles.rightsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li className={styles.rightsItem}>
              <a
                href="/"
                className={styles.rightsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Use of Cookies
              </a>
            </li>
          </ul>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
