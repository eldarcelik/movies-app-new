import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getItem from '@/apis/getItem';
import { itemInitialState } from '@/constants/initialState';
import { ContentType, IItem } from '@/types/types';

import { RootState } from './store';

type FetchItemArgs = {
  contentType: ContentType;
  id: string;
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: itemInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItem.fulfilled, (state, action: PayloadAction<IItem>) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectItem = (state: RootState) => state.item.item;
export const selectLoading = (state: RootState) => state.item.loading;

export const fetchItem = createAsyncThunk<IItem, FetchItemArgs>('item/fetchItem', async ({ contentType, id }) => {
  const response = await getItem(contentType, id);

  return response;
});

export default itemSlice.reducer;
