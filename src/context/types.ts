import type { IMovie, IShow } from '@/pages/Home/types';

export type Context = {
  children: React.ReactNode;
};

export interface IAppContext {
  movies: IMovie[];
  shows: IShow[];
  activeQueryType: string;
  loading: boolean;
  contentType: string;
  search: string;
}

export type ReducerAction =
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_CONTENT_TYPE' | 'SET_ACTIVE_QUERY_TYPE' | 'SET_SEARCH'; [key: string]: string }
  | { type: 'SET_SHOWS'; shows: IShow[] }
  | { type: 'SET_MOVIES'; movies: IMovie[] };
