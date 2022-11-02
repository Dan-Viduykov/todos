import React, { useEffect, useState } from "react"
import './App.css'

import AppHeader from "../Header"
import SearchPanel from "../SearchInput"
import TodoList from "../TodoList"
import StatusFilter from "../StatusFilter"
import ItemAddForm from "../ItemAddForm"

import { ITodo } from "../../types/data"

export const App = () => {

    const [todoData, setTodoData] = useState<Array<ITodo>>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');
    const [maxId, setMaxId] = useState<number>(100);

    useEffect((): void => {
        addItem('test')
    }, [])

    function createItem (label: string): ITodo  {
        setMaxId((id) => id + 1)

        return {
            id: maxId,
            label,
            important: false,
            done: false,
        }
    }

    const deleteItem = (id: number | undefined): void => {
        const idx: number = todoData.findIndex((el: ITodo) => el.id === id);
        const newArray: ITodo[] = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
        ];

        setTodoData(newArray)
    }

    const addItem = (label: string): void => {
        if (label !== '') {
            const newTodo: ITodo = createItem(label)
            setTodoData([...todoData, newTodo])
        }
    }

    function toggleProperty (arr: ITodo[], id: number | undefined, propName: keyof ITodo): ITodo[] {
        const idx: number = arr.findIndex((el: ITodo) => el.id === id);
        const oldItem: ITodo = arr[idx];
        const newItem: ITodo = {
            ...oldItem,
            [propName]: !oldItem[propName]
        } 

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    const onToggleImportant = (id: number | undefined): void => {
        setTodoData(toggleProperty(todoData, id, 'important'))
    }

    const onToggleDone = (id: number | undefined): void => {
        setTodoData(toggleProperty(todoData, id, 'done'))
    }

    const onChangeFilter = (e: React.MouseEvent<HTMLDivElement>): void => {
        const name = (e.target as HTMLButtonElement).name
        setFilter(name);
    }
    
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value)
    }

    const doneCount: number = todoData.filter((el) => el.done).length;
    const todoCount: number = todoData.length - doneCount;

    return (
        <div className="app">
            <AppHeader todo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel
                    value={searchValue}
                    onChangeSearch={onChangeSearch} />
                <StatusFilter
                    onChangeFilter={onChangeFilter}
                    filter={filter} />
            </div>
            <TodoList
                todos={todoData}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant} 
                onToggleDone={onToggleDone}
                filterType={filter}
                search={searchValue} />

            <ItemAddForm
                addItem={addItem} />
        </div>
    )
}