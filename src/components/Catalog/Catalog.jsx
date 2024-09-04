import styles from './Catalog.module.css';



const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <h2 className={styles.catalogTitle}>Catalog</h2>
        <ul className={styles.catalogList}>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="./../../public/catalogMono.jpg"
                alt="Mono bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Mono Bouquets</h3>
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="./../../public/catalogDesign.jpg"
                alt="Design bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Design Bouquets</h3>
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="./../../public/catalogWedding.jpg"
                alt="Wedding bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Wedding Bouquets</h3>
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="/../../public/catalogSpecial.jpg"
                alt="Bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Special Occasions</h3>
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="/../../public/catalogRoses.jpg"
                alt="Bouquets of roses image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Bouquets of Roses</h3>
            </a>
          </li>
          <li className={styles.catalogItem}>
            <a href="" className={styles.catalogItemLink}>
              <img
                src="/../../public/catalogBox.jpg"
                alt="Box bouquets image"
                className={styles.catalogItemImg}
              />
              <h3 className={styles.catalogItemTitle}>Box collection</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
