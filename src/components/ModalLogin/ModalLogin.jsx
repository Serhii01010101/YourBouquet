import { ErrorMessage, Field, Formik, Form } from 'formik';
import s from './ModalLoogin.module.css';
import * as Yup from 'yup';

import loginImage from '../../../public/imgModalLogin.png';
import { Link } from 'react-router-dom';

const ModalLogin = ({ closeModal }) => {
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
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={orderError}
        >
          <Form className={s.form}>
            <h2>Welcome back!</h2>
            <h3>Enter your account details</h3>
            <button type="submit">Continue with Google</button>
            <span>----------- or ----------</span>
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
            <div>
              <label>
                <Field type="checkbox" name="agree" className={s.input} />
                Keep me signet in
              </label>
              <Link>Forgot password</Link>
            </div>

            <button type="submit">Sign in</button>
            <p>
              Don't have an account?
              <span>
                <Link>Create an account</Link>
              </span>
            </p>
          </Form>
        </Formik>
        <div className={s.img}>
          <img src={loginImage} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
