/* eslint-disable react/no-unescaped-entities */
import { ErrorMessage, Field, Formik, Form } from 'formik';
import s from './ModalLoogin.module.css';
import * as Yup from 'yup';
import Modal from 'react-modal';
import { FcGoogle } from 'react-icons/fc';

import loginImage from '../../../public/imgModalLogin.png';
import { Link } from 'react-router-dom';
import SvgLine from '../../../public/long-line';

Modal.setAppElement('#root');

const ModalLogin = ({ isOpen, closeModal }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    resetForm();
    closeModal();
  };

  const orderError = Yup.object().shape({
    email: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
    password: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      pe
      className={s.modal}
      overlayClassName={s.modalOverlay}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderError}
      >
        <Form className={s.form}>
          <h2>Welcome back!</h2>
          <h3>Enter your account details</h3>
          <button className={s.btngoogle} type="submit">
            <FcGoogle className={s.svg} />
            Continue with Google
          </button>
          <span className={s.or}>
            <SvgLine className={s.line} /> or
            <SvgLine className={s.line} />
          </span>
          <label className={s.label}>
            <span>Email</span>
            <Field name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="p" className={s.error} />
          </label>
          <div className={s.check}>
            <label>
              <Field type="checkbox" name="agree" className={s.input} />
              Keep me signet in
            </label>
            <p>
              <Link>Forgot password</Link>
            </p>
          </div>

          <button className={s.btn} type="submit">
            Sign in
          </button>
          <div className={s.wraperNewAcc}>
            <p className={s.newacc}>Don't have an account?</p>
            <p className={s.linkNewacc}>
              <Link>Create an account</Link>
            </p>
          </div>
        </Form>
      </Formik>
      <div className={s.img}>
        <img src={loginImage} alt="Login illustration" />
      </div>
    </Modal>
  );
};

export default ModalLogin;
