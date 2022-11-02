import { FC, useMemo } from "react";
import { ITodo } from "@/store/reducers/todoItems/types";
import { TFilter } from "@/store/reducers/filter/types";
import { selectFilter } from "@/store/reducers/filter/selectors";
import { selectSearch } from "@/store/reducers/search/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import TodoListItem from "@/components/TodoListItem";
import styles from "./TodoList.module.scss";

interface TodoListProps {
    className?: string;
    todos: ITodo[]
}

const TodoList: FC<TodoListProps> = ({ className, todos }) => {
    const { filterType } = useTypedSelector(selectFilter)
    const { query } = useTypedSelector(selectSearch);

    const filterOnType = (array: ITodo[], type: TFilter): ITodo[] => {
        return array.filter(item => {
            if (type === 'active') {
                return item.done === false
            } else if (type === 'done') {
                return item.done
            }

            return true
        })
    }

    const filterOnSearchQuery = (array: ITodo[], search: string): ITodo[] => {
        return array.filter(item => {
            if (search) {
                return item.label.trim().toLocaleLowerCase().slice(0, search.length) === search.trim().toLocaleLowerCase();
            }

            return true;
        })
    }

    const elements = filterOnSearchQuery(filterOnType(todos, filterType), query).map(item => (
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