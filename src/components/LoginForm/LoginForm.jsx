/* eslint-disable react/no-unescaped-entities */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import SvgLine from '../../../public/long-line';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import loginImage from '../../../public/imgModalLogin.png';
import * as Yup from 'yup';

const LoginForm = ({ handleSubmit, handleForgotPasswordClick }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const orderError = Yup.object().shape({
    email: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
    password: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderError}
    >
      <Form className={s.form}>
        <div className={s.formfull}>
          <h2>Welcome back!</h2>
          <h3>Enter your account details</h3>
          <button className={s.btngoogle} type="button" onClick={() => {}}>
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
              Keep me signed in
            </label>
            <p>
              <Link onClick={handleForgotPasswordClick}>Forgot password</Link>
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
        </div>
        <div className={s.img}>
          <img src={loginImage} alt="Login illustration" />
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
