import { useState } from 'react';

import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.FAQ}>
      <h2 className={styles.FAQTitle}>FAQ</h2>
      <ul className={styles.FAQList}>
        <li className={styles.FAQItem} onClick={toggleFAQ}>
          <h3 className={styles.FAQItemTitle}>{question}</h3>
          {isOpen ? (
            <>
              <svg className={styles.FAQIcon}>
                <use href="./public/icons.svg#icon-minus"></use>
              </svg>
              <p className={styles.FAQItemText}>{answer}</p>
            </>
          ) : (
            <svg className={styles.FAQIcon}>
              <use href="./public/icons.svg#icon-plus"></use>
            </svg>
          )}
        </li>
        <li className={styles.FAQItem}>
          <h3 className={styles.FAQItemTitle}>
            What types of flowers can I order on your website?
          </h3>
          <p className={styles.FAQItemText}>
            On our website, you can order a variety of flowers, including roses,
            tulips, orchids, lilies, chrysanthemums, and more. We offer both
            classic bouquets and exclusive arrangements to suit any taste.
          </p>
          <svg className={styles.FAQIcon}>
            <use href="../../../public/icons.svg#icon-plus"></use>
          </svg>
        </li>
        <li className={styles.FAQItem}>
          <h3 className={styles.FAQItemTitle}>
            What types of flowers can I order on your website?
          </h3>
          <p className={styles.FAQItemText}>
            On our website, you can order a variety of flowers, including roses,
            tulips, orchids, lilies, chrysanthemums, and more. We offer both
            classic bouquets and exclusive arrangements to suit any taste.
          </p>
          <svg className={styles.FAQIcon}>
            <use href="./../public/icons.svg#icon-plus"></use>
          </svg>
        </li>
      </ul>
    </section>
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
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.indexndex}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQ;
