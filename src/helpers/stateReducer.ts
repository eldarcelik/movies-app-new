import { IApp, ReducerAction } from '@/types/types';

const stateReducer = (state: IApp, action: ReducerAction): IApp => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_CONTENT_TYPE':
      return { ...state, contentType: action.contentType };
    case 'SET_ACTIVE_QUERY_TYPE':
      return { ...state, activeQueryType: action.activeQueryType };
    case 'SET_SEARCH':
      return { ...state, search: action.search };
    case 'SET_SHOWS':
      return { ...state, shows: action.shows };
    case 'SET_MOVIES':
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};

export default stateReducer;
