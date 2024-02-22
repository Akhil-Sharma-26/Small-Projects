import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../app/todo/todo.slice.js'


export const store = configureStore({
    reducer: todoReducer,
})