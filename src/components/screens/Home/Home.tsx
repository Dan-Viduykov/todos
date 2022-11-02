import { FC } from "react";
import Header from "@/components/Header";
import SearchPanel from "@/components/SearchInput";
import Filter from "@/components/Filter";
import TodoList from "@/components/TodoList";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <Header className={styles.header} />
                <main className={styles.main}>
                    <div className={styles.searchBlock}>
                        <SearchPanel className={styles.searchInput} />
                        <Filter className={styles.filter} />
                    </div>
                    <TodoList className={styles.todoList} />
                </main>
            </div>
        </div>
    )
}

export default Home