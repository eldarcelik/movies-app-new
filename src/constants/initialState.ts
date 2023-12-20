import { IApp, IAppItem } from '@/types/types';

import { CONTENT_TYPE, DEFAULT_SEARCH_VALUE, QUERY_TYPE } from './constantValues';

export const initialState: IApp = {
  shows: [],
  movies: [],
  activeQueryType: QUERY_TYPE.TOP_RATED,
  loading: true,
  contentType: CONTENT_TYPE.TV_SHOW,
  search: DEFAULT_SEARCH_VALUE,
};

export const itemInitialState: IAppItem = {
  item: {
    id: 0,
    voteAverage: 0,
    title: '',
    name: '',
    releaseDate: '',
    firstAirDate: '',
    lastAirDate: '',
    overview: '',
    posterPath: '',
    videos: {
      results: [],
    },
  },
  loading: true,
};
