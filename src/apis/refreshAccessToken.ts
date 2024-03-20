import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';
import { ILoginResponse } from '@/pages/Account/Login/types';
import { ILogout } from '@/pages/Account/types';

const refreshAccessToken = async (): Promise<AxiosResponse<ILoginResponse, ILogout>> => {
  const refreshToken = sessionStorage.getItem('refreshToken');

  return postData<ILoginResponse, ILogout>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/refresh`, {
    refreshToken: refreshToken || '',
  });
};

export default refreshAccessToken;
