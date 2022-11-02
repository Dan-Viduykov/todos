import { FC } from "react";
import { selecTodoItems } from "@/store/reducers/todoItems/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";

import Header from "@/components/Header";
import SearchPanel from "@/components/SearchInput";
import Filter from "@/components/Filter";
import TodoList from "@/components/TodoList";
import TodoListEmpty from "@/components/TodoListEmpty";
import AddItemForm from "@/components/AddItemForm";

import styles from "./Home.module.scss";

const Home: FC = () => {
    const { items } = useTypedSelector(selecTodoItems)

    return (
        <div className={styles.container}>
            <Header className={styles.header} todos={items} />
            <main className={styles.main}>
                <div className={styles.searchBlock}>
                    <SearchPanel className={styles.searchInput} />
                    <Filter className={styles.filter} />
                </div>
                {
                    items.length ?
                        <TodoList className={styles.todoList} todos={items} /> :
                        <TodoListEmpty />
                }
                <AddItemForm className={styles.addForm} />
            </main>
        </div>
    )
}

export default Home