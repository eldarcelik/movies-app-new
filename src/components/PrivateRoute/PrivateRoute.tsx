import React from 'react';

import { Navigate } from 'react-router-dom';

import useAuth from '@/hooks';

import { IPrivateRoute } from './types';

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const {
    loginState: { accessToken, expires },
  } = useAuth();

  if (!accessToken || !expires || Date.now() > expires) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
