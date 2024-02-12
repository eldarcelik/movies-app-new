import { DIRECTUS_BASE_URL } from '@/constants/constantValues';
import postData from '@/helpers/postData';
import { IUser } from '@/types/types';

const registerUser = async (user: IUser): Promise<IUser> => postData(`${DIRECTUS_BASE_URL}/users`, user);

export default registerUser;
