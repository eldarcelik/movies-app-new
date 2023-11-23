export type ContextProps = {
  children: React.ReactNode;
};

export type VoteProps = {
  voteValue: number;
};

export type ItemCardProps = {
  item: ItemType;
  key: number;
};

export interface IData {
  id: number;
  overview: string;
  vote_average: number;
  poster_path: string | null;
}

export interface IShow extends IData {
  name: string;
  first_air_date: string;
  last_air_date: string;
}

interface IVideos {
  results: Array<object>;
}

export interface IMovie extends IData {
  title: string;
  videos: IVideos;
  release_date: string;
}

export type AppContextInterface = {
  movies: IMovie[];
  shows: IShow[];
  activeQueryType: string;
  loading: boolean;
  contentType: string;
  search: string;
};

export type AppContextActionsInterface = {
  setMovies: (value: IMovie[]) => void;
  setShows: (value: IShow[]) => void;
  setLoading: (value: boolean) => void;
  setContentType: (value: string) => void;
  setSearch: (value: string) => void;
};

export type NavbarState = {
  moviesActive: boolean;
  showsActive: boolean;
};

export type ItemType = IMovie & IShow;
