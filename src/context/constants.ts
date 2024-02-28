import { CONTENT_TYPE, DEFAULT_SEARCH_VALUE, QUERY_TYPE } from '@/constants/constantValues';
import { IAppContext } from '@/context/types';

const initialState: IAppContext = {
  shows: [],
  movies: [],
  activeQueryType: QUERY_TYPE.TOP_RATED,
  loading: true,
  contentType: CONTENT_TYPE.TV_SHOW,
  search: DEFAULT_SEARCH_VALUE,
};

export default initialState;
