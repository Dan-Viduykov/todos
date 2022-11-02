import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { searchState } from './types';

const initialState: searchState = {
  query: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    }
  },
})

export const {
  setQuery,
} = searchSlice.actions

export const searchReducer = searchSlice.reducer;