import { IItem } from '@/types';

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

export interface IItemsResponse {
  results: IItem[];
}
