import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                ...state.todos,
                {
                    id: action.payload.id,
                    todo: action.payload.todo,
                    category: action.payload.category,
                    isCompleted: false,
                    isDeleted: false,
                },
            ];
        },
        completeTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isCompleted = true;
                }
            });
        },
        deleteTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload && todo.isDeleted === false) {
                    todo.isDeleted = true;
                    if (todo.isCompleted === true) {
                        todo.isCompleted = false;
                    }
                } else if (
                    todo.id === action.payload &&
                    todo.isDeleted === true
                ) {
                    state.todos = state.todos.filter(
                        (todo) => todo.id !== action.payload
                    );
                    if (todo.isCompleted === true) {
                        todo.isCompleted = false;
                    }
                }
            });
        },
        deleteTrashedTodos: (state) => {
            state.todos = state.todos.filter((todo) => todo.isDeleted !== true);
        },
        restoreTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    if (todo.isCompleted === true) {
                        todo.isCompleted = false;
                    }
                    if (todo.isDeleted === true) {
                        todo.isDeleted = false;
                    }
                }
            });
        },
        restoreAllTodos: (state) => {
            state.todos.map((todo) => {
                if (todo.isCompleted === true) {
                    todo.isCompleted = false;
                }
            });
        },
        editTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.todo = action.payload.newTodo;
                    todo.category = action.payload.newCategory;
                }
            });
        },
    },
});

export const {
    addTodo,
    completeTodo,
    deleteTodo,
    deleteTrashedTodos,
    restoreTodo,
    restoreAllTodos,
    editTodo,
    saveToLocalStorage,
} = todosSlice.actions;

export default todosSlice.reducer;
