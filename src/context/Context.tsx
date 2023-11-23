import React, { useState, useEffect, createContext } from 'react';

import { getItems } from '@/apis/getItems';
import {
  NUMBER_OF_ITEMS,
  CONTENT_TYPE,
  DEFAULT_SEARCH_VALUE,
  DELAY,
  MIN_SEARCH_CHARACTERS,
  QUERY_TYPE,
} from '@/constants/constantValues';
import { ContextProps, AppContextInterface, AppContextActionsInterface, IShow, IMovie } from '@/types/types';

const MoviesShowsContext = createContext({} as AppContextInterface);
const MoviesShowsActionsContext = createContext({} as AppContextActionsInterface);
let timer: ReturnType<typeof setTimeout> | null = null;

function MoviesShowsProvider({ children }: ContextProps) {
  const [shows, setShows] = useState<IShow[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [activeQueryType, setActiveQueryType] = useState<string>(QUERY_TYPE.TOP_RATED);
  const [loading, setLoading] = useState<boolean>(true);
  const [contentType, setContentType] = useState<string>(CONTENT_TYPE.TV_SHOW);
  const [search, setSearch] = useState<string>(DEFAULT_SEARCH_VALUE);

  useEffect(() => {
    const queryType = search.length >= MIN_SEARCH_CHARACTERS ? QUERY_TYPE.SEARCH : QUERY_TYPE.TOP_RATED;
    setActiveQueryType(queryType);

    // Prevent calling api in time scope of 1s
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // The search is performed only when there are 3 or more characters in the search bar
    // It should be triggered only one second after the user has stopped typing
    if (queryType === QUERY_TYPE.SEARCH) {
      timer = setTimeout(() => getItemsDataAndClearTimer(queryType), DELAY);
    } // Prevent getting top 10 items multiple times if there are 2 or less characters in the search bar
    else if (queryType !== activeQueryType) {
      getItemsData(queryType);
    }
  }, [search, activeQueryType]);

  // Triggered on switching between tabs
  useEffect(() => {
    getItemsData(activeQueryType);
  }, [contentType]);

  const getItemsData = (queryType: string) =>
    getItems(queryType, contentType, search)
      .then(({ results }) => {
        const items = queryType === QUERY_TYPE.TOP_RATED ? results.slice(0, NUMBER_OF_ITEMS) : results;

        if (contentType === CONTENT_TYPE.TV_SHOW) {
          setShows(items);
        } else {
          setMovies(items);
        }
      })
      .catch(() => {
        // TODO: Handle errors
      })
      .finally(() => {
        setLoading(false);
      });

  const getItemsDataAndClearTimer = (queryType: string) => {
    getItemsData(queryType).then(() => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    });
  };

  const contextValue = {
    movies,
    shows,
    activeQueryType,
    loading,
    contentType,
    search,
  };

  const actionsContextValue = {
    setMovies,
    setShows,
    setActiveQueryType,
    setLoading,
    setContentType,
    setSearch,
  };

  return (
    <MoviesShowsContext.Provider value={contextValue}>
      <MoviesShowsActionsContext.Provider value={actionsContextValue}>{children}</MoviesShowsActionsContext.Provider>
    </MoviesShowsContext.Provider>
  );
}

export { MoviesShowsContext, MoviesShowsActionsContext, MoviesShowsProvider };
