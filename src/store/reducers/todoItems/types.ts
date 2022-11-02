export interface ITodo {
    id: string;
    label: string;
    done: boolean;
    important: boolean;
}

export interface todoItemsState {
    items: ITodo[];
}