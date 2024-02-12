import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import registerUser from '@/apis/registerUser';
import { ERROR_CODES, STATUS_CODES } from '@/constants/constantValues';
import { registrationSchema } from '@/helpers/validators';
import { IRegistrationResponse, IUser } from '@/types/types';

import './Registration.css';

export default function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });
  const [serverResponse, setServerResponse] = useState<IRegistrationResponse>({ code: STATUS_CODES.OK, message: '' });

  const onSubmit = handleSubmit((user: IUser) => {
    registerUser(user)
      .then((res) => {
        if (res) {
          setServerResponse({ code: STATUS_CODES.OK, message: 'User is created successfully, please login.' });
          reset();
        }
      })
      .catch((err) => {
        if (err.errors[0].extensions.code === ERROR_CODES.RECORD_NOT_UNIQUE) {
          setServerResponse({ code: STATUS_CODES.BAD_REQUEST, message: 'User with that email already exists.' });
        }
      });
  });

  return (
    <div className='registration-container'>
      <form onSubmit={onSubmit}>
        <fieldset>
          <h2>Registration</h2>

          <div className='field'>
            <label htmlFor='first_name'>First Name</label>
            <input
              id='first_name'
              {...register('first_name')}
              className={errors.first_name ? 'border-danger' : ''}
              placeholder='First name'
            ></input>
          </div>

          <div className='field'>
            <label htmlFor='last_name'>Last Name</label>
            <input
              id='last_name'
              {...register('last_name')}
              className={errors.last_name ? 'border-danger' : ''}
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
            <label htmlFor='confirm_password'>
              Confirm Password <sup>*</sup>
            </label>
            <input
              id='confirm_password'
              type='password'
              {...register('confirm_password')}
              className={errors.confirm_password ? 'border-danger' : ''}
              placeholder='Confirm Password'
              autoComplete='false'
            ></input>
            <p className='text-danger'>{errors.confirm_password?.message}</p>
          </div>

          <button>Create account</button>
        </fieldset>
      </form>

      {serverResponse.message ? (
        <div className={serverResponse.code === STATUS_CODES.OK ? 'text-success' : 'text-danger'}>
          {serverResponse.message}
        </div>
      ) : null}
    </div>
  );
}
