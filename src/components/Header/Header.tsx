import { FC } from "react";
import styles from './Header.module.scss'

interface HeaderProps {
    className?: string;
    todo?: number;
    done?: number;
}

const Header: FC<HeaderProps> = ({ todo = 0, done = 0, className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <h1 className={styles.title}>Todo List</h1>
            <h2 className={styles.info}>{todo} more to do, {done} done</h2>
        </header>
    )
}

export default Header