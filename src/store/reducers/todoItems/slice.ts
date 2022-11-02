import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, todoItemsState } from './types';

const initialState: todoItemsState = {
  items: [
    {
      id: 'someid',
      label: 'test',
      done: false,
      important: false,
    },
    {
      id: 'someid2',
      label: 'test2',
      done: false,
      important: false,
    },
    {
      id: 'someid3',
      label: 'test3',
      done: false,
      important: false,
    }
  ],
}

export const todoItemsSlice = createSlice({
  name: 'todoItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ITodo>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    changeDoneItem: (state, action: PayloadAction<string>) => {
      
    },
    changeImportantItem: (state, action: PayloadAction<string>) => {

    }
  },
})

export const {
} = todoItemsSlice.actions

export const todoItemsReducer = todoItemsSlice.reducer;