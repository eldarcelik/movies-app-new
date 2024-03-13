import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';
import type { ILoginResponse } from '@/pages/Account/Login/types';
import type { IUser } from '@/pages/Account/types';

const login = async (user: IUser): Promise<AxiosResponse<ILoginResponse, IUser>> =>
  postData<ILoginResponse, IUser>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/login`, user);

export default login;
