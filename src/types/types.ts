import { CONTENT_TYPE, QUERY_TYPE } from '@/constants/constantValues';

export interface IProvider {
  children: React.ReactNode;
}

export interface IApp {
  movies: IMovie[];
  shows: IShow[];
  activeQueryType: string;
  loading: boolean;
  contentType: string;
  search: string;
}

export interface IAppItem {
  item: IItem;
  loading: boolean;
}

export interface IData {
  id: number;
  overview: string;
  voteAverage: number;
  posterPath: string | null;
}

export interface IShow extends IData {
  name: string;
  firstAirDate: string;
  lastAirDate: string;
}

interface IVideos {
  results: Array<{ key: string }>;
}

export interface IMovie extends IData {
  title: string;
  videos: IVideos;
  releaseDate: string;
}

export type ReducerAction =
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_CONTENT_TYPE' | 'SET_ACTIVE_QUERY_TYPE' | 'SET_SEARCH'; [key: string]: string }
  | { type: 'SET_SHOWS'; shows: IShow[] }
  | { type: 'SET_MOVIES'; movies: IMovie[] };

export interface IItem extends IMovie, IShow {}

export interface IItems {
  results: IItem[];
}

type ValueOf<T> = T[keyof T];

export type ContentType = ValueOf<typeof CONTENT_TYPE>;

export type QueryType = ValueOf<typeof QUERY_TYPE>;
