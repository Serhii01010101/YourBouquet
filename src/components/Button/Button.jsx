import styles from '../Button/Button.module.css';

const Button = ({ text, styleType }) => {
  return (
    <button className={`styles.button ${styles[styleType]}`} type="button">
      {text}
    </button>
  );
};

export default Button;
