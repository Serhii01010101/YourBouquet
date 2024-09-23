import styles from './ChooseUsSection.module.css';

const ChooseUsSection = ({ icon, text }) => {
  return (
    <>
      <svg className={styles.chooseUsItemIcon}>
        <use href={icon}></use>
      </svg>
      <h3 className={styles.chooseUsItemTitle}>{text}</h3>
    </>
  );
};

export default ChooseUsSection;
