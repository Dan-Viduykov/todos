import { FC, PropsWithChildren } from "react";
import { ITodo } from "@/store/reducers/todoItems/types";
import { useActions } from "@/hooks/useActions";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TodoListItem.module.scss";

interface TodoListItemProps {
    className?: string;
    todoItem: ITodo;
}

const TodoListItem: FC<PropsWithChildren<TodoListItemProps>> = ({ className, todoItem, children }) => {
    const { changeDoneItem, changeImportantItem, deleteItem } = useActions()

    const handleClickDelete = () => {
        deleteItem(todoItem.id)
    }
    const handleClickImportand = () => {
        changeImportantItem(todoItem.id);
    }
    const handleClickLabel = () => {
        changeDoneItem(todoItem.id);
    }

    const classDone = todoItem.done ? styles.item_done : null;
    const classImportant = todoItem.important ? styles.item_important : null;

    return (
        <li className={`${styles.item} ${classDone} ${classImportant} ${className}`}>
            <p className={styles.label} onClick={handleClickLabel}>{children}</p>
            <div className={styles.actions}>
                <button
                    className={`${styles.button} ${styles.button_delete}`}
                    onClick={handleClickDelete}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button
                    className={`${styles.button} ${styles.button_important}`}
                    onClick={handleClickImportand}
                >
                    <FontAwesomeIcon icon={faExclamation} />
                </button>
            </div>
        </li>
    )
}

export default TodoListItem