import React, { useState } from "react";
import './ItemAddForm.css'

interface itemAddFormProps {
    addItem: (label: string) => void;
}

export const ItemAddForm = (props: itemAddFormProps) => {

    const [ value, setValue ] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        if (value) {
            props.addItem(value.trim())
            setValue('')
        }
    }
        
    return (
        <form className="item-add-form d-flex" onSubmit={onSubmit} >
            <input
                className="form-control"
                type='text'
                value={value}
                placeholder='what needs to be done'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            <button
                className="btn btn-outline-secondary"
                type='submit' >
                Add
            </button>
        </form>
    )    
}