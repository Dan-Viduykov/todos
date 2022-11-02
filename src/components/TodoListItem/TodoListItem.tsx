// import React from "react";
// import { ITodo } from "../../types/data";
// import './TodoListItem.css'

// export const TodoListItem = (props: ITodo) => {

//     const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = props;

//     let classNames = 'todo-list-item d-flex'

//     if (done) classNames += ' done'
//     if (important) classNames += ' important'

//     return (
//         <span className={classNames} >
//             <span
//                 className="todo-list-item-label flex-grow-1"
//                 onClick={onToggleDone} >
//                 {label}
//             </span>
//             <button
//                 className="btn btn-outline-danger btn-sm"
//                 type="button"
//                 onClick={onDeleted} >
                
//                 <i className="bi bi-trash"></i>
//             </button>
//             <button
//                 className="btn btn-outline-success btn-sm"
//                 type="button"
//                 onClick={onToggleImportant} >
//                 <i className="bi bi-exclamation-lg"></i>
//             </button>
//         </span>
//     )
// }

import { FC, PropsWithChildren } from "react";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TodoListItem.module.scss";

interface TodoListItemProps {
    className?: string;
}

const TodoListItem: FC<PropsWithChildren<TodoListItemProps>> = ({ className, children }) => {

    const handleClickDelete = () => {

    }
    const handleClickImportand = () => {
        
    }

    return (
        <li className={`${styles.item} ${className}`}>
            <p className={styles.label}>{children}</p>
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