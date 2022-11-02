import { useActions } from "@/hooks/useActions";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./AddItemForm.module.scss";

interface AddItemFormProps {
    className?: string;
}

const AddItemForm: FC<AddItemFormProps> = ({ className }) => {
    const { addItem } = useActions()
    const [ value, setValue ] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    
        if (value.trim()) {
            addItem(value.trim())
            setValue('')
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="what needs to be done"
            />
            <button className={styles.button} type="submit">Add</button>
        </form>
    )
}

export default AddItemForm