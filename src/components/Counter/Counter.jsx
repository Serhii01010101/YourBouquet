import { useState } from 'react';
import s from './Counter.module.css';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

export const Counter = ({ stock = 1000 }) => {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(1);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + step);
  };

  const handleDecreaseCounter = () => {
    if (counter > 0) {
      setCounter((prev) => prev - step);
    }
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <button
          onClick={handleDecreaseCounter}
          className={s.btn}
          disabled={counter <= 1}
        >
          <FaMinus className={s.icon} />
        </button>
        <h1 className={s.counter}>{counter}</h1>
        <button
          onClick={handleIncreaseCounter}
          className={s.btn}
          disabled={counter >= stock}
        >
          <FaPlus className={s.icon} />
        </button>
      </div>
    </div>
  );
};
