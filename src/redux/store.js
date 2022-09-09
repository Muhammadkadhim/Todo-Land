import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import todosReducer from "./todosSlice";
import categoriesReducer from "./categoriesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    modal: modalReducer,
    todos: todosReducer,
    categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
