import { API_KEY, QUERY_TYPE } from '@/constants/constantValues';

export const getItems = (queryType: string, contentType: string, search: string) => {
  const QUERY_TYPE_INFO = {
    [QUERY_TYPE.TOP_RATED]: `https://api.themoviedb.org/3/${contentType}/top_rated?api_key=${API_KEY}&language=en-US`,
    [QUERY_TYPE.SEARCH]: `https://api.themoviedb.org/3/search/${contentType}?api_key=${API_KEY}&language=en-US&query=${search}`,
  };

  return fetch(QUERY_TYPE_INFO[queryType]).then((response) => {
    if (response.status === 200) return response.json();
    else throw new Error('Invalid response');
  });
};
