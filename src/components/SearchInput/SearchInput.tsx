import { useActions } from "@/hooks/useActions";
import { FC, useState } from "react";
import styles from './SearchInput.module.scss';

interface SearchInputProps {
    className?: string;
}
const SearchInput: FC<SearchInputProps> = ({ className }) => {
    const [ value, setValue ] = useState('');
    const { setQuery } = useActions();

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        setQuery(e.target.value.trim());
    }

    return <input  
        className={`${styles.input} ${className}`}
        placeholder="type to search"
        type='text'
        onChange={onHandleChange}
        value={value}
    />
}

export default SearchInput