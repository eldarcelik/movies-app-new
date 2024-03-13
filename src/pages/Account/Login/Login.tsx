import React, { useState } from 'react';

import { Formik, Form, Field, FastField, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import login from '@/apis/login';
import { ERROR_CODES, MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { loginSchema } from '@/helpers';
import useLogin from '@/hooks';

import { ILoginInfo } from './types';
import { IUser } from '../types';

export default function Login(): JSX.Element {
  const { handleLoginResponse } = useLogin();
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (user: IUser, setSubmitting: { (isSubmitting: boolean): void }): void => {
    login(user)
      .then(({ data }) => {
        handleLoginResponse(data);
      })
      .catch(({ errors }) => {
        if (errors[0].extensions.code === ERROR_CODES.INVALID_CREDENTIALS) {
          setLoginInfo({ code: STATUS_CODES.UNAUTHORIZED, message: MESSAGES.INVALID_CREDENTIALS });
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleSubmit = (values: IUser, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }): void => {
    handleLogin(values, setSubmitting);
  };

  return (
    <div className='account-container'>
      <Formik initialValues={{ email: '', password: '' }} validationSchema={loginSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, errors }) => (
          <Form>
            <fieldset>
              <h2>Login</h2>
              <div className='field'>
                <label htmlFor='email'>
                  Email <sup>*</sup>
                </label>
                <FastField
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                  className={errors.email ? 'border-danger' : ''}
                />
                <ErrorMessage name='email' component='p' className='text-danger' />
              </div>
              <div className='field password-wrapper'>
                <label htmlFor='password'>
                  Password <sup>*</sup>
                </label>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Password'
                  className={errors.password ? 'border-danger' : ''}
                />
                <i
                  className={showPassword ? 'fa fa-solid fa-eye' : 'fa fa-solid fa-eye-slash'}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                ></i>
                <ErrorMessage name='password' component='p' className='text-danger' />
              </div>
              <button type='submit' disabled={isSubmitting}>
                Login
              </button>
            </fieldset>
          </Form>
        )}
      </Formik>
      <div>
        Do not have account? <Link to='/registration'>Register here.</Link>
      </div>
      {loginInfo.message ? <div className='text-danger'>{loginInfo.message}</div> : null}
    </div>
  );
}
