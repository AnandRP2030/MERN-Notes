import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  
  ],
  completedTodo: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newItem = {
        id: state.todos.length + 1,
        item: action.payload,
        status: "pending",
      };
      state.todos = [...state.todos, newItem];
    },
    deleteTodo: () => {

    },
    completeTodo: () => {

    }

    
  },
});

export const {addTodo} = todoSlice.actions; 
export default todoSlice.reducer;
