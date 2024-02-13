import { IMovie, IShow } from '@/types/shared';

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
