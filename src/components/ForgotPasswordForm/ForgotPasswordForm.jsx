import { Formik } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';
import s from './ForgotPasswordForm.module.css';

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Reset password values:', values);
    resetForm();
    onBackToLogin();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div>
            <h2 className={s.title}>Forgot password?</h2>
            <p className={s.paragraf}>
              No worries, we will send you reset instructions
            </p>
          </div>
          <label className={s.label}>
            <span>Email</span>
            <Field name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="p" className={s.error} />
          </label>
          <button className={s.btn} type="submit">
            Send Reset Link
          </button>
          <p>
            <a onClick={onBackToLogin} href="#!">
              Back to Log-in
            </a>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
