import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getItems from '@/apis/getItems';
import { CONTENT_TYPE, NUMBER_OF_ITEMS, QUERY_TYPE } from '@/constants/constantValues';
import { initialState } from '@/constants/initialState';
import { ContentType, IItem, IMovie, IShow, QueryType } from '@/types/types';

import { RootState } from './store';

export const rootSlice = createSlice({
  name: 'root',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setContentType: (state, action: PayloadAction<ContentType>) => {
      state.contentType = action.payload;
    },
    setActiveQueryType: (state, action: PayloadAction<QueryType>) => {
      state.activeQueryType = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setShows: (state, action: PayloadAction<IShow[]>) => {
      state.shows = action.payload;
    },
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<IItem[]>) => {
        if (state.contentType === CONTENT_TYPE.TV_SHOW) {
          state.shows = action.payload;
        } else {
          state.movies = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLoading, setContentType, setActiveQueryType, setSearch, setShows, setMovies } = rootSlice.actions;

export const selectLoading = (state: RootState) => state.root.loading;
export const selectContentType = (state: RootState) => state.root.contentType;
export const selectActiveQueryType = (state: RootState) => state.root.activeQueryType;
export const selectSearch = (state: RootState) => state.root.search;
export const selectShows = (state: RootState) => state.root.shows;
export const selectMovies = (state: RootState) => state.root.movies;

export const fetchItems = createAsyncThunk('root/fetchItems', async (_, { getState }) => {
  const state: RootState = getState() as RootState;
  const { activeQueryType, contentType, search } = state.root;
  const response = await getItems(activeQueryType as QueryType, contentType as ContentType, search);

  const items =
    activeQueryType === QUERY_TYPE.TOP_RATED ? response.results.slice(0, NUMBER_OF_ITEMS) : response.results;

  return items;
});

export default rootSlice.reducer;
