import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import requestResetPassword from '@/apis/requestResetPassword';
import { MESSAGES, STATUS_CODES } from '@/constants/constantValues';
import { emailValidationPattern } from '@/helpers/validators';

import type { IAccountInfo } from '../types';

export default function RequestResetPassword(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [emailValidationMessage, setEmailValidationMessage] = useState<string>('');
  const [resetPasswordInfo, setResetPasswordInfo] = useState<IAccountInfo>({
    code: STATUS_CODES.OK,
    message: '',
  });

  const handleEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmailValidationMessage('');
    setEmail(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailValidationMessage(MESSAGES.EMAIL_REQUIRED);

      return false;
    }

    if (!emailValidationPattern.test(email)) {
      setEmailValidationMessage(MESSAGES.EMAIL_MUST_BE_VALID);

      return false;
    }

    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!validateEmail(email)) return;

    requestResetPassword(email)
      .then(() =>
        setResetPasswordInfo({
          code: STATUS_CODES.OK,
          message: MESSAGES.REQUEST_RESET_EMAIL_MESSAGE,
        }),
      )
      .catch(() =>
        setResetPasswordInfo({
          code: STATUS_CODES.BAD_REQUEST,
          message: MESSAGES.GENERAL_ERROR_MESSAGE,
        }),
      );
  };

  return (
    <div className='account-container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Reset Password</h2>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmail}
              placeholder='Enter you email address'
              className={emailValidationMessage ? 'border-danger' : ''}
            ></input>
            {emailValidationMessage ? <p className='text-danger'>{emailValidationMessage}</p> : null}
          </div>
          <button type='submit'>Reset password</button>
        </fieldset>
      </form>
      <div>
        <Link to='/login'>Back to login.</Link>
      </div>
      {resetPasswordInfo.message ? (
        <div className={resetPasswordInfo.code === STATUS_CODES.OK ? 'text-success' : 'text-danger'}>
          {resetPasswordInfo.message}
        </div>
      ) : null}
    </div>
  );
}
