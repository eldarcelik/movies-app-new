import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import login from '@/apis/login';
import { ERROR_CODES, MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { loginSchema } from '@/helpers';
import useLogin from '@/hooks';

import { ILoginInfo } from './types';

export default function Login() {
  const { handleLoginResponse } = useLogin();
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({});

  return (
    <div className='account-container'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
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
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <fieldset>
              <h2>Login</h2>
              <div className='field'>
                <label htmlFor='email'>
                  Email <sup>*</sup>
                </label>
                <Field
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                  className={errors.email ? 'border-danger' : ''}
                />
                <ErrorMessage name='email' component='p' className='text-danger' />
              </div>
              <div className='field'>
                <label htmlFor='password'>
                  Password <sup>*</sup>
                </label>
                <Field
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className={errors.password ? 'border-danger' : ''}
                />
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
