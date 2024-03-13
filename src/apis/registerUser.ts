import type { AxiosResponse } from 'axios';

import { postData } from '@/helpers';
import { IUser } from '@/pages/Account/types';

const registerUser = async (user: IUser): Promise<AxiosResponse<IUser, IUser>> =>
  postData<IUser, IUser>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/users`, user);

export default registerUser;
