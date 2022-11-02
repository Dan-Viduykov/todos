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