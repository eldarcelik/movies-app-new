import { postData } from '@/helpers';

interface ILogout {
  refreshToken: string;
}

const logout = async (): Promise<void> => {
  const refreshToken = sessionStorage.getItem('refreshToken');

  return postData<ILogout, void>(`${process.env.REACT_APP_MOVIES_API_DIRECTUS_URL}/auth/logout`, {
    refreshToken: refreshToken ? refreshToken : '',
  });
};

export default logout;
