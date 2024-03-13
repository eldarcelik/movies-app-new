import React from 'react';

import Unauthorized from '@/pages/Unauthorized';

import { IPrivateRoute } from './types';

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const accessToken = sessionStorage.getItem('accessToken');

  if (!accessToken) {
    return <Unauthorized></Unauthorized>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
