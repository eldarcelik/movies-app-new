import postData from '@/helpers/postData';
import { IUser } from '@/types/types';

const registerUser = async (user: IUser): Promise<IUser> =>
  postData(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/users`, user);

export default registerUser;
