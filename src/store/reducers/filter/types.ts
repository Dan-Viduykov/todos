export type TFilter = 'all' | 'active' | 'done'

export interface filterState {
    filterType: TFilter;
}