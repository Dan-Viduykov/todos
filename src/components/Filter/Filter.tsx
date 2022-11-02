import { FC, useState } from "react";
import { filterList } from "@/store/reducers/filter/constans";
import { TFilter } from "@/store/reducers/filter/types";
import { useActions } from "@/hooks/useActions";
import styles from './Filter.module.scss';

interface FilterProps {
    className?: string;
}

const Filter: FC<FilterProps> = ({ className }) => {
    const [ activeIdx, setActiveIdx ] = useState(0);
    const { setFilterType } = useActions();

    const handleClick = (idx: number) => {
        setActiveIdx(idx);
        setFilterType(Object.keys(filterList)[idx] as TFilter);
    }

    const filters = Object.values(filterList).map((item, index) => {
        return (
            <button
                className={`
                    ${styles.filterItem}
                    ${activeIdx === index ? styles.filterItem_active : null}
                `}
                onClick={() => handleClick(index)}
                key={index}
            >
                {item}
            </button>
        )
    })

    return (
        <div className={`${styles.filter} ${className}`}>
            {filters}
        </div>
    )
}

export default Filter