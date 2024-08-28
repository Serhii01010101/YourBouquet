import { useState } from 'react';

import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.FAQItem} onClick={toggleFAQ}>
      <h3 className={styles.FAQItemTitle}>{question}</h3>
      {isOpen ? (
        <>
          <svg className={styles.FAQIcon}>
            <use href="/public/icons.svg#icon-minus"></use>
          </svg>
          <p className={styles.FAQItemText}>{answer}</p>
        </>
      ) : (
        <svg className={styles.FAQIcon}>
          <use href="./public/icons.svg#icon-plus"></use>
        </svg>
      )}
    </li>
  );
};

const FAQ = () => {
  const faqs = [
    {
      index: 1,
      question: 'What types of flowers can I order on your website?',
      answer:
        'On our website, you can order a variety of flowers, including roses, tulips, orchids, lilies, chrysanthemums, and more. We offer both classic bouquets and exclusive arrangements to suit any taste.',
    },
    {
      index: 2,
      question: 'What types of flowers can I order on your website?',
      answer:
        'On our website, you can order a variety of flowers, including roses, tulips, orchids, lilies, chrysanthemums, and more. We offer both classic bouquets and exclusive arrangements to suit any taste.',
    },
    {
      index: 3,
      question: 'What types of flowers can I order on your website?',
      answer:
        'On our website, you can order a variety of flowers, including roses, tulips, orchids, lilies, chrysanthemums, and more. We offer both classic bouquets and exclusive arrangements to suit any taste.',
    },
  ];

  return (
    <section className={styles.FAQ}>
      <div className={styles.FAQContainer}>
        <h2 className={styles.FAQTitle}>FAQ</h2>
        <ul className={styles.FAQList}>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.indexndex}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
