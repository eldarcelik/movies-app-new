import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import registerUser from '@/apis/registerUser';
import { DELAY, ERROR_CODES, MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { registrationSchema } from '@/helpers';

import { IRegistrationInfo } from './types';
import '../Account.css';
import { IUser } from '../types';

export default function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: handleSubmitHookForm,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(registrationSchema) });
  const [registrationInfo, setRegistrationInfo] = useState<IRegistrationInfo>({
    code: STATUS_CODES.OK,
    message: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = handleSubmitHookForm((user: IUser) => {
    registerUser(user)
      .then((response) => {
        if (response.status == STATUS_CODES.OK) {
          setRegistrationInfo({ code: STATUS_CODES.OK, message: MESSAGES.USER_CREATED });
          reset();
          setTimeout(() => {
            navigate('/login');
          }, DELAY);
        }
      })
      .catch(
        ({
          error: {
            response: {
              data: { errors },
            },
          },
        }) => {
          if (errors[0].extensions.code === ERROR_CODES.RECORD_NOT_UNIQUE) {
            setRegistrationInfo({ code: STATUS_CODES.BAD_REQUEST, message: MESSAGES.USER_ALREADY_EXISTS });
          }
        },
      );
  });

  return (
    <div className='account-container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Registration</h2>

          <div className='field'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              {...register('firstName')}
              className={errors.firstName ? 'border-danger' : ''}
              placeholder='First name'
            ></input>
          </div>

          <div className='field'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              {...register('lastName')}
              className={errors.lastName ? 'border-danger' : ''}
              placeholder='Last name'
            ></input>
          </div>

          <div className='field'>
            <label htmlFor='email'>
              Email <sup>*</sup>
            </label>
            <input
              id='email'
              type='email'
              {...register('email')}
              className={errors.email ? 'border-danger' : ''}
              placeholder='Email address'
            ></input>
            <p className='text-danger'>{errors.email?.message}</p>
          </div>

          <div className='field password-wrapper'>
            <label htmlFor='password'>
              Password <sup>*</sup>
            </label>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className={errors.password ? 'border-danger' : ''}
              placeholder='Password'
            ></input>
            <i
              className={showPassword ? 'fa fa-solid fa-eye' : 'fa fa-solid fa-eye-slash'}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            ></i>
            <p className='text-danger'>{errors.password?.message}</p>
          </div>

          <div className='field'>
            <label htmlFor='confirmPassword'>
              Confirm Password <sup>*</sup>
            </label>
            <input
              id='confirmPassword'
              type='password'
              {...register('confirmPassword')}
              className={errors.confirmPassword ? 'border-danger' : ''}
              placeholder='Confirm Password'
              autoComplete='false'
            ></input>
            <p className='text-danger'>{errors.confirmPassword?.message}</p>
          </div>

          <button type='submit' disabled={isSubmitting}>
            Create account
          </button>
        </fieldset>
      </form>

      <div>
        Already have account? <Link to='/login'>Login here.</Link>
      </div>
      {registrationInfo.message ? (
        <div className={registrationInfo.code === STATUS_CODES.OK ? 'text-success' : 'text-danger'}>
          {registrationInfo.message}
        </div>
      ) : null}
    </div>
  );
}
