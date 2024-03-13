import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';
import { ILoginResponse } from '@/pages/Account/Login/types';
import { IUser } from '@/pages/Account/types';

const login = async (user: IUser): Promise<AxiosResponse<ILoginResponse, IUser>> =>
  postData<ILoginResponse, IUser>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/login`, user);

export default login;
