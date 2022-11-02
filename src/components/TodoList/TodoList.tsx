// import React from "react";
// import './TodoList.css'
// import TodoListItem from "../TodoListItem";
// import { ITodo } from "../../types/data";

// interface TodoListProps {
//     todos: ITodo[];
//     onDeleted: (id: number | undefined) => void;
//     onToggleImportant: (id: number | undefined) => void;
//     onToggleDone: (id: number | undefined) => void;
//     filterType: string;
//     search: string
// }

// export const TodoList = (props: TodoListProps) => {
//     const { todos, onDeleted, onToggleImportant, onToggleDone, filterType, search } = props

//     const filterTypeTodos = (arr: ITodo[], filter: string): ITodo[] => {
//         if (filter === 'active') {
//             return arr.filter((el) => !el.done)
//         } else if (filter === 'done') {
//             return arr.filter((el) => el.done)
//         }

//         return arr
//     }

//     const filteredTodos = (arr: ITodo[], text: string): ITodo[] => {
//         if (text !== '') {
//             arr = arr.filter((el: ITodo) => {
//                 const element = el.label.slice(0, text.length).toLowerCase()
//                 return element === text.toLowerCase()
//             })
//         }

//         return filterTypeTodos(arr, filterType);
//     }

//     const elements = filteredTodos(todos, search).map((todo): React.ReactElement => {
//         const { id, ...itemProps} = todo

//         return (
//             <li className="list-group-item" key={id}>
//                 <TodoListItem
//                     {...itemProps}
//                     onDeleted={() => onDeleted(id)}
//                     onToggleImportant={() => onToggleImportant(id)}
//                     onToggleDone={() => onToggleDone(id)} />
//             </li>
//         )
//     })

//     return (
//         <ul className="list-group todo-list">
//             {elements}
//         </ul>
//     )
// } 

import { FC } from "react";
import { ITodo } from "@/store/reducers/todoItems/types";
import { selectFilter } from "@/store/reducers/filter/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import TodoListItem from "@/components/TodoListItem";
import styles from "./TodoList.module.scss";
import { selectSearch } from "@/store/reducers/search/selectors";

interface TodoListProps {
    className?: string;
    todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({ className, todos }) => {
    const { filterType } = useTypedSelector(selectFilter)
    const { query } = useTypedSelector(selectSearch);

    const elements = todos
        .filter(item => {
            if (filterType === 'active') {
                return item.done === false
            } else if (filterType === 'done') {
                return item.done
            }

            return true
        })
        .filter(item => {
            if (query) {
                return item.label.trim().toLocaleLowerCase().slice(0, query.length) === query.trim().toLocaleLowerCase();
            }

            return true;
        })
        .map(item => (
            <TodoListItem
                todoItem={item}
                className={styles.item}
                key={item.id}
            >
                {item.label}
            </TodoListItem>
        ))

    return (
        <ul className={`${styles.list} ${className}`}>
            {elements}
        </ul>
    )
}

export default TodoList