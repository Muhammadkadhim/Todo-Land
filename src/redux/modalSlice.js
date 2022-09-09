import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addCategoryModal: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showAddCategoryModal: (state) => {
            state.addCategoryModal = !state.addCategoryModal;
        },
    },
});

export const { showAddCategoryModal } = modalSlice.actions;

export default modalSlice.reducer;
