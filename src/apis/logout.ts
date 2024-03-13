import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';
import { ILogout } from '@/pages/Account/types';

const logout = async (): Promise<AxiosResponse<void, ILogout>> => {
  const refreshToken = sessionStorage.getItem('refreshToken');

  return postData<void, ILogout>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/logout`, {
    refreshToken: refreshToken || '',
  });
};

export default logout;
