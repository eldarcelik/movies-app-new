import React from 'react';

import { MoviesShowsContext } from 'context/Context';
import { ContextProps } from 'types/types';

export const MockedContextProvider = ({ children, value }: ContextProps) => {
  return <MoviesShowsContext.Provider value={value}>{children}</MoviesShowsContext.Provider>;
};
