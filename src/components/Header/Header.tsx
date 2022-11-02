import { ITodo } from "@/store/reducers/todoItems/types";
import { FC } from "react";
import styles from './Header.module.scss'

interface HeaderProps {
    className?: string;
    todos: ITodo[];
}

const Header: FC<HeaderProps> = ({ className, todos }) => {
    const todo = todos.filter(item => item.done === false).length;
    const done = todos.filter(item => item.done).length;

    return (
        <header className={`${styles.header} ${className}`}>
            <h1 className={styles.title}>Todo List</h1>
            <h2 className={styles.info}>{todo} more to do, {done} done</h2>
        </header>
    )
}

export default Header