import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';

interface IResetPassword {
  password: string;
  token: string;
}
const resetPassword = async (password: string, token: string): Promise<AxiosResponse<void, IResetPassword>> =>
  postData<void, IResetPassword>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/password/reset`, {
    password,
    token,
  });

export default resetPassword;
