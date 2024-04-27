import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/todo-module/todoSlice.js";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }  
})