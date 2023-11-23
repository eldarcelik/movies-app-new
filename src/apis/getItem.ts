import { API_KEY } from '@/constants/constantValues';

export const getItem = (contentType: string, id: string) => {
  const ITEM_URL = `https://api.themoviedb.org/3/${contentType}/${id}?api_key=${API_KEY}&append_to_response=videos`;

  return fetch(ITEM_URL).then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error('Invalid response');
  });
};
