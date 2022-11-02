import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterState, TFilter } from './types';

const initialState: filterState = {
  filterType: 'all',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<TFilter>) => {
      state.filterType = action.payload
    }
  },
})

export const {
  setFilterType
} = filterSlice.actions

export const filterReducer = filterSlice.reducer;