import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';

interface IRequestResetPassword {
  email: string;
  resetUrl?: string;
}
const requestResetPassword = async (email: string): Promise<AxiosResponse<void, IRequestResetPassword>> =>
  postData<void, IRequestResetPassword>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/password/request`, {
    email,
    resetUrl: process.env.REACT_APP_MOVIES_API_RESET_PASSWORD_URL,
  });

export default requestResetPassword;
