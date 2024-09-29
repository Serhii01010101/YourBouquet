// src/components/ModalLogin.js
import s from './ModalLogin.module.css';

import Modal from 'react-modal';

import LoginForm from '../LoginForm/LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm'; // Добавьте новый компонент для формы восстановления пароля
import { useState } from 'react';
Modal.setAppElement('#root');

const ModalLogin = ({ isOpen, closeModal }) => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    resetForm();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.modalOverlay}
    >
      {!isForgotPassword ? (
        <LoginForm
          handleSubmit={handleSubmit}
          handleForgotPasswordClick={handleForgotPasswordClick}
        />
      ) : (
        <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
      )}
    </Modal>
  );
};

export default ModalLogin;
