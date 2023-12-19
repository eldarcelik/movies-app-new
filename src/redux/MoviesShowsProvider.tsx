import React, { useEffect } from 'react';

import { DELAY, MIN_SEARCH_CHARACTERS, QUERY_TYPE } from '@/constants/constantValues';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { fetchItems, setActiveQueryType } from '@/redux/rootSlice';
import { IProvider } from '@/types/types';

let timer: ReturnType<typeof setTimeout> | null = null;

function MoviesShowsProvider({ children }: IProvider) {
  const dispatch = useAppDispatch();
  const { search, contentType, activeQueryType } = useAppSelector((state) => state.root);

  useEffect(() => {
    const queryType = search.length >= MIN_SEARCH_CHARACTERS ? QUERY_TYPE.SEARCH : QUERY_TYPE.TOP_RATED;
    dispatch(setActiveQueryType(queryType));

    // Prevent calling api in time scope of 1s
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // The search is performed only when there are 3 or more characters in the search bar
    // It should be triggered only one second after the user has stopped typing
    if (queryType === QUERY_TYPE.SEARCH) {
      timer = setTimeout(() => {
        dispatch(fetchItems());
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }, DELAY);
    } // Prevent getting top 10 items multiple times if there are 2 or less characters in the search bar
    else if (queryType !== activeQueryType) {
      dispatch(fetchItems());
    }
  }, [search, activeQueryType]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [contentType]);

  return <>{children}</>;
}

export default MoviesShowsProvider;
