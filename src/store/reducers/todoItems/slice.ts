import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, todoItemsState } from './types';

const uniqid = require('uniqid')
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
      done: true,
      important: false,
    },
    {
      id: 'someid3',
      label: 'test3',
      done: false,
      important: true,
    }
  ],
}

export const todoItemsSlice = createSlice({
  name: 'todoItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uniqid(),
        label: action.payload,
        done: false,
        important: false, 
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    changeDoneItem: (state, action: PayloadAction<string>) => {
      const idx = state.items.findIndex(item => item.id === action.payload);
      state.items[idx].done = !state.items[idx].done;
    },
    changeImportantItem: (state, action: PayloadAction<string>) => {
      const idx = state.items.findIndex(item => item.id === action.payload);
      state.items[idx].important = !state.items[idx].important;
    }
  },
})

export const {
  addItem,
  deleteItem,
  changeDoneItem,
  changeImportantItem,
} = todoItemsSlice.actions

export const todoItemsReducer = todoItemsSlice.reducer;