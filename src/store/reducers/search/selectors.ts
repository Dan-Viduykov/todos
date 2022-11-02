import { RootState } from "@/store/store";

export const selectSearch = (state: RootState) => state.searchReducer;