import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'

import { searchReducer } from '@/store/reducers/search/slice';
import { filterReducer } from '@/store/reducers/filter/slice';
import { todoItemsReducer } from '@/store/reducers/todoItems/slice';

export function makeStore() {
    return configureStore({
        reducer: {
            filterReducer,
            searchReducer,
            todoItemsReducer
        },
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore)