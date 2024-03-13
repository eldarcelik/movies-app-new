import React from 'react';

import useAuth from '@/hooks';

import type { IPrivateRoute } from './types';
import Unauthorized from '../Unauthorized';

const PrivateRoute = ({ children }: IPrivateRoute): JSX.Element => {
  const {
    loginState: { accessToken, expires },
  } = useAuth();

  if (!accessToken || !expires || Date.now() > expires) {
    return <Unauthorized></Unauthorized>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
