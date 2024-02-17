import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import registerUser from '@/apis/registerUser';
import { ERROR_CODES, MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { registrationSchema } from '@/helpers';

import { IRegistrationResponse } from './types';
import '../Account.css';
import { IUser } from '../types';

export default function Registration() {
  const {
    register,
    handleSubmit: handleSubmitHookForm,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });
  const [registrationResponse, setRegistrationResponse] = useState<IRegistrationResponse>({
    code: STATUS_CODES.OK,
    message: '',
  });

  const handleSubmit = handleSubmitHookForm((user: IUser) => {
    registerUser(user)
      .then((res) => {
        if (res) {
          setRegistrationResponse({ code: STATUS_CODES.OK, message: MESSAGES.USER_CREATED });
          reset();
        }
      })
      .catch((err) => {
        if (err.errors[0].extensions.code === ERROR_CODES.RECORD_NOT_UNIQUE) {
          setRegistrationResponse({ code: STATUS_CODES.BAD_REQUEST, message: MESSAGES.USER_ALREADY_EXISTS });
        }
      });
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

          <div className='field'>
            <label htmlFor='password'>
              Password <sup>*</sup>
            </label>
            <input
              id='password'
              type='password'
              {...register('password')}
              className={errors.password ? 'border-danger' : ''}
              placeholder='Password'
            ></input>
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

          <button>Create account</button>
        </fieldset>
      </form>

      {registrationResponse.message ? (
        <div className={registrationResponse.code === STATUS_CODES.OK ? 'text-success' : 'text-danger'}>
          {registrationResponse.message}
        </div>
      ) : null}
    </div>
  );
}
