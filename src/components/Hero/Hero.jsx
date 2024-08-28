import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Flowers delivery in Kyiv</h1>
        <p className={styles.heroText}>
          Bringing joy to your doorstep with exquisite flower delivery services
        </p>
        <div className={styles.heroButtons}>
          <a href="#contacts" className={styles.heroContactLink}>
            Contact us
          </a>
          <button type="button" className={styles.heroOrderBtn}>
            Click to order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
