import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ILogin, ILoginState } from '@/pages/Account/Login/types';

const useAuth = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<ILoginState>(() => {
    const accessToken = sessionStorage.getItem('accessToken') || null;
    const refreshToken = sessionStorage.getItem('refreshToken') || null;
    const expires = parseInt(sessionStorage.getItem('expires') || '0', 10) || null;

    return { accessToken, expires, refreshToken };
  });

  const handleLoginResponse = (response: ILogin) => {
    const { accessToken, expires, refreshToken } = response;
    const newLoginState = { accessToken, expires: Date.now() + expires, refreshToken };

    sessionStorage.setItem('accessToken', newLoginState.accessToken);
    sessionStorage.setItem('expires', newLoginState.expires.toString());
    sessionStorage.setItem('refreshToken', newLoginState.refreshToken);

    setLoginState(newLoginState);
    navigate('/');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('expires');
    sessionStorage.removeItem('refreshToken');

    setLoginState({ accessToken: null, expires: null, refreshToken: null });
    navigate('/login');
  };

  return {
    loginState,
    handleLoginResponse,
    handleLogout,
  };
};

export default useAuth;
