import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: ["No Category", "Work", "Personal"],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
    },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
