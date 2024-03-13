// import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import logout from '@/apis/logout';
import { ILogin } from '@/pages/Account/Login/types';

const useAuth = () => {
  const navigate = useNavigate();

  const handleLoginResponse = (response: ILogin) => {
    const { accessToken, expires, refreshToken } = response;
    const newLoginState = { accessToken, expires: Date.now() + expires, refreshToken };

    sessionStorage.setItem('accessToken', newLoginState.accessToken);
    sessionStorage.setItem('expires', newLoginState.expires.toString());
    sessionStorage.setItem('refreshToken', newLoginState.refreshToken);
  };

  const handleLogout = async () => {
    await logout();

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('expires');
    sessionStorage.removeItem('refreshToken');

    navigate('/login');
  };

  return {
    handleLoginResponse,
    handleLogout,
  };
};

export default useAuth;
