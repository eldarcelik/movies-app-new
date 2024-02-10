import { DIRECTUS_BASE_URL } from '@/constants/constantValues';
import postData from '@/helpers/postData';
import { User } from '@/types/types';

const registerUser = async (user: User) => postData(`${DIRECTUS_BASE_URL}/users`, user);

export default registerUser;
