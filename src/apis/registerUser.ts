import { postData } from '@/helpers';
import { IUser } from '@/pages/Account/types';

const registerUser = async (user: IUser): Promise<IUser> =>
  postData<IUser, IUser>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/users`, user);

export default registerUser;
